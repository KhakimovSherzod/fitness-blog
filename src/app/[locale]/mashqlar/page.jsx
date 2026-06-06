export const metadata = {
  title: 'Exercise and Physical Activity Guide | Healthy Life',
  description:
    'The best exercises for a healthy lifestyle and effective weight loss: walking, running, strength training, HIIT, and stretching. Exercise schedule and useful tips.',
  keywords: [
    'exercise',
    'physical activity',
    'fitness',
    'weight loss',
    'walking',
    'running',
    'strength training',
    'HIIT',
    'stretching',
    'healthy lifestyle',
  ],
}

export default function MashqlarPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'Exercise and Physical Activity Guide',
            description:
              'The best exercises for a healthy lifestyle and effective weight loss: walking, running, strength training, HIIT, and stretching. Exercise schedule and useful tips.',
            keywords: [
              'exercise',
              'physical activity',
              'fitness',
              'weight loss',
              'walking',
              'running',
              'strength training',
              'HIIT',
              'stretching',
              'healthy lifestyle',
            ],
            author: {
              '@type': 'Organization',
              name: 'VIDO FitLife',
            },
            publisher: {
              '@type': 'Organization',
              name: 'VIDO FitLife',
              logo: {
                '@type': 'ImageObject',
                url: 'https://vido.fitlife.uz/og-image.png',
              },
            },
            datePublished: '2025-10-08',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://vido.fitlife.uz/mashqlar',
            },
          }),
        }}
      />
      <main className='max-w-6xl px-4 py-8 mx-auto'>
        <header className='mb-12 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-gray-800'>
            Exercise and Physical Activity Guide
          </h1>
          <p className='text-xl text-gray-600'>
            The best exercises for a healthy lifestyle and effective weight loss
          </p>
        </header>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {/* Main content */}
          <div className='md:col-span-2'>
            <section className='space-y-12'>
              <article className='overflow-hidden bg-white shadow-md rounded-xl'>
                <div className='md:flex'>
                  <div className='md:flex-shrink-0 md:w-48'>
                    <img
                      className='object-cover w-full h-48 md:w-48 md:h-full'
                      src='https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                      alt='Walking and Running'
                    />
                  </div>
                  <div className='p-6'>
                    <h2 className='mb-3 text-2xl font-bold text-gray-800'>Walking and Running</h2>
                    <p className='mb-4 text-gray-600'>
                      Walking and running improve cardiovascular health, burn calories, and help
                      with weight loss. It is recommended to walk at a moderate pace for at least
                      150 minutes or run for 75 minutes per week.
                    </p>
                    <ul className='pl-5 space-y-2 text-gray-700 list-disc'>
                      <li>Walk or run for 30 minutes every day</li>
                      <li>Exercise outdoors or on a treadmill</li>
                      <li>Start and finish with light warm-up and cool-down exercises</li>
                    </ul>
                  </div>
                </div>
              </article>

              <article className='overflow-hidden bg-white shadow-md rounded-xl'>
                <div className='md:flex md:flex-row-reverse'>
                  <div className='md:flex-shrink-0 md:w-48'>
                    <img
                      className='object-cover w-full h-48 md:w-48 md:h-full'
                      src='https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                      alt='Strength Training'
                    />
                  </div>
                  <div className='p-6'>
                    <h2 className='mb-3 text-2xl font-bold text-gray-800'>Strength Training</h2>
                    <p className='mb-4 text-gray-600'>
                      Strength training builds muscle, boosts metabolism, and helps burn fat. It is
                      recommended to do strength training 2-3 times a week.
                    </p>
                    <ul className='pl-5 space-y-2 text-gray-700 list-disc'>
                      <li>Squats</li>
                      <li>Push-ups</li>
                      <li>Plank</li>
                      <li>Lunges</li>
                      <li>Exercise with light weights</li>
                    </ul>
                  </div>
                </div>
              </article>

              <article className='overflow-hidden bg-white shadow-md rounded-xl'>
                <div className='md:flex'>
                  <div className='md:flex-shrink-0 md:w-48'>
                    <img
                      className='object-cover w-full h-48 md:w-48 md:h-full'
                      src='https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                      alt='HIIT Workouts'
                    />
                  </div>
                  <div className='p-6'>
                    <h2 className='mb-3 text-2xl font-bold text-gray-800'>
                      HIIT (High-Intensity Interval Training)
                    </h2>
                    <p className='mb-4 text-gray-600'>
                      HIIT burns a lot of calories in a short time and improves heart health. It
                      consists of intense exercises and short rest intervals for 20-30 minutes.
                    </p>
                    <ul className='pl-5 space-y-2 text-gray-700 list-disc'>
                      <li>30 seconds running, 30 seconds rest (repeat 8-10 times)</li>
                      <li>Exercises like burpees, squat jumps, mountain climbers</li>
                    </ul>
                  </div>
                </div>
              </article>

              <article className='overflow-hidden bg-white shadow-md rounded-xl'>
                <div className='md:flex md:flex-row-reverse'>
                  <div className='md:flex-shrink-0 md:w-48'>
                    <img
                      className='object-cover w-full h-48 md:w-48 md:h-full'
                      src='https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                      alt='Stretching Exercises'
                    />
                  </div>
                  <div className='p-6'>
                    <h2 className='mb-3 text-2xl font-bold text-gray-800'>
                      Stretching and Flexibility Exercises
                    </h2>
                    <p className='mb-4 text-gray-600'>
                      Stretching relaxes muscles, prevents injuries, and increases range of motion.
                      It is beneficial to do stretching every day or after each workout.
                    </p>
                    <ul className='pl-5 space-y-2 text-gray-700 list-disc'>
                      <li>Yoga or Pilates exercises</li>
                      <li>Static stretching (hold each stretch for 20-30 seconds)</li>
                      <li>Dynamic stretching (stretching with movement)</li>
                    </ul>
                  </div>
                </div>
              </article>
            </section>
          </div>

          {/* Sidebar */}
          <div className='space-y-8'>
            <div className='p-6 shadow-md bg-blue-50 rounded-xl'>
              <h2 className='mb-4 text-xl font-bold text-gray-800'>Increase Daily Activity</h2>
              <p className='mb-4 text-gray-600'>
                Moving more in daily life is also important for health. Small changes make a big
                difference.
              </p>
              <ul className='pl-5 space-y-2 text-gray-700 list-disc'>
                <li>Use stairs instead of the elevator</li>
                <li>Get off the bus one stop early and walk</li>
                <li>Move for 5 minutes every hour</li>
                <li>Be active with housework</li>
              </ul>
            </div>

            <div className='p-6 shadow-md bg-green-50 rounded-xl'>
              <h2 className='mb-4 text-xl font-bold text-gray-800'>
                Tips for Weight Loss Exercises
              </h2>
              <ul className='pl-5 space-y-2 text-gray-700 list-disc'>
                <li>Consistency is key: exercise at least 3-5 times a week</li>
                <li>Exercise along with proper nutrition</li>
                <li>Set a specific goal and achieve it</li>
                <li>Exercising with friends increases motivation</li>
                <li>Listen to your body and don’t overdo it</li>
              </ul>
            </div>

            <div className='p-6 shadow-md bg-yellow-50 rounded-xl'>
              <h2 className='mb-4 text-xl font-bold text-gray-800'>Home Workouts</h2>
              <ul className='pl-5 space-y-2 text-gray-700 list-disc'>
                <li>Jumping jack</li>
                <li>Push-up</li>
                <li>Squat</li>
                <li>Plank</li>
                <li>Step-up (using stairs)</li>
              </ul>
            </div>

            <div className='p-6 shadow-md bg-purple-50 rounded-xl'>
              <h2 className='mb-4 text-xl font-bold text-gray-800'>Staying Motivated</h2>
              <ul className='pl-5 space-y-2 text-gray-700 list-disc'>
                <li>Create a workout schedule and stick to it</li>
                <li>Track your results</li>
                <li>Reward yourself</li>
                <li>Try different exercises, don’t get bored</li>
              </ul>
            </div>
          </div>
        </div>

        <section className='p-8 mt-12 shadow-md bg-gray-50 rounded-xl'>
          <h2 className='mb-6 text-2xl font-bold text-center text-gray-800'>
            Sample Workout Schedule
          </h2>
          <div className='overflow-x-auto'>
            <table className='min-w-full overflow-hidden bg-white rounded-lg'>
              <thead className='bg-gray-200'>
                <tr>
                  <th className='px-4 py-3 text-left'>Day</th>
                  <th className='px-4 py-3 text-left'>Type of Exercise</th>
                  <th className='px-4 py-3 text-left'>Duration</th>
                  <th className='px-4 py-3 text-left'>Benefits</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                <tr>
                  <td className='px-4 py-3'>Monday</td>
                  <td className='px-4 py-3'>Cardio (Running/Walking)</td>
                  <td className='px-4 py-3'>30 minutes</td>
                  <td className='px-4 py-3'>Heart health, calorie burning</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='px-4 py-3'>Wednesday</td>
                  <td className='px-4 py-3'>Strength training</td>
                  <td className='px-4 py-3'>45 minutes</td>
                  <td className='px-4 py-3'>Muscle building, metabolism boost</td>
                </tr>
                <tr>
                  <td className='px-4 py-3'>Friday</td>
                  <td className='px-4 py-3'>HIIT</td>
                  <td className='px-4 py-3'>20 minutes</td>
                  <td className='px-4 py-3'>Burning lots of calories in a short time</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='px-4 py-3'>Sunday</td>
                  <td className='px-4 py-3'>Yoga/Stretching</td>
                  <td className='px-4 py-3'>40 minutes</td>
                  <td className='px-4 py-3'>Flexibility, stress reduction</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  )
}
