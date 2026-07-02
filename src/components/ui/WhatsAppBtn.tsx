interface WhatsAppButtonProps {
  className?: string;
  phone: string;
}

export function WhatsAppButton({ className = '', phone }: WhatsAppButtonProps) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={className}>
      <img
        src={`${process.env.PUBLIC_URL}/images/contactBtn/whatsapp.svg`}
        alt="WhatsApp"
        className="w-[40px] lg:w-[55px] rounded-[10px] opacity-50 transition-all duration-300 hover:scale-105 hover:opacity-100"
      />
    </a>
  );
}
