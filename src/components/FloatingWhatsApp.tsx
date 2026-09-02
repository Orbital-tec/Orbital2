import React, { useState } from 'react';

interface FloatingWhatsAppProps {
  isVisible?: boolean;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  isVisible = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!isVisible) return null;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-[28px] right-[28px] z-[9999] flex items-center gap-3 select-none"
    >
      {/* Tooltip on Hover (Pill to the left) */}
      <div
        id="whatsapp-tooltip-pill"
        className={`transition-all duration-200 pointer-events-none hidden sm:flex items-center gap-1.5 bg-[#128C7E] text-white text-[12px] font-sans font-medium px-3 py-1.5 rounded-[4px] shadow-lg ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span>Chat with Founder</span>
      </div>

      {/* 56px Circular WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.link/l97xy0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Orbital Avtacha Founder"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-[56px] h-[56px] rounded-full bg-[#25D366] hover:scale-108 transition-all duration-200 flex items-center justify-center text-white focus:outline-none shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.6)]"
      >
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          className="w-[28px] h-[28px]"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.67C9.32 7.67 8.97 7.75 8.68 8.07C8.38 8.39 7.56 9.17 7.56 10.74C7.56 12.32 8.7 13.84 8.86 14.05C9.02 14.26 11.11 17.49 14.31 18.87C15.07 19.2 15.67 19.4 16.13 19.54C16.89 19.79 17.59 19.75 18.14 19.67C18.75 19.58 20.02 18.9 20.28 18.16C20.54 17.43 20.54 16.8 20.46 16.67C20.38 16.54 20.18 16.46 19.87 16.31C19.56 16.15 18.06 15.41 17.78 15.31C17.5 15.21 17.3 15.16 17.09 15.47C16.89 15.78 16.31 16.46 16.13 16.67C15.95 16.88 15.77 16.9 15.47 16.75C15.16 16.6 14.17 16.27 13 15.23C12.09 14.42 11.47 13.42 11.32 13.16C11.16 12.9 11.3 12.76 11.46 12.61C11.6 12.47 11.77 12.24 11.93 12.06C12.09 11.88 12.14 11.75 12.24 11.54C12.35 11.33 12.3 11.15 12.22 11C12.14 10.85 11.53 9.35 11.27 8.73C11.02 8.13 10.77 8.21 10.58 8.21C10.4 8.21 10.19 8.2 9.99 8.2C9.78 8.2 9.53 7.67 9.53 7.67Z" />
        </svg>
      </a>
    </div>
  );
};
