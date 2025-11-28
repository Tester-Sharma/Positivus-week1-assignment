import { COMPANY_LOGOS } from '../constants';
import { HeroIllustration } from './Icons';

/**
 * Hero Component
 * Renders the main hero section with headline, CTA, and company logos.
 * 
 * @para
 * m {HTMLElement} element - The DOM element to mount the hero into.
 */
export function setupHero(element) {
  
  // Generate logos HTML
  const logosHtml = COMPANY_LOGOS.map(logo => 
    `<h3 class="text-2xl font-bold ${logo.className}">${logo.name}</h3>`
  ).join('');

  element.innerHTML = `
    <div class="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
      <!-- Text Content -->
      <div class="md:w-1/2 space-y-8">
        <h1 class="text-5xl md:text-7xl font-medium leading-tight">
          Navigating the <br/> digital landscape <br/> for success
        </h1>
        <p class="text-xl text-gray-600 max-w-lg">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button class="bg-positivus-dark text-white px-9 py-5 rounded-2xl text-xl hover:bg-positivus-green hover:text-positivus-dark transition-all">
          Book a consultation
        </button>
      </div>

      <!-- Hero Illustration -->
      <div class="md:w-1/2 flex justify-center relative">
        <div class="w-full max-w-lg">
           ${HeroIllustration()}
        </div>
      </div>
    </div>
    
    <!-- Logos Section -->
    <div class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            ${logosHtml}
        </div>
    </div>
  `;
}
