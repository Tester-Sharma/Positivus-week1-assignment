import { NAV_LINKS } from '../constants';
import { LogoIcon, MenuIcon } from './Icons';

/**
 * Header Component
 * Renders the main navigation bar with logo and links.
 * 
 * @param {HTMLElement} element - The DOM element to mount the header into.
 */

export function setupHeader(element) {
  
  // Generate navigation links HTML
  const navLinksHtml = NAV_LINKS.map(link => 
    `<a href="${link.href}" class="hover:text-positivus-green transition-colors">${link.name}</a>`
  ).join('');

  element.innerHTML = `
    <nav class="container mx-auto px-6 py-6 flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center gap-2 cursor-pointer" aria-label="Positivus Home">
        ${LogoIcon()}
        <span class="text-3xl font-bold tracking-tight">Positivus</span>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-10 text-lg">
        ${navLinksHtml}
        <button class="border border-positivus-dark px-8 py-4 rounded-2xl hover:bg-positivus-dark hover:text-white transition-all">
          Request a quote
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden" aria-label="Open Menu">
        ${MenuIcon()}
      </button>
    </nav>
  `;
}
