// src/components/LanguagePopup.tsx
import React, { useContext, useState, useEffect } from 'react';
import { X, Globe } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const LanguagePopup: React.FC = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'mr', name: 'मारवाड़ी' },
    { code: 'rj', name: 'राजस्थानी' },
  ];

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsOpen(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleConfirm = () => {
    setLanguage(selectedLanguage);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-green-600" />
            <h2 className="text-lg font-bold text-gray-900">{t('language_popup.title')}</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        >
          <option value="" disabled>{t('language_popup.select')}</option>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleConfirm}
          className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          {t('language_popup.confirm')}
        </button>
      </div>
    </div>
  );
};

export default LanguagePopup;
