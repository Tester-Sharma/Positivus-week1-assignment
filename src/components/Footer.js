import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import { LogoIcon } from './Icons';

/**
 * Footer Component
 * Renders the footer with navigation, contact info, and social links.
 * 
 * @param {HTMLElement} element - The DOM element to mount the footer into.
 */

export function setupFooter(element) {
  
  // Generate navigation links HTML
  const navLinksHtml = NAV_LINKS.map(link => 
    `<a href="${link.href}" class="hover:text-positivus-green">${link.name}</a>`
  ).join('');

  // Generate social links HTML
  const socialLinksHtml = SOCIAL_LINKS.map(social => 
    `<div class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-positivus-dark cursor-pointer hover:bg-positivus-green font-bold transition-colors" aria-label="${social.name}">${social.icon}</div>`
  ).join('');

  element.innerHTML = `
    <div class="bg-positivus-dark text-white rounded-t-[45px] mt-20">
      <div class="container mx-auto px-6 py-12 md:py-20">
        
        <!-- Top Section: Logo & Nav -->
        <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div class="flex items-center gap-2">
             ${LogoIcon("text-white")}
            <span class="text-2xl font-bold">Positivus</span>
          </div>
          <div class="flex gap-8 text-lg underline">
            ${navLinksHtml}
          </div>
          <div class="flex gap-4">
            ${socialLinksHtml}
          </div>
        </div>
        
        <!-- Middle Section: Contact & Subscribe -->
        <div class="flex flex-col md:flex-row justify-between items-start border-t border-gray-700 pt-12 gap-12">
            <div class="space-y-4">
                <h4 class="bg-positivus-green text-positivus-dark px-2 rounded inline-block font-medium">Contact us:</h4>
                <p>Email: ${CONTACT_INFO.email}</p>
                <p>Phone: ${CONTACT_INFO.phone}</p>
                <p>Address: ${CONTACT_INFO.address}<br/>${CONTACT_INFO.city}</p>
            </div>
            <div class="bg-[#292A32] p-8 rounded-2xl flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <input type="email" placeholder="Email" class="bg-transparent border border-white rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-positivus-green" />
                <button class="bg-positivus-green text-positivus-dark px-8 py-4 rounded-xl font-medium hover:bg-white transition-colors">Subscribe to news</button>
            </div>
        </div>
        
        <!-- Bottom Section: Copyright -->
        <div class="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <a href="#" class="underline">Privacy Policy</a>
        </div>
      </div>
    </div>
  `;
}
