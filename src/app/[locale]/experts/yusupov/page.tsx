import Image from 'next/image'

const page = () => {
  return (
    <main className='max-w-4xl px-6 py-12 mx-auto'>
      {/* Header Section */}
      <section className='mb-10 text-center'>
        <div className='inline-block px-6 py-3 rounded-full shadow-sm bg-blue-50'>
          <h1 className='text-2xl font-bold text-gray-800 md:text-3xl'>Dr. Alisher Yusupov</h1>
          <p className='text-sm text-blue-600 md:text-base'>
            Sports Medicine Specialist — 8 Years of Experience
          </p>
        </div>
      </section>

      {/* Image Section */}
      <div className='flex justify-center mb-10'>
        <div className='relative w-40 h-40 overflow-hidden border-4 border-blue-100 rounded-full shadow-md md:w-48 md:h-48'>
          <Image
            src='/images/yusupov.png'
            alt='Dr. Alisher Yusupov'
            fill
            className='object-cover'
          />
        </div>
      </div>

      {/* Biography */}
      <section className='p-8 space-y-6 bg-white shadow-md rounded-2xl'>
        <p className='leading-relaxed text-gray-700'>
          <strong>Dr. Alisher Yusupov</strong> is a dedicated{' '}
          <span className='font-medium text-blue-600'>Sports Medicine Specialist</span> with a
          passion for optimizing human performance, injury prevention, and post-rehabilitation
          recovery. With over eight years of experience, he has worked extensively with both
          professional athletes and fitness enthusiasts, helping them build strength, endurance, and
          resilience.
        </p>

        <p className='leading-relaxed text-gray-700'>
          A graduate of the <strong>Uzbekistan State Physical Education University</strong>, Dr.
          Yusupov integrates medical science, exercise physiology, and individualized fitness
          programming to help clients achieve peak physical health. His practical and evidence-based
          approach bridges the gap between sports performance and long-term well-being.
        </p>

        <p className='leading-relaxed text-gray-700'>
          Dr. Yusupov also provides consultation on injury rehabilitation, movement correction, and
          preventive strategies for overuse injuries, ensuring sustainable athletic progress without
          compromising health.
        </p>

        {/* Expertise List */}
        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-800'>Areas of Expertise</h2>
          <ul className='space-y-1 text-gray-700 list-disc list-inside'>
            <li>Exercise Physiology</li>
            <li>Sports Medicine</li>
            <li>Fitness Training and Programming</li>
            <li>Rehabilitation and Injury Prevention</li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-800'>Education</h2>
          <p className='text-gray-700'>Uzbekistan State Physical Education University</p>
        </div>

        {/* Link */}
        <div className='pt-4'>
          <a
            href='https://vido.fitlife.uz/experts/yusupov'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block px-5 py-2 text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700'
          >
            Visit Profile
          </a>
        </div>
      </section>
    </main>
  )
}

export default page
