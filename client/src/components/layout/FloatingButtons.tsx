import { MessageCircle, Phone, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919527839464"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp chat"
        aria-label="Open WhatsApp chat"
        className="
          h-14 w-14
          rounded-full
          bg-green-500
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          hover:scale-110
          transition-all
          duration-300
        "
      >
        <MessageCircle size={24} />
      </a>

      {/* Call */}
      <a
        href="tel:+919527839464"
        title="Call phone number"
        aria-label="Call phone number"
        className="
          h-14 w-14
          rounded-full
          bg-cyan-600
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          hover:scale-110
          transition-all
          duration-300
        "
      >
        <Phone size={24} />
      </a>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        title="Scroll to top"
        aria-label="Scroll to top"
        className="
          h-14 w-14
          rounded-full
          bg-slate-900
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          hover:scale-110
          transition-all
          duration-300
        "
      >
        <ArrowUp size={24} />
      </button>

    </div>
  );
}

