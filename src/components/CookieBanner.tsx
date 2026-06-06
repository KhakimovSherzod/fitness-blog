'use client'

import CookieConsent from 'react-cookie-consent'

export default function CookieBanner() {
  const COOKIE_NAME = 'mySiteCookies'

  const handleAccept = () => {
    // Load third-party scripts after consent
    console.log('User accepted cookies')
  }

  return (
    <CookieConsent
      location='bottom'
      buttonText='Accept'
      declineButtonText='Decline'
      cookieName={COOKIE_NAME}
      enableDeclineButton
      style={{ background: '#2B373B' }}
      buttonStyle={{ color: '#fff', background: '#4CAF50', fontSize: '13px' }}
      declineButtonStyle={{ color: '#fff', background: '#D32F2F', fontSize: '13px' }}
      onAccept={handleAccept}
      onDecline={() => console.log('User declined cookies')}
    >
      We use cookies to improve your experience.{' '}
      <a href='/privacy' className='underline'>
        Learn more
      </a>
      {typeof window !== 'undefined' && localStorage.getItem(COOKIE_NAME) === 'true' && (
        <>
          {/* Google Analytics script */}
          <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4846588918335496'
            crossOrigin='anonymous'
          ></script>
        </>
      )}
    </CookieConsent>
  )
}
