'use client'
import Image from 'next/image'
import { useState } from 'react'

const SoglomlikPage = () => {
  const [activeTab, setActiveTab] = useState('benefits')
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'The Importance of Drinking Water for Weight Loss',
            image: [
              'https://images.unsplash.com/photo-1624948465027-6f9b51067557?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2xhc3MlMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D',
            ],
            author: {
              '@type': 'Person',
              name: 'Dr. Malika Rajabova',
            },
            publisher: {
              '@type': 'Organization',
              name: 'VIDO FitLife',
              logo: {
                '@type': 'ImageObject',
                url: 'https://vido.fitlife.uz/og-image.png',
              },
            },
            datePublished: '2025-10-01',
            description:
              'Water is the source of life and one of the simplest and most effective tools for weight loss. Learn about the importance of drinking water for weight loss, how much water you should drink, and how to make water a daily habit.',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://vido.fitlife.uz/maqolalar/soglomlik',
            },
          }),
        }}
      />
      <main className='min-h-screen py-8 bg-gradient-to-b from-blue-50 to-white'>
        <div className='container max-w-4xl px-4 mx-auto'>
          <article className='overflow-hidden bg-white shadow-xl rounded-2xl'>
            {/* Article Header */}
            <header className='relative'>
              <div className='absolute z-10 top-4 left-4'>
                <span className='inline-flex items-center px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full'>
                  Health & Diet
                </span>
              </div>
              <div className='relative h-64 md:h-80'>
                <Image
                  src='https://images.unsplash.com/photo-1624948465027-6f9b51067557?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2xhc3MlMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D'
                  alt='The Importance of Drinking Water for Weight Loss'
                  fill
                  className='object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-blue-900 opacity-40'></div>
              </div>
              <div className='absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent'>
                <h1 className='mb-2 text-3xl font-bold md:text-4xl'>
                  The Importance of Drinking Water for Weight Loss
                </h1>
                <div className='flex items-center text-sm text-blue-100'>
                  <span className='flex items-center mr-4'>
                    <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Dr. Malika Rajabova
                  </span>
                  <span className='flex items-center'>
                    <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                        clipRule='evenodd'
                      />
                    </svg>
                    1 week ago
                  </span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className='p-6 md:p-8'>
              <p className='mb-6 text-lg leading-relaxed text-gray-700'>
                Water is the source of life and one of the simplest and most effective tools for
                weight loss. In this article, you will learn in detail about the importance of
                drinking water for weight loss, how much water you should drink, and how to make
                water a daily habit.
              </p>

              {/* Table of Contents */}
              <div className='p-4 mb-8 rounded-lg bg-blue-50'>
                <h2 className='mb-3 text-xl font-semibold text-blue-800'>Table of Contents</h2>
                <ul className='pl-5 space-y-1 list-disc'>
                  <li>
                    <a href='#foydalari' className='text-blue-600 hover:underline'>
                      Main Benefits of Drinking Water
                    </a>
                  </li>
                  <li>
                    <a href='#vazn-yoqotish' className='text-blue-600 hover:underline'>
                      Water and Weight Loss
                    </a>
                  </li>
                  <li>
                    <a href='#miqdor' className='text-blue-600 hover:underline'>
                      How Much Water Should You Drink?
                    </a>
                  </li>
                  <li>
                    <a href='#maslahatlar' className='text-blue-600 hover:underline'>
                      Tips for Drinking Water
                    </a>
                  </li>
                  <li>
                    <a href='#teri' className='text-blue-600 hover:underline'>
                      Water and Healthy Skin
                    </a>
                  </li>
                  <li>
                    <a href='#suv-turlari' className='text-blue-600 hover:underline'>
                      Types of Water and Their Benefits
                    </a>
                  </li>
                </ul>
              </div>

              {/* Interactive Tabs */}
              <div className='mb-8'>
                <div className='flex mb-4 space-x-2 overflow-x-auto'>
                  {[
                    { id: 'benefits', label: 'Benefits' },
                    { id: 'myths', label: 'Myths' },
                    { id: 'tips', label: 'Tips' },
                    { id: 'calculation', label: 'Calculation' },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className='p-4 rounded-lg bg-gray-50'>
                  {activeTab === 'benefits' && (
                    <div>
                      <h3 className='mb-2 text-lg font-semibold'>
                        Additional Benefits of Drinking Water
                      </h3>
                      <ul className='pl-5 space-y-2 list-disc'>
                        <li>Reduces headaches</li>
                        <li>Prevents kidney stones</li>
                        <li>Reduces physical fatigue</li>
                        <li>Normalizes blood pressure</li>
                        <li>Improves digestion</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'myths' && (
                    <div>
                      <h3 className='mb-2 text-lg font-semibold'>Common Myths About Water</h3>
                      <ul className='pl-5 space-y-2 list-disc'>
                        <li>
                          You don't have to drink 8 glasses a day – the amount varies for each
                          person
                        </li>
                        <li>Only water hydrates you – other fluids and foods also count</li>
                        <li>
                          More water is always better – excessive water can cause water intoxication
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'tips' && (
                    <div>
                      <h3 className='mb-2 text-lg font-semibold'>
                        Practical Tips for Drinking More Water
                      </h3>
                      <ul className='pl-5 space-y-2 list-disc'>
                        <li>Drink a glass of water before every meal</li>
                        <li>Always keep a water bottle at your desk</li>
                        <li>Add lemon, pear, or carrot to your water</li>
                        <li>Set reminders on your phone to drink water</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'calculation' && (
                    <div>
                      <h3 className='mb-2 text-lg font-semibold'>Calculate Your Water Needs</h3>
                      <p className='mb-2'>
                        According to a simple formula: Multiply your weight (kg) by 0.033.
                      </p>
                      <p>
                        Example: If you weigh 70 kg, your daily water intake: 70 × 0.033 = 2.31
                        liters
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Main Content */}
              <div className='prose max-w-none'>
                <section id='foydalari' className='mb-8 scroll-mt-16'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    1. Main Benefits of Drinking Water
                  </h2>
                  <p className='mb-4'>
                    Water is the most important component of the body, making up 60% of the human
                    body. Water accelerates metabolism, removes toxins, and increases energy levels.
                    The main benefits of drinking water include:
                  </p>
                  <ul className='pl-5 mb-4 list-disc'>
                    <li>Speeds up metabolism by up to 24-30%</li>
                    <li>Increases the efficiency of burning calories</li>
                    <li>Improves digestion</li>
                    <li>Reduces headaches</li>
                    <li>Reduces fatigue and increases energy</li>
                  </ul>
                  <div className='p-4 border-l-4 border-blue-500 rounded-lg bg-blue-50'>
                    <p className='font-medium text-blue-800'>Interesting fact:</p>
                    <p>
                      A 2013 study showed that overweight people who drank 500 ml of water before
                      meals reduced their calorie intake by 13%.
                    </p>
                  </div>
                </section>

                <section id='vazn-yoqotish' className='mb-8 scroll-mt-16'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    2. Water and Weight Loss
                  </h2>
                  <p className='mb-4'>
                    Drinking water before meals increases satiety and prevents overeating. Studies
                    show that drinking water speeds up metabolism by 24-30%. This means if you
                    consume 2000 calories a day, drinking water can help you burn an extra 96-120
                    calories.
                  </p>
                  <p className='mb-4'>
                    Water also plays an important role in the breakdown of fat cells. Not drinking
                    enough water leads to fat accumulation. Drinking water helps remove excess
                    sodium from the body, which is important for weight loss.
                  </p>
                  <div className='p-4 rounded-lg bg-green-50'>
                    <h3 className='mb-2 text-lg font-semibold text-green-800'>
                      Tips for Losing Weight with Water:
                    </h3>
                    <ul className='pl-5 list-disc'>
                      <li>Drink 2 glasses of water every morning after waking up</li>
                      <li>Drink 1 glass of water before every meal</li>
                      <li>Drink water before and after exercise</li>
                      <li>Choose water instead of sugary drinks</li>
                    </ul>
                  </div>
                </section>

                <section id='miqdor' className='mb-8 scroll-mt-16'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    3. How Much Water Should You Drink?
                  </h2>
                  <p className='mb-4'>
                    Adults are recommended to drink at least 1.5-2 liters of water per day. This
                    amount increases with physical activity and hot weather. Water needs vary for
                    each person and depend on the following factors:
                  </p>
                  <ul className='pl-5 mb-4 list-disc'>
                    <li>Weight and height</li>
                    <li>Gender (men usually need more water)</li>
                    <li>Level of physical activity</li>
                    <li>Climate and temperature</li>
                    <li>Health status and pregnancy</li>
                  </ul>
                  <div className='mb-4 overflow-x-auto'>
                    <table className='min-w-full overflow-hidden bg-white rounded-lg'>
                      <thead className='text-white bg-blue-600'>
                        <tr>
                          <th className='px-4 py-3 text-left'>Weight (kg)</th>
                          <th className='px-4 py-3 text-left'>Water Amount (liters)</th>
                          <th className='px-4 py-3 text-left'>Glasses (250ml)</th>
                        </tr>
                      </thead>
                      <tbody className='text-gray-700'>
                        <tr className='bg-blue-50'>
                          <td className='px-4 py-3 border-b'>50</td>
                          <td className='px-4 py-3 border-b'>1.65</td>
                          <td className='px-4 py-3 border-b'>6.6</td>
                        </tr>
                        <tr className='bg-blue-100'>
                          <td className='px-4 py-3 border-b'>60</td>
                          <td className='px-4 py-3 border-b'>1.98</td>
                          <td className='px-4 py-3 border-b'>7.9</td>
                        </tr>
                        <tr className='bg-blue-50'>
                          <td className='px-4 py-3 border-b'>70</td>
                          <td className='px-4 py-3 border-b'>2.31</td>
                          <td className='px-4 py-3 border-b'>9.2</td>
                        </tr>
                        <tr className='bg-blue-100'>
                          <td className='px-4 py-3 border-b'>80</td>
                          <td className='px-4 py-3 border-b'>2.64</td>
                          <td className='px-4 py-3 border-b'>10.6</td>
                        </tr>
                        <tr className='bg-blue-50'>
                          <td className='px-4 py-3 border-b'>90</td>
                          <td className='px-4 py-3 border-b'>2.97</td>
                          <td className='px-4 py-3 border-b'>11.9</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id='maslahatlar' className='mb-8 scroll-mt-16'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    4. Tips for Drinking Water
                  </h2>
                  <p className='mb-4'>
                    Making drinking water a habit and part of your daily routine is important. Here
                    are some practical tips to help you drink more water:
                  </p>
                  <ul className='pl-5 mb-4 list-disc'>
                    <li>Drink a glass of water every morning – it starts your metabolism</li>
                    <li>Choose more pure water instead of tea and coffee</li>
                    <li>Avoid sugary drinks – they add extra calories</li>
                    <li>Always have a water bottle with you</li>
                    <li>Set reminders on your phone to drink water</li>
                    <li>Add lemon, pear, or carrot to your water</li>
                    <li>Drink water at room temperature or warm – cold water may slow digestion</li>
                  </ul>
                </section>

                <section id='teri' className='mb-8 scroll-mt-16'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    5. Water and Healthy Skin
                  </h2>
                  <p className='mb-4'>
                    Drinking enough water keeps your skin hydrated and helps you look younger. Water
                    moisturizes the skin from the inside, which is important for maintaining
                    elasticity and preventing scars and wrinkles.
                  </p>
                  <p className='mb-4'>
                    Water helps remove toxins from the skin, which reduces rashes and acne. To keep
                    your skin healthy and glowing, it is important to drink enough water every day.
                  </p>
                </section>

                <section id='suv-turlari' className='mb-8 scroll-mt-16'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    6. Types of Water and Their Benefits
                  </h2>
                  <p className='mb-4'>
                    There are different types of water, each with its own benefits. Below is
                    information about the most common types of water and their benefits:
                  </p>
                  <div className='grid gap-4 mb-4 md:grid-cols-2'>
                    <div className='p-4 rounded-lg bg-gray-50'>
                      <h3 className='mb-2 text-lg font-semibold'>Mineral Water</h3>
                      <p>
                        Rich in natural minerals. Provides calcium, magnesium, and other minerals.
                      </p>
                    </div>
                    <div className='p-4 rounded-lg bg-gray-50'>
                      <h3 className='mb-2 text-lg font-semibold'>Boiled Water</h3>
                      <p>Cleansed from harmful microorganisms. However, some minerals are lost.</p>
                    </div>
                    <div className='p-4 rounded-lg bg-gray-50'>
                      <h3 className='mb-2 text-lg font-semibold'>Filtered Water</h3>
                      <p>Purified from arsenic, mercury, and other harmful substances.</p>
                    </div>
                    <div className='p-4 rounded-lg bg-gray-50'>
                      <h3 className='mb-2 text-lg font-semibold'>Water with Lemon</h3>
                      <p>Rich in vitamin C, strengthens immunity, and helps digestion.</p>
                    </div>
                  </div>
                </section>

                {/* Water Tracking Section */}
                <div className='p-6 mb-8 rounded-lg bg-blue-50'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    Track Your Daily Water Intake
                  </h2>
                  <p className='mb-4'>Below is a simple chart to track your daily water intake:</p>
                  <div className='grid grid-cols-2 gap-4 mb-4 md:grid-cols-4'>
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div key={index} className='p-3 text-center bg-white rounded-lg'>
                        <div className='flex items-center justify-center w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full'>
                          <svg
                            className='w-6 h-6 text-blue-600'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
                            ></path>
                          </svg>
                        </div>
                        <span className='text-sm font-medium'>{index + 1}-glass</span>
                      </div>
                    ))}
                  </div>
                  <p className='text-sm text-gray-600'>
                    Mark each glass you drink or record it in your notebook.
                  </p>
                </div>

                {/* Final Tips */}
                <div className='p-6 mb-8 border-l-4 border-yellow-500 bg-yellow-50'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    Important Recommendations
                  </h2>
                  <ul className='pl-5 space-y-2 list-disc'>
                    <li>Drink water slowly, not a lot at once</li>
                    <li>Pale yellow urine indicates sufficient water intake</li>
                    <li>Drink 150-200 ml of water every 20 minutes during exercise</li>
                    <li>Increase water intake in hot weather</li>
                    <li>Pregnant and breastfeeding women need more water</li>
                  </ul>
                </div>
              </div>

              {/* Article Footer */}
              <footer className='pt-6 mt-8 border-t border-gray-200'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                  <a
                    href='/maqolalar'
                    className='inline-flex items-center mb-4 font-medium text-blue-600 hover:text-blue-800 md:mb-0'
                  >
                    <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                    All articles
                  </a>
                  <div className='flex space-x-4'>
                    <span className='text-sm text-gray-500'>Share:</span>
                    <button className='text-blue-600 hover:text-blue-800'>
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                      </svg>
                    </button>
                    <button className='text-blue-400 hover:text-blue-600'>
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.033 10.033 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                      </svg>
                    </button>
                    <button className='text-red-600 hover:text-red-800'>
                      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
                      </svg>
                    </button>
                  </div>
                </div>
              </footer>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}

export default SoglomlikPage
