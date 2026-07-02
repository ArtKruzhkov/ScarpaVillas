// import { useState } from 'react';
// import { createPortal } from 'react-dom';
// import { ContactButton } from '../ContactBtn';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { AnimatePresence, motion } from 'framer-motion';
// import './contactModal.css';

// interface ContactModalProps {
//   className?: string;
// }

// export function ContactModal({ className = '' }: ContactModalProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <ContactButton className={className} onClick={() => setIsOpen(true)} />

//       {createPortal(
//         <AnimatePresence mode="wait">
//           {isOpen && (
//             <motion.div
//               className="modal-height z-[9999] flex items-center justify-center bg-black/60"
//               onClick={() => setIsOpen(false)}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.25 }}>
//               <motion.div
//                 onClick={(e) => e.stopPropagation()}
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 16 }}
//                 transition={{
//                   duration: 0.45,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}>
//                 <ContactForm onClose={() => setIsOpen(false)} />
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>,
//         document.body,
//       )}
//     </>
//   );
// }

import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ContactForm } from '../ContactForm/ContactForm';
import './contactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="modal-height z-[9999] flex items-center justify-center bg-black/60"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <ContactForm onClose={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
