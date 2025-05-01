import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919286013287', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group flex items-center bg-[#25D366] hover:bg-[#20BA5C] rounded-full shadow-lg hover:shadow-xl transition-all duration-500"
        aria-label="Chat with us on WhatsApp"
      >
        <div className="overflow-hidden max-w-0 group-hover:max-w-[200px] transition-all duration-500 ease-out">
          <span className="font-medium text-white whitespace-nowrap pl-4 transition-opacity duration-300 delay-150 font-sans tracking-wide text-[15px]">
            Chat with us
          </span>
        </div>
        <div className="p-3">
          <img 
            src="/WhatsApp.webp" 
            alt="WhatsApp" 
            className="w-6 h-6"
          />
        </div>
      </button>
    </div>
  );
};

export default WhatsAppWidget; 