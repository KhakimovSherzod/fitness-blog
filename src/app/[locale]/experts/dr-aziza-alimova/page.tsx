import Head from 'next/head'
import Image from 'next/image'

export default function MedicalReviewerPage() {
  const drAzizaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://vido-fitlife.uz/experts/dr-aziza-alimova',
    name: 'Dr. Aziza Alimova',
    jobTitle: 'Endocrinologist & Metabolism Specialist',
    description:
      'Board-certified endocrinologist with 15 years of experience specializing in metabolic health, hormone balance, and sustainable lifestyle medicine.',
    url: 'https://vido-fitlife.uz/experts/dr-aziza-alimova',
    image: 'https://vido-fitlife.uz/images/experts/dr-aziza-alimova.jpg',
    worksFor: {
      '@type': 'MedicalOrganization',
      name: 'VIDO FitLife Medical Advisory Board',
    },
    sameAs: ['https://www.linkedin.com/in/aziza-alimova', 'https://vido-fitlife.uz'],
    knowsAbout: [
      'Metabolic Health',
      'Endocrinology',
      'Nutrition',
      'Lifestyle Medicine',
      'Diabetes Prevention',
    ],
  }

  return (
    <>
      <Head>
        <title>Medical Review by Dr. Aziza Alimova | VIDO FitLife</title>
        <meta
          name='description'
          content='Medical review and expert insights by Dr. Aziza Alimova, Endocrinologist & Metabolism Specialist with 15 years of experience.'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(drAzizaJsonLd) }}
        />
      </Head>

      <main className='max-w-4xl px-6 py-12 mx-auto'>
        <section className='p-8 bg-white shadow-xl rounded-2xl'>
          <div className='flex flex-col items-center md:flex-row md:items-start'>
            <Image
              src='/images/dr-aziza-alimova.png'
              alt='Dr. Aziza Alimova, Endocrinologist and Metabolism Specialist'
              className='object-cover w-48 h-48 mb-6 rounded-full md:mr-8 md:mb-0'
              priority
              width={200}
              height={200}
            />

            <div>
              <h1 className='text-2xl font-bold text-gray-900'>
                Medical Review by Dr. Aziza Alimova
              </h1>
              <p className='mt-2 text-gray-600'>
                <strong>Endocrinologist & Metabolism Specialist</strong> — 15 years of clinical
                experience
              </p>

              <p className='mt-4 text-gray-700'>
                Dr. Aziza Alimova is a board-certified endocrinologist specializing in metabolic
                health, hormone balance, and lifestyle-related disorders. With over 15 years of
                clinical practice, she has guided thousands of patients toward better health through
                evidence-based nutrition, exercise, and sustainable habits.
              </p>

              <blockquote className='pl-4 mt-6 italic text-gray-800 border-l-4 border-blue-400'>
                “In my practice, I&apos;ve helped thousands of patients improve their metabolic
                health. The key isn&apos;t quick fixes but sustainable lifestyle changes. This guide
                combines scientific evidence with practical strategies that actually work in real
                life.”
              </blockquote>

              <p className='mt-6 text-gray-700'>
                Dr. Alimova regularly contributes to public health education initiatives and
                clinical research on metabolic syndrome, diabetes prevention, and weight management.
                She&apos;s known for her compassionate, realistic approach to patient care and
                commitment to scientific integrity.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
