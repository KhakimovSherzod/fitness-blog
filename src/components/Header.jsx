'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('header');
  const pathname = usePathname();

  const navItems = [
    { href: '/', key: 'home' },
    { href: '/maqolalar', key: 'articles' },
    { href: '/mashqlar', key: 'workouts' },
    { href: '/retseptlar', key: 'recipes' },
    { href: '/contact', key: 'contact' },
  ];

  // Function to check if link is active
  const isActive = (href) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-heading text-primary">
            <span className="font-serif text-red-500">{t('brandHighlight')}</span> {t('brandName')}
          </Link>
          <LanguageSwitcher />

          <div className="hidden md:flex md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-red-500 font-semibold'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 md:hidden"
            aria-label={t('ariaToggleMenu')}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-4 space-y-3 md:hidden animate-fadeIn">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`block font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-red-500 font-semibold'
                    : 'text-gray-700 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;