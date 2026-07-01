/**
 * Interactive Scripts for Harisankar G's AI/ML Portfolio
 * Author: Antigravity - Advanced Agentic Coding (Google DeepMind)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- INITIALIZE ALL SUB-MODULES ---
  initNeuralCanvas();
  initNavbarScroll();
  initMobileNav();
  initActiveLinkHighlighting();
  initCounterAnimations();
  initContactForm();
});

/* ==========================================================================
   1. NEURAL NETWORK CANVAS ANIMATION
   ========================================================================== */
function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  // Set canvas scale based on parent
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Particle Settings
  const particles = [];
  const maxParticles = window.innerWidth < 768 ? 40 : 100;
  const connectionDistance = 140;
  const mouse = { x: null, y: null, radius: 180 };

  // Track mouse coordinates
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY + window.scrollY; // adjust for scrolled window
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle Class Definition
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.45; // Slow ambient motion
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 2.5 + 1;
      
      // Color variety matching accents
      const rand = Math.random();
      if (rand < 0.15) {
        this.color = 'rgba(255, 107, 53, 0.75)'; // Orange glow
      } else if (rand < 0.35) {
        this.color = 'rgba(0, 180, 216, 0.75)';  // Cyan glow
      } else {
        this.color = 'rgba(255, 255, 255, 0.35)'; // White node
      }
    }

    update() {
      // Boundaries bounce
      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

      // Update position
      this.x += this.vx;
      this.y += this.vy;

      // Interaction with mouse (gentle repulsion)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          // Push away slightly
          this.x += Math.cos(angle) * force * 1.2;
          this.y += Math.sin(angle) * force * 1.2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = this.radius > 2 ? 8 : 0;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0; // reset
    }
  }

  // Populate particles list
  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  }

  // Draw connections between nodes
  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];

        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          // Opacity fades as distance increases
          const opacity = (1 - (dist / connectionDistance)) * 0.15;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          
          // Gradient line between orange & cyan particles or white lines
          if (p1.color.includes('255, 107') || p2.color.includes('255, 107')) {
            ctx.strokeStyle = `rgba(255, 107, 53, ${opacity * 1.2})`;
          } else if (p1.color.includes('0, 180') || p2.color.includes('0, 180')) {
            ctx.strokeStyle = `rgba(0, 180, 216, ${opacity * 1.2})`;
          } else {
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          }

          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  // Main Loop
  function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update & draw particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawLines();

    animationFrameId = requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   2. STICKY NAVBAR MANAGEMENT
   ========================================================================== */
function initNavbarScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  function checkScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  checkScroll();
  window.addEventListener('scroll', checkScroll);
}

/* ==========================================================================
   3. MOBILE NAVIGATION MENU
   ========================================================================== */
function initMobileNav() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!mobileToggle || !navMenu) return;

  // Toggle active class on click
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

/* ==========================================================================
   4. ACTIVE LINK SCROLL HIGHLIGHTING
   ========================================================================== */
function initActiveLinkHighlighting() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightLink() {
    let scrollPosition = window.scrollY + 150; // offset for navbar height

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightLink);
}

/* ==========================================================================
   5. ACHIEVEMENTS INCREMENTAL COUNTER
   ========================================================================== */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.achievement-value');
  if (counters.length === 0) return;

  const animationSpeed = 80; // smaller = faster

  const startCount = (counter) => {
    const updateVal = () => {
      const targetVal = parseInt(counter.getAttribute('data-target'), 10);
      const currentVal = parseInt(counter.innerText, 10);
      
      // Calculate steps
      const increment = Math.ceil(targetVal / animationSpeed);

      if (currentVal < targetVal) {
        counter.innerText = currentVal + increment > targetVal ? targetVal : currentVal + increment;
        setTimeout(updateVal, 20);
      } else {
        counter.innerText = targetVal;
      }
    };
    updateVal();
  };

  // Trigger counters using IntersectionObserver
  const observerOptions = {
    root: null,
    threshold: 0.25,
    border: '0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        startCount(counter);
        observer.unobserve(counter); // only animate once
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

/* ==========================================================================
   6. CONTACT FORM SUBMIT WITH NOTIFICATIONS
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const toast = document.getElementById('form-toast');

  if (!form || !submitBtn || !toast) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // stop browser reload

    // Button loading animation state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `Sending... <i class="fa-solid fa-circle-notch fa-spin"></i>`;
    submitBtn.disabled = true;

    // Simulate sending message (since it's a static template)
    setTimeout(() => {
      try {
        const nameVal = document.getElementById('form-name').value;
        const emailVal = document.getElementById('form-email').value;

        // Simple validation check
        if (!nameVal || !emailVal) {
          throw new Error("Missing required fields.");
        }

        // Show Toast Notification
        toast.className = 'form-toast success';
        toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, ${nameVal}! Your message has been sent successfully.`;
        
        // Reset form
        form.reset();
      } catch (err) {
        toast.className = 'form-toast error';
        toast.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Error sending message. Please check all details.`;
      } finally {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        // Auto-remove toast alert
        setTimeout(() => {
          toast.style.display = 'none';
          toast.className = 'form-toast';
        }, 5000);
      }
    }, 1500); // 1.5s simulated network delay
  });
}
