'use client'

import Image from 'next/image'
import Script from 'next/script'
import { useState } from 'react'

interface QuizAnswer {
  [key: number]: number
}

interface QuizOption {
  text: string
  score: number
}

interface QuizQuestion {
  id: number
  question: string
  options: QuizOption[]
}

export default function HealthyFood() {
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer>({})
  const [quizResult, setQuizResult] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('benefits')
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null)

  const handleQuizAnswer = (questionId: number, score: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: score }))
  }

  const calculateQuizResult = () => {
    const scores = Object.values(quizAnswers).reduce(
      (acc: number, answer: number) => acc + answer,
      0
    )
    if (scores >= 12) {
      setQuizResult('excellent')
    } else if (scores >= 8) {
      setQuizResult('good')
    } else {
      setQuizResult('needs_improvement')
    }
  }

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: 'How many servings of fruits and vegetables do you typically eat per day?',
      options: [
        { text: '5 or more', score: 3 },
        { text: '3-4', score: 2 },
        { text: '1-2', score: 1 },
        { text: 'Rarely any', score: 0 },
      ],
    },
    {
      id: 2,
      question: 'How often do you consume processed or fast food?',
      options: [
        { text: 'Rarely or never', score: 3 },
        { text: '1-2 times per week', score: 2 },
        { text: '3-4 times per week', score: 1 },
        { text: 'Daily', score: 0 },
      ],
    },
    {
      id: 3,
      question: 'How much water do you drink daily?',
      options: [
        { text: '8+ glasses', score: 3 },
        { text: '5-7 glasses', score: 2 },
        { text: '2-4 glasses', score: 1 },
        { text: 'Less than 2 glasses', score: 0 },
      ],
    },
    {
      id: 4,
      question: 'Do you plan your meals in advance?',
      options: [
        { text: 'Always', score: 3 },
        { text: 'Often', score: 2 },
        { text: 'Sometimes', score: 1 },
        { text: 'Never', score: 0 },
      ],
    },
    {
      id: 5,
      question: 'How often do you cook meals at home?',
      options: [
        { text: 'Almost all meals', score: 3 },
        { text: 'Most meals', score: 2 },
        { text: 'About half', score: 1 },
        { text: 'Rarely', score: 0 },
      ],
    },
  ]

  const successStories = [
    {
      name: 'Lara, 44',
      story:
        'I lost 45 pounds in 6 months by simply cooking at home and walking daily. The secret? I stopped buying processed foods entirely.',
      achievement: '45 lbs weight loss',
      image: '/images/icon-lara.png',
      alt: 'username icon lara',
    },
    {
      name: 'John, 38',
      story:
        'My blood pressure normalized after switching to Mediterranean diet. I never felt like I was dieting - just eating delicious, real food.',
      achievement: 'Normal blood pressure',
      image: '/images/icon-john.png',
      alt: 'username icon john',
    },
    {
      name: 'Leon, 41',
      story:
        'Meal prepping saved my health and my budget. I spend less on food now than when I was eating fast food every day.',
      achievement: '$200 monthly savings',
      image: '/images/icon-leon.png',
      alt: 'username icon leon',
    },
  ]

  const healthyEatingTips = [
    'Start your day with a protein-rich breakfast - it stabilizes blood sugar and prevents cravings',
    'Chew your food thoroughly - this simple habit improves digestion and helps you feel full faster',
    'Fill half your plate with colorful vegetables - different colors provide diverse nutrients',
    'Include fermented foods like yogurt or sauerkraut daily - they improve gut health and immunity',
    'Choose whole grains over refined - they provide sustained energy and keep you full longer',
  ]

  const recipes = [
    {
      id: 1,
      name: 'Power Protein Bowl',
      prepTime: 15,
      calories: 420,
      ingredients: [
        'quinoa or brown rice',
        'grilled chicken or tofu',
        'mixed greens',
        'avocado',
        'roasted vegetables',
        'nuts or seeds',
        'lemon-tahini dressing',
      ],
      benefits: 'Balanced meal with protein, healthy fats, and complex carbs for sustained energy',
      allergyInfo: 'Contains nuts - substitute seeds if allergic',
      image: '/images/Protein-Bowl.png',
      alt: 'food that contain protain 420 kkal which can be prepared in 25 mins',
    },
    {
      id: 2,
      name: 'Gut-Health Miso Soup',
      prepTime: 10,
      calories: 80,
      ingredients: ['miso paste', 'seaweed', 'tofu', 'scallions', 'mushrooms'],
      benefits: 'Supports digestion and provides essential minerals and probiotics',
      allergyInfo: 'Gluten-free option available, contains soy',
      image: '/images/gut-health-miso-soup.png',
      alt: 'healthy miso soup for healthy life. it consist of high protein and other ingredients that contain high value for your health',
    },
    {
      id: 3,
      name: 'Strength-Building Lentil Stew',
      prepTime: 25,
      calories: 320,
      ingredients: ['lentils', 'sweet potatoes', 'onions', 'spinach', 'herbs and spices'],
      benefits: 'High in plant protein and iron, perfect for muscle recovery',
      allergyInfo: 'Naturally gluten-free and dairy-free',
      image: '/images/lentil-stew.png',
    },
  ]

  const wellnessPrinciples = [
    {
      title: 'Eat More Whole Foods',
      description:
        'Focus on incorporating more whole grains, fresh vegetables, and lean proteins into your diet. These foods provide essential nutrients without artificial additives.',
    },
    {
      title: 'Listen to Your Body',
      description:
        'Pay attention to how different foods make you feel. Your body will tell you what it needs - learn to recognize hunger and fullness cues.',
    },
    {
      title: 'Stay Hydrated',
      description:
        'Water is essential for every bodily function. Proper hydration supports digestion, energy levels, and clear thinking.',
    },
    {
      title: 'Move Daily',
      description:
        'Combine healthy eating with regular physical activity. Even 30 minutes of walking daily can significantly improve your health and wellbeing.',
    },
  ]

  const allergyFriendlyTips = [
    {
      title: 'Dairy Alternatives',
      description: 'Try almond milk, oat milk, or coconut yogurt if you are lactose intolerant.',
      icon: '🥛',
    },
    {
      title: 'Gl-Free Grains',
      description: 'Quinoa, rice, and buckwheat are excellent gluten-free grain options.',
      icon: '🌾',
    },
    {
      title: 'Nut-Free Proteins',
      description: 'Seeds, legumes, and lean meats provide protein without nut allergens.',
      icon: '💪',
    },
    {
      title: 'Egg Substitutes',
      description: 'Flax eggs or applesauce work well in baking for those with egg allergies.',
      icon: '🥚',
    },
  ]

  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglom-ovqatlanish#article',
        headline: 'Healthy Eating Guide: Transform Your Life Through Nutritious Food',
        description:
          'Discover practical healthy eating principles for fitness and wellness, including whole foods, meal planning, and allergy-friendly alternatives.',
        image: [
          'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=80',
        ],
        author: {
          '@type': 'Person',
          name: 'VIDO FitLife Team',
          jobTitle: 'Health Education Team',
          url: 'https://vido-fitlife.uz',
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://vido-fitlife.uz/#organization',
          name: 'VIDO FitLife',
          url: 'https://vido-fitlife.uz',
          logo: {
            '@type': 'ImageObject',
            url: 'https://vido-fitlife.uz/logo.png',
            width: 180,
            height: 60,
          },
        },
        datePublished: '2023-11-20T08:00:00+00:00',
        dateModified: '2023-11-20T08:00:00+00:00',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglom-ovqatlanish#webpage',
        },
        articleSection: ['Healthy Eating', 'Nutrition', 'Wellness', 'Fitness'],
        keywords: [
          'healthy eating',
          'nutrition',
          'wellness',
          'fitness food',
          'whole foods',
          'meal planning',
        ],
        inLanguage: 'en',
        wordCount: 3500,
        timeRequired: 'PT15M',
        educationalLevel: 'Beginner',
        audience: {
          '@type': 'Audience',
          audienceType: [
            'health enthusiasts',
            'fitness beginners',
            'healthy eating seekers',
            'wellness focused',
          ],
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglom-ovqatlanish#webpage',
        url: 'https://vido-fitlife.uz/bosh-sahifa/soglom-ovqatlanish',
        name: 'Healthy Eating Guide: Transform Your Life Through Nutritious Food',
        description:
          'Comprehensive guide to healthy eating for fitness and wellness with recipes and practical tips.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://vido-fitlife.uz/#website',
        },
        about: {
          '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglom-ovqatlanish#article',
        },
        mainEntity: {
          '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglom-ovqatlanish#article',
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&auto=format&fit=crop&q=80',
          width: 1200,
          height: 800,
        },
        lastReviewed: '2023-11-20T08:00:00+00:00',
        reviewedBy: {
          '@type': 'Organization',
          name: 'VIDO FitLife',
        },
        significantLink: [
          'https://vido-fitlife.uz/bosh-sahifa/vazn-yoqotish',
          'https://vido-fitlife.uz/maqolalar',
          'https://vido-fitlife.uz/bosh-sahifa/mashqlar-foydasi',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglom-ovqatlanish#faqpage',
        mainEntity: [
          {
            '@type': 'Question',
            name: "What's the most important principle of healthy eating?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The foundation of healthy eating is focusing on whole, minimally processed foods. Fill your plate with vegetables, include lean proteins, choose whole grains, and stay hydrated. Consistency matters more than perfection.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I manage food allergies while eating healthy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Start by identifying your specific allergens, then explore alternatives. Many whole foods are naturally allergy-friendly. For common allergens like dairy or nuts, there are numerous plant-based substitutes available that provide similar nutritional benefits.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the best foods for energy and fitness?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Complex carbohydrates like oats and sweet potatoes provide sustained energy, lean proteins support muscle repair, and healthy fats from avocados and nuts support overall health. Timing matters - eat a balanced meal 2-3 hours before exercise and include protein after workouts.',
            },
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': 'https://vido-fitlife.uz/bosh-sahifa/soglom-ovqatlanish#recipes',
        name: 'Healthy Recipe Collection',
        description: 'Nutritious and delicious recipes for healthy eating and fitness.',
        numberOfItems: 3,
        itemListElement: recipes.map((recipe, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Recipe',
            '@id': `https://vido-fitlife.uz/bosh-sahifa/soglom-ovqatlanish#recipe-${recipe.id}`,
            name: recipe.name,
            description: recipe.benefits,
            prepTime: `PT${recipe.prepTime}M`,
            nutrition: {
              '@type': 'NutritionInformation',
              calories: `${recipe.calories} calories`,
            },
            recipeIngredient: recipe.ingredients,
            recipeInstructions: [
              {
                '@type': 'HowToStep',
                text: 'Prepare all fresh ingredients according to recipe instructions',
              },
              {
                '@type': 'HowToStep',
                text: 'Combine ingredients using healthy cooking methods like steaming or baking',
              },
            ],
            suitableForDiet: 'https://schema.org/HealthyDiet',
            recipeCategory: 'Main Course',
            recipeCuisine: 'International',
          },
        })),
      },
    ],
  }

  return (
    <>
      <Script
        type='application/ld+json'
        id='soglom-ovqatlanish-jsonld'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonld),
        }}
      />
      <main className='min-h-screen px-4 py-12 bg-gradient-to-br from-green-50 to-teal-50 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <article className='overflow-hidden bg-white shadow-xl rounded-2xl'>
            {/* Article Header */}
            <div className='p-8 border-b border-gray-100'>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full'>
                  Healthy Nutrition
                </span>
                <span className='px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full'>
                  Wellness
                </span>
                <span className='px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full'>
                  Fitness Foods
                </span>
              </div>

              <h1 className='mb-4 text-4xl font-bold text-gray-900 md:text-5xl'>
                Healthy Eating Guide: Transform Your Life Through Nutritious Food
              </h1>

              <div className='flex items-center text-sm text-gray-500'>
                <div className='flex items-center mr-4'>
                  <div className='flex items-center justify-center w-12 h-12 bg-green-100 rounded-full'>
                    <span className='text-xl'>🌱</span>
                  </div>
                  <div className='ml-3'>
                    <p className='font-medium text-gray-900'>VIDO FitLife Team</p>
                    <p className='text-gray-600'>Health Education Specialists</p>
                  </div>
                </div>
                <time dateTime='2023-11-20' className='text-gray-600'>
                  November 20, 2023
                </time>
                <span className='mx-2 text-gray-300'>•</span>
                <span className='text-gray-600'>15 min read</span>
              </div>
            </div>

            {/* Introduction */}
            <div className='p-8 bg-gradient-to-r from-blue-50 to-green-50'>
              <div className='flex flex-col items-center gap-8 md:flex-row'>
                <div className='flex-1'>
                  <p className='mb-4 text-lg text-gray-700'>
                    <span className='font-bold text-green-700'>
                      &quot;I used to struggle with low energy and constant cravings,&quot;
                    </span>{' '}
                    recalls Sarah, a 32-year-old teacher.{' '}
                    <span className='font-bold text-green-700'>
                      &quot;Then I discovered how real, wholesome food could transform not just my
                      body, but my entire life.&quot;
                    </span>
                  </p>
                  <p className='font-medium text-blue-800'>
                    In this comprehensive guide, you&apos;ll discover why healthy eating is so much
                    more than counting calories - it&apos;s about fueling your body, sharpening your
                    mind, and creating sustainable habits for lifelong wellness.
                  </p>
                </div>
                <div className='flex-1'>
                  <Image
                    src='/images/healthy-eating.png'
                    alt='Healthy food variety'
                    width={400}
                    height={250}
                    className='w-auto h-auto rounded-lg shadow-md'
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Interactive Navigation */}
            <nav className='p-6 bg-white border-b'>
              <div className='flex flex-wrap justify-center gap-2'>
                {[
                  { id: 'benefits', label: 'Benefits' },
                  { id: 'principles', label: 'Wellness Principles' },
                  { id: 'stories', label: 'Success Stories' },
                  { id: 'recipes', label: 'Recipes' },
                  { id: 'allergies', label: 'Allergy Tips' },
                  { id: 'quiz', label: 'Health Quiz' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id)
                      document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`px-4 py-2 rounded-full transition-all ${
                      activeTab === tab.id
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Main Content */}
            <div className='p-8'>
              {/* Benefits Section */}
              <section id='benefits' className='mb-16'>
                <h2 className='mb-8 text-3xl font-bold text-center text-gray-900'>
                  Why Healthy Eating Will Change Your Life
                </h2>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                  <div className='p-6 transition-transform bg-white border border-green-200 shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1'>
                    <div className='flex items-center justify-center w-12 h-12 mb-4 bg-green-100 rounded-lg'>
                      <span className='text-2xl'>⚡</span>
                    </div>
                    <h3 className='mb-3 text-xl font-semibold text-green-800'>
                      Unstoppable Energy
                    </h3>
                    <p className='text-gray-700'>
                      &quot;After switching to whole foods, I stopped needing that 3 PM coffee. My
                      energy levels are now consistent throughout the day,&quot; shares Mark, 41.
                    </p>
                  </div>

                  <div className='p-6 transition-transform bg-white border border-blue-200 shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1'>
                    <div className='flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg'>
                      <span className='text-2xl'>💭</span>
                    </div>
                    <h3 className='mb-3 text-xl font-semibold text-blue-800'>Mental Clarity</h3>
                    <p className='text-gray-700'>
                      &quot;The brain fog lifted within two weeks of cutting processed foods.
                      I&apos;m more focused and productive than I&apos;ve been in years,&quot; says
                      Jennifer, 29.
                    </p>
                  </div>

                  <div className='p-6 transition-transform bg-white border border-purple-200 shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1'>
                    <div className='flex items-center justify-center w-12 h-12 mb-4 bg-purple-100 rounded-lg'>
                      <span className='text-2xl'>🛡️</span>
                    </div>
                    <h3 className='mb-3 text-xl font-semibold text-purple-800'>
                      Disease Prevention
                    </h3>
                    <p className='text-gray-700'>
                      &quot;My cholesterol normalized without medication after six months of
                      Mediterranean-style eating,&quot; reports David, 55.
                    </p>
                  </div>
                </div>
              </section>

              {/* Wellness Principles Section */}
              <section id='principles' className='mb-16'>
                <h2 className='mb-8 text-3xl font-bold text-center text-gray-900'>
                  Core Wellness Principles for Healthy Living
                </h2>

                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  {wellnessPrinciples.map((principle, index) => (
                    <div key={index} className='p-6 bg-white border border-green-200 rounded-xl'>
                      <h3 className='mb-3 text-xl font-semibold text-green-800'>
                        {principle.title}
                      </h3>
                      <p className='text-gray-700'>{principle.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Success Stories Section */}
              <section id='stories' className='mb-16'>
                <h2 className='mb-8 text-3xl font-bold text-center text-gray-900'>
                  Real Transformations Through Healthy Eating
                </h2>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                  {successStories.map((story, index) => (
                    <div
                      key={index}
                      className='p-6 bg-white border border-gray-200 shadow-sm rounded-xl'
                    >
                      <div className='flex items-center mb-4'>
                        <div className='flex items-center justify-center w-12 h-12 font-bold text-white rounded-full bg-gradient-to-r from-blue-400 to-green-400'>
                          <Image
                            src={story.image}
                            alt={story.alt}
                            loading='lazy'
                            width={100}
                            height={100}
                            className='rounded-full'
                          />
                        </div>
                        <div className='ml-4'>
                          <h3 className='font-semibold text-gray-800'>{story.name}</h3>
                          <p className='text-sm text-green-600'>{story.achievement}</p>
                        </div>
                      </div>
                      <p className='italic text-gray-700'>&quot;{story.story}&quot;</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Food Comparison Section */}
              <section id='comparison' className='mb-16'>
                <h2 className='mb-8 text-3xl font-bold text-center text-gray-900'>
                  Healthy vs Junk: The Real Story
                </h2>

                <div className='p-6 mb-8 bg-gradient-to-r from-red-50 to-green-50 rounded-2xl'>
                  <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                    <div className='p-6 bg-white rounded-lg shadow-sm'>
                      <h3 className='mb-4 text-2xl font-bold text-red-600'>The Junk Food Trap</h3>
                      <div className='space-y-4'>
                        <div className='flex items-start'>
                          <span className='px-2 py-1 mr-3 text-red-800 bg-red-100 rounded'>✗</span>
                          <div>
                            <h4 className='font-semibold text-gray-800'>Immediate Energy Crash</h4>
                            <p className='text-sm text-gray-700'>
                              Sugar spikes followed by crashes leave you tired and craving more
                            </p>
                          </div>
                        </div>
                        <div className='flex items-start'>
                          <span className='px-2 py-1 mr-3 text-red-800 bg-red-100 rounded'>✗</span>
                          <div>
                            <h4 className='font-semibold text-gray-800'>Hidden Health Costs</h4>
                            <p className='text-sm text-gray-700'>
                              Increased inflammation, digestive issues, and long-term disease risk
                            </p>
                          </div>
                        </div>
                        <div className='flex items-start'>
                          <span className='px-2 py-1 mr-3 text-red-800 bg-red-100 rounded'>✗</span>
                          <div>
                            <h4 className='font-semibold text-gray-800'>Addictive Patterns</h4>
                            <p className='text-sm text-gray-700'>
                              Designed to keep you coming back for more, creating dependency
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='p-6 bg-white rounded-lg shadow-sm'>
                      <h3 className='mb-4 text-2xl font-bold text-green-600'>
                        The Whole Food Advantage
                      </h3>
                      <div className='space-y-4'>
                        <div className='flex items-start'>
                          <span className='px-2 py-1 mr-3 text-green-800 bg-green-100 rounded'>
                            ✓
                          </span>
                          <div>
                            <h4 className='font-semibold text-gray-800'>Sustained Energy</h4>
                            <p className='text-sm text-gray-700'>
                              Complex carbs and fiber provide steady energy for hours
                            </p>
                          </div>
                        </div>
                        <div className='flex items-start'>
                          <span className='px-2 py-1 mr-3 text-green-800 bg-green-100 rounded'>
                            ✓
                          </span>
                          <div>
                            <h4 className='font-semibold text-gray-800'>Healing Properties</h4>
                            <p className='text-sm text-gray-700'>
                              Anti-inflammatory compounds and antioxidants repair your body
                            </p>
                          </div>
                        </div>
                        <div className='flex items-start'>
                          <span className='px-2 py-1 mr-3 text-green-800 bg-green-100 rounded'>
                            ✓
                          </span>
                          <div>
                            <h4 className='font-semibold text-gray-800'>Natural Satisfaction</h4>
                            <p className='text-sm text-gray-700'>
                              Nutrient-dense foods satisfy hunger and reduce cravings
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calorie Comparison */}
                <div className='p-6 bg-yellow-50 rounded-xl'>
                  <h3 className='mb-4 text-xl font-bold text-yellow-800'>
                    The Calorie Density Reality
                  </h3>
                  <div className='space-y-3'>
                    <div className='flex items-center justify-between p-3 bg-white rounded-lg'>
                      <span className='font-medium'>Big Mac Meal</span>
                      <span className='px-3 py-1 text-red-700 bg-red-100 rounded-full'>
                        1,120 kcal
                      </span>
                      <span className='text-sm text-gray-600'>Low nutrients, high calories</span>
                    </div>
                    <div className='flex items-center justify-between p-3 bg-white rounded-lg'>
                      <span className='font-medium'>Salmon with Quinoa & Veggies</span>
                      <span className='px-3 py-1 text-green-700 bg-green-100 rounded-full'>
                        450 kcal
                      </span>
                      <span className='text-sm text-gray-600'>
                        High nutrients, moderate calories
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Healthy Eating Tips Section */}
              <section className='mb-16'>
                <h2 className='mb-8 text-3xl font-bold text-center text-gray-900'>
                  Practical Healthy Eating Tips for Daily Life
                </h2>
                <div className='p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl'>
                  <div className='flex flex-col items-start gap-8 md:flex-row'>
                    <div className='flex-1'>
                      <Image
                        src='/images/simple-changes-healthy-eating.png'
                        alt='Healthy foods'
                        width={500}
                        height={300}
                        className='w-auto h-auto mx-auto rounded-lg'
                        loading='lazy'
                      />
                    </div>
                    <div className='flex-1'>
                      <h3 className='mb-4 text-2xl font-bold text-blue-800'>
                        Simple Changes, Profound Results
                      </h3>
                      <p className='mb-6 text-gray-700'>
                        &quot;Healthy eating doesn&apos;t have to be complicated. These simple
                        adjustments can transform your health. The key is consistency and making
                        sustainable changes that fit your lifestyle.&quot;
                      </p>
                      <div className='space-y-3'>
                        {healthyEatingTips.map((tip, index) => (
                          <div key={index} className='flex items-start'>
                            <span className='px-2 py-1 mr-3 text-blue-800 bg-blue-100 rounded'>
                              💡
                            </span>
                            <p className='text-gray-700'>{tip}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Transition Plan Section */}
              <section id='transition' className='mb-16'>
                <h2 className='mb-8 text-3xl font-bold text-center text-gray-900'>
                  Your 7-Day Healthy Eating Start Plan
                </h2>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                  <div className='p-6 bg-white border border-blue-200 rounded-xl'>
                    <h3 className='mb-4 text-xl font-bold text-blue-700'>Step-by-Step Guide</h3>
                    <div className='space-y-4'>
                      <div className='p-4 rounded-lg bg-blue-50'>
                        <h4 className='font-bold text-blue-800'>Day 1-2: Awareness Phase</h4>
                        <p className='text-blue-700'>
                          Track everything you eat without judgment. Notice your hunger patterns.
                        </p>
                      </div>
                      <div className='p-4 rounded-lg bg-green-50'>
                        <h4 className='font-bold text-green-800'>
                          Day 3-4: Add, Don&apos;t Subtract
                        </h4>
                        <p className='text-green-700'>
                          Add one vegetable to each meal. Drink an extra glass of water.
                        </p>
                      </div>
                      <div className='p-4 rounded-lg bg-purple-50'>
                        <h4 className='font-bold text-purple-800'>Day 5-7: Smart Swaps</h4>
                        <p className='text-purple-700'>
                          Replace one processed snack with fruit or nuts. Cook one meal at home.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl'>
                    <h3 className='mb-4 text-xl font-bold text-green-700'>Motivational Moments</h3>
                    <div className='space-y-4'>
                      <div className='p-4 bg-white rounded-lg shadow-sm'>
                        <p className='italic text-gray-700'>
                          &quot;I started by swapping soda for sparkling water with lemon. Three
                          months later, I&apos;ve lost 15 pounds without feeling deprived.&quot;
                        </p>
                        <p className='mt-2 text-sm text-gray-600'>- Michael, 34</p>
                      </div>
                      <div className='p-4 bg-white rounded-lg shadow-sm'>
                        <p className='italic text-gray-700'>
                          &quot;Meal prepping on Sundays saved me. When I&apos;m tired after work,
                          having healthy food ready stops me from ordering pizza.&quot;
                        </p>
                        <p className='mt-2 text-sm text-gray-600'>- Sarah, 28</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Allergy-Friendly Section */}
              <section id='allergies' className='mb-16'>
                <h2 className='mb-8 text-3xl font-bold text-center text-gray-900'>
                  Allergy-Friendly Eating Tips
                </h2>

                <div className='p-8 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl'>
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                    {allergyFriendlyTips.map((tip, index) => (
                      <div key={index} className='p-6 bg-white rounded-lg shadow-sm'>
                        <div className='flex items-center justify-center w-12 h-12 mb-4 text-2xl bg-orange-100 rounded-lg'>
                          {tip.icon}
                        </div>
                        <h3 className='mb-3 font-semibold text-orange-800'>{tip.title}</h3>
                        <p className='text-sm text-gray-700'>{tip.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className='p-6 mt-6 bg-white rounded-lg'>
                    <h3 className='mb-4 text-xl font-bold text-gray-800'>
                      Understanding Food Allergies & Intolerances
                    </h3>
                    <p className='mb-4 text-gray-700'>
                      Food allergies affect millions of people worldwide. Common allergens include
                      dairy, nuts, gluten, eggs, and shellfish. The key to managing food allergies
                      while maintaining a healthy diet is learning safe alternatives that provide
                      similar nutritional benefits.
                    </p>
                    <div className='p-4 rounded-lg bg-yellow-50'>
                      <p className='text-sm text-yellow-800'>
                        <strong>Note:</strong> While some principles of macrobiotic eating can be
                        helpful for those with allergies (like emphasizing whole foods), always
                        consult with a healthcare provider for personalized allergy management
                        advice.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Recipes Section */}
              <section id='recipes' className='mb-16'>
                <h2 className='mb-8 text-3xl font-bold text-center text-gray-900'>
                  Simple & Delicious Healthy Recipes
                </h2>

                <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
                  {recipes.map(recipe => (
                    <div
                      key={recipe.id}
                      className={`p-6 bg-white border rounded-xl cursor-pointer transition-all ${
                        selectedRecipe === recipe.id
                          ? 'border-green-500 shadow-lg'
                          : 'border-gray-200 hover:shadow-md'
                      }`}
                      onClick={() => setSelectedRecipe(recipe.id)}
                    >
                      <div>
                        <Image
                          src={recipe.image}
                          alt={recipe.alt || ''}
                          loading='lazy'
                          width={400}
                          height={400}
                        />
                      </div>
                      <h3 className='mb-3 text-xl font-bold text-green-700'>{recipe.name}</h3>
                      <div className='flex items-center mb-3 text-sm text-gray-600'>
                        <span>⏱️ {recipe.prepTime} min</span>
                        <span className='mx-2'>•</span>
                        <span>🔥 {recipe.calories} kcal</span>
                      </div>
                      <div className='mb-4'>
                        <h4 className='mb-2 font-semibold text-gray-800'>Ingredients:</h4>
                        <ul className='space-y-1 text-sm text-gray-700'>
                          {recipe.ingredients.map((ingredient, idx) => (
                            <li key={idx}>• {ingredient}</li>
                          ))}
                        </ul>
                      </div>
                      <p className='text-sm text-gray-700'>
                        <span className='font-semibold'>Benefits:</span> {recipe.benefits}
                      </p>
                      <p className='mt-2 text-xs text-orange-600'>
                        <strong>Allergy Info:</strong> {recipe.allergyInfo}
                      </p>
                      {selectedRecipe === recipe.id && (
                        <div className='p-3 mt-4 rounded-lg bg-green-50'>
                          <p className='text-sm font-semibold text-green-700'>
                            💡 Tip: Double the recipe and save half for tomorrow&apos;s lunch!
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Interactive Quiz */}
              <section id='quiz' className='mb-16'>
                <h2 className='mb-8 text-3xl font-bold text-center text-gray-900'>
                  What&apos;s Your Eating Style?
                </h2>

                <div className='p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl'>
                  {!quizResult ? (
                    <div>
                      <h3 className='mb-6 text-xl font-semibold text-center text-purple-800'>
                        Take this 2-minute quiz to discover your eating personality
                      </h3>
                      <div className='space-y-6'>
                        {quizQuestions.map((q, index) => (
                          <div key={q.id} className='p-6 bg-white rounded-lg shadow-sm'>
                            <h4 className='mb-4 font-semibold text-gray-800'>
                              {index + 1}. {q.question}
                            </h4>
                            <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                              {q.options.map((option, optIndex) => (
                                <button
                                  key={optIndex}
                                  onClick={() => handleQuizAnswer(q.id, option.score)}
                                  className={`p-3 text-left rounded-lg border transition-all ${
                                    quizAnswers[q.id] === option.score
                                      ? 'border-purple-500 bg-purple-50'
                                      : 'border-gray-200 hover:border-purple-300'
                                  }`}
                                >
                                  {option.text}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                        <button
                          onClick={calculateQuizResult}
                          disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                          className='w-full py-4 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                          Get My Results
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className='text-center'>
                      <h3 className='mb-4 text-2xl font-bold text-purple-800'>
                        Your Eating Style Profile
                      </h3>
                      {quizResult === 'excellent' && (
                        <div className='p-6 bg-green-100 rounded-lg'>
                          <div className='mb-4 text-6xl'>🎉</div>
                          <h4 className='mb-3 text-xl font-bold text-green-800'>
                            Health Champion!
                          </h4>
                          <p className='mb-4 text-green-700'>
                            Your eating habits are excellent! You have a strong foundation in
                            healthy eating principles. Keep up the great work and consider exploring
                            new healthy recipes to maintain your motivation.
                          </p>
                        </div>
                      )}
                      {quizResult === 'good' && (
                        <div className='p-6 bg-yellow-100 rounded-lg'>
                          <div className='mb-4 text-6xl'>👍</div>
                          <h4 className='mb-3 text-xl font-bold text-yellow-800'>
                            Well on Your Way!
                          </h4>
                          <p className='mb-4 text-yellow-700'>
                            You have a solid foundation with room for improvement. Focus on adding
                            more vegetables to your meals and reducing processed foods. Small
                            consistent changes will make a big difference!
                          </p>
                        </div>
                      )}
                      {quizResult === 'needs_improvement' && (
                        <div className='p-6 bg-red-100 rounded-lg'>
                          <div className='mb-4 text-6xl'>💪</div>
                          <h4 className='mb-3 text-xl font-bold text-red-800'>Ready for Change!</h4>
                          <p className='mb-4 text-red-700'>
                            You have great opportunities to improve your health through better
                            eating habits. Start with one small change this week - like adding a
                            vegetable to every meal or drinking more water. Every positive change
                            counts!
                          </p>
                        </div>
                      )}
                      <button
                        onClick={() => {
                          setQuizResult(null)
                          setQuizAnswers({})
                        }}
                        className='px-6 py-2 mt-4 font-semibold text-purple-700 bg-white border border-purple-300 rounded-lg hover:bg-purple-50'
                      >
                        Retake Quiz
                      </button>
                    </div>
                  )}
                </div>
              </section>

              {/* Related Articles Section */}
              <section className='mt-16'>
                <div className='p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl'>
                  <h2 className='mb-8 text-3xl font-bold text-center text-gray-900'>
                    Continue Your Health Journey
                  </h2>
                  <p className='mb-8 text-lg text-center text-gray-700'>
                    Explore more articles to deepen your understanding of healthy living and
                    nutrition.
                  </p>

                  <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {/* Dieta Page Link */}
                    <a
                      href='/maqolalar/dieta'
                      className='block p-6 transition-all bg-white border border-green-200 rounded-xl hover:shadow-lg hover:-translate-y-1'
                    >
                      <div className='flex items-center justify-center w-12 h-12 mb-4 bg-green-100 rounded-lg'>
                        <span className='text-2xl'>🥗</span>
                      </div>
                      <h3 className='mb-3 text-xl font-bold text-green-800'>
                        Balanced Nutrition Principles
                      </h3>
                      <p className='mb-4 text-gray-600'>
                        Learn about macronutrients, portion control, and creating sustainable eating
                        habits for long-term health.
                      </p>
                      <div className='flex items-center text-green-600'>
                        <span className='text-sm font-medium'>Read Guide</span>
                        <svg className='w-4 h-4 ml-2' fill='currentColor' viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                    </a>

                    {/* Togri-ovqatlanish Page Link */}
                    <a
                      href='/maqolalar/togri-ovqatlanish'
                      className='block p-6 transition-all bg-white border border-blue-200 rounded-xl hover:shadow-lg hover:-translate-y-1'
                    >
                      <div className='flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg'>
                        <span className='text-2xl'>🍲</span>
                      </div>
                      <h3 className='mb-3 text-xl font-bold text-blue-800'>
                        Healthy Uzbek Cuisine
                      </h3>
                      <p className='mb-4 text-gray-600'>
                        Discover how to make traditional Uzbek dishes like plov, manti, and lagman
                        healthier without losing flavor.
                      </p>
                      <div className='flex items-center text-blue-600'>
                        <span className='text-sm font-medium'>Explore Recipes</span>
                        <svg className='w-4 h-4 ml-2' fill='currentColor' viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                    </a>

                    {/* Vazn-yoqotish Page Link */}
                    <a
                      href='/maqolalar/vazn-yoqotish'
                      className='block p-6 transition-all bg-white border border-purple-200 rounded-xl hover:shadow-lg hover:-translate-y-1'
                    >
                      <div className='flex items-center justify-center w-12 h-12 mb-4 bg-purple-100 rounded-lg'>
                        <span className='text-2xl'>⚖️</span>
                      </div>
                      <h3 className='mb-3 text-xl font-bold text-purple-800'>
                        Science-Based Weight Loss
                      </h3>
                      <p className='mb-4 text-gray-600'>
                        10 proven methods for effective weight loss through nutrition, exercise, and
                        lifestyle changes.
                      </p>
                      <div className='flex items-center text-purple-600'>
                        <span className='text-sm font-medium'>Learn Methods</span>
                        <svg className='w-4 h-4 ml-2' fill='currentColor' viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </section>

              {/* Final Inspiration */}
              <div className='p-8 text-center text-white bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl'>
                <h3 className='mb-4 text-2xl font-bold'>Your Health Transformation Starts Today</h3>
                <p className='mb-4 text-lg'>
                  Remember:{' '}
                  <span className='italic'>
                    &quot;Healthy eating is a journey, not a destination. Every positive choice
                    moves you forward.&quot;
                  </span>
                </p>
                <div className='p-4 mt-4 bg-white rounded-lg bg-opacity-20'>
                  <p className='text-sm'>
                    <strong>Start Small:</strong> Choose one healthy change to implement this week.
                    Consistency beats perfection every time.
                  </p>
                </div>
              </div>
            </div>

            {/* Article Footer */}
            <div className='p-8 border-t border-gray-100 bg-gray-50'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                <div className='flex flex-row gap-5'>
                  <a
                    href='/maqolalar'
                    className='inline-flex items-center px-4 py-2 mb-4 text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 md:mb-0'
                  >
                    <svg
                      className='w-4 h-4 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M10 19l-7-7m0 0l7-7m-7 7h18'
                      ></path>
                    </svg>
                    Back to all articles
                  </a>
                  <a
                    href={'/'}
                    className='inline-flex items-center px-4 py-2 mb-4 text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 md:mb-0'
                  >
                    <svg
                      className='w-4 h-4 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M10 19l-7-7m0 0l7-7m-7 7h18'
                      ></path>
                    </svg>
                    Back to home
                  </a>
                </div>

                <div className='flex space-x-4'>
                  <span className='text-sm text-gray-500'>Share this guide:</span>
                  <button
                    className='text-blue-600 hover:text-blue-800'
                    aria-label='Share on Facebook'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </button>
                  <button
                    className='text-blue-400 hover:text-blue-600'
                    aria-label='Share on Twitter'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className='max-w-6xl p-6 mx-auto mt-6 bg-white rounded-lg shadow-sm'>
          <h3 className='mb-4 text-xl font-bold text-gray-900'>Healthy Eating Resources</h3>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <h4 className='mb-2 font-semibold text-gray-800'>Recommended Reading:</h4>
              <ul className='space-y-2 text-sm text-blue-600'>
                <li>
                  <a href='/retseptlar' className='hover:underline'>
                    The Complete Guide to Whole Foods Cooking
                  </a>
                </li>
                <li>
                  <a href='/mashqlar' className='hover:underline'>
                    Exercises and their benefits
                  </a>
                </li>
                <li>
                  <a href='/maqolalar/soglomlik' className='hover:underline'>
                    Basic principles for wellbeing and healthy lifestyle
                  </a>
                </li>
                <li>
                  <a href='/maqolalar/psixologiya' className='hover:underline'>
                    Psychology in daily life
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='mb-2 font-semibold text-gray-800'>Additional Support:</h4>
              <p className='text-sm text-gray-700'>
                For personalized nutrition advice, consider consulting with a registered dietitian
                or nutritionist who can help you create an eating plan tailored to your specific
                needs and goals.
              </p>
            </div>
          </div>
        </div>
        <p className='mt-4 text-sm text-center text-gray-500'>
          This content is for educational purposes only. Always consult with healthcare
          professionals before making significant dietary changes, especially if you have existing
          health conditions or food allergies.
        </p>
      </main>
    </>
  )
}
