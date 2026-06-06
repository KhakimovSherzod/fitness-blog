export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Privacy Policy',
            description:
              'This privacy policy explains what information is collected, stored, and used about you when you use our website.',
            url: 'https://vido.fitlife.uz/privacy-policy',
            publisher: {
              '@type': 'Organization',
              name: 'VIDO FitLife',
              logo: {
                '@type': 'ImageObject',
                url: 'https://vido.fitlife.uz/og-image.png',
              },
            },
            inLanguage: 'en',
            dateModified: new Date().toISOString().split('T')[0],
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'info.vido.fitlife@gmail.com',
              contactType: 'customer support',
            },
          }),
        }}
      />
      <main className='max-w-3xl px-4 py-8 mx-auto text-gray-800'>
        <h1 className='mb-4 text-2xl font-bold'>Privacy Policy</h1>
        <p className='mb-4'>
          This privacy policy explains what information is collected, stored, and used about you
          when you use our website.
        </p>

        <h2 className='mt-6 mb-2 text-xl font-semibold'>Information Collection</h2>
        <p className='mb-4'>
          We only collect necessary information from users, such as name, email address, and contact
          details. This information is used only to send you updates or to contact you.
        </p>

        <h2 className='mt-6 mb-2 text-xl font-semibold'>Use of Information</h2>
        <p className='mb-4'>Collected information is used only for the following purposes:</p>
        <ul className='mb-4 list-disc list-inside'>
          <li>Sending news and articles via email</li>
          <li>Improving our service</li>
          <li>Contacting users</li>
        </ul>

        <h2 className='mt-6 mb-2 text-xl font-semibold'>Third-Party Services</h2>
        <p className='mb-4'>
          Our site may use Google Ads and other advertising services. These services may use
          cookies. If you wish, you can disable or restrict cookies in your browser settings.
        </p>

        <h2 className='mt-6 mb-2 text-xl font-semibold'>Contact</h2>
        <p className='mb-4'>
          If you have any questions about our privacy policy, you can contact us at:{' '}
          <a href='mailto:info.vido.fitlife@gmail.com' className='text-blue-600 underline'>
            info.vido.fitlife@gmail.com
          </a>
        </p>

        <p className='mt-6 text-sm text-gray-500'>
          Last updated: {new Date().toLocaleDateString('en-US')}
        </p>
      </main>
    </>
  )
}
