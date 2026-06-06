import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Latest Articles | Healthy Life and Fitness Blog',
  description:
    'The latest articles on boosting metabolism, benefits of drinking water, cardio, diet, sleep, and psychology. A useful guide to starting a healthy lifestyle.',
  keywords: [
    'healthy life',
    'articles',
    'fitness articles',
    'metabolism',
    'drinking water',
    'cardio',
    'diet',
    'sleep',
    'psychology',
    'healthy lifestyle',
  ],
}

const articles = [
  {
    href: '/maqolalar/metabolism',
    img: 'https://media.istockphoto.com/id/2164781181/photo/microbiologist-analysis-and-testing.webp?a=1&b=1&s=612x612&w=0&k=20&c=uC1K2khWbJ85jZ94MbrF2bXZS03d3oqHrjzdIy6hrBE=',
    alt: 'Boosting metabolism',
    tag: 'Metabolism',
    tagColor: 'text-secondary',
    title: 'How to Boost Your Metabolism Naturally',
    desc: 'Ways to increase metabolism and burn calories efficiently...',
    date: '3 days ago',
    col: 0,
  },
  {
    href: '/maqolalar/soglomlik',
    img: 'https://images.unsplash.com/photo-1624948465027-6f9b51067557?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2xhc3MlMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Importance of water',
    tag: 'Wellness',
    tagColor: 'text-primary',
    title: 'The Importance of Drinking Water for Weight Loss',
    desc: 'How daily water intake affects weight loss...',
    date: '1 week ago',
    col: 0,
  },
  {
    href: '/maqolalar/kardio',
    img: 'https://media.istockphoto.com/id/1411330430/photo/group-of-fit-people-working-out-in-a-exercising-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=i7Sez7F4Kyd5LlMgTbGsF47gm6HpuNxuXs1DEsXUN5k=',
    alt: 'Cardio workouts',
    tag: 'Cardio',
    tagColor: 'text-accent',
    title: 'The Most Effective Cardio Workouts',
    desc: 'Strengthen your cardiovascular system and burn calories...',
    date: '2 weeks ago',
    col: 0,
  },
  {
    href: '/maqolalar/dieta',
    img: 'https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlldGF8ZW58MHx8MHx8fDA%3D',
    alt: 'Balanced nutrition',
    tag: 'Diet',
    tagColor: 'text-secondary',
    title: 'Balanced Nutrition: Key Principles',
    desc: 'Secrets to consuming macronutrients in the right proportions...',
    date: '3 weeks ago',
    col: 1,
  },
  {
    href: '/maqolalar/soglom-uyqu',
    img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2xlZXB8ZW58MHx8MHx8fDA%3',
    alt: 'Importance of sleep',
    tag: 'Sleep',
    tagColor: 'text-purple-600',
    title: 'How Sleep Affects Weight Loss',
    desc: 'How good sleep helps with weight loss...',
    date: '1 month ago',
    col: 1,
  },
  {
    href: '/maqolalar/psixologiya',
    img: 'https://media.istockphoto.com/id/1254659109/photo/sad-teenager-girl-with-scales-on-floor.webp?a=1&b=1&s=612x612&w=0&k=20&c=dWhFhYiGZbEQKrbla1sYnWc3ZlG1Yfjydi1bGSvkBx0=',
    alt: 'Stress management',
    tag: 'Psychology',
    tagColor: 'text-primary',
    title: 'The Link Between Stress and Weight',
    desc: 'Secrets to losing weight by managing stress...',
    date: '1 month ago',
    col: 1,
  },
]

export default function MaqolalarPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Latest Articles | Healthy Life and Fitness Blog',
    url: 'https://vido.fitlife.uz/maqolalar',
    description:
      'The latest articles on boosting metabolism, benefits of drinking water, cardio, diet, sleep, and psychology. A useful guide to starting a healthy lifestyle.',
    publisher: {
      '@type': 'Organization',
      name: 'VIDO FitLife',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vido.fitlife.uz/og-image.png',
      },
    },
    blogPost: [
      {
        '@type': 'BlogPosting',
        headline: 'How to Boost Your Metabolism Naturally',
        image:
          'https://media.istockphoto.com/id/2164781181/photo/microbiologist-analysis-and-testing.webp?a=1&b=1&s=612x612&w=0&k=20&c=uC1K2khWbJ85jZ94MbrF2bXZS03d3oqHrjzdIy6hrBE=',
        url: 'https://vido.fitlife.uz/maqolalar/metabolism',
        description: 'Ways to increase metabolism and burn calories efficiently...',
        datePublished: '2025-10-05',
      },
      {
        '@type': 'BlogPosting',
        headline: 'The Importance of Drinking Water for Weight Loss',
        image:
          'https://images.unsplash.com/photo-1624948465027-6f9b51067557?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2xhc3MlMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D',
        url: 'https://vido.fitlife.uz/maqolalar/soglomlik',
        description: 'How daily water intake affects weight loss...',
        datePublished: '2025-10-01',
      },
      {
        '@type': 'BlogPosting',
        headline: 'The Most Effective Cardio Workouts',
        image:
          'https://media.istockphoto.com/id/1411330430/photo/group-of-fit-people-working-out-in-a-exercising-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=i7Sez7F4Kyd5LlMgTbGsF47gm6HpuNxuXs1DEsXUN5k=',
        url: 'https://vido.fitlife.uz/maqolalar/kardio',
        description: 'Strengthen your cardiovascular system and burn calories...',
        datePublished: '2025-09-24',
      },
      {
        '@type': 'BlogPosting',
        headline: 'Balanced Nutrition: Key Principles',
        image:
          'https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlldGF8ZW58MHx8MHx8fDA%3D',
        url: 'https://vido.fitlife.uz/maqolalar/dieta',
        description: 'Secrets to consuming macronutrients in the right proportions...',
        datePublished: '2025-09-17',
      },
      {
        '@type': 'BlogPosting',
        headline: 'How Sleep Affects Weight Loss',
        image:
          'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2xlZXB8ZW58MHx8MHx8fDA%3',
        url: 'https://vido.fitlife.uz/maqolalar/soglom-uyqu',
        description: 'How good sleep helps with weight loss...',
        datePublished: '2025-09-08',
      },
      {
        '@type': 'BlogPosting',
        headline: 'The Link Between Stress and Weight',
        image:
          'https://media.istockphoto.com/id/1254659109/photo/sad-teenager-girl-with-scales-on-floor.webp?a=1&b=1&s=612x612&w=0&k=20&c=dWhFhYiGZbEQKrbla1sYnWc3ZlG1Yfjydi1bGSvkBx0=',
        url: 'https://vido.fitlife.uz/maqolalar/psixologiya',
        description: 'Secrets to losing weight by managing stress...',
        datePublished: '2025-09-08',
      },
    ],
  }
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section id='maqolalar' className='py-16 bg-white'>
        <div className='container px-4 mx-auto'>
          <h2 className='mb-12 text-3xl font-bold text-center font-heading'>Latest Articles</h2>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
            {[0, 1].map(col => (
              <div className='space-y-8' key={col}>
                {articles
                  .filter(a => a.col === col)
                  .map((a, i) => (
                    <Link href={a.href} key={a.href}>
                      <article className='flex flex-col gap-6 md:flex-row'>
                        <img
                          src={a.img}
                          alt={a.alt}
                          className='object-cover w-full h-40 rounded-lg md:w-48'
                          loading='lazy'
                        />
                        <div>
                          <span className={`text-sm font-medium ${a.tagColor}`}>{a.tag}</span>
                          <h3 className='my-2 text-xl font-bold font-heading'>{a.title}</h3>
                          <p className='mb-3 text-gray-600'>{a.desc}</p>
                          <span className='text-sm text-gray-500'>{a.date}</span>
                        </div>
                      </article>
                      <br />
                    </Link>
                  ))}
              </div>
            ))}
          </div>
          <div className='grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3'>
            <article className='overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg'>
              <img
                src='https://media.istockphoto.com/id/1124441333/photo/fresh-healthy-green-food-on-plate-with-wight-healthy-food-concept-copy-space-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Uh_Lf5cmhLuPJufM-RY0ayybzgQua73p-Foag-STMHU='
                alt='10 secrets to weight loss'
                className='object-cover w-full h-48'
                loading='lazy'
              />
              <div className='p-6'>
                <span className='text-sm font-medium text-secondary'>Weight Loss</span>
                <h3 className='my-3 text-xl font-bold font-heading'>
                  10 Scientifically Proven Ways to Lose Weight
                </h3>
                <p className='mb-4 text-gray-600'>
                  The most effective weight loss methods based on scientific research...
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>5 min read</span>
                  <Link
                    href='/maqolalar/vazn-yoqotish'
                    className='font-medium text-primary hover:text-blue-700'
                  >
                    Continue Reading →
                  </Link>
                </div>
              </div>
            </article>
            <article className='overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg'>
              <Image
                src='https://media.istockphoto.com/id/1133734645/photo/traditional-uzbek-oriental-cuisine-uzbek-family-table-from-different-dishes-in-national.webp?a=1&b=1&s=612x612&w=0&k=20&c=OslDrIjnBHRq418R9AYEFLsCdyn54sSWl1eCKhObHJg='
                alt='Uzbek dishes'
                className='object-cover w-full h-48'
                loading='lazy'
                width={400}
                height={300}
              />
              <div className='p-6'>
                <span className='text-sm font-medium text-secondary'>Nutrition</span>
                <h3 className='my-3 text-xl font-bold font-heading'>
                  How to Make Uzbek Dishes Healthier
                </h3>
                <p className='mb-4 text-gray-600'>
                  How to make your favorite national dishes healthier...
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>7 min read</span>
                  <Link
                    href='/maqolalar/togri-ovqatlanish'
                    className='font-medium text-primary hover:text-blue-700'
                  >
                    Continue Reading →
                  </Link>
                </div>
              </div>
            </article>
            <article className='overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg'>
              <Image
                src='https://images.unsplash.com/photo-1592334628151-36869c12ad0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGh5c2ljYWwlMjBleGVyY2lzZXN8ZW58MHx8MHx8fDA%3D'
                alt='Home workout'
                className='object-cover w-full h-48'
                loading='lazy'
                width={400}
                height={300}
              />
              <div className='p-6'>
                <span className='text-sm font-medium text-secondary'>Workouts</span>
                <h3 className='my-3 text-xl font-bold font-heading'>
                  Effective Home Workout Plan: No Equipment
                </h3>
                <p className='mb-4 text-gray-600'>
                  Exercises you can do at home without any special equipment...
                </p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>6 min read</span>
                  <Link
                    href='/mashqlar'
                    className='font-medium text-primary hover:text-blue-700'
                  >
                    Continue Reading →
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
