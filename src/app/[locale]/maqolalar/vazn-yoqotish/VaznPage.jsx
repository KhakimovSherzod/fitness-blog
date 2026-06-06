'use client'
import Image from 'next/image'
import { useState } from 'react'

const VaznPage = () => {
  const [activeTab, setActiveTab] = useState('diet')
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: '10 Scientifically Proven Ways to Lose Weight',
            image: [
              'https://media.istockphoto.com/id/1124441333/photo/fresh-healthy-green-food-on-plate-with-wight-healthy-food-concept-copy-space-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Uh_Lf5cmhLuPJufM-RY0ayybzgQua73p-Foag-STMHU=',
            ],
            author: {
              '@type': 'Person',
              name: 'Dr. Aziza Khasanova',
            },
            publisher: {
              '@type': 'Organization',
              name: 'VIDO FitLife',
              logo: {
                '@type': 'ImageObject',
                url: 'https://vido.fitlife.uz/og-image.png',
              },
            },
            datePublished: '2025-10-06',
            description:
              'The most effective weight loss methods and healthy lifestyle tips based on scientific research. Learn about the most modern and science-based ways to lose weight.',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://vido.fitlife.uz/maqolalar/vazn-yoqotish',
            },
          }),
        }}
      />
      <main className='min-h-screen py-8 bg-gradient-to-b from-green-50 to-white'>
        <div className='container max-w-4xl px-4 mx-auto'>
          <article className='overflow-hidden bg-white shadow-xl rounded-2xl'>
            {/* Article Header */}
            <header className='relative'>
              <div className='absolute z-10 top-4 left-4'>
                <span className='inline-flex items-center px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full'>
                  Weight Loss
                </span>
              </div>
              <div className='relative h-64 md:h-80'>
                <Image
                  src='https://media.istockphoto.com/id/1124441333/photo/fresh-healthy-green-food-on-plate-with-wight-healthy-food-concept-copy-space-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Uh_Lf5cmhLuPJufM-RY0ayybzgQua73p-Foag-STMHU='
                  alt='Weight loss - Healthy lifestyle'
                  fill
                  className='object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-green-900 opacity-40'></div>
              </div>
              <div className='absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent'>
                <h1 className='mb-2 text-3xl font-bold md:text-4xl'>
                  10 Scientifically Proven Ways to Lose Weight
                </h1>
                <div className='flex items-center text-sm text-green-100'>
                  <span className='flex items-center mr-4'>
                    <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Dr. Aziza Khasanova
                  </span>
                  <span className='flex items-center'>
                    <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                        clipRule='evenodd'
                      />
                    </svg>
                    2 days ago
                  </span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className='p-6 md:p-8'>
              <p className='mb-6 text-lg leading-relaxed text-gray-700'>
                The most effective weight loss methods and healthy lifestyle tips based on
                scientific research. In this article, you will learn about the most modern and
                science-based ways to lose weight.
              </p>

              {/* Reading Stats */}
              <div className='flex items-center mb-8 text-sm text-gray-500'>
                <span className='flex items-center mr-4'>
                  <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                  5 min read
                </span>
                <span className='flex items-center'>
                  <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V8H8a1 1 0 110-2h1V5a1 1 0 011-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                  10 tips
                </span>
              </div>

              {/* Table of Contents */}
              <div className='p-4 mb-8 rounded-lg bg-green-50'>
                <h2 className='mb-3 text-xl font-semibold text-green-800'>Article Contents</h2>
                <ul className='pl-5 space-y-1 list-disc'>
                  <li>
                    <a href='#ovqatlanish' className='text-green-600 hover:underline'>
                      Healthy and Balanced Nutrition
                    </a>
                  </li>
                  <li>
                    <a href='#kaloriya' className='text-green-600 hover:underline'>
                      Control Calorie Intake
                    </a>
                  </li>
                  <li>
                    <a href='#faollik' className='text-green-600 hover:underline'>
                      Regular Physical Activity
                    </a>
                  </li>
                  <li>
                    <a href='#suv' className='text-green-600 hover:underline'>
                      Importance of Drinking Water
                    </a>
                  </li>
                  <li>
                    <a href='#uyqu' className='text-green-600 hover:underline'>
                      Pay Attention to Sleep Quality
                    </a>
                  </li>
                  <li>
                    <a href='#stress' className='text-green-600 hover:underline'>
                      Manage Stress
                    </a>
                  </li>
                  <li>
                    <a href='#sekinlik' className='text-green-600 hover:underline'>
                      Eat Slowly
                    </a>
                  </li>
                  <li>
                    <a href='#kundalik' className='text-green-600 hover:underline'>
                      Keep a Food Diary
                    </a>
                  </li>
                  <li>
                    <a href='#maqsad' className='text-green-600 hover:underline'>
                      Set Realistic Goals
                    </a>
                  </li>
                  <li>
                    <a href='#turmush-tarzi' className='text-green-600 hover:underline'>
                      Maintain a Healthy Lifestyle
                    </a>
                  </li>
                </ul>
              </div>

              {/* Interactive Tabs */}
              <div className='mb-8'>
                <div className='flex mb-4 space-x-2 overflow-x-auto'>
                  {[
                    { id: 'diet', label: 'Nutrition' },
                    { id: 'exercise', label: 'Exercise' },
                    { id: 'lifestyle', label: 'Lifestyle' },
                    { id: 'motivation', label: 'Motivation' },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className='p-4 rounded-lg bg-gray-50'>
                  {activeTab === 'diet' && (
                    <div>
                      <h3 className='mb-2 text-lg font-semibold'>Additional Nutrition Tips</h3>
                      <ul className='pl-5 space-y-2 list-disc'>
                        <li>Choose whole grain products instead of white bread and pasta</li>
                        <li>Eat at least 5 different colored fruits and vegetables daily</li>
                        <li>Choose lean protein sources (chicken, fish, legumes)</li>
                        <li>Limit sweets and desserts</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'exercise' && (
                    <div>
                      <h3 className='mb-2 text-lg font-semibold'>Additional Exercise Tips</h3>
                      <ul className='pl-5 space-y-2 list-disc'>
                        <li>Do strength training 3-4 times a week</li>
                        <li>Do cardio exercises for 30-60 minutes</li>
                        <li>Make daily walking a habit (at least 10,000 steps)</li>
                        <li>Mix up your exercise routines</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'lifestyle' && (
                    <div>
                      <h3 className='mb-2 text-lg font-semibold'>Additional Lifestyle Tips</h3>
                      <ul className='pl-5 space-y-2 list-disc'>
                        <li>Get 7-9 hours of sleep per night</li>
                        <li>Try meditation or yoga to reduce stress</li>
                        <li>Eat at the same time every day</li>
                        <li>Limit screen time on phone and computer</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'motivation' && (
                    <div>
                      <h3 className='mb-2 text-lg font-semibold'>Additional Motivation Tips</h3>
                      <ul className='pl-5 space-y-2 list-disc'>
                        <li>Weigh yourself weekly and record your results</li>
                        <li>Celebrate small achievements</li>
                        <li>Lose weight with a friend or family member</li>
                        <li>Set small rewards for yourself</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Main Content */}
              <div className='prose max-w-none'>
                <section id='ovqatlanish' className='mb-8 scroll-mt-16'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    1. Healthy and Balanced Nutrition
                  </h2>
                  <p className='mb-4'>
                    Eat fruits, vegetables, whole grains, and lean proteins every day. Avoid
                    processed and sugary foods. Healthy eating not only helps with weight loss but
                    also extends overall health and reduces the risk of diseases.
                  </p>
                  <div className='p-4 mb-4 rounded-lg bg-green-50'>
                    <h3 className='mb-2 text-lg font-semibold text-green-800'>Practical Tips:</h3>
                    <ul className='pl-5 list-disc'>
                      <li>Make half of your plate fruits and vegetables at every meal</li>
                      <li>
                        Choose unsaturated fats over saturated fats (olive oil, nuts, avocado)
                      </li>
                      <li>Opt for water, tea, or coffee instead of sugary drinks</li>
                      <li>Add spices to your food - they add flavor without calories</li>
                    </ul>
                  </div>
                  <div className='p-4 border-l-4 border-blue-500 rounded-lg bg-blue-50'>
                    <p className='font-medium text-blue-800'>Scientific Fact:</p>
                    <p>
                      A 2018 study showed that consuming whole grain products reduces the risk of
                      metabolic syndrome and obesity.
                    </p>
                  </div>
                </section>

                <section id='kaloriya' className='mb-8 scroll-mt-16'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    2. Control Calorie Intake
                  </h2>
                  <p className='mb-4'>
                    Determine your daily calorie needs and avoid excessive intake. Read food labels
                    and learn portion control. Calorie deficit is the main mechanism for weight
                    loss.
                  </p>
                  <div className='mb-4 overflow-x-auto'>
                    <table className='min-w-full overflow-hidden bg-white rounded-lg'>
                      <thead className='text-white bg-green-600'>
                        <tr>
                          <th className='px-4 py-3 text-left'>Activity Level</th>
                          <th className='px-4 py-3 text-left'>Daily Calorie Needs (Women)</th>
                          <th className='px-4 py-3 text-left'>Daily Calorie Needs (Men)</th>
                        </tr>
                      </thead>
                      <tbody className='text-gray-700'>
                        <tr className='bg-green-50'>
                          <td className='px-4 py-3 border-b'>Low Activity</td>
                          <td className='px-4 py-3 border-b'>1600-1800</td>
                          <td className='px-4 py-3 border-b'>2000-2200</td>
                        </tr>
                        <tr className='bg-green-100'>
                          <td className='px-4 py-3 border-b'>Moderate Activity</td>
                          <td className='px-4 py-3 border-b'>1800-2000</td>
                          <td className='px-4 py-3 border-b'>2200-2400</td>
                        </tr>
                        <tr className='bg-green-50'>
                          <td className='px-4 py-3 border-b'>High Activity</td>
                          <td className='px-4 py-3 border-b'>2000-2200</td>
                          <td className='px-4 py-3 border-b'>2400-2800</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className='mb-4'>
                    To lose weight, it is recommended to consume 500-750 calories less than the
                    above values per day. This allows for a weight loss of 0.5-1 kg per week.
                  </p>
                </section>

                <section id='faollik' className='mb-8 scroll-mt-16'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    3. Regular Physical Activity
                  </h2>
                  <p className='mb-4'>
                    Engage in at least 150 minutes of moderate-intensity exercise per week. Choose
                    activities such as walking, running, swimming, or dancing. Physical activity not
                    only burns calories but also speeds up metabolism and increases muscle mass.
                  </p>
                  <div className='grid gap-4 mb-4 md:grid-cols-2'>
                    <div className='p-4 rounded-lg bg-gray-50'>
                      <h3 className='mb-2 text-lg font-semibold'>Cardio Exercises</h3>
                      <ul className='pl-5 list-disc'>
                        <li>Brisk walking (calories: 300-400/hour)</li>
                        <li>Running (calories: 600-800/hour)</li>
                        <li>Cycling (calories: 500-700/hour)</li>
                        <li>Swimming (calories: 400-600/hour)</li>
                      </ul>
                    </div>
                    <div className='p-4 rounded-lg bg-gray-50'>
                      <h3 className='mb-2 text-lg font-semibold'>Strength Exercises</h3>
                      <ul className='pl-5 list-disc'>
                        <li>Exercises for muscle groups</li>
                        <li>Weight lifting</li>
                        <li>Bodyweight exercises</li>
                        <li>Exercises with resistance bands</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id='suv' className='mb-8 scroll-mt-16'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    4. Importance of Drinking Water
                  </h2>
                  <p className='mb-4'>
                    Drinking enough water throughout the day speeds up metabolism and reduces
                    hunger. Drinking water helps flush out toxins from the body and increases the
                    feeling of fullness when consumed before meals.
                  </p>
                  <div className='p-4 rounded-lg bg-blue-50'>
                    <h3 className='mb-2 text-lg font-semibold text-blue-800'>
                      Water Drinking Tips:
                    </h3>
                    <ul className='pl-5 list-disc'>
                      <li>Drink 2 glasses of water every morning</li>
                      <li>Drink 1 glass of water 30 minutes before meals</li>
                      <li>Drink water every 20 minutes during physical exercise</li>
                      <li>Add lemon, cucumber, or mint to your water</li>
                    </ul>
                  </div>
                </section>

                {readMore && (
                  <>
                    <section id='uyqu' className='mb-8 scroll-mt-16'>
                      <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                        5. Pay Attention to Sleep Quality
                      </h2>
                      <p className='mb-4'>
                        Sufficient and quality sleep plays an important role in maintaining hormonal
                        balance and weight loss. Lack of sleep increases the hunger hormone ghrelin
                        and decreases the satiety hormone leptin.
                      </p>
                      <div className='p-4 rounded-lg bg-purple-50'>
                        <h3 className='mb-2 text-lg font-semibold text-purple-800'>
                          Tips for Better Sleep:
                        </h3>
                        <ul className='pl-5 list-disc'>
                          <li>Try to sleep and wake up at the same time every day</li>
                          <li>Stop using electronic devices 1 hour before bedtime</li>
                          <li>Reduce light and noise levels</li>
                          <li>Take a warm bath or do relaxation exercises before bed</li>
                        </ul>
                      </div>
                    </section>

                    <section id='stress' className='mb-8 scroll-mt-16'>
                      <h2 className='mb-4 text-2xl font-bold text-gray-800'>6. Manage Stress</h2>
                      <p className='mb-4'>
                        Increased levels of the stress hormone (cortisol) can lead to weight gain.
                        Reduce stress through meditation, yoga, or breathing exercises. Chronic
                        stress can lead to fat accumulation in the body, especially around the
                        abdomen.
                      </p>
                      <div className='p-4 rounded-lg bg-yellow-50'>
                        <h3 className='mb-2 text-lg font-semibold text-yellow-800'>
                          Ways to Reduce Stress:
                        </h3>
                        <ul className='pl-5 list-disc'>
                          <li>Meditate for 10 minutes daily</li>
                          <li>Engage in hobbies you enjoy</li>
                          <li>Spend more time in nature</li>
                          <li>Strengthen social connections</li>
                        </ul>
                      </div>
                    </section>

                    <section id='sekinlik' className='mb-8 scroll-mt-16'>
                      <h2 className='mb-4 text-2xl font-bold text-gray-800'>7. Eat Slowly</h2>
                      <p className='mb-4'>
                        Eating slowly and chewing food thoroughly gives a feeling of fullness faster
                        and prevents overeating. Eating slowly gives the body enough time to signal
                        fullness.
                      </p>
                      <div className='p-4 rounded-lg bg-pink-50'>
                        <h3 className='mb-2 text-lg font-semibold text-pink-800'>
                          Tips for Eating Slowly:
                        </h3>
                        <ul className='pl-5 list-disc'>
                          <li>Chew each bite at least 20 times</li>
                          <li>Put your fork down between each bite</li>
                          <li>Avoid watching TV or using your phone while eating</li>
                          <li>Pay attention to the taste and texture of your food</li>
                        </ul>
                      </div>
                    </section>

                    <section id='kundalik' className='mb-8 scroll-mt-16'>
                      <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                        8. Keep a Food Diary
                      </h2>
                      <p className='mb-4'>
                        Keep track of what you eat throughout the day. This helps identify and
                        correct bad habits. A food diary allows you to analyze your eating habits
                        and identify unnecessary calories.
                      </p>
                      <div className='p-4 rounded-lg bg-indigo-50'>
                        <h3 className='mb-2 text-lg font-semibold text-indigo-800'>
                          Tips for Keeping a Diary:
                        </h3>
                        <ul className='pl-5 list-disc'>
                          <li>Write down every meal and snack</li>
                          <li>Record portion sizes</li>
                          <li>Note your feelings during meals</li>
                          <li>Review and analyze your diary weekly</li>
                        </ul>
                      </div>
                    </section>

                    <section id='maqsad' className='mb-8 scroll-mt-16'>
                      <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                        9. Set Realistic Goals
                      </h2>
                      <p className='mb-4'>
                        Set small and achievable goals for weight loss. Each small achievement
                        boosts motivation. Setting unrealistic goals can lead to frustration and
                        quitting the program.
                      </p>
                      <div className='p-4 rounded-lg bg-red-50'>
                        <h3 className='mb-2 text-lg font-semibold text-red-800'>
                          Tips for Setting Goals:
                        </h3>
                        <ul className='pl-5 list-disc'>
                          <li>Aim to lose 0.5-1 kg per week</li>
                          <li>Celebrate small milestones</li>
                          <li>Set long-term and short-term goals</li>
                          <li>Review your results monthly</li>
                        </ul>
                      </div>
                    </section>

                    <section id='turmush-tarzi' className='mb-8 scroll-mt-16'>
                      <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                        10. Maintain a Healthy Lifestyle
                      </h2>
                      <p className='mb-4'>
                        Remember that weight loss is not a short-term process but a lifelong
                        journey. Incorporate healthy habits into your life. Make permanent changes
                        to avoid reverting to old habits after completing the weight loss program.
                      </p>
                      <div className='p-4 rounded-lg bg-teal-50'>
                        <h3 className='mb-2 text-lg font-semibold text-teal-800'>
                          Tips for Maintaining a Healthy Lifestyle:
                        </h3>
                        <ul className='pl-5 list-disc'>
                          <li>Make healthy eating and exercise a part of your life</li>
                          <li>Strive to be active every day</li>
                          <li>Find healthy foods you enjoy</li>
                          <li>Recover from setbacks and keep going</li>
                        </ul>
                      </div>
                    </section>
                  </>
                )}

                <div className='mt-6 text-center'>
                  <button
                    onClick={() => setReadMore(!readMore)}
                    className='inline-flex items-center px-4 py-2 text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700'
                  >
                    {readMore ? 'Show Less' : 'Read More'}
                    <svg
                      className={`w-4 h-4 ml-2 ${readMore ? 'rotate-180' : ''}`}
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>

                {/* Progress Tracking Section */}
                <div className='p-6 mt-8 mb-8 rounded-lg bg-gray-50'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    Track Your Weight Loss Progress
                  </h2>
                  <p className='mb-4'>
                    Below is a simple table to track your weight loss progress:
                  </p>
                  <div className='overflow-x-auto'>
                    <table className='min-w-full overflow-hidden bg-white rounded-lg'>
                      <thead className='text-white bg-green-600'>
                        <tr>
                          <th className='px-4 py-3 text-left'>Week</th>
                          <th className='px-4 py-3 text-left'>Weight (kg)</th>
                          <th className='px-4 py-3 text-left'>Waist (cm)</th>
                          <th className='px-4 py-3 text-left'>Fat Lost (kg)</th>
                        </tr>
                      </thead>
                      <tbody className='text-gray-700'>
                        {Array.from({ length: 8 }).map((_, index) => (
                          <tr
                            key={index}
                            className={index % 2 === 0 ? 'bg-green-50' : 'bg-green-100'}
                          >
                            <td className='px-4 py-3 border-b'>{index + 1}</td>
                            <td className='px-4 py-3 border-b'>
                              <input
                                type='text'
                                className='w-16 px-2 py-1 border rounded'
                                placeholder='kg'
                              />
                            </td>
                            <td className='px-4 py-3 border-b'>
                              <input
                                type='text'
                                className='w-16 px-2 py-1 border rounded'
                                placeholder='cm'
                              />
                            </td>
                            <td className='px-4 py-3 border-b'>
                              <input
                                type='text'
                                className='w-16 px-2 py-1 border rounded'
                                placeholder='kg'
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className='mt-4 text-sm text-gray-600'>
                    Record your measurements every week and track your progress.
                  </p>
                </div>

                {/* Final Tips */}
                <div className='p-6 mb-8 border-l-4 border-yellow-500 bg-yellow-50'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>Important Tips</h2>
                  <ul className='pl-5 space-y-2 list-disc'>
                    <li>Consider dieting as healthy eating rather than strict restrictions</li>
                    <li>Find a physical activity you enjoy</li>
                    <li>Weigh yourself at the same time every day and record the results</li>
                    <li>Do not compare yourself to others</li>
                    <li>Be patient - weight loss takes time</li>
                  </ul>
                </div>
              </div>

              {/* Article Footer */}
              <footer className='pt-6 mt-8 border-t border-gray-200'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                  <a
                    href='/maqolalar'
                    className='inline-flex items-center mb-4 font-medium text-green-600 hover:text-green-800 md:mb-0'
                  >
                    <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                    All Articles
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

export default VaznPage
