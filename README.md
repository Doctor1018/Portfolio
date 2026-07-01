# Premium AI & Machine Learning Portfolio - Harisankar G

Welcome to your state-of-the-art personal developer portfolio website! Designed and built with a premium dark-glassmorphism aesthetic, dynamic ambient particle networks, interactive layout divisions, and customized copy directly aligned with your experience and goals.

This portfolio is built as a highly optimized, high-performance Single Page Application (SPA) using **Semantic HTML5, Custom Vanilla CSS (HSL-tailored), and Native ES6 JavaScript**. It has zero bulky framework dependencies, ensuring a near-instantaneous page speed load and perfect SEO scores.

---

## 📁 Repository Structure

```tree
Portfolio/
│
├── index.html     # Semantic structure, Google Fonts integration, and SEO meta tags
├── style.css      # Custom HSL-based styling, glassmorphic effects, and fluid responsiveness
├── script.js     # Canvas-based neural network animation, achievements counters, and navigation
└── README.md      # Setup, deployment instructions, and feature guide (this file)
```

---

## 🌟 Key Features

1. **Neural Network Particle Canvas Background:**
   - A native HTML5 canvas animation running dynamic, floating node networks.
   - Reacts to mouse pointer coordinates, applying a smooth repulsion effect to mimic interactive data physics.
   - Automatically adapts node densities on mobile devices to protect rendering frame rates and system battery life.

2. **Premium Visual Mockups (Pure CSS):**
   - High-fidelity visual mockups designed directly into project cards, replacing standard blank image boxes:
     - *Brain Tumor Segmentation:* Features an MRI scan grid mock with a pulsing, active segment boundary.
     - *Video Stream Anomaly Detection:* Shows an active surveillance stream overlay with an orange glowing bounding box.
     - *Smart Storage Optimization Engine:* Displays a rotating SQLite/Vector Search metadata indexing vector ring.

3. **Incremental Achievements Counter:**
   - Detects when the achievements section (e.g. Amazon ML Challenge global rank 192nd, IEEE publication) enters the viewport using `IntersectionObserver` and runs a smooth count-up numerical transition.

4. **Education & Internship Chronological Timeline:**
   - Details your academic status at VIT (GPA: 8.19/10), your Zidio Data Analyst Intern experience, and your TISE Web Development Intern achievements.

5. **Interact-ready Skills & Services Layouts:**
   - Displays clean hover-scalable badge cards categorized into Programming Languages, Machine Learning/AI, Frameworks, and DevOps/Cloud.

6. **Collaborate form & Notification Toast:**
   - An elegant message card intercepting contact submissions, validating entries, rendering a loading spinner, and displaying success toast notifications.

---

## 🚀 How to Run Locally

Since this site is built with pure web standard files, you do not need any complex build systems, bundlers, or packages to test it!

### Option 1: Direct File Launch
Simply double-click the `index.html` file in your file explorer to open and run the portfolio instantly in your default web browser.

### Option 2: Local Server (Recommended)
To ensure all assets (such as your PDF resume at `../Harisankar_G.pdf`) load flawlessly with proper local permissions, serve the directory using a lightweight local web server.

* **Using Python:**
  Open your terminal inside the `Portfolio` folder and run:
  ```bash
  python -m http.server 8000
  ```
  Then, navigate to `http://localhost:8000` in your browser.

* **Using Node.js (`http-server`):**
  If you have Node.js installed:
  ```bash
  npx http-server ./
  ```
  Then, navigate to the local address provided.

* **Using VS Code Live Server:**
  If you use VS Code, right-click `index.html` and click **"Open with Live Server"**.

---

## 🛠️ Customization Guide

### 1. Updating Your CV
The CV action button links to `../Harisankar_G.pdf`. Simply place your updated PDF resume in the parent folder, name it `Harisankar_G.pdf`, and the download link will work immediately.

### 2. Modifying Social Profile Links
Open `index.html` and locate the elements with IDs `soc-github` and `soc-linkedin` near the bottom of the file to input your direct handles:
```html
<a href="https://github.com/Doctor1018" target="_blank" class="social-icon" id="soc-github">
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" class="social-icon" id="soc-linkedin">
```

### 3. Adjusting Theme Accent Colors
To change the glowing orange or cyan accent hues across the entire application, simply adjust the HSL color values at the top of `style.css` in the `:root` variables:
```css
:root {
  --accent-orange: hsl(18, 100%, 60%);  /* Glow Orange */
  --accent-blue: hsl(195, 100%, 45%);   /* Glow Cyan/Blue */
}
```

---

## 🌐 Deployment Instructions

Once you are ready to publish your website to the public internet, you can host it for free in under 5 minutes:

### GitHub Pages
1. Push your `Portfolio` folder contents to a new repository on your GitHub account (e.g. `Doctor1018/portfolio`).
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** and choose `main` (or `master`) root folder.
4. Click **Save**. Your site will be live at `https://Doctor1018.github.io/portfolio/`.

### Netlify / Vercel
1. Sign up for a free account on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
2. Drag and drop your `Portfolio` folder directly onto the upload dashboard.
3. Your premium website will be instantly deployed with a secure `https://` address!
