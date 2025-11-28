import { SERVICES_DATA } from '../constants';
import { ArrowIcon, ServicePlaceholderIcon } from './Icons';

/**
 * Services Component
 * Renders the services grid using data from constants.
 * 
 * @param {HTMLElement} element - The DOM element to mount the services into.
 */

export function setupServices(element) {
  const cardsHtml = SERVICES_DATA.map(service => `
    <div class="${service.bg} p-12 rounded-[45px] border border-positivus-dark shadow-[0_5px_0_0_rgba(25,26,35,1)] flex justify-between items-center relative overflow-hidden h-[310px] group hover:shadow-[0_10px_0_0_rgba(25,26,35,1)] transition-all">
      <div class="flex flex-col justify-between h-full z-10">
        <div>
          <span class="${service.titleBg} text-3xl font-medium px-2 rounded leading-snug inline-block">${service.title[0]}</span>
          <br/>
          <span class="${service.titleBg} text-3xl font-medium px-2 rounded leading-snug inline-block">${service.title[1]}</span>
        </div>
        <div class="flex items-center gap-4 cursor-pointer">
          <div class="w-10 h-10 rounded-full ${service.arrowBg} ${service.arrowColor} flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform">
            ${ArrowIcon()}
          </div>
          <span class="text-xl hidden md:block ${service.bg === 'bg-positivus-dark' ? 'text-white' : 'text-positivus-dark'}">Learn more</span>
        </div>
      </div>
      <div class="absolute right-12 top-1/2 -translate-y-1/2 w-[160px] h-[160px] bg-current opacity-10 rounded-full flex items-center justify-center">
          ${ServicePlaceholderIcon()}
      </div>
    </div>
  `).join('');

  element.innerHTML = `
    <div class="container mx-auto px-6 py-20">
      <div class="flex flex-col md:flex-row items-center gap-10 mb-20">
        <h2 class="text-4xl font-medium bg-positivus-green px-2 rounded">Services</h2>
        <p class="text-xl text-gray-600 max-w-2xl">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>
      <div class="grid md:grid-cols-2 gap-10">
        ${cardsHtml}
      </div>
    </div>
  `;
}
