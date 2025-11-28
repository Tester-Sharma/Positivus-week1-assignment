/**
 * Main Entry Point
 * Initializes the application and mounts components.
 */

import './style.css';

// Import Component Setup Functions
import { setupHeader } from './components/Header';
import { setupHero } from './components/Hero';
import { setupServices } from './components/Services';
import { setupCTA } from './components/CTA';
import { setupFooter } from './components/Footer';

/**
 * Initialize the App
 */
function initApp() {
  const app = document.querySelector('#app');
  
  // Set up the main layout structure
  app.innerHTML = `
    <div class="font-space-grotesk text-positivus-dark bg-white min-h-screen">
      <header id="header"></header>
      <main>
        <section id="hero"></section>
        <section id="services"></section>
        <section id="cta"></section>
        <section id="case-studies"></section>
        <section id="process"></section>
        <section id="team"></section>
        <section id="testimonials"></section>
        <section id="contact"></section>
      </main>
      <footer id="footer"></footer>
    </div>
  `;

  // Mount Components
  setupHeader(document.querySelector('#header'));
  setupHero(document.querySelector('#hero'));
  setupServices(document.querySelector('#services'));
  setupCTA(document.querySelector('#cta'));
  setupFooter(document.querySelector('#footer'));
}

// Start the application
initApp();
