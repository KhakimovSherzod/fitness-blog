'use client'

import Head from 'next/head'

export default function page() {
  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'ContactPage',
                  '@id': 'https://vido-fitlife.uz/contact#webpage',
                  url: 'https://vido-fitlife.uz/contact',
                  name: 'Contact VIDO FitLife',
                  description:
                    'Get in touch with VIDO FitLife for inquiries, feedback, or support.',
                  isPartOf: { '@id': 'https://vido-fitlife.uz/#website' },
                  mainEntity: { '@id': 'https://vido-fitlife.uz/#contact' },
                },
                {
                  '@type': 'ContactPoint',
                  '@id': 'https://vido-fitlife.uz/#contact',
                  contactType: 'Customer Support / General Inquiries',
                  email: 'info.vido.fitlife@gmail.com',
                  telephone: '+998998184200',
                  areaServed: 'UZ',
                  availableLanguage: ['en'],
                  url: 'https://vido-fitlife.uz/contact',
                },
              ],
            }),
          }}
        />
      </Head>
      <section className='py-16 bg-white'>
        <div className='container max-w-lg px-4 mx-auto'>
          <h2 className='mb-8 text-3xl font-bold text-center font-heading'>Contact</h2>
          <div className='p-8 mb-10 text-center rounded-lg shadow bg-gray-50'>
            <p className='text-gray-400'>Email: info.vido.fitlife@gmail.com</p>
            <p className='mt-2 text-gray-400'>Phone: +998 99 818-42-00</p>
          </div>
          <form
            method='POST'
            action='https://formspree.io/f/mrbanvzz'
            className='p-8 bg-white rounded-lg shadow-lg text-dark'
          >
            <div className='mb-6'>
              <label htmlFor='newsletter-email' className='block mb-2 font-medium text-left'>
                Your Email
              </label>
              <input
                type='email'
                id='newsletter-email'
                name='email'
                placeholder='your@email.com'
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>

            <div className='mb-6'>
              <label htmlFor='newsletter-phone' className='block mb-2 font-medium text-left'>
                Your Phone Number
              </label>
              <input
                type='tel'
                id='newsletter-phone'
                name='phone'
                placeholder='+998 90 123 45 67'
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>

            <div className='mb-6'>
              <label htmlFor='newsletter-message' className='block mb-2 font-medium text-left'>
                Your Message
              </label>
              <textarea
                id='newsletter-message'
                name='message'
                placeholder='Write your message here...'
                required
                rows={4}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>

            <button
              type='submit'
              className='w-full py-3 font-medium text-white transition-colors rounded-lg bg-secondary hover:bg-green-600'
            >
              Contact Us
            </button>

            <p className='mt-4 text-sm text-gray-600'>
              Your privacy is protected. You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
