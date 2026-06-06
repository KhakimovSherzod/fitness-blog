import Image from 'next/image'

export const metadata = {
  title: 'The Link Between Stress and Weight: Psychological Approaches',
  description:
    'Scientific and psychological explanations about the link between stress and weight. A detailed guide on cortisol, emotional eating, and stress management techniques.',
  keywords: [
    'stress and weight',
    'psychological approach',
    'cortisol',
    'emotional eating',
    'stress management',
    'healthy life',
  ],
}

export default function Page() {
  ;<script
    type='application/ld+json'
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'The Link Between Stress and Weight: Psychological Approaches',
        image: [
          'https://media.istockphoto.com/id/1435831471/photo/portrait-of-senior-woman-lifting-weights-with-classmates-at-the-gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=twTAQzNFpLbRjxBXkAsM2-B5aOVlrbu8OTKVyBfARRQ=',
        ],
        author: {
          '@type': 'Person',
          name: 'Dr. Malika Rahimova',
        },
        publisher: {
          '@type': 'Organization',
          name: 'VIDO FitLife',
          logo: {
            '@type': 'ImageObject',
            url: 'https://vido.fitlife.uz/og-image.png',
          },
        },
        datePublished: '2025-09-08',
        description:
          'Scientific and psychological explanations about the link between stress and weight. A detailed guide on cortisol, emotional eating, and stress management techniques.',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://vido.fitlife.uz/maqolalar/psixologiya',
        },
      }),
    }}
  />
  return (
    <main className='min-h-screen py-8 bg-gradient-to-b from-purple-50 to-white'>
      <div className='container max-w-4xl px-4 mx-auto'>
        <article className='overflow-hidden bg-white shadow-xl rounded-2xl'>
          {/* Header Section */}
          <div className='p-8 pb-6'>
            <nav className='mb-6' aria-label='Breadcrumb'>
              <ol className='flex items-center space-x-2 text-sm text-gray-500'>
                <li>
                  <a href='/' className='hover:text-purple-600'>
                    Home
                  </a>
                </li>
                <li className='flex items-center'>
                  <span className='mx-2'>/</span>
                  <a href='/maqolalar' className='hover:text-purple-600'>
                    Articles
                  </a>
                </li>
                <li className='flex items-center'>
                  <span className='mx-2'>/</span>
                  <a href='/maqolalar/psixologiya' className='hover:text-purple-600'>
                    Psychology
                  </a>
                </li>
                <li className='flex items-center'>
                  <span className='mx-2'>/</span>
                  <span className='text-purple-600' aria-current='page'>
                    Stress and Weight
                  </span>
                </li>
              </ol>
            </nav>
            <span className='inline-block px-4 py-2 mb-4 text-sm font-medium text-purple-800 bg-purple-100 rounded-full'>
              Psychology & Health
            </span>
            <h1 className='mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl'>
              The Link Between Stress and Weight: Psychological Approaches
            </h1>
            <div className='flex flex-wrap items-center mb-6 text-sm text-gray-600'>
              <div className='flex items-center mb-2 mr-6'>
                <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>6 min read</span>
              </div>
              <div className='flex items-center mb-2 mr-6'>
                <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>1 month ago</span>
              </div>
              <div className='flex items-center mb-2'>
                <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-1.003-.21-1.96-.59-2.808A5 5 0 0010 11z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>Dr. Malika Rahimova</span>
              </div>
            </div>
          </div>
          {/* Featured Image */}
          <div className='relative w-full h-72 md:h-96'>
            <Image
              src='https://media.istockphoto.com/id/1435831471/photo/portrait-of-senior-woman-lifting-weights-with-classmates-at-the-gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=twTAQzNFpLbRjxBXkAsM2-B5aOVlrbu8OTKVyBfARRQ='
              alt='The link between stress and weight'
              fill
              className='object-cover'
              priority
            />
            <div className='absolute px-3 py-1 text-sm text-white bg-purple-600 rounded-full bottom-4 left-4'>
              Psychological research
            </div>
          </div>
          {/* Content Section */}
          <div className='p-8 pt-6'>
            <div className='prose prose-lg text-gray-800 max-w-none'>
              <p className='mb-8 text-xl font-medium text-gray-700 lead'>
                The link between stress and weight includes not only physiological but also
                psychological aspects. Learn in detail about the secrets of weight loss through
                stress management and psychological approaches.
              </p>
              <div className='p-6 mb-8 border-l-4 border-purple-500 bg-purple-50 rounded-xl'>
                <h3 className='mb-2 text-lg font-bold text-purple-800'>Article Summary</h3>
                <ul className='pl-5 text-purple-700 list-disc'>
                  <li>The effect of stress and the hormone cortisol</li>
                  <li>Emotional eating and its consequences</li>
                  <li>Effective stress management techniques</li>
                  <li>Healthy psychological approaches</li>
                  <li>Practical tips and recommendations</li>
                </ul>
              </div>
              <h2 className='pb-2 mt-10 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200'>
                1. Stress and Cortisol: Scientific Foundations
              </h2>
              <p>
                During stress, the hormone cortisol increases in the body, leading to fat
                accumulation and weight gain. Cortisol is a stress hormone produced by the adrenal
                glands, which raises blood sugar, suppresses the immune system, and helps store fat,
                especially around the abdomen.
              </p>
              <div className='p-5 my-6 bg-gray-100 rounded-xl'>
                <h4 className='mb-3 font-bold text-gray-800'>Effects of Cortisol on the Body:</h4>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div className='flex items-start'>
                    <div className='flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-purple-600 rounded-full'></div>
                    <span>Raises blood sugar levels</span>
                  </div>
                  <div className='flex items-start'>
                    <div className='flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-purple-600 rounded-full'></div>
                    <span>Leads to an increase in fat cells</span>
                  </div>
                  <div className='flex items-start'>
                    <div className='flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-purple-600 rounded-full'></div>
                    <span>Increases appetite and hunger</span>
                  </div>
                  <div className='flex items-start'>
                    <div className='flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-purple-600 rounded-full'></div>
                    <span>Slows down metabolism</span>
                  </div>
                </div>
              </div>
              <h2 className='pb-2 mt-10 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200'>
                2. Emotional Eating: Causes and Consequences
              </h2>
              <p>
                Many people tend to eat emotionally during stress, which leads to excessive calorie
                intake. Emotional eating is not true hunger, but eating in response to emotions.
              </p>
              <div className='grid grid-cols-1 gap-6 my-8 md:grid-cols-2'>
                <div className='p-5 border border-red-200 bg-red-50 rounded-xl'>
                  <h4 className='flex items-center mb-3 font-bold text-red-800'>
                    <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Signs of Emotional Eating
                  </h4>
                  <ul className='pl-5 space-y-2 text-red-700 list-disc'>
                    <li>Sudden feeling of "hunger"</li>
                    <li>Craving for a specific food (sweets, soup)</li>
                    <li>Desire to eat even after being full</li>
                    <li>Feeling guilty after eating</li>
                  </ul>
                </div>
                <div className='p-5 border border-blue-200 bg-blue-50 rounded-xl'>
                  <h4 className='flex items-center mb-3 font-bold text-blue-800'>
                    <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Signs of Physical Hunger
                  </h4>
                  <ul className='pl-5 space-y-2 text-blue-700 list-disc'>
                    <li>Gradual onset of hunger</li>
                    <li>Desire for any food</li>
                    <li>Feeling full after eating</li>
                    <li>Feeling satisfied after eating</li>
                  </ul>
                </div>
              </div>
              <h2 className='pb-2 mt-10 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200'>
                3. Stress Management Techniques
              </h2>
              <p>
                Managing stress is an important part of weight management. Below are effective
                techniques to help reduce stress:
              </p>
              <div className='grid grid-cols-1 gap-4 my-8 md:grid-cols-3'>
                <div className='p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm'>
                  <div className='flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-purple-100 rounded-full'>
                    <span className='text-2xl'>🧘</span>
                  </div>
                  <h5 className='font-bold'>Meditation and Breathing Exercises</h5>
                  <p className='mt-2 text-sm text-gray-600'>
                    10-15 minutes of meditation per day significantly reduces stress levels
                  </p>
                </div>
                <div className='p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm'>
                  <div className='flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-green-100 rounded-full'>
                    <span className='text-2xl'>🚶</span>
                  </div>
                  <h5 className='font-bold'>Physical Activity</h5>
                  <p className='mt-2 text-sm text-gray-600'>
                    30 minutes of walking or other physical exercise daily helps release endorphins
                  </p>
                </div>
                <div className='p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm'>
                  <div className='flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full'>
                    <span className='text-2xl'>😴</span>
                  </div>
                  <h5 className='font-bold'>Good Sleep</h5>
                  <p className='mt-2 text-sm text-gray-600'>
                    7-9 hours of quality sleep at night regulates stress hormones
                  </p>
                </div>
              </div>
              <h2 className='pb-2 mt-10 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200'>
                4. Healthy Psychological Approaches
              </h2>
              <p>
                Understanding and managing your emotions helps reduce stress and maintain a healthy
                lifestyle. Below are some useful psychological methods:
              </p>
              <div className='p-5 my-6 border border-yellow-200 bg-yellow-50 rounded-xl'>
                <h4 className='mb-3 font-bold text-yellow-800'>
                  Cognitive-Behavioral Therapy Techniques:
                </h4>
                <ul className='pl-6 space-y-2 list-disc'>
                  <li>
                    <strong>Self-monitoring:</strong> Write down eating habits and the emotions that
                    trigger them
                  </li>
                  <li>
                    <strong>Identifying problematic thoughts:</strong> Recognize rigid thoughts like
                    "I must eat light food"
                  </li>
                  <li>
                    <strong>Restructuring thoughts:</strong> Replace negative thoughts with
                    scientifically based positive ones
                  </li>
                  <li>
                    <strong>Stress management strategies:</strong> Engage in other activities
                    instead of eating
                  </li>
                </ul>
              </div>
              <h2 className='pb-2 mt-10 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200'>
                5. Practical Tips and Recommendations
              </h2>
              <div className='p-6 my-6 bg-gray-50 rounded-xl'>
                <h3 className='mb-4 text-xl font-bold text-gray-800'>
                  Managing Eating in Stressful Situations
                </h3>
                <div className='overflow-x-auto'>
                  <table className='min-w-full overflow-hidden bg-white rounded-lg'>
                    <thead className='bg-gray-200'>
                      <tr>
                        <th className='px-4 py-3 text-left'>Situation</th>
                        <th className='px-4 py-3 text-left'>Problem</th>
                        <th className='px-4 py-3 text-left'>Solution</th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                      <tr>
                        <td className='px-4 py-3 font-medium'>Work stress</td>
                        <td className='px-4 py-3'>Eating sweets at the office</td>
                        <td className='px-4 py-3'>Prepare healthy snacks at your desk</td>
                      </tr>
                      <tr className='bg-gray-50'>
                        <td className='px-4 py-3 font-medium'>Boredom at home</td>
                        <td className='px-4 py-3'>Eating out of boredom</td>
                        <td className='px-4 py-3'>Find interesting activities</td>
                      </tr>
                      <tr>
                        <td className='px-4 py-3 font-medium'>Evening stress</td>
                        <td className='px-4 py-3'>Overeating after dinner</td>
                        <td className='px-4 py-3'>Drink tea or warm water</td>
                      </tr>
                      <tr className='bg-gray-50'>
                        <td className='px-4 py-3 font-medium'>Emotional tension</td>
                        <td className='px-4 py-3'>Eating when angry or sad</td>
                        <td className='px-4 py-3'>Light exercise or walking</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='p-6 my-8 text-white bg-purple-600 rounded-xl'>
                <h3 className='mb-3 text-xl font-bold'>Conclusion</h3>
                <p>
                  The link between stress and weight is complex and multifaceted. Managing stress is
                  important not only for mental health but also for physical health. By reducing
                  stress, eating right, and maintaining regular physical activity, you can not only
                  manage your weight but also improve your overall health. Most importantly,
                  remember to be kind and patient with yourself – this is the key to long-term
                  success.
                </p>
              </div>
              <div className='flex items-center justify-between pt-6 mt-12 border-t border-gray-200'>
                <a
                  href='/maqolalar'
                  className='inline-flex items-center font-medium text-purple-600 hover:text-purple-800'
                >
                  <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Back to all articles
                </a>
                <div className='flex space-x-4'>
                  <button
                    className='text-gray-500 hover:text-purple-600'
                    aria-label='Share on Facebook'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0-3.866-3.582-7-8-7s-8 3.134-8 7 3.582 7 8 7 8-3.134 8-7zm-5 4a1 1 0 11-2 0 1 1 0 012 0zm-1-4a1 1 0 11-2 0 1 1 0 012 0zm-1-4a1 1 0 11-2 0 1 1 0 012 0z' />
                    </svg>
                  </button>
                  <button
                    className='text-gray-500 hover:text-purple-600'
                    aria-label='Share on Twitter'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0-3.866-3.582-7-8-7s-8 3.134-8 7 3.582 7 8 7 8-3.134 8-7zm-5 4a1 1 0 11-2 0 1 1 0 012 0zm-1-4a1 1 0 11-2 0 1 1 0 012 0zm-1-4a1 1 0 11-2 0 1 1 0 012 0z' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
