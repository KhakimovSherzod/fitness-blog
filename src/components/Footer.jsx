'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Footer = () => {
  const t = useTranslations('footer');

  const pageLinks = [
    { href: '/', key: 'home' },
    { href: '/maqolalar', key: 'articles' },
    { href: '/mashqlar', key: 'workouts' },
    { href: '/retseptlar', key: 'recipes' },
  ];

  const moreLinks = [
    { href: '/privacy-policy', key: 'privacyPolicy' },
    { href: '/terms', key: 'termsConditions' },
    { href: '/about', key: 'aboutUs' },
  ];

  return (
    <footer className="py-12 text-white bg-dark">
      <div className="container px-4 mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-2xl font-bold font-heading text-primary">
              {t('brand')}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="mb-4 text-xl font-bold font-heading">{t('pages.title')}</h3>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.key}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t(`pages.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold font-heading">{t('more.title')}</h3>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.key}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t(`more.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-bold font-heading">{t('contact.title')}</h3>
            <p className="text-gray-400">
              {t('contact.emailLabel')} {t('contact.email')}
            </p>
            <p className="mt-2 text-gray-400">
              {t('contact.phoneLabel')} {t('contact.phone')}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-12 text-center text-gray-500 border-t border-gray-800">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;