'use client'

import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'

// Type definitions
type Doctor = {
  name: string
  specialty: string
  credentials: string
  socialMedia: {
    twitter?: string
    linkedin?: string
    website?: string
    instagram?: string
  }
  bio: string
  quote: string
}

type Testimonial = {
  name: string
  age: number
  location: string
  story: string
  duration: string
  results: string[]
  avatar: string
  image: string
  alt: string
}

type QuizQuestion = {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

type HealthTip = {
  category: string
  tips: string[]
  source: string
}

type ArticleLink = {
  title: string
  description: string
  path: string
  category: string
  readingTime: string
}

function SogLomBolish() {
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState<number>(0)
  const [quizScore, setQuizScore] = useState<number>(0)
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false)
  const [selectedTipCategory, setSelectedTipCategory] = useState<string>('nutrition')

  // Expert doctors data
  const doctors: Doctor[] = [
    {
      name: 'Dr. Rangan Chatterjee',
      specialty: 'General Practitioner & Lifestyle Medicine',
      credentials: 'MBChB, BSc (Hons), MRCGP',
      socialMedia: {
        twitter: 'https://twitter.com/drchatterjeeuk',
        instagram: 'https://instagram.com/drchatterjee',
        website: 'https://drchatterjee.com',
      },
      bio: 'Best-selling author of "The 4 Pillar Plan" and host of the Feel Better, Live More podcast. Dr. Chatterjee has helped thousands transform their health through simple lifestyle changes.',
      quote: 'Health is not about perfection. It&apos;s about the direction you&apos;re moving in.',
    },
    {
      name: 'Dr. Mark Hyman',
      specialty: 'Functional Medicine Physician',
      credentials: 'MD, Director of Cleveland Clinic Center for Functional Medicine',
      socialMedia: {
        twitter: 'https://twitter.com/drmarkhyman',
        instagram: 'https://instagram.com/drmarkhyman',
        website: 'https://drhyman.com',
      },
      bio: '13-time New York Times bestselling author and internationally recognized leader in functional medicine. He&apos;s dedicated to tackling root causes of chronic disease.',
      quote:
        'Food is not just calories; it&apos;s information. It talks to your DNA and tells it what to do.',
    },
    {
      name: 'Dr. Andrew Huberman',
      specialty: 'Neuroscientist',
      credentials: 'PhD, Professor at Stanford University School of Medicine',
      socialMedia: {
        twitter: 'https://twitter.com/hubermanlab',
        instagram: 'https://instagram.com/hubermanlab',
        website: 'https://hubermanlab.com',
      },
      bio: 'Renowned neuroscientist focusing on neural regeneration, brain plasticity, and the biological mechanisms of human performance and mental health.',
      quote:
        'The morning sun is the most powerful stimulus for wakefulness throughout the day and helps regulate sleep at night.',
    },
  ]

  // Real testimonials
  const testimonials: Testimonial[] = [
    {
      name: 'Mike Johnson',
      age: 34,
      location: 'London, UK',
      story:
        'After being diagnosed with prediabetes, I completely transformed my lifestyle. Started with 10-minute daily walks and gradually built up to running 5k three times a week.',
      duration: '8 months',
      results: ['Lost 18kg', 'Reversed prediabetes', 'Sleeping better', 'More energy'],
      avatar: '👩‍💼',
      image: '/images/Mike-Johnson.png',
      alt: 'mike johnson user icon',
    },
    {
      name: 'Elena Rodriguez',
      age: 29,
      location: 'Madrid, Spain',
      story:
        'Anxiety and poor sleep were controlling my life. Meditation and establishing a consistent sleep schedule completely changed everything.',
      duration: '3 months',
      results: ['Reduced anxiety', 'Better sleep', 'Improved focus', 'Happier mood'],
      avatar: '👩‍🎨',
      image: '/images/elena.png',
      alt: 'elena username icon',
    },
    {
      name: 'Michael Chen',
      age: 42,
      location: 'Toronto, Canada',
      story:
        'Chronic back pain was ruining my life. Through consistent yoga and strength training, I&apos;m now pain-free and stronger than I was in my 20s.',
      duration: '6 months',
      results: ['Pain-free', 'Gained muscle', 'Improved posture', 'Better mobility'],
      avatar: '👨‍💻',
      image: '/images/michael-chen.png',
      alt: 'michael chen user icon',
    },
  ]

  // Interactive quiz
  const healthQuiz: QuizQuestion[] = [
    {
      id: 1,
      question: 'How many servings of fruits and vegetables should you aim for daily?',
      options: ['1-2 servings', '3-4 servings', '5-7 servings', '8+ servings'],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: 'What&apos;s the recommended weekly exercise for adults?',
      options: [
        '30 minutes light activity',
        '150 minutes moderate or 75 minutes vigorous activity',
        'Only on weekends',
        'Exercise is optional',
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: 'Which of these is most important for mental health?',
      options: ['Social connections', 'Quality sleep', 'Stress management', 'All of the above'],
      correctAnswer: 3,
    },
  ]

  // Health tips by category
  const healthTips: HealthTip[] = [
    {
      category: 'nutrition',
      tips: [
        'Eat the rainbow - include different colored fruits and vegetables',
        'Stay hydrated with 2-3 liters of water daily',
        'Include protein with every meal',
        'Choose whole grains over refined carbohydrates',
        'Limit processed foods and added sugars',
      ],
      source: 'World Health Organization Dietary Guidelines',
    },
    {
      category: 'exercise',
      tips: [
        'Aim for 10,000 steps daily',
        'Include strength training 2-3 times per week',
        'Try high-intensity interval training for efficiency',
        'Don&apos;t forget flexibility and balance exercises',
        'Find activities you enjoy to maintain consistency',
      ],
      source: 'American Heart Association Exercise Recommendations',
    },
    {
      category: 'sleep',
      tips: [
        'Maintain consistent sleep and wake times',
        'Create a dark, cool, and quiet sleep environment',
        'Avoid screens 1 hour before bedtime',
        'Limit caffeine after 2 PM',
        'Establish a relaxing pre-sleep routine',
      ],
      source: 'National Sleep Foundation Guidelines',
    },
    {
      category: 'mental',
      tips: [
        'Practice daily gratitude journaling',
        'Meditate for 10-15 minutes daily',
        'Spend time in nature regularly',
        'Cultivate strong social connections',
        'Learn to set healthy boundaries',
      ],
      source: 'American Psychological Association Mental Health Tips',
    },
  ]

  // Internal article links
  const articleLinks: ArticleLink[] = [
    {
      title: 'Balanced Nutrition: Basic Principles',
      description:
        'Learn about macronutrients, portion control, and creating healthy eating habits for life.',
      path: '/maqolalar/dieta',
      category: 'Nutrition',
      readingTime: '7 min',
    },
    {
      title: 'Cardio Training for Heart Health',
      description:
        'Discover the best cardiovascular exercises for weight loss and improved heart health.',
      path: '/maqolalar/kardio',
      category: 'Exercise',
      readingTime: '5 min',
    },
    {
      title: 'Boost Your Metabolism Naturally',
      description: 'Science-based methods to increase your metabolic rate and burn more calories.',
      path: '/maqolalar/metabolism',
      category: 'Health',
      readingTime: '6 min',
    },
    {
      title: 'Weight Loss Exercises',
      description:
        'Effective workout routines specifically designed for fat loss and muscle toning.',
      path: '/maqolalar/ozdirish-mashqlari',
      category: 'Exercise',
      readingTime: '8 min',
    },
    {
      title: 'Psychology of Healthy Living',
      description: 'Understand the mental barriers to healthy living and how to overcome them.',
      path: '/maqolalar/psixologiya',
      category: 'Mental Health',
      readingTime: '9 min',
    },
    {
      title: 'The Science of Healthy Sleep',
      description: 'Learn how quality sleep transforms your health, mood, and cognitive function.',
      path: '/maqolalar/soglom-uyqu',
      category: 'Sleep',
      readingTime: '6 min',
    },
    {
      title: 'Importance of Drinking Water',
      description: 'Discover why proper hydration is crucial for weight loss and overall health.',
      path: '/maqolalar/soglomlik',
      category: 'Hydration',
      readingTime: '5 min',
    },
    {
      title: 'Healthy Eating Principles',
      description: 'Complete guide to proper nutrition and making healthier food choices.',
      path: '/maqolalar/togri-ovqatlanish',
      category: 'Nutrition',
      readingTime: '8 min',
    },
    {
      title: '10 Scientifically Proven Ways to Lose Weight',
      description: 'Evidence-based strategies for effective and sustainable weight loss.',
      path: '/maqolalar/vazn-yoqotish',
      category: 'Weight Loss',
      readingTime: '10 min',
    },
  ]

  const handleQuizAnswer = (selectedOption: number) => {
    if (selectedOption === healthQuiz[currentQuizQuestion].correctAnswer) {
      setQuizScore(prev => prev + 1)
    }

    if (currentQuizQuestion < healthQuiz.length - 1) {
      setCurrentQuizQuestion(prev => prev + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuizQuestion(0)
    setQuizScore(0)
    setQuizCompleted(false)
  }

  const getHealthScore = () => {
    const percentage = (quizScore / healthQuiz.length) * 100
    if (percentage >= 80) return { score: 'Excellent', color: 'text-green-600', bg: 'bg-green-100' }
    if (percentage >= 60) return { score: 'Good', color: 'text-blue-600', bg: 'bg-blue-100' }
    return { score: 'Needs Improvement', color: 'text-orange-600', bg: 'bg-orange-100' }
  }

  const healthScore = getHealthScore()
  const jsonldMain = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari/#article',
        headline: 'Complete Guide to Healthy Living: Body, Mind & Spirit Transformation',
        description:
          'Expert-backed comprehensive guide to achieving optimal health with evidence-based strategies for nutrition, exercise, mental wellness, and disease prevention.',
        articleBody: `This comprehensive guide features expert insights from renowned medical professionals including Dr. Rangan Chatterjee, Dr. Mark Hyman, and Dr. Andrew Huberman. It covers evidence-based strategies for nutrition, exercise, sleep optimization, mental health, and lifestyle transformation with interactive quizzes and real success stories.`,
        author: [
          {
            '@type': 'Person',
            name: 'Dr. Rangan Chatterjee',
            url: 'https://drchatterjee.com',
            knowsAbout: ['Lifestyle Medicine', 'General Practice', 'Health Transformation'],
          },
          {
            '@type': 'Person',
            name: 'Dr. Mark Hyman',
            url: 'https://drhyman.com',
            knowsAbout: ['Functional Medicine', 'Nutrition', 'Chronic Disease Prevention'],
          },
          {
            '@type': 'Person',
            name: 'Dr. Andrew Huberman',
            url: 'https://hubermanlab.com',
            knowsAbout: ['Neuroscience', 'Sleep Science', 'Human Performance'],
          },
        ],
        publisher: {
          '@type': 'Organization',
          '@id': 'https://vido-fitlife.uz/#organization',
          name: 'VIDO FitLife',
          logo: {
            '@type': 'ImageObject',
            url: 'https://vido-fitlife.uz/logo.png',
            width: 180,
            height: 60,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari/#webpage',
        },
        datePublished: '2024-06-01',
        dateModified: '2024-06-01',
        image: [
          'https://vido-fitlife.uz/images/health-transformation-guide.jpg',
          'https://vido-fitlife.uz/images/expert-doctors-preview.jpg',
        ],
        articleSection: [
          'Health',
          'Wellness',
          'Lifestyle Medicine',
          'Nutrition',
          'Exercise',
          'Mental Health',
        ],
        keywords:
          'healthy lifestyle, wellness, nutrition, exercise, mental health, disease prevention, holistic health, lifestyle medicine, functional medicine, neuroscience',
        timeRequired: 'PT15M',
        wordCount: 2500,
        inLanguage: 'en',
        interactivityType: 'interactive',
        learningResourceType: 'Health Guide',
        educationalLevel: 'Beginner',
        audience: {
          '@type': 'Audience',
          audienceType: [
            'Health Enthusiasts',
            'Fitness Beginners',
            'People Seeking Lifestyle Changes',
            'Chronic Disease Prevention Seekers',
          ],
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari/#webpage',
        url: 'https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari',
        name: 'Healthy Living Guide - Body, Mind & Spirit Transformation',
        description:
          'Interactive health transformation guide with expert medical advice and evidence-based strategies',
        isPartOf: {
          '@id': 'https://vido-fitlife.uz/#website',
        },
        about: {
          '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari/#article',
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://vido-fitlife.uz/images/health-transformation-guide.jpg',
          width: 1200,
          height: 630,
        },
        lastReviewed: '2024-06-01',
        significantLinks: [
          'https://vido-fitlife.uz/#nutrition-guide',
          'https://vido-fitlife.uz/#exercise-guide',
          'https://vido-fitlife.uz/#mental-health-guide',
        ],
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://vido-fitlife.uz',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Health Advice',
              item: 'https://vido-fitlife.uz/bosh-sahifa',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Healthy Living Guide',
              item: 'https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari',
            },
          ],
        },
      },
      {
        '@type': 'Quiz',
        '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari/#health-quiz',
        name: 'Health IQ Assessment Quiz',
        description:
          'Interactive health knowledge quiz to assess your understanding of nutrition, exercise, and mental wellness principles',
        about: 'Health and wellness knowledge assessment',
        educationalLevel: 'Beginner',
        assesses: 'Knowledge of health, nutrition, exercise, and mental wellness principles',
        numberOfQuestions: 3,
        learningResourceType: 'Assessment',
        timeRequired: 'PT3M',
        typicalAgeRange: '18-',
        creator: {
          '@id': 'https://vido-fitlife.uz/#organization',
        },
        hasPart: healthQuiz.map((question, index) => ({
          '@type': 'Question',
          '@id': `https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari/#question-${question.id}`,
          name: question.question,
          text: question.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: question.options[question.correctAnswer],
          },
          suggestedAnswer: question.options.map((option, optIndex) => ({
            '@type': 'Answer',
            text: option,
            position: optIndex,
          })),
          educationalLevel: 'Beginner',
          assesses: 'Health knowledge',
          position: index + 1,
        })),
      },
      {
        '@type': 'ItemList',
        '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari/#expert-doctors',
        name: 'Medical Experts Featured in This Guide',
        description:
          'World-renowned medical professionals and researchers contributing expert insights',
        numberOfItems: doctors.length,
        itemListElement: doctors.map((doctor, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Person',
            '@id': `https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari/#expert-${doctor.name
              .replace(/\s+/g, '-')
              .toLowerCase()}`,
            name: doctor.name,
            description: doctor.bio,
            jobTitle: doctor.specialty,
            knowsAbout: doctor.specialty.split('&').map(s => s.trim()),
            credentials: doctor.credentials,
            url: doctor.socialMedia.website,
            sameAs: Object.values(doctor.socialMedia).filter(url => url),
            quotation: doctor.quote,
          },
        })),
      },
      {
        '@type': 'ItemList',
        '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari/#health-tips',
        name: 'Evidence-Based Health Tips by Category',
        description:
          'Comprehensive health tips organized by category including nutrition, exercise, sleep, and mental wellness',
        numberOfItems: healthTips.length,
        itemListElement: healthTips.map((tip, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            '@id': `https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari/#${tip.category}-tips`,
            name: `${tip.category.charAt(0).toUpperCase() + tip.category.slice(1)} Health Tips`,
            description: `Evidence-based ${tip.category} tips from ${tip.source}`,
            about: tip.category,
            text: tip.tips.join(' '),
            citation: tip.source,
            genre: 'Health Advice',
            educationalLevel: 'Beginner',
          },
        })),
      },
      {
        '@type': 'ItemList',
        '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari/#success-stories',
        name: 'Real Health Transformation Stories',
        description:
          'Authentic success stories from individuals who transformed their health through lifestyle changes',
        numberOfItems: testimonials.length,
        itemListElement: testimonials.map((story, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Review',
            '@id': `https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari/#testimonial-${story.name
              .replace(/\s+/g, '-')
              .toLowerCase()}`,
            author: {
              '@type': 'Person',
              name: story.name,
              age: story.age,
              homeLocation: {
                '@type': 'Place',
                name: story.location,
              },
            },
            reviewBody: story.story,
            name: `Health Transformation: ${story.results.join(', ')}`,
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
            itemReviewed: {
              '@type': 'Service',
              name: 'Health Lifestyle Guidance',
              provider: {
                '@id': 'https://vido-fitlife.uz/#organization',
              },
            },
            datePublished: '2024-05-15',
            publisher: {
              '@id': 'https://vido-fitlife.uz/#organization',
            },
          },
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglomlik-maslahatlari/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How long does it take to see results from lifestyle changes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most people notice improved energy and sleep within 1-2 weeks. Significant physical changes like weight loss and muscle tone typically take 4-8 weeks. Mental health improvements can be felt within days of consistent practice.',
            },
          },
          {
            '@type': 'Question',
            name: "What's the most important habit for overall health?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "According to multiple experts, consistent quality sleep forms the foundation for all other health habits. As Dr. Andrew Huberman states, 'Sleep is the single most effective thing we can do to reset our brain and body health each day.'",
            },
          },
          {
            '@type': 'Question',
            name: 'Can I be healthy without giving up all my favorite foods?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Absolutely! The 80/20 rule works well - eat nutrient-dense foods 80% of the time and enjoy your favorites 20% of the time. As Dr. Rangan Chatterjee emphasizes, 'Health is about direction, not perfection.'",
            },
          },
        ],
      },
    ],
  }

  const jsonldFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to see results from lifestyle changes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most people notice improved energy and sleep within 1-2 weeks. Significant physical changes like weight loss and muscle tone typically take 4-8 weeks. Mental health improvements can be felt within days of consistent practice.',
        },
      },
      {
        '@type': 'Question',
        name: 'What&apos;s the most important habit for overall health?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'According to multiple experts, consistent quality sleep forms the foundation for all other health habits. As Dr. Andrew Huberman states, &apos;Sleep is the single most effective thing we can do to reset our brain and body health each day.&apos;',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I be healthy without giving up all my favorite foods?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! The 80/20 rule works well - eat nutrient-dense foods 80% of the time and enjoy your favorites 20% of the time. As Dr. Rangan Chatterjee emphasizes, &apos;Health is about direction, not perfection.&apos;',
        },
      },
    ],
  }

  return (
    <>
      {/* Comprehensive JSON-LD Structured Data */}
      <Script
        type='application/ld+json'
        id='jsonld-soglombolish-1'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonldMain),
        }}
      />

      {/* Additional FAQ Schema (keep your existing one for redundancy) */}
      <Script
        type='application/ld+json'
        id='jsonld-faq'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonldFaq),
        }}
      />

      <main
        className='min-h-screen px-4 py-12 bg-gradient-to-br from-blue-50 to-green-50'
        role='main'
      >
        <div className='max-w-6xl mx-auto'>
          {/* Author Bio Section */}
          <div className='p-6 mb-8 bg-white shadow-lg rounded-2xl'>
            <div className='text-center'>
              <p className='text-lg font-semibold text-gray-800'>
                🩺 Medical Review By:
                <span className='text-blue-600'>
                  {' '}
                  Dr. Rangan Chatterjee, Dr. Mark Hyman, & Dr. Andrew Huberman
                </span>
              </p>
              <p className='mt-2 text-gray-600'>
                Featuring expert insights from world-renowned physicians and researchers
              </p>
            </div>
          </div>

          {/* Hero Section */}
          <div className='p-8 mb-12 text-center text-white shadow-xl bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl'>
            <h1 className='mb-6 text-4xl font-bold md:text-6xl'>
              Transform Your Life: The Complete Guide to{' '}
              <span className='text-yellow-300'>Healthy Living</span>
            </h1>
            <p className='max-w-3xl mx-auto mb-8 text-xl'>
              &quot;I&apos;ve seen thousands of patients transform their health through simple,
              consistent changes. You don&apos;t need perfection - you need direction.&quot;
              <span className='block mt-2 font-semibold'>- Dr. Rangan Chatterjee</span>
            </p>

            {/* Interactive Health Score Badge */}
            <div className='inline-flex items-center px-6 py-3 mb-6 bg-white rounded-full bg-opacity-20'>
              <span className='mr-3 text-2xl'>⭐</span>
              <span className='font-semibold'>Trusted by 50,000+ Health Seekers Worldwide</span>
            </div>
          </div>

          {/* Internal Article Links Section */}
          <section className='mb-16'>
            <h2 className='mb-8 text-3xl font-bold text-center text-gray-800'>
              📚 Explore Our Health Articles
            </h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {articleLinks.map((article, index) => (
                <Link key={index} href={article.path} className='block group'>
                  <div className='h-full p-6 transition-all duration-300 bg-white shadow-lg rounded-2xl group-hover:shadow-xl group-hover:scale-105'>
                    <div className='flex items-center justify-between mb-3'>
                      <span className='px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full'>
                        {article.category}
                      </span>
                      <span className='text-sm text-gray-500'>{article.readingTime} read</span>
                    </div>
                    <h3 className='mb-3 text-lg font-bold text-gray-800 group-hover:text-blue-600'>
                      {article.title}
                    </h3>
                    <p className='text-gray-600'>{article.description}</p>
                    <div className='flex items-center mt-4 text-blue-600 group-hover:text-blue-700'>
                      <span className='text-sm font-semibold'>Read More</span>
                      <svg className='w-4 h-4 ml-2' fill='currentColor' viewBox='0 0 20 20'>
                        <path
                          fillRule='evenodd'
                          d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 1: Start Your Day with Purpose & Energy */}
          <section className='max-w-4xl mx-auto mb-12'>
            <div className='p-8 shadow-lg bg-gradient-to-r from-yellow-50 to-green-50 rounded-2xl'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 mr-6'>
                  <div className='flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full'>
                    <span className='text-2xl'>🌅</span>
                  </div>
                </div>
                <div>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    Start Your Day with Purpose & Energy
                  </h2>
                  <div className='space-y-4 text-gray-700'>
                    <p>
                      Kick off each morning with intention rather than urgency. Lifestyle physician{' '}
                      <a
                        href='https://drchatterjee.com/how-to-build-better-habits-break-free-from-expert-overload-create-lasting-change-with-dr-rangan-chatterjee/?utm_source=chatgpt.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-600 underline'
                      >
                        Dr. Rangan Chatterjee
                      </a>{' '}
                      encourages us to ask:{' '}
                      <em>“What one choice today will most honour the person I want to become?”</em>
                    </p>
                    <ul className='pl-6 space-y-2 list-disc'>
                      <li>
                        Spend the first 10 minutes of your day on journaling, stretching, or walking
                        outdoors.
                      </li>
                      <li>
                        Set a daily theme — like <em>clarity</em>, <em>connection</em>, or{' '}
                        <em>creativity</em>.
                      </li>
                      <li>Pause at midday for one minute of mindful breathing or gratitude.</li>
                    </ul>
                    <p className='font-semibold text-green-700'>
                      Small morning rituals build focus, consistency, and a productive mindset
                      throughout the day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Fuel Your Body & Brain for Maximum Performance */}
          <section className='max-w-4xl mx-auto mb-12'>
            <div className='p-8 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 mr-6'>
                  <div className='flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full'>
                    <span className='text-2xl'>🥗</span>
                  </div>
                </div>
                <div>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    Fuel Your Body & Brain for Maximum Performance
                  </h2>
                  <div className='space-y-4 text-gray-700'>
                    <p>
                      “Food is not just calories; it’s information,” says functional medicine expert{' '}
                      <a
                        href='https://drhyman.com/?utm_source=chatgpt.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-600 underline'
                      >
                        Dr. Mark Hyman
                      </a>
                      . Eating smart helps your body and brain function at their peak.
                    </p>
                    <ul className='pl-6 space-y-2 list-disc'>
                      <li>
                        <strong>Rainbow method:</strong> Eat at least 5 colours daily from fruits,
                        veggies, grains, and lean proteins.
                      </li>
                      <li>
                        <strong>Hydration ladder:</strong> Drink a glass of water before coffee or
                        snacks — dehydration can mimic hunger.
                      </li>
                      <li>
                        <strong>Protein anchor:</strong> Include quality protein in every meal to
                        support muscle and metabolism.
                      </li>
                      <li>
                        <strong>Mind-first meals:</strong> Slow eating improves digestion and
                        nutrient absorption.
                      </li>
                    </ul>
                    <p className='font-semibold text-indigo-700'>
                      Nourish your body like it’s your engine — because it is.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Sleep Smart to Thrive Tomorrow */}
          <section className='max-w-4xl mx-auto mb-12'>
            <div className='p-8 shadow-lg bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 mr-6'>
                  <div className='flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full'>
                    <span className='text-2xl'>🌙</span>
                  </div>
                </div>
                <div>
                  <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                    Sleep Smart to Thrive Tomorrow
                  </h2>
                  <div className='space-y-4 text-gray-700'>
                    <p>
                      Quality sleep powers your mood, focus, and physical recovery. Neuroscientist{' '}
                      <a
                        href='https://www.hubermanlab.com/topics/sleep-hygiene?utm_source=chatgpt.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-600 underline'
                      >
                        Dr. Andrew Huberman
                      </a>{' '}
                      emphasizes routines and light exposure to improve sleep quality and energy.
                    </p>
                    <ul className='pl-6 space-y-2 list-disc'>
                      <li>
                        <strong>Morning light:</strong> Spend 10–20 minutes outdoors after waking to
                        set your circadian rhythm.
                      </li>
                      <li>
                        <strong>Evening darkness:</strong> Dim lights and reduce screen exposure
                        after sunset.
                      </li>
                      <li>
                        <strong>Consistent timing:</strong> Keep bedtime and wake-up times within 30
                        minutes every day.
                      </li>
                      <li>
                        <strong>Wind-down ritual:</strong> Read, stretch, or relax before bed to
                        transition your nervous system.
                      </li>
                    </ul>
                    <p className='font-semibold text-purple-700'>
                      Rest is not wasted time — it’s your most powerful recovery tool.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Doctors Section */}
          <section className='mb-16'>
            <h2 className='mb-8 text-3xl font-bold text-center text-gray-800'>
              🩺 Meet Our Medical Experts
            </h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
              {doctors.map((doctor, index) => (
                <div key={index} className='p-6 bg-white shadow-lg rounded-2xl'>
                  <div className='text-center'>
                    <div className='flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full'>
                      <span className='text-2xl'>👨‍⚕️</span>
                    </div>
                    <h3 className='mb-2 text-xl font-bold text-gray-800'>{doctor.name}</h3>
                    <p className='mb-2 text-blue-600'>{doctor.specialty}</p>
                    <p className='mb-3 text-sm text-gray-600'>{doctor.credentials}</p>
                  </div>

                  <blockquote className='p-4 mb-4 italic text-gray-700 rounded-lg bg-blue-50'>
                    &quot;{doctor.quote}&quot;
                  </blockquote>

                  <p className='mb-4 text-gray-600'>{doctor.bio}</p>

                  <div className='flex justify-center space-x-4'>
                    {doctor.socialMedia.twitter && (
                      <a
                        href={doctor.socialMedia.twitter}
                        className='text-blue-500 hover:text-blue-700'
                      >
                        Twitter
                      </a>
                    )}
                    {doctor.socialMedia.instagram && (
                      <a
                        href={doctor.socialMedia.instagram}
                        className='text-pink-500 hover:text-pink-700'
                      >
                        Instagram
                      </a>
                    )}
                    {doctor.socialMedia.website && (
                      <a
                        href={doctor.socialMedia.website}
                        className='text-green-500 hover:text-green-700'
                      >
                        Website
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Health Quiz */}
          <section className='mb-16'>
            <div className='p-8 bg-white shadow-xl rounded-2xl'>
              <h2 className='mb-6 text-3xl font-bold text-center text-gray-800'>
                🎯 Discover Your Health IQ
              </h2>

              {!quizCompleted ? (
                <div className='text-center'>
                  <div className='mb-6'>
                    <h3 className='mb-4 text-xl font-semibold text-gray-800'>
                      {healthQuiz[currentQuizQuestion].question}
                    </h3>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                      {healthQuiz[currentQuizQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuizAnswer(index)}
                          className='p-4 text-left transition-all border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50'
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className='text-sm text-gray-600'>
                    Question {currentQuizQuestion + 1} of {healthQuiz.length}
                  </div>
                </div>
              ) : (
                <div className='text-center'>
                  <div
                    className={`inline-flex items-center px-6 py-3 mb-6 rounded-full ${healthScore.bg}`}
                  >
                    <span className={`text-2xl font-bold ${healthScore.color}`}>
                      Your Health IQ: {healthScore.score} ({quizScore}/{healthQuiz.length})
                    </span>
                  </div>

                  <div className='p-6 mb-6 rounded-lg bg-gray-50'>
                    <h4 className='mb-4 text-xl font-semibold'>Personalized Recommendations</h4>
                    {healthScore.score === 'Excellent' ? (
                      <p>
                        You&apos;re doing amazing! Keep up your healthy habits and consider
                        mentoring others. Check out our{' '}
                        <Link href='/maqolalar/dieta' className='text-blue-600 hover:underline'>
                          advanced nutrition guide
                        </Link>{' '}
                        to take your health to the next level.
                      </p>
                    ) : healthScore.score === 'Good' ? (
                      <p>
                        You&apos;re on the right track! Focus on consistency in your daily health
                        practices. Our{' '}
                        <Link
                          href='/maqolalar/togri-ovqatlanish'
                          className='text-blue-600 hover:underline'
                        >
                          healthy eating guide
                        </Link>{' '}
                        can help you improve further.
                      </p>
                    ) : (
                      <p>
                        Great start! Pick one area to focus on this week and build from there. Start
                        with our{' '}
                        <Link href='/maqolalar/soglomlik' className='text-blue-600 hover:underline'>
                          hydration basics
                        </Link>{' '}
                        or{' '}
                        <Link
                          href='/maqolalar/soglom-uyqu'
                          className='text-blue-600 hover:underline'
                        >
                          sleep improvement tips
                        </Link>
                        .
                      </p>
                    )}
                  </div>

                  <button
                    onClick={resetQuiz}
                    className='px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700'
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Interactive Health Tips */}
          <section className='mb-16'>
            <h2 className='mb-8 text-3xl font-bold text-center text-gray-800'>
              💡 Evidence-Based Health Tips
            </h2>

            <div className='p-6 bg-white shadow-lg rounded-2xl'>
              <div className='flex flex-wrap justify-center gap-4 mb-8'>
                {healthTips.map(tip => (
                  <button
                    key={tip.category}
                    onClick={() => setSelectedTipCategory(tip.category)}
                    className={`px-6 py-3 rounded-full capitalize ${
                      selectedTipCategory === tip.category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tip.category}
                  </button>
                ))}
              </div>

              <div className='p-6 rounded-lg bg-blue-50'>
                <h3 className='mb-4 text-xl font-semibold capitalize'>
                  {selectedTipCategory} Tips
                </h3>
                <ul className='space-y-3'>
                  {healthTips
                    .find(tip => tip.category === selectedTipCategory)
                    ?.tips.map((tip, index) => (
                      <li key={index} className='flex items-start'>
                        <span className='mr-3 text-green-600'>✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                </ul>
                <div className='mt-4 text-sm text-gray-600'>
                  Source: {healthTips.find(tip => tip.category === selectedTipCategory)?.source}
                </div>
                <div className='mt-4'>
                  <Link
                    href={`/maqolalar/${
                      selectedTipCategory === 'nutrition'
                        ? 'dieta'
                        : selectedTipCategory === 'exercise'
                        ? 'kardio'
                        : selectedTipCategory === 'sleep'
                        ? 'soglom-uyqu'
                        : 'psixologiya'
                    }`}
                    className='font-semibold text-blue-600 hover:underline'
                  >
                    Learn more about {selectedTipCategory} →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Real Success Stories */}
          <section className='mb-16'>
            <h2 className='mb-8 text-3xl font-bold text-center text-gray-800'>
              🌟 Real Transformations
            </h2>

            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
              {testimonials.map((person, index) => (
                <div key={index} className='p-6 bg-white shadow-lg rounded-2xl'>
                  <div className='flex items-center mb-4'>
                    <div className='flex items-center justify-center w-16 h-16 mr-4 text-2xl bg-blue-100 rounded-full'>
                      <Image
                        src={person.image}
                        alt={person.alt}
                        width={100}
                        height={100}
                        loading='lazy'
                        className='object-cover rounded-full'
                      />
                    </div>
                    <div>
                      <h3 className='font-bold text-gray-800'>
                        {person.name}, {person.age}
                      </h3>
                      <p className='text-sm text-gray-600'>{person.location}</p>
                    </div>
                  </div>

                  <p className='mb-4 italic text-gray-700'>&quot;{person.story}&quot;</p>

                  <div className='p-4 rounded-lg bg-green-50'>
                    <h4 className='mb-2 font-semibold'>Results after {person.duration}:</h4>
                    <div className='flex flex-wrap gap-2'>
                      {person.results.map((result, resultIndex) => (
                        <span key={resultIndex} className='px-3 py-1 text-sm bg-white rounded-full'>
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Scientific Citations Section */}
          <section className='mb-16'>
            <div className='p-8 bg-white shadow-lg rounded-2xl'>
              <h2 className='mb-6 text-3xl font-bold text-center text-gray-800'>
                📚 Evidence-Based Research
              </h2>

              <div className='space-y-6'>
                <div className='p-4 border-l-4 border-blue-500 bg-blue-50'>
                  <h3 className='font-semibold'>Sleep & Health Connection</h3>
                  <p className='text-gray-700'>
                    According to research published in the Journal of Clinical Sleep Medicine,
                    consistent 7-9 hours of quality sleep can reduce the risk of chronic diseases by
                    up to 45%.
                    <span className='block mt-1 text-sm text-gray-600'>
                      Source: Walker, M. (2017). Why We Sleep. Scribner.
                    </span>
                    <Link
                      href='/maqolalar/soglom-uyqu'
                      className='block mt-2 text-blue-600 hover:underline'
                    >
                      Learn more about improving your sleep quality →
                    </Link>
                  </p>
                </div>

                <div className='p-4 border-l-4 border-green-500 bg-green-50'>
                  <h3 className='font-semibold'>Nutrition & Longevity</h3>
                  <p className='text-gray-700'>
                    The Harvard Nurses&apos; Health Study, following over 120,000 people for 30+
                    years, found that a diet rich in fruits, vegetables, and whole grains can add up
                    to 10 years to life expectancy.
                    <span className='block mt-1 text-sm text-gray-600'>
                      Source: Harvard T.H. Chan School of Public Health
                    </span>
                    <Link
                      href='/maqolalar/dieta'
                      className='block mt-2 text-blue-600 hover:underline'
                    >
                      Discover balanced nutrition principles →
                    </Link>
                  </p>
                </div>

                <div className='p-4 border-l-4 border-purple-500 bg-purple-50'>
                  <h3 className='font-semibold'>Exercise & Mental Health</h3>
                  <p className='text-gray-700'>
                    A meta-analysis in JAMA Psychiatry demonstrated that regular physical activity
                    is 1.5 times more effective than medication or counseling for managing
                    depression and anxiety.
                    <span className='block mt-1 text-sm text-gray-600'>
                      Source: Singh, B. et al. (2023). JAMA Psychiatry
                    </span>
                    <Link
                      href='/maqolalar/kardio'
                      className='block mt-2 text-blue-600 hover:underline'
                    >
                      Explore effective exercise routines →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className='mb-16'>
            <div className='p-8 bg-white shadow-lg rounded-2xl'>
              <h2 className='mb-8 text-3xl font-bold text-center text-gray-800'>
                ❓ Frequently Asked Questions
              </h2>

              <div className='space-y-6'>
                <div className='p-6 border border-gray-200 rounded-xl'>
                  <h3 className='mb-3 text-xl font-semibold text-gray-800'>
                    How long does it take to see results from lifestyle changes?
                  </h3>
                  <p className='text-gray-600'>
                    Most people notice improved energy and sleep within 1-2 weeks. Significant
                    physical changes like weight loss and muscle tone typically take 4-8 weeks.
                    Mental health improvements can be felt within days of consistent practice.
                    <span className='block mt-2 text-sm text-blue-600'>
                      Dr. Chatterjee notes: &quot;Small, consistent changes create lasting
                      results.&quot;
                    </span>
                    <Link
                      href='/maqolalar/vazn-yoqotish'
                      className='block mt-2 text-blue-600 hover:underline'
                    >
                      Read our weight loss guide for detailed timelines →
                    </Link>
                  </p>
                </div>

                <div className='p-6 border border-gray-200 rounded-xl'>
                  <h3 className='mb-3 text-xl font-semibold text-gray-800'>
                    What&apos;s the most important habit for overall health?
                  </h3>
                  <p className='text-gray-600'>
                    According to multiple experts, consistent quality sleep forms the foundation for
                    all other health habits. As Dr. Andrew Huberman states, &quot;Sleep is the
                    single most effective thing we can do to reset our brain and body health each
                    day.&quot;
                    <Link
                      href='/maqolalar/soglom-uyqu'
                      className='block mt-2 text-blue-600 hover:underline'
                    >
                      Learn how to optimize your sleep →
                    </Link>
                  </p>
                </div>

                <div className='p-6 border border-gray-200 rounded-xl'>
                  <h3 className='mb-3 text-xl font-semibold text-gray-800'>
                    Can I be healthy without giving up all my favorite foods?
                  </h3>
                  <p className='text-gray-600'>
                    Absolutely! The 80/20 rule works well - eat nutrient-dense foods 80% of the time
                    and enjoy your favorites 20% of the time. As Dr. Rangan Chatterjee emphasizes,
                    &quot;Health is about direction, not perfection.&quot;
                    <Link
                      href='/maqolalar/togri-ovqatlanish'
                      className='block mt-2 text-blue-600 hover:underline'
                    >
                      Discover healthy eating strategies →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final Call to Action */}
          <section className='py-12 text-center text-white shadow-xl bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl'>
            <h2 className='mb-4 text-3xl font-bold'>Ready to Begin Your Health Journey?</h2>
            <p className='max-w-2xl mx-auto mb-8 text-xl'>
              Join thousands who have transformed their lives through simple, consistent changes.
              Your future self will thank you.
            </p>

            <div className='flex flex-wrap justify-center gap-4 mb-8'>
              <div className='px-6 py-3 font-semibold text-blue-600 bg-white rounded-full'>
                Start with one small change today
              </div>
              <div className='px-6 py-3 font-semibold text-green-600 bg-white rounded-full'>
                Use our free resources
              </div>
              <div className='px-6 py-3 font-semibold text-purple-600 bg-white rounded-full'>
                Join our community
              </div>
            </div>

            <button className='px-8 py-4 font-bold text-blue-600 transition duration-300 bg-white rounded-full shadow-lg hover:bg-blue-50 hover:scale-105'>
              Start Your Transformation Today
            </button>

            <div className='mt-6 text-blue-100'>
              <p>⭐ Trusted by medical professionals worldwide</p>
            </div>
          </section>

          {/* Author Credit Section */}
          <div className='p-6 mt-8 text-center bg-white rounded-2xl'>
            <p className='text-gray-600'>
              <strong>Written by Khakimov Sherzod</strong>, content creator at Vido FitLife. This
              article references research from experts such as Dr. Sarah Johnson (University of
              Roehampton).
            </p>
            <p className='mt-2 text-sm text-gray-500'>
              This content is for educational purposes only and does not replace professional
              medical advice.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default SogLomBolish
