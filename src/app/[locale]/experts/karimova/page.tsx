import Image from 'next/image'

const page = () => {
  return (
    <main className='max-w-4xl px-6 py-12 mx-auto'>
      {/* Header Section */}
      <section className='mb-10 text-center'>
        <div className='inline-block px-6 py-3 rounded-full shadow-sm bg-blue-50'>
          <h1 className='text-2xl font-bold text-gray-800 md:text-3xl'>Dr. Nilufar Karimova</h1>
          <p className='text-sm text-blue-600 md:text-base'>
            Dietitian and Endocrinologist — 12 Years of Experience
          </p>
        </div>
      </section>

      {/* Image Section */}
      <div className='flex justify-center mb-10'>
        <div className='relative w-40 h-40 overflow-hidden border-4 border-blue-100 rounded-full shadow-md md:w-48 md:h-48'>
          <Image
            src='/images/karimova.png'
            alt='Dr. Nilufar Karimova'
            fill
            className='object-cover'
          />
        </div>
      </div>

      {/* Biography */}
      <section className='p-8 space-y-6 bg-white shadow-md rounded-2xl'>
        <p className='leading-relaxed text-gray-700'>
          <strong>Dr. Nilufar Karimova</strong> is a leading expert in{' '}
          <span className='font-medium text-blue-600'>
            clinical nutrition, weight management, and metabolic health
          </span>
          . A graduate of the <strong>Tashkent Medical Academy</strong>, she has dedicated over a
          decade to helping patients achieve lasting health improvements through evidence-based
          dietary and lifestyle interventions.
        </p>

        <p className='leading-relaxed text-gray-700'>
          Her approach combines <strong>medical expertise</strong> with{' '}
          <strong>personalized nutrition plans</strong>, ensuring sustainable results for those
          managing diabetes, obesity, thyroid disorders, and hormonal imbalances. Dr. Karimova
          regularly conducts wellness seminars and contributes to health education initiatives
          promoting preventive care and balanced nutrition.
        </p>

        {/* Expertise List */}
        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-800'>Areas of Expertise</h2>
          <ul className='space-y-1 text-gray-700 list-disc list-inside'>
            <li>Clinical Nutrition and Diet Therapy</li>
            <li>Endocrine and Metabolic Disorders</li>
            <li>Weight Management Strategies</li>
            <li>Lifestyle Medicine and Preventive Health</li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h2 className='mb-2 text-xl font-semibold text-gray-800'>Education</h2>
          <p className='text-gray-700'>Tashkent Medical Academy</p>
        </div>
      </section>
    </main>
  )
}

export default page
