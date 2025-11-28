import { AbstractShape } from './Icons';

/**
 * CTA Component
 * Renders the Call to Action section.
 * 
 * @param {HTMLElement} element - The DOM element to mount the CTA into.
 */

export function setupCTA(element) {
  element.innerHTML = `
    <div class="container mx-auto px-6 py-20">
      <div class="bg-positivus-grey rounded-[45px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div class="md:w-1/2 space-y-6 z-10">
          <h2 class="text-4xl font-medium">Let's make things happen</h2>
          <p class="text-xl text-gray-600">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
          <button class="bg-positivus-dark text-white px-8 py-5 rounded-2xl text-xl hover:bg-positivus-green hover:text-positivus-dark transition-all">Get your free proposal</button>
        </div>
        <div class="absolute right-0 top-0 h-full w-1/2 hidden md:flex items-center justify-center">
             <div class="w-64 h-64 bg-positivus-green opacity-20 rounded-full blur-3xl absolute"></div>
             ${AbstractShape()}
        </div>
      </div>
    </div>
  `;
}
