// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import './navbar.css';

// export const LanguageSwitcher = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { i18n } = useTranslation();
//   const [language, setLanguage] = useState(localStorage.getItem('language')?.toUpperCase() || 'EN');

//   const handleSelect = (lang: string) => {
//     localStorage.setItem('language', lang.toLowerCase());
//     setLanguage(lang);
//     i18n.changeLanguage(lang.toLowerCase());
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="language-switcher flex items-center gap-1">
//         {language}
//         <span>▼</span>
//       </button>

//       {isOpen && (
//         <div className="absolute top-full left-[-5px] mt-2 bg-white shadow-lg min-w-[70px] z-50">
//           <button
//             onClick={() => handleSelect('EN')}
//             className="block w-full px-4 py-2 text-left hover:bg-gray-100 language-switcher">
//             EN
//           </button>

//           <button
//             onClick={() => handleSelect('IT')}
//             className="block w-full px-4 py-2 text-left hover:bg-gray-100 language-switcher">
//             IT
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './navbar.css';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language.toUpperCase());

  const handleSelect = (lang: string) => {
    const langLower = lang.toLowerCase();

    setLanguage(lang);
    i18n.changeLanguage(langLower);
    setIsOpen(false);

    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;

    let newPath = currentPath;

    if (langLower === 'it') {
      if (!currentPath.includes('/it')) {
        newPath = currentPath.endsWith('/') ? `${currentPath}it` : `${currentPath}/it`;
      }
    }

    if (langLower === 'en') {
      newPath = currentPath.replace('/it', '');
    }

    window.history.pushState(null, '', `${newPath}${currentSearch}${currentHash}`);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-switcher flex items-center gap-1">
        {language}
        <span>▼</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-[-5px] mt-2 bg-white shadow-lg min-w-[70px] z-50">
          <button
            onClick={() => handleSelect('EN')}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 language-switcher">
            EN
          </button>

          <button
            onClick={() => handleSelect('IT')}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 language-switcher">
            IT
          </button>
        </div>
      )}
    </div>
  );
};
