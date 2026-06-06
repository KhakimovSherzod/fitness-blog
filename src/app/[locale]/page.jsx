import { getTranslations } from "next-intl/server";
import HomeFAQ from "./_components/HomeFAQ.section";

export async function generateMetadata({ params }) {
  const locale = await params;

  const t = await getTranslations({
    locale,
    namespace: "metadata.home"
  });

  const locales = {
    en: "/en",
    ru: "/ru",
    uz: "/uz"
  };

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),

    alternates: {
      canonical: `https://vido-fitlife.uz/${locale}`,
      languages: Object.fromEntries(
        Object.entries(locales).map(([k, v]) => [
          k,
          `https://vido-fitlife.uz${v}`
        ])
      ),
      "x-default": "https://vido-fitlife.uz/en"
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://vido-fitlife.uz/${locale}`,
      siteName: "VIDO FitLife",
      type: "website"
    }
  };
}

/* =========================
   JSON-LD: WEB + FAQ
========================= */

const getHomeJsonLd = (locale, t) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",

  name: t("name"),
  description: t("description"),
  url: `https://vido-fitlife.uz/${locale}`,

  inLanguage: locale,

  isPartOf: {
    "@type": "WebSite",
    name: "VIDO FitLife",
    url: "https://vido-fitlife.uz"
  }
});

/* FAQ SCHEMA (IMPORTANT PART) */
const getFaqJsonLd = (faqItems) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

export default async function Home({ params }) {
  const locale = await params;

  const t = await getTranslations({ locale, namespace: "home" });
  const jsonLdText = await getTranslations({
    locale,
    namespace: "jsonld.home"
  });

  // FAQ translations (IMPORTANT)
  const faqT = await getTranslations({ locale, namespace: "faq" });
  const faqItems = faqT.raw("items");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getHomeJsonLd(locale, jsonLdText),
      getFaqJsonLd(faqItems)
    ]
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />

      <main className='min-h-screen bg-gradient-to-b from-green-50 to-white'>
        <section className='relative overflow-hidden text-white bg-gradient-to-br from-green-600 to-emerald-700'>
          <div className='absolute inset-0 bg-black/20'></div>
          <div className='container relative px-4 py-20 mx-auto md:py-28'>
            <div className='max-w-3xl mx-auto text-center'>
              <div className='inline-block px-4 py-1 mb-6 text-sm font-semibold rounded-full bg-white/20 backdrop-blur-sm'>
                {t('hero.badgePrefix')} <span className='text-blue-600 font-serif'>{t('hero.badgeHighlight')}</span> {t('hero.badgeSuffix')}
              </div>
              <h1 className='mb-6 text-4xl font-bold leading-tight md:text-6xl'>
                {t('hero.title')}
                <br />
                <span className='text-green-200'>{t('hero.titleHighlight')}</span>
              </h1>
              <p className='mb-8 text-lg leading-relaxed md:text-xl text-green-50'>
                {t('hero.description')}
              </p>
              <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                <button className='px-8 py-3 font-semibold text-green-700 transition bg-white rounded-full shadow-lg hover:bg-gray-100'>
                  <a href="./maqolalar">{t('hero.ctaStart')}</a>
                </button>
                <button className='px-8 py-3 font-semibold transition border-2 border-white rounded-full hover:bg-white/10'>
                  <a href="./maqolalar">{t('hero.ctaExplore')}</a>
                </button>
              </div>
            </div>
          </div>
          <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-50 to-transparent'></div>
        </section>

        <section className='container px-4 py-20 mx-auto'>
          <div className='mb-12 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-800 md:text-4xl'>
              {t('features.title')}
            </h2>
            <p className='max-w-2xl mx-auto text-gray-600'>
              {t('features.subtitle')}
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-3'>
            {/* Articles Card */}
            <div className='overflow-hidden transition-all duration-300 bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2'>
              <div className='flex items-center justify-center h-48 bg-gradient-to-br from-blue-500 to-blue-600'>
                <svg
                  className='w-20 h-20 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
                  />
                </svg>
              </div>
              <div className='p-6'>
                <h3 className='mb-3 text-2xl font-bold text-gray-800'>{t('features.articles.title')}</h3>
                <p className='mb-4 text-gray-600'>
                  {t('features.articles.description')}
                </p>
                <ul className='space-y-2 text-sm text-gray-500'>
                  {(t.raw('features.articles.points') ).map((point, idx) => (
                    <li key={idx} className='flex items-center'>
                      <svg
                        className='flex-shrink-0 w-4 h-4 mr-2 text-green-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Workouts Card */}
            <div className='overflow-hidden transition-all duration-300 bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2'>
              <div className='flex items-center justify-center h-48 bg-gradient-to-br from-orange-500 to-red-500'>
                <svg
                  className='w-20 h-20 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <div className='p-6'>
                <h3 className='mb-3 text-2xl font-bold text-gray-800'>{t('features.workouts.title')}</h3>
                <p className='mb-4 text-gray-600'>
                  {t('features.workouts.description')}
                </p>
                <ul className='space-y-2 text-sm text-gray-500'>
                  {(t.raw('features.workouts.points') ).map((point, idx) => (
                    <li key={idx} className='flex items-center'>
                      <svg
                        className='flex-shrink-0 w-4 h-4 mr-2 text-green-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recipes Card */}
            <div className='overflow-hidden transition-all duration-300 bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2'>
              <div className='flex items-center justify-center h-48 bg-gradient-to-br from-purple-500 to-pink-500'>
                <svg
                  className='w-20 h-20 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M12 15v6'
                  />
                </svg>
              </div>
              <div className='p-6'>
                <h3 className='mb-3 text-2xl font-bold text-gray-800'>{t('features.recipes.title')}</h3>
                <p className='mb-4 text-gray-600'>
                  {t('features.recipes.description')}
                </p>
                <ul className='space-y-2 text-sm text-gray-500'>
                  {(t.raw('features.recipes.points')).map((point, idx) => (
                    <li key={idx} className='flex items-center'>
                      <svg
                        className='flex-shrink-0 w-4 h-4 mr-2 text-green-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='py-20 bg-green-50'>
          <div className='container px-4 mx-auto'>
            <div className='max-w-4xl mx-auto'>
              <div className='mb-12 text-center'>
                <h2 className='mb-4 text-3xl font-bold text-gray-800 md:text-4xl'>
                  {t('about.title')}
                </h2>
                <div className='w-20 h-1 mx-auto bg-green-500 rounded-full'></div>
              </div>

              <div className='p-8 bg-white shadow-xl rounded-2xl md:p-10'>
                <div className='flex flex-col items-center gap-8 mb-8 md:flex-row'>
                  <div className='flex items-center justify-center flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-600'>
                    <span className='text-4xl font-bold text-white'>{t('about.whoWeAre.initials')}</span>
                  </div>
                  <div>
                    <h3 className='mb-3 text-2xl font-bold text-gray-800'>{t('about.whoWeAre.title')}</h3>
                    <p className='leading-relaxed text-gray-600'>
                      {t('about.whoWeAre.description')}
                    </p>
                  </div>
                </div>

                <div className='pt-8 border-t border-gray-200'>
                  <h3 className='mb-3 text-2xl font-bold text-gray-800'>{t('about.ourGoal.title')}</h3>
                  <p className='mb-6 leading-relaxed text-gray-600'>
                    {t('about.ourGoal.description')}
                  </p>

                  <div className='grid gap-4 mt-6 sm:grid-cols-2'>
                    {(t.raw('about.highlights')).map((highlight, idx) => (
                      <div key={idx} className='flex items-center gap-3 p-3 rounded-lg bg-green-50'>
                        <svg
                          className='flex-shrink-0 w-6 h-6 text-green-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='text-gray-700'>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HomeFAQ />
      </main>
    </>
  );
}