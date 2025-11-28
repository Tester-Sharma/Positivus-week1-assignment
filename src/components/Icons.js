/**
 * Icon Components
 * Reusable SVG icons for the application.
 */

export const LogoIcon = (className = "text-positivus-dark") => `
  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" class="${className}">
    <path d="M14.5 0L17.8647 11.1353L29 14.5L17.8647 17.8647L14.5 29L11.1353 17.8647L0 14.5L11.1353 11.1353L14.5 0Z" fill="currentColor"/>
  </svg>
`;

export const MenuIcon = (className = "w-8 h-8") => `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="${className}">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
`;

export const ArrowIcon = (className = "w-6 h-6") => `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="${className}">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
`;

export const HeroIllustration = (className = "w-full h-auto") => `
  <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="${className}">
    <path d="M450 150 L550 100 L550 200 Z" fill="#B9FF66" />
    <rect x="100" y="150" width="300" height="200" rx="20" fill="#191A23" />
    <circle cx="250" cy="250" r="50" fill="#B9FF66" />
    <path d="M400 200 L500 150 L500 350 L400 300 Z" fill="#B9FF66" opacity="0.5"/>
    <circle cx="50" cy="50" r="10" fill="#191A23" />
    <circle cx="550" cy="450" r="15" fill="#191A23" />
    <path d="M50 400 L80 430 M80 400 L50 430" stroke="#191A23" stroke-width="5" />
  </svg>
`;

export const AbstractShape = (className = "relative z-10 text-positivus-dark opacity-10 rotate-12") => `
  <svg width="300" height="300" viewBox="0 0 24 24" fill="none" class="${className}">
    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" fill="currentColor"/>
  </svg>
`;

export const ServicePlaceholderIcon = (className = "opacity-50") => `
  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" class="${className}">
    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
  </svg>
`;
