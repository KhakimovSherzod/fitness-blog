'use client'
import Image from 'next/image'
import Script from 'next/script'
import { useState } from 'react'

// Type definitions
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive'
type GoalType = 'lose' | 'maintain' | 'gain'
type ActiveTabType = 'protein' | 'fats' | 'carbs' | 'fiber' | 'water'
type QuizResultType = 'excellent' | 'good' | 'needs-improvement' | null

interface CalculatorState {
  weight: string
  height: string
  age: string
  activity: ActivityLevel
  goal: GoalType
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

const DietaPage = () => {
  const [activeTab, setActiveTab] = useState<ActiveTabType>('protein')
  const [calculator, setCalculator] = useState<CalculatorState>({
    weight: '',
    height: '',
    age: '',
    activity: 'moderate',
    goal: 'maintain',
  })
  const [result, setResult] = useState<number | null>(null)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({})
  const [quizResult, setQuizResult] = useState<QuizResultType>(null)

  const calculateCalories = (): void => {
    const weight = parseFloat(calculator.weight)
    const height = parseFloat(calculator.height)
    const age = parseFloat(calculator.age)

    if (weight && height && age) {
      let bmr = 10 * weight + 6.25 * height - 5 * age + 5

      const multipliers: Record<ActivityLevel, number> = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9,
      }

      bmr *= multipliers[calculator.activity]

      const goalMultipliers: Record<GoalType, number> = {
        lose: 0.85,
        maintain: 1,
        gain: 1.15,
      }

      const calories = Math.round(bmr * goalMultipliers[calculator.goal])
      setResult(calories)
    }
  }

  const nutritionQuiz: QuizQuestion[] = [
    {
      id: 1,
      question: 'How would you describe your typical eating pattern?',
      options: [
        { text: 'I eat 3 main meals with occasional snacks', score: 3 },
        { text: 'I skip breakfast and eat larger meals later', score: 1 },
        { text: 'I eat small meals every 2-3 hours', score: 2 },
        { text: 'I follow intermittent fasting (16:8 method)', score: 4 },
      ],
    },
    {
      id: 2,
      question: "What's your biggest challenge with healthy eating?",
      options: [
        { text: 'Finding time to prepare healthy meals', score: 1 },
        { text: 'Cravings for sweets and processed foods', score: 2 },
        { text: 'Eating enough protein and vegetables', score: 3 },
        { text: 'Portion control and overeating', score: 4 },
      ],
    },
    {
      id: 3,
      question: 'How do you approach hydration throughout the day?',
      options: [
        { text: 'I drink when I feel thirsty', score: 1 },
        { text: 'I aim for 6-8 glasses of water daily', score: 3 },
        { text: 'I track my water intake with an app', score: 4 },
        { text: 'I mostly drink tea/coffee, little plain water', score: 2 },
      ],
    },
  ]

  const handleQuizAnswer = (questionId: number, score: number): void => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: score }))
  }

  const calculateQuizResult = (): void => {
    const totalScore = Object.values(quizAnswers).reduce((acc, score) => acc + score, 0)

    if (totalScore >= 10) {
      setQuizResult('excellent')
    } else if (totalScore >= 7) {
      setQuizResult('good')
    } else {
      setQuizResult('needs-improvement')
    }
  }

  const tabs: { id: ActiveTabType; label: string; icon: string }[] = [
    { id: 'protein', label: 'Protein', icon: '🥩' },
    { id: 'fats', label: 'Fats', icon: '🥑' },
    { id: 'carbs', label: 'Carbs', icon: '🍠' },
    { id: 'fiber', label: 'Fiber', icon: '🥦' },
    { id: 'water', label: 'Water', icon: '💧' },
  ]

  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://vido.fitlife.uz/maqolalar/dieta#article',
        headline: 'Nutrition Made Simple: Your Guide to Eating Well Without the Stress',
        description:
          'Practical nutrition advice from a real specialist. No fads, no judgment - just honest talk about food that works for real life.',
        image: [
          'https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?w=1200&auto=format&fit=crop&q=80',
        ],
        author: {
          '@type': 'Person',
          name: 'Dr. Ali Hasanov',
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://vido.fitlife.uz/#organization',
          name: 'VIDO FitLife',
          logo: {
            '@type': 'ImageObject',
            url: 'https://vido.fitlife.uz/og-image.png',
          },
        },
        datePublished: '2025-09-17',
        dateModified: '2025-09-17',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://vido.fitlife.uz/maqolalar/dieta',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://vido.fitlife.uz/maqolalar/dieta#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: "What's a healthy calorie deficit for weight loss?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A deficit of 300-500 calories daily typically leads to sustainable weight loss of 0.5-1kg per week. More aggressive deficits can cause muscle loss and metabolic adaptation.',
            },
          },
          {
            '@type': 'Question',
            name: 'How important is meal timing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'While total daily intake matters most, consistent meal timing can help regulate hunger hormones and energy levels. I recommend most patients eat within an hour of waking and space meals 3-5 hours apart based on their schedule and hunger cues.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are supplements necessary?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Most nutrients should come from food first. However, some supplements can be beneficial: Vitamin D (especially in winter), Omega-3s (if you don't eat fatty fish regularly), and possibly a probiotic for gut health. Always consult with a healthcare provider before starting supplements.",
            },
          },
          {
            '@type': 'Question',
            name: 'How does metabolism really work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Your metabolism isn't a fixed number - it's influenced by muscle mass, activity level, diet, sleep, and even gut health. Building muscle through strength training is one of the most effective ways to boost resting metabolism.",
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Script
        type='application/ld+json'
        strategy='afterInteractive'
        id='dieta-page-jsonld'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonld),
        }}
      />

      <main className='min-h-screen py-8 bg-gradient-to-b from-blue-50 to-white'>
        <div className='container max-w-4xl px-4 mx-auto'>
          <article className='overflow-hidden bg-white shadow-xl rounded-2xl'>
            {/* Header */}
            <header className='relative'>
              <div className='absolute z-10 top-4 left-4'>
                <span className='inline-flex items-center px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full'>
                  Diet & Nutrition
                </span>
              </div>
              <div className='relative h-64 md:h-96'>
                <Image
                  src='https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?w=1200&auto=format&fit=crop&q=80'
                  alt='Colorful healthy food spread'
                  fill
                  className='object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-blue-900 opacity-40'></div>
              </div>
              <div className='absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent'>
                <h1 className='mb-4 text-3xl font-bold md:text-5xl'>
                  Nutrition Made Simple: Your Guide to Eating Well Without the Stress
                </h1>
                <div className='flex flex-wrap items-center gap-4 text-sm text-blue-100'>
                  <span className='flex items-center'>
                    <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Dr. Ali Hasanov
                  </span>
                  <span className='flex items-center'>
                    <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Sep 17, 2025
                  </span>
                  <span className='flex items-center'>
                    <svg className='w-4 h-4 mr-1' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                        clipRule='evenodd'
                      />
                    </svg>
                    20 min read
                  </span>
                </div>
              </div>
            </header>

            <div className='p-6 md:p-8'>
              {/* Author intro */}
              <div className='flex items-start p-6 mb-8 bg-white border border-blue-200 rounded-xl'>
                <div className='flex-shrink-0 mr-4'>
                  <div className='flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full'>
                    <span className='text-2xl'>👨‍⚕️</span>
                  </div>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-800'>Hey, I'm Dr. Ali</h3>
                  <p className='mb-2 text-sm text-blue-600'>Nutrition Specialist, 12+ years</p>
                  <p className='text-sm text-gray-600'>
                    I've spent over a decade helping people figure out this whole &quot;eating healthy&quot;
                    thing. And honestly? Most of what you see on social media is garbage. Let me save
                    you the confusion and tell you what actually works.
                  </p>
                </div>
              </div>

              {/* Opening */}
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Look, I get it. Every week there&apos;s a new superfood, a new diet to try, a new reason
                why everything you&apos;ve been eating is wrong. It&apos;s exhausting. Half my patients come
                to me stressed out and confused, not sure what to believe anymore.
              </p>

              <p className="mb-6 text-gray-700">
                So let&apos;s hit reset. Forget the detox teas and the celebrity diets. Let&apos;s talk about
                real food, real life, and sustainable habits that actually stick. No judgment, no
                guilt trips, no &quot;you must eat kale three times a day&quot; nonsense.
              </p>

              {/* Quick tips */}
              <div className="p-6 mb-8 border-l-4 border-yellow-400 rounded-lg bg-yellow-50">
                <h3 className="mb-3 text-lg font-semibold text-yellow-800">
                  💡 A Few Things I&apos;ve Learned After 12 Years of This
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <p className="mb-2 text-sm font-medium text-yellow-800">For weight loss:</p>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      <li>• Start meals with water and veggies (works every time)</li>
                      <li>• Protein at breakfast changes everything</li>
                      <li>• Sleep matters more than you think - tired brains crave sugar</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-yellow-800">For energy & health:</p>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      <li>• Eat the rainbow - different colors = different nutrients</li>
                      <li>• Don&apos;t fear fat - your brain needs it</li>
                      <li>• Consistency beats perfection every single time</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* What you'll learn */}
              <div className="p-6 mb-8 border border-green-200 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                <h3 className="mb-3 text-xl font-bold text-gray-800">What We&apos;ll Cover:</h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <ul className="space-y-2">
                    <li className="flex items-start">✓ Why protein is your best friend</li>
                    <li className="flex items-start">✓ Carbs aren&apos;t the enemy (seriously)</li>
                    <li className="flex items-start">✓ How to eat without obsessing</li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">✓ Simple meal planning that takes 10 minutes</li>
                    <li className="flex items-start">✓ What to do when you mess up (you will, it&apos;s fine)</li>
                  </ul>
                </div>
              </div>

              {/* Macronutrients */}
              <div className='mb-12'>
                <h2 className='mb-4 text-3xl font-bold text-gray-800'>
                  🥗 Let&apos;s Talk About What&apos;s Actually On Your Plate
                </h2>
                <p className='mb-6 text-gray-700'>
                  Instead of thinking about &quot;macros&quot; like some kind of scientist, think of it this
                  way: Your body needs different types of fuel to run well. Here&apos;s what actually
                  matters.
                </p>

                <div className='flex mb-6 space-x-2 overflow-x-auto'>
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      <span className='mr-1'>{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className='p-6 border border-gray-200 rounded-xl bg-gray-50'>
                  {activeTab === 'protein' && (
                    <div>
                      <h3 className='mb-3 text-2xl font-bold text-gray-800'>
                        Protein: Why You Need More Than You Think
                      </h3>
                      <p className='mb-4 text-gray-700'>
                        Every time I see a new patient, I ask about protein. And 9 times out of 10,
                        they&apos;re not eating enough. Protein keeps you full, helps maintain muscle
                        (which burns calories even when you&apos;re sleeping), and honestly? It just
                        makes everything work better.
                      </p>
                      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <div className='p-4 bg-white rounded-lg'>
                          <h4 className='mb-2 font-semibold text-blue-700'>Good sources:</h4>
                          <ul className='space-y-1 text-sm'>
                            <li>• Chicken or turkey</li>
                            <li>• Fish (canned tuna counts!)</li>
                            <li>• Eggs</li>
                            <li>• Greek yogurt</li>
                            <li>• Beans and lentils (cheap and effective)</li>
                          </ul>
                        </div>
                        <div className='p-4 bg-white rounded-lg'>
                          <h4 className='mb-2 font-semibold text-green-700'>My tip:</h4>
                          <p className='text-sm text-gray-600'>
                            &quot;Aim for a palm-sized portion of protein at each meal. That&apos;s it. No
                            need to weigh everything like a mad scientist.&quot;
                          </p>
                          <p className='mt-2 text-xs text-gray-500'>
                            Most people need 1.2-1.6g per kg of body weight. More if you&apos;re active.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'fats' && (
                    <div>
                      <h3 className='mb-3 text-2xl font-bold text-gray-800'>
                        Fats: The Good, The Bad, and The &quot;Wait, Fats Are Good?!&quot;
                      </h3>
                      <p className='mb-4 text-gray-700'>
                        Remember when everyone was terrified of fat? Yeah, that was a mistake. Your
                        brain is literally 60% fat. You need it. The key is choosing the right kinds
                        and not going overboard (because calories still count).
                      </p>
                      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <div className='p-4 bg-white rounded-lg'>
                          <h4 className='mb-2 font-semibold text-blue-700'>Great choices:</h4>
                          <ul className='space-y-1 text-sm'>
                            <li>• Avocado (1/4 of one is plenty)</li>
                            <li>• Olive oil (great for cooking)</li>
                            <li>• Nuts (small handful)</li>
                            <li>• Fatty fish like salmon</li>
                          </ul>
                        </div>
                        <div className='p-4 bg-white rounded-lg'>
                          <h4 className='mb-2 font-semibold text-red-700'>Go easy on:</h4>
                          <ul className='space-y-1 text-sm'>
                            <li>• Fried foods</li>
                            <li>• Packaged pastries</li>
                            <li>• Too much butter</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'carbs' && (
                    <div>
                      <h3 className='mb-3 text-2xl font-bold text-gray-800'>
                        Carbs: The Most Misunderstood Food Group
                      </h3>
                      <p className='mb-4 text-gray-700'>
                        I can&apos;t tell you how many patients have told me they &quot;quit carbs.&quot; And then
                        they&apos;re exhausted, cranky, and craving sugar like crazy. Here&apos;s the secret:
                        Your body runs on carbs. The trick is choosing the right ones.
                      </p>
                      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <div className='p-4 bg-white rounded-lg'>
                          <h4 className='mb-2 font-semibold text-green-700'>Eat these:</h4>
                          <ul className='space-y-1 text-sm'>
                            <li>• Oats and whole grains</li>
                            <li>• Sweet potatoes</li>
                            <li>• Brown rice</li>
                            <li>• Fruits (whole fruit, not juice)</li>
                            <li>• Vegetables (all of them)</li>
                          </ul>
                        </div>
                        <div className='p-4 bg-white rounded-lg'>
                          <h4 className='mb-2 font-semibold text-red-700'>Limit these:</h4>
                          <ul className='space-y-1 text-sm'>
                            <li>• Sugary drinks</li>
                            <li>• White bread and pastries</li>
                            <li>• Packaged snacks</li>
                          </ul>
                          <p className='mt-2 text-xs italic text-gray-500'>
                            Simple rule: If it comes in a package with a long ingredient list, it&apos;s
                            probably not helping you.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'fiber' && (
                    <div>
                      <h3 className='mb-3 text-2xl font-bold text-gray-800'>
                        Fiber: Your Gut&apos;s Best Friend
                      </h3>
                      <p className='mb-4 text-gray-700'>
                        Most people aren&apos;t getting nearly enough fiber. And then they wonder why
                        they&apos;re always hungry or, uh, having digestive issues. Fiber keeps you full,
                        feeds your good gut bacteria, and helps with pretty much everything.
                      </p>
                      <div className='p-4 bg-white rounded-lg'>
                        <h4 className='mb-2 font-semibold text-blue-700'>Easy ways to get more:</h4>
                        <ul className='space-y-1 text-sm'>
                          <li>• Berries with breakfast</li>
                          <li>• Beans in soups or salads</li>
                          <li>• An apple as a snack</li>
                          <li>• Swap white bread for whole grain</li>
                        </ul>
                        <p className='mt-3 text-sm text-gray-600'>
                          Aim for 30g a day. But start slowly and drink water - your gut needs time
                          to adjust.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'water' && (
                    <div>
                      <h3 className='mb-3 text-2xl font-bold text-gray-800'>
                        Water: Boring But Essential
                      </h3>
                      <p className='mb-4 text-gray-700'>
                        I know, you&apos;ve heard this a million times. But here&apos;s something you might
                        not know: Sometimes when you think you&apos;re hungry, you&apos;re actually just
                        thirsty. Drinking water before meals can help with portion control, and it
                        boosts your metabolism for about an hour after.
                      </p>
                      <div className='p-4 bg-white rounded-lg'>
                        <h4 className='mb-2 font-semibold text-blue-700'>Simple strategies:</h4>
                        <ul className='space-y-1 text-sm'>
                          <li>• Keep a water bottle on your desk</li>
                          <li>• Drink a glass before each meal</li>
                          <li>• Add lemon or cucumber if plain water is boring</li>
                        </ul>
                        <p className='mt-3 text-sm text-gray-600'>
                          Quick check: Pale yellow urine usually means you&apos;re hydrated. Dark yellow?
                          Drink up.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Quiz */}
              <section id='quiz' className='mb-12 scroll-mt-16'>
                <h2 className='mb-4 text-3xl font-bold text-gray-800'>
                  🤔 Quick Check: How&apos;s Your Eating?
                </h2>
                <p className='mb-6 text-gray-700'>
                  Two minutes. No right answers. Just a honest look at where you&apos;re at so you know
                  what to work on.
                </p>

                <div className='p-6 bg-white border border-purple-200 rounded-xl'>
                  {!quizResult ? (
                    <div>
                      <div className='space-y-6'>
                        {nutritionQuiz.map((q, index) => (
                          <div key={q.id} className='p-4 rounded-lg bg-purple-50'>
                            <h4 className='mb-3 font-semibold text-gray-800'>
                              {index + 1}. {q.question}
                            </h4>
                            <div className='grid grid-cols-1 gap-2'>
                              {q.options.map((option, optIndex) => (
                                <button
                                  key={optIndex}
                                  onClick={() => handleQuizAnswer(q.id, option.score)}
                                  className={`p-2 text-left text-sm rounded-lg border transition-all ${
                                    quizAnswers[q.id] === option.score
                                      ? 'border-purple-500 bg-purple-100'
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
                          disabled={Object.keys(quizAnswers).length < nutritionQuiz.length}
                          className='w-full py-3 font-semibold text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50'
                        >
                          See What I Should Focus On
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className='text-center'>
                      {quizResult === 'excellent' && (
                        <div className='p-6 bg-green-100 rounded-lg'>
                          <div className='mb-3 text-5xl'>🏆</div>
                          <h4 className='mb-2 text-xl font-bold text-green-800'>You&apos;re Killing It!</h4>
                          <p className='mb-3 text-green-700'>
                            Seriously, you&apos;re doing great. Your habits are solid. Just keep going
                            and maybe try one new vegetable this week.
                          </p>
                        </div>
                      )}
                      {quizResult === 'good' && (
                        <div className='p-6 bg-yellow-100 rounded-lg'>
                          <div className='mb-3 text-5xl'>💪</div>
                          <h4 className='mb-2 text-xl font-bold text-yellow-800'>Good Foundation!</h4>
                          <p className='mb-3 text-yellow-700'>
                            You know the basics. Pick one thing to improve - maybe more water or
                            adding protein to breakfast. Small changes add up.
                          </p>
                        </div>
                      )}
                      {quizResult === 'needs-improvement' && (
                        <div className='p-6 bg-blue-100 rounded-lg'>
                          <div className='mb-3 text-5xl'>🌱</div>
                          <h4 className='mb-2 text-xl font-bold text-blue-800'>We All Start Somewhere</h4>
                          <p className='mb-3 text-blue-700'>
                            No judgment here. Start with two things: drink more water and add
                            protein to one meal a day. That&apos;s it. Come back in a month and try again.
                          </p>
                        </div>
                      )}
                      <button
                        onClick={() => {
                          setQuizResult(null)
                          setQuizAnswers({})
                        }}
                        className='px-4 py-2 mt-3 text-sm font-semibold text-purple-700 bg-white border border-purple-300 rounded-lg hover:bg-purple-50'
                      >
                        Take Quiz Again
                      </button>
                    </div>
                  )}
                </div>
              </section>

              {/* Diet types */}
              <section id='diet-types' className='mb-12 scroll-mt-16'>
                <h2 className='mb-4 text-3xl font-bold text-gray-800'>
                  🍽️ Different Approaches That Actually Work
                </h2>
                <p className='mb-6 text-gray-700'>
                  There&apos;s no one &quot;right&quot; way to eat. Here are some approaches my patients have had
                  success with. Pick the one that doesn&apos;t make you miserable.
                </p>

                <div className='grid grid-cols-1 gap-4 mb-6 md:grid-cols-3'>
                  <div className='p-4 bg-white border border-green-200 rounded-xl'>
                    <h3 className='mb-2 text-lg font-bold text-green-800'>Weight Loss</h3>
                    <ul className='space-y-1 text-sm'>
                      <li>• Mediterranean style</li>
                      <li>• Lower carb (not no carb)</li>
                      <li>• Intermittent fasting (if it fits your life)</li>
                    </ul>
                  </div>
                  <div className='p-4 bg-white border border-blue-200 rounded-xl'>
                    <h3 className='mb-2 text-lg font-bold text-blue-800'>Muscle Building</h3>
                    <ul className='space-y-1 text-sm'>
                      <li>• More protein</li>
                      <li>• Slightly more calories</li>
                      <li>• Eat around workouts</li>
                    </ul>
                  </div>
                  <div className='p-4 bg-white border border-purple-200 rounded-xl'>
                    <h3 className='mb-2 text-lg font-bold text-purple-800'>Health & Longevity</h3>
                    <ul className='space-y-1 text-sm'>
                      <li>• Balanced, varied diet</li>
                      <li>• Lots of vegetables</li>
                      <li>• Mindful eating</li>
                    </ul>
                  </div>
                </div>

                <div className='p-4 border border-yellow-200 bg-yellow-50 rounded-xl'>
                  <p className='italic text-yellow-800'>
                    &quot;The patients who succeed long-term aren&apos;t the ones with perfect diets. They&apos;re
                    the ones who add good stuff instead of obsessing over removing &apos;bad&apos; stuff.&quot;
                  </p>
                </div>
              </section>

              {/* Calorie calculator */}
              <section id='calculator' className='mb-12 scroll-mt-16'>
                <h2 className='mb-4 text-3xl font-bold text-gray-800'>
                  🧮 Want a Rough Calorie Number?
                </h2>
                <p className='mb-6 text-gray-700'>
                  I don&apos;t love calorie counting (it can get obsessive). But having a general idea
                  can be helpful. Here&apos;s a quick calculator. Take it with a grain of salt.
                </p>

                <div className='p-6 bg-white border border-gray-200 rounded-xl'>
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <div>
                      <div className='space-y-4'>
                        <div>
                          <label className='block mb-1 text-sm font-medium text-gray-700'>
                            Weight (kg)
                          </label>
                          <input
                            type='number'
                            value={calculator.weight}
                            onChange={e => setCalculator({ ...calculator, weight: e.target.value })}
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg'
                            placeholder='70'
                          />
                        </div>
                        <div>
                          <label className='block mb-1 text-sm font-medium text-gray-700'>
                            Height (cm)
                          </label>
                          <input
                            type='number'
                            value={calculator.height}
                            onChange={e => setCalculator({ ...calculator, height: e.target.value })}
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg'
                            placeholder='175'
                          />
                        </div>
                        <div>
                          <label className='block mb-1 text-sm font-medium text-gray-700'>
                            Age
                          </label>
                          <input
                            type='number'
                            value={calculator.age}
                            onChange={e => setCalculator({ ...calculator, age: e.target.value })}
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg'
                            placeholder='30'
                          />
                        </div>
                        <div>
                          <label className='block mb-1 text-sm font-medium text-gray-700'>
                            How active are you?
                          </label>
                          <select
                            value={calculator.activity}
                            onChange={e => setCalculator({ ...calculator, activity: e.target.value as ActivityLevel })}
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg'
                          >
                            <option value='sedentary'>Desk job, not much movement</option>
                            <option value='light'>Move around a bit, 1-3 workouts/week</option>
                            <option value='moderate'>3-5 workouts/week</option>
                            <option value='active'>6-7 workouts/week</option>
                            <option value='veryActive'>Athlete level</option>
                          </select>
                        </div>
                        <div>
                          <label className='block mb-1 text-sm font-medium text-gray-700'>
                            Your goal
                          </label>
                          <select
                            value={calculator.goal}
                            onChange={e => setCalculator({ ...calculator, goal: e.target.value as GoalType })}
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg'
                          >
                            <option value='lose'>Lose weight</option>
                            <option value='maintain'>Stay the same</option>
                            <option value='gain'>Build muscle</option>
                          </select>
                        </div>
                        <button
                          onClick={calculateCalories}
                          className='w-full py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700'
                        >
                          Calculate
                        </button>
                      </div>
                    </div>

                    <div className='flex items-center justify-center'>
                      {result ? (
                        <div className='text-center'>
                          <div className='mb-1 text-5xl font-bold text-blue-600'>{result}</div>
                          <div className='text-gray-600'>calories per day</div>
                          <p className='mt-4 text-sm text-gray-500'>
                            Start here. If you&apos;re hungry all the time or have no energy, adjust.
                            Listen to your body.
                          </p>
                        </div>
                      ) : (
                        <div className='text-center text-gray-400'>
                          <div className='mb-2 text-5xl'>⚡</div>
                          <p className='text-sm'>Enter your info above</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section id='faq' className='mb-12 scroll-mt-16'>
                <h2 className='mb-4 text-3xl font-bold text-gray-800'>
                  ❓ Questions I Get All The Time
                </h2>

                <div className='space-y-4'>
                  <div className='p-5 bg-white border border-gray-200 rounded-xl'>
                    <h3 className='mb-2 text-lg font-semibold text-gray-800'>
                      How many calories should I cut to lose weight?
                    </h3>
                    <p className='text-gray-700'>
                      About 300-500 less than you burn. That&apos;s 0.5-1kg per week. Anything more
                      aggressive and you&apos;ll lose muscle and feel terrible. Slow and steady wins this
                      race.
                    </p>
                  </div>

                  <div className='p-5 bg-white border border-gray-200 rounded-xl'>
                    <h3 className='mb-2 text-lg font-semibold text-gray-800'>
                      Does meal timing matter?
                    </h3>
                    <p className='text-gray-700'>
                      Some, but not as much as social media says. Total daily intake matters most.
                      That said, eating within an hour of waking and spacing meals 3-5 hours apart
                      helps most people control hunger.
                    </p>
                  </div>

                  <div className='p-5 bg-white border border-gray-200 rounded-xl'>
                    <h3 className='mb-2 text-lg font-semibold text-gray-800'>
                      Do I need supplements?
                    </h3>
                    <p className='text-gray-700'>
                      Probably not. Get your nutrients from food first. Vitamin D in winter? Maybe.
                      Omega-3s if you don&apos;t eat fish? Could help. But most supplements are expensive
                      pee. Save your money for good food.
                    </p>
                  </div>

                  <div className='p-5 bg-white border border-gray-200 rounded-xl'>
                    <h3 className='mb-2 text-lg font-semibold text-gray-800'>
                      How do I speed up my metabolism?
                    </h3>
                    <p className='text-gray-700'>
                      Build muscle. That&apos;s the real answer. Muscle burns more calories than fat,
                      even when you&apos;re sleeping. Also, don&apos;t crash diet - that slows your metabolism
                      down. Eat enough, move your body, lift heavy things sometimes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Related articles */}
              <section className='mb-8'>
                <h2 className='mb-4 text-2xl font-bold text-gray-800'>Want to Read More?</h2>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                  <a
                    href='/maqolalar/metabolism'
                    className='block p-4 transition border border-orange-200 rounded-lg hover:shadow-lg'
                  >
                    <div className='mb-2 text-2xl'>🔥</div>
                    <h3 className='font-semibold'>Boost Your Metabolism</h3>
                    <p className='text-sm text-gray-600'>Simple ways to burn more calories</p>
                  </a>
                  <a
                    href='/maqolalar/ozdirish-mashqlari'
                    className='block p-4 transition border border-blue-200 rounded-lg hover:shadow-lg'
                  >
                    <div className='mb-2 text-2xl'>💪</div>
                    <h3 className='font-semibold'>Exercise for Weight Loss</h3>
                    <p className='text-sm text-gray-600'>Workouts that actually help</p>
                  </a>
                  <a
                    href='/maqolalar/togri-ovqatlanish'
                    className='block p-4 transition border border-green-200 rounded-lg hover:shadow-lg'
                  >
                    <div className='mb-2 text-2xl'>🍽️</div>
                    <h3 className='font-semibold'>Healthy Eating Habits</h3>
                    <p className='text-sm text-gray-600'>Practical tips for real life</p>
                  </a>
                </div>
              </section>

              {/* Medical disclaimer */}
              <div className='p-4 mt-8 text-sm text-gray-500 border-t border-gray-200'>
                <p>
                  <strong>One more thing:</strong> I&apos;m a real doctor, but I&apos;m not YOUR doctor. This
                  is general advice. If you have specific health conditions, are pregnant, or are on
                  medications, talk to your own healthcare provider before making big changes.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}

export default DietaPage