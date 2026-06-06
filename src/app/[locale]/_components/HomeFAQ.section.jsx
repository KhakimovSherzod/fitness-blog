'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function HomeFAQ() {
  const t = useTranslations('faq');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Get FAQ items from translations
  const faqItems = t.raw('items');

  return (
    <section className='container px-4 py-20 mx-auto'>
      <div className='mb-12 text-center'>
        <h2 className='mb-4 text-3xl font-bold text-gray-800 md:text-4xl'>
          {t('title')}
        </h2>
        <p className='max-w-2xl mx-auto text-gray-600'>
          {t('subtitle')}
        </p>
      </div>

      <div className='max-w-3xl mx-auto space-y-4'>
        {faqItems.map((faq, index) => (
          <div key={index} className='overflow-hidden bg-white shadow-md rounded-xl'>
            <button
              onClick={() => toggleFaq(index)}
              className='flex items-center justify-between w-full p-6 text-left transition hover:bg-gray-50'
            >
              <span className='text-lg font-semibold text-gray-800'>{faq.question}</span>
              <svg
                className={`w-6 h-6 text-green-600 transition-transform duration-300 flex-shrink-0 ${
                  openFaq === index ? 'rotate-180' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
            <div
              className={`px-6 pb-6 text-gray-600 transition-all duration-300 ${
                openFaq === index ? 'block' : 'hidden'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}