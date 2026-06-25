// import { useState } from 'react';
// import { ContactButton } from '../ContactBtn';
// import { ContactForm } from '../ContactForm/ContactForm';
// import './contactModal.css';

// interface ContactModalProps {
//   className?: string;
// }

// export function ContactModal({ className = '' }: ContactModalProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <ContactButton className={className} onClick={() => setIsOpen(true)} />

//       {isOpen && (
//         // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
//         //   <ContactForm onClose={() => setIsOpen(false)} />
//         // </div>
//         <div className="modal-height z-[9999] flex items-center justify-center bg-black/60">
//           <ContactForm onClose={() => setIsOpen(false)} />
//         </div>
//       )}
//     </>
//   );
// }

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ContactButton } from '../ContactBtn';
import { ContactForm } from '../ContactForm/ContactForm';
import './contactModal.css';

interface ContactModalProps {
  className?: string;
}

export function ContactModal({ className = '' }: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ContactButton className={className} onClick={() => setIsOpen(true)} />

      {isOpen &&
        createPortal(
          <div className="modal-height z-[9999] flex items-center justify-center bg-black/60">
            <ContactForm onClose={() => setIsOpen(false)} />
          </div>,
          document.body,
        )}
    </>
  );
}
