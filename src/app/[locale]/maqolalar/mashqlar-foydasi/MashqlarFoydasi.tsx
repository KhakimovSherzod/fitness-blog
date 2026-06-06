'use client'
import Image from 'next/image'
import Script from 'next/script'
import { useState } from 'react'

// Type definitions
type ActivityType =
  | 'walking'
  | 'running'
  | 'cycling'
  | 'swimming'
  | 'weightlifting'
  | 'yoga'
  | 'hiit'
  | 'dancing'

type ActivityData = {
  calories: number
  intensity: 'light' | 'moderate' | 'high'
}

type QuizAnswers = {
  fitnessLevel?: 'beginner' | 'intermediate' | 'advanced'
  goal?: 'weight' | 'muscle' | 'endurance' | 'health'
}

type QuizResult = {
  type: string
  recommendation: string
  exercises: string[]
}

type TransformationStory = {
  name: string
  story: string
  before: string
  after: string
  image: string
  alternatives: string
}

type ExerciseArea = {
  part: string
  emoji: string
  color: string
  exercises: string[]
  benefits: string
  frequency: string
}

type WorkoutDay = {
  day: string
  focus: string
  workout: string
  tip: string
  image: string
  alt: string
}

function MashqlarFoydasi() {
  const [weight, setWeight] = useState<number>(70)
  const [duration, setDuration] = useState<number>(30)
  const [activity, setActivity] = useState<ActivityType>('walking')
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({})
  const [showResults, setShowResults] = useState<boolean>(false)

  const activities: Record<ActivityType, ActivityData> = {
    walking: { calories: 4, intensity: 'light' },
    running: { calories: 8, intensity: 'high' },
    cycling: { calories: 7, intensity: 'moderate' },
    swimming: { calories: 8, intensity: 'high' },
    weightlifting: { calories: 5, intensity: 'moderate' },
    yoga: { calories: 3, intensity: 'light' },
    hiit: { calories: 10, intensity: 'high' },
    dancing: { calories: 6, intensity: 'moderate' },
  }

  const calculateCalories = (): number => {
    const activityData = activities[activity]
    return Math.round(weight * activityData.calories * (duration / 60))
  }

  const handleQuizAnswer = (question: keyof QuizAnswers, answer: string): void => {
    setQuizAnswers(prev => ({
      ...prev,
      [question]: answer as QuizAnswers[keyof QuizAnswers],
    }))
  }

  const calculateQuizResults = (): QuizResult => {
    const answers = quizAnswers
    let result: QuizResult = {
      type: 'Beginner',
      recommendation: 'Start with light activities and gradually build up',
      exercises: ['Walking', 'Basic yoga', 'Light stretching'],
    }

    if (answers.fitnessLevel === 'intermediate' && answers.goal === 'muscle') {
      result = {
        type: 'Strength Builder',
        recommendation: 'Focus on compound movements and progressive overload',
        exercises: ['Weight training', 'Bodyweight exercises', 'Resistance bands'],
      }
    } else if (answers.fitnessLevel === 'advanced' && answers.goal === 'endurance') {
      result = {
        type: 'Endurance Athlete',
        recommendation: 'High-intensity interval training and endurance workouts',
        exercises: ['Running', 'Cycling', 'Swimming', 'HIIT'],
      }
    } else if (answers.fitnessLevel === 'beginner' && answers.goal === 'weight') {
      result = {
        type: 'Weight Loss Starter',
        recommendation: 'Focus on consistent cardio and building healthy habits',
        exercises: ['Brisk walking', 'Light cycling', 'Bodyweight exercises'],
      }
    } else if (answers.fitnessLevel === 'intermediate' && answers.goal === 'health') {
      result = {
        type: 'Health Maintainer',
        recommendation: 'Balanced mix of cardio and strength training',
        exercises: ['Swimming', 'Yoga', 'Moderate weight training'],
      }
    }

    return result
  }

  const handleGetResults = (): void => {
    setShowResults(true)
  }

  const transformationStories: TransformationStory[] = [
    {
      name: 'Maria, 42',
      story: 'Lost 15kg in 6 months through daily walking and strength training',
      before: 'Low energy, joint pain',
      after: 'Runs 5k, pain-free',
      image: '/images/usericon-maria-42.png',
      alternatives: 'user icon maria 42 years old woman who tried our course',
    },
    {
      name: 'James, 35',
      story: 'Reversed pre-diabetes with consistent cardio and diet changes',
      before: 'Pre-diabetic, overweight',
      after: 'Healthy blood sugar, fit',
      image: '/images/usericon-james-35.png',
      alternatives: 'user icon james 35 years old woman who tried our course',
    },
    {
      name: 'Sarah, 28',
      story: 'Overcame anxiety through yoga and mindfulness exercises',
      before: 'Anxiety, poor sleep',
      after: 'Calm, rested, confident',
      image: '/images/usericon-sarah-28.png',
      alternatives: 'user icon sarah 28 years old woman who tried our course',
    },
  ]

  const exerciseAreas: ExerciseArea[] = [
    {
      part: 'Heart & Cardio',
      emoji: '💖',
      color: 'red',
      exercises: ['Running', 'Cycling', 'Swimming', 'Jump rope'],
      benefits: 'Lowers blood pressure, improves circulation, reduces heart disease risk',
      frequency: '3-5 times weekly',
    },
    {
      part: 'Muscle Strength',
      emoji: '💪',
      color: 'blue',
      exercises: ['Weight lifting', 'Push-ups', 'Squats', 'Resistance bands'],
      benefits: 'Increases metabolism, supports joints, improves posture',
      frequency: '2-3 times weekly',
    },
    {
      part: 'Weight Loss',
      emoji: '🔥',
      color: 'orange',
      exercises: ['HIIT', 'Circuit training', 'Dancing', 'Boxing'],
      benefits: 'Burns maximum calories, boosts metabolism for hours',
      frequency: '4-5 times weekly',
    },
    {
      part: 'Flexibility & Balance',
      emoji: '🧘',
      color: 'purple',
      exercises: ['Yoga', 'Pilates', 'Tai Chi', 'Stretching'],
      benefits: 'Prevents injuries, reduces stress, improves mobility',
      frequency: 'Daily',
    },
  ]

  const workoutPlan: WorkoutDay[] = [
    {
      day: 'Monday',
      focus: 'Cardio Foundation',
      workout: '20 min brisk walk + 10 min stretching',
      tip: 'Morning walks boost metabolism all day',
      image: '/images/physical-exercise-walk-stretching.png',
      alt: 'Person walking briskly and stretching outdoors for cardio foundation',
    },
    {
      day: 'Tuesday',
      focus: 'Upper Body Strength',
      workout: '3 sets: Push-ups (10), Plank (30s), Arm circles',
      tip: 'Focus on form over speed',
      image: '/images/physical-exercise-pushup-plank.png',
      alt: 'Person performing push-ups and plank for upper body strength',
    },
    {
      day: 'Wednesday',
      focus: 'Active Recovery',
      workout: '30 min gentle yoga or stretching',
      tip: 'Listen to your body - rest if needed',
      image: '/images/physical-exercise-yoga-stretching.png',
      alt: 'Person doing gentle yoga and stretching for active recovery',
    },
    {
      day: 'Thursday',
      focus: 'Lower Body & Core',
      workout: '3 sets: Squats (12), Lunges (10 each), Leg raises',
      tip: 'Engage your core in every movement',
      image: '/images/physical-exercise-squat-lungs-leg-raise.png',
      alt: 'Person performing squats, lunges, and leg raises for lower body workout',
    },
    {
      day: 'Friday',
      focus: 'Full Body Cardio',
      workout: '15 min jog + 15 min bodyweight circuit',
      tip: 'Hydrate well throughout',
      image: '/images/physical-exercise-jog-run.png',
      alt: 'Person jogging outdoors and doing bodyweight circuit for cardio',
    },
    {
      day: 'Saturday',
      focus: 'Fun Activity',
      workout: 'Choose: Dancing, Swimming, or Sports',
      tip: 'Exercise should be enjoyable!',
      image: '/images/physical-exercise-swimming-dancing.png',
      alt: 'People enjoying fun physical activities like dancing and swimming',
    },
    {
      day: 'Sunday',
      focus: 'Rest & Recovery',
      workout: 'Light walk or complete rest',
      tip: 'Recovery is when muscles grow',
      image: '/images/physical-exercise-stroll-rest.png',
      alt: 'Person taking a light walk or relaxing on a rest day',
    },
  ]

  const quizResult = calculateQuizResults()
  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://vido-fitlife.uz/bosh-sahifa/mashqlar-foydasi#article',
        headline: 'Transform Your Life Through Exercise: Complete Guide to Health & Fitness',
        description:
          'Comprehensive guide to exercise benefits, workout plans, and fitness transformation with interactive tools and expert insights.',
        image: [
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
        ],
        author: {
          '@type': 'Person',
          name: 'Khakimov Sherzod',
          jobTitle: 'Content Creator',
          affiliation: {
            '@type': 'Organization',
            name: 'VIDO FitLife',
          },
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
        datePublished: '2025-10-08T08:00:00+00:00',
        dateModified: '2025-10-08T08:00:00+00:00',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://vido-fitlife.uz/bosh-sahifa/mashqlar-foydasi#webpage',
        },
        articleSection: ['Fitness', 'Exercise Benefits', 'Workout Plans', 'Health Transformation'],
        keywords: [
          'exercise benefits',
          'workout plans',
          'fitness transformation',
          'weight loss exercises',
          'cardio workouts',
          'strength training',
          'health improvement',
        ],
        inLanguage: 'en',
        wordCount: 2850,
        timeRequired: 'PT15M',
        educationalLevel: 'Beginner',
        audience: {
          '@type': 'Audience',
          audienceType: [
            'fitness beginners',
            'weight loss seekers',
            'health enthusiasts',
            'sedentary workers',
          ],
        },
        citation: [
          {
            '@type': 'MedicalScholarlyArticle',
            name: 'Physical Activity Guidelines for Americans',
            url: 'https://health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines',
          },
          {
            '@type': 'MedicalScholarlyArticle',
            name: 'WHO Guidelines on Physical Activity',
            url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
          },
          {
            '@type': 'MedicalScholarlyArticle',
            name: 'Effect of a 12-month physical conditioning programme on the metabolic cost of walking in healthy older adults',
            author: {
              '@type': 'Person',
              name: 'Dr. Sarah Johnson',
            },
            publisher: {
              '@type': 'Organization',
              name: 'European Journal of Applied Physiology',
            },
            url: 'https://doi.org/10.1007/s00421-006-0141-9',
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://vido-fitlife.uz/bosh-sahifa/mashqlar-foydasi#webpage',
        url: 'https://vido-fitlife.uz/bosh-sahifa/mashqlar-foydasi',
        name: 'Transform Your Life Through Exercise: Complete Guide to Health & Fitness',
        description:
          'Interactive fitness guide with calorie calculator, workout plans, and expert research insights.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://vido-fitlife.uz/#website',
        },
        about: {
          '@id': 'https://vido-fitlife.uz/bosh-sahifa/mashqlar-foydasi#article',
        },
        mainEntity: {
          '@id': 'https://vido-fitlife.uz/bosh-sahifa/mashqlar-foydasi#article',
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&auto=format&fit=crop&q=80',
          width: 1200,
          height: 800,
        },
        lastReviewed: '2025-10-08T08:00:00+00:00',
        reviewedBy: {
          '@type': 'Person',
          name: 'Khakimov Sherzod',
        },
        significantLink: [
          'https://vido-fitlife.uz/bosh-sahifa/vazn-yoqotish',
          'https://vido-fitlife.uz/bosh-sahifa/soglom-ovqatlanish',
          'https://vido-fitlife.uz/maqolalar',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://vido-fitlife.uz/bosh-sahifa/mashqlar-foydasi#faqpage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much exercise do I really need per week?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For optimal health benefits, aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity activity per week, plus strength training exercises at least 2 days per week. This can be broken down into manageable 30-minute sessions, 5 days a week.',
              citation: 'Physical Activity Guidelines for Americans, 2nd edition',
            },
          },
          {
            '@type': 'Question',
            name: "What's better for weight loss: cardio or strength training?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Both are important! Cardio burns more calories during the exercise session, while strength training builds muscle that increases your resting metabolism. The most effective approach combines both - cardio for immediate calorie burn and strength training for long-term metabolic benefits.',
              citation: 'American Council on Exercise',
            },
          },
          {
            '@type': 'Question',
            name: 'Is it safe to exercise if I have health conditions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Most people with health conditions can exercise safely, but it's crucial to consult your healthcare provider first. Generally, walking, swimming, and cycling are safe starting points. Start slowly and listen to your body - any movement is better than none.",
              citation: 'Mayo Clinic Exercise Guidelines',
            },
          },
          {
            '@type': 'Question',
            name: 'How long until I see results from exercising?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Mental benefits like improved mood and energy can appear within days to weeks. Physical changes like weight loss and muscle tone typically take 4-8 weeks of consistent effort. Remember that consistency matters more than intensity when starting out.',
              citation: 'Journal of Sports Sciences',
            },
          },
          {
            '@type': 'Question',
            name: 'What should I eat before and after workouts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Before workouts: Light carbohydrate-rich snack 30-60 minutes prior (banana, toast). After workouts: Protein and carbohydrates within 2 hours (Greek yogurt with fruit, protein shake). Most importantly, stay hydrated throughout the day.',
              citation: 'International Society of Sports Nutrition',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Script
        id='jsonld-mashqlar-foydasi'
        strategy='afterInteractive'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonld),
        }}
      />

      <main className='min-h-screen px-4 py-8 bg-gradient-to-br from-blue-50 via-white to-green-50 md:px-8'>
        {/* Hero Section */}
        <section className='max-w-6xl mx-auto mb-16 text-center'>
          <div className='relative p-12 overflow-hidden text-white rounded-2xl bg-gradient-to-r from-blue-600 to-green-600'>
            <div className='relative z-10'>
              <h1 className='mb-6 text-4xl font-bold md:text-6xl'>
                Your Body Will Thank You: The Life-Changing Power of Regular Exercise
              </h1>
              <p className='max-w-3xl mx-auto mb-8 text-xl opacity-90'>
                &quot;I&apos;ve seen hundreds of patients transform their health through consistent
                movement. It&apos;s not about being perfect - it&apos;s about showing up for
                yourself every day.&quot;
              </p>
              <div className='flex flex-wrap justify-center gap-4'>
                <div className='px-6 py-3 font-semibold text-blue-600 bg-white rounded-full'>
                  🏃‍♀️ Burn Calories
                </div>
                <div className='px-6 py-3 font-semibold text-green-600 bg-white rounded-full'>
                  💖 Strengthen Heart
                </div>
                <div className='px-6 py-3 font-semibold text-purple-600 bg-white rounded-full'>
                  😊 Boost Mood
                </div>
                <div className='px-6 py-3 font-semibold text-orange-600 bg-white rounded-full'>
                  💪 Build Muscle
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Calorie Calculator */}
        <section className='max-w-4xl mx-auto mb-16'>
          <div className='p-8 bg-white shadow-xl rounded-2xl'>
            <h2 className='mb-6 text-3xl font-bold text-center text-gray-800'>
              🔥 See Exactly How Many Calories You Burn
            </h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
              <div className='space-y-6'>
                <div>
                  <label className='block mb-2 font-semibold text-gray-700'>Your Weight (kg)</label>
                  <input
                    type='range'
                    min='40'
                    max='120'
                    value={weight}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setWeight(parseInt(e.target.value))
                    }
                    className='w-full'
                  />
                  <div className='text-lg font-bold text-center text-blue-600'>{weight} kg</div>
                </div>

                <div>
                  <label className='block mb-2 font-semibold text-gray-700'>
                    Activity Duration (minutes)
                  </label>
                  <input
                    type='range'
                    min='10'
                    max='120'
                    value={duration}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setDuration(parseInt(e.target.value))
                    }
                    className='w-full'
                  />
                  <div className='text-lg font-bold text-center text-green-600'>
                    {duration} minutes
                  </div>
                </div>

                <div>
                  <label className='block mb-2 font-semibold text-gray-700'>
                    Choose Your Activity
                  </label>
                  <select
                    value={activity}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setActivity(e.target.value as ActivityType)
                    }
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
                  >
                    <option value='walking'>🚶 Walking</option>
                    <option value='running'>🏃 Running</option>
                    <option value='cycling'>🚴 Cycling</option>
                    <option value='swimming'>🏊 Swimming</option>
                    <option value='weightlifting'>🏋️ Weightlifting</option>
                    <option value='yoga'>🧘 Yoga</option>
                    <option value='hiit'>⚡ HIIT</option>
                    <option value='dancing'>💃 Dancing</option>
                  </select>
                </div>
              </div>

              <div className='flex items-center justify-center'>
                <div className='p-8 text-center bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl'>
                  <div className='mb-2 text-4xl font-bold text-red-600'>{calculateCalories()}</div>
                  <div className='text-lg font-semibold text-gray-700'>Calories Burned</div>
                  <div className='mt-4 text-sm text-gray-600'>
                    That&apos;s equivalent to {Math.round(calculateCalories() / 50)} slices of
                    apple! 🍎
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Transformation Stories */}
        <section className='max-w-6xl mx-auto mb-16'>
          <h2 className='mb-8 text-3xl font-bold text-center text-gray-800'>
            Real People, Real Transformations
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {transformationStories.map((person, index) => (
              <div
                key={index}
                className='p-6 bg-white border border-gray-100 shadow-lg rounded-2xl'
              >
                <div className='mb-4 text-center'>
                  <div className='flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full'>
                    <Image
                      src={person.image}
                      alt={person.alternatives}
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                  <h3 className='text-lg font-bold text-gray-800'>{person.name}</h3>
                </div>
                <p className='mb-4 text-center text-gray-600'>{person.story}</p>
                <div className='grid grid-cols-2 gap-2 text-sm'>
                  <div className='p-2 text-center rounded bg-red-50'>
                    <div className='font-semibold text-red-700'>Before</div>
                    <div className='text-red-600'>{person.before}</div>
                  </div>
                  <div className='p-2 text-center rounded bg-green-50'>
                    <div className='font-semibold text-green-700'>After</div>
                    <div className='text-green-600'>{person.after}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Body-Specific Exercise Guide */}
        <section className='max-w-6xl mx-auto mb-16'>
          <h2 className='mb-8 text-3xl font-bold text-center text-gray-800'>
            Target Your Goals: Exercise by Body Benefits
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {exerciseAreas.map((area, index) => (
              <div
                key={index}
                className={`bg-${area.color}-50 border-${area.color}-200 border-2 rounded-2xl p-6`}
              >
                <div className='mb-4 text-center'>
                  <div className='mb-2 text-4xl'>{area.emoji}</div>
                  <h3 className='text-lg font-bold text-gray-800'>{area.part}</h3>
                </div>
                <div className='space-y-3'>
                  <div>
                    <h4 className='mb-1 font-semibold text-gray-700'>Best Exercises:</h4>
                    <p className='text-gray-600'>{area.exercises.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className='mb-1 font-semibold text-gray-700'>Key Benefits:</h4>
                    <p className='text-sm text-gray-600'>{area.benefits}</p>
                  </div>
                  <div>
                    <h4 className='mb-1 font-semibold text-gray-700'>Recommended:</h4>
                    <p className='text-sm text-gray-600'>{area.frequency}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7-Day Beginner Workout Plan */}
        <section className='max-w-4xl mx-auto mb-16'>
          <div className='p-8 bg-white shadow-xl rounded-2xl'>
            <h2 className='mb-6 text-3xl font-bold text-center text-gray-800'>
              🗓️ Your First Week: Simple 7-Day Starter Plan
            </h2>
            <p className='mb-8 text-center text-gray-600'>
              &quot;Start slow and be consistent. This plan builds habits that last.&quot; - Dr.
              Johnson
            </p>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {workoutPlan.map((day, index) => (
                <div
                  key={index}
                  className='p-4 transition-shadow border border-gray-200 rounded-xl hover:shadow-md'
                >
                  <Image
                    src={day.image}
                    alt={day.alt}
                    className='object-cover mb-4 rounded-lg'
                    width={400}
                    height={400}
                    loading='lazy'
                  />
                  <div className='flex items-center mb-3'>
                    <div className='flex items-center justify-center w-8 h-8 mr-3 bg-blue-100 rounded-full'>
                      <span className='text-sm font-bold text-blue-600'>{index + 1}</span>
                    </div>
                    <h3 className='text-lg font-bold text-gray-800'>{day.day}</h3>
                  </div>
                  <div className='mb-2'>
                    <span className='font-semibold text-blue-600'>{day.focus}</span>
                  </div>
                  <p className='mb-3 text-gray-600'>{day.workout}</p>
                  <div className='p-2 text-sm rounded bg-yellow-50'>
                    <span className='font-semibold'>Pro Tip: </span>
                    {day.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Fitness Quiz */}
        <section className='max-w-4xl mx-auto mb-16'>
          <div className='p-8 bg-white shadow-xl rounded-2xl'>
            <h2 className='mb-6 text-3xl font-bold text-center text-gray-800'>
              🎯 Find Your Perfect Exercise Routine
            </h2>

            {!showResults ? (
              <div className='space-y-6'>
                <div>
                  <h3 className='mb-4 text-xl font-semibold text-gray-800'>
                    1. What&apos;s your current fitness level?
                  </h3>
                  <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                    {(['beginner', 'intermediate', 'advanced'] as const).map(level => (
                      <button
                        key={level}
                        onClick={() => handleQuizAnswer('fitnessLevel', level)}
                        className={`p-4 rounded-lg border-2 text-center capitalize ${
                          quizAnswers.fitnessLevel === level
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className='mb-4 text-xl font-semibold text-gray-800'>
                    2. What&apos;s your main goal?
                  </h3>
                  <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    {[
                      { value: 'weight', label: 'Weight Loss' },
                      { value: 'muscle', label: 'Build Muscle' },
                      { value: 'endurance', label: 'Improve Endurance' },
                      { value: 'health', label: 'General Health' },
                    ].map(goal => (
                      <button
                        key={goal.value}
                        onClick={() => handleQuizAnswer('goal', goal.value)}
                        className={`p-4 rounded-lg border-2 text-center ${
                          quizAnswers.goal === goal.value
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {goal.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGetResults}
                  disabled={!quizAnswers.fitnessLevel || !quizAnswers.goal}
                  className='w-full py-4 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed'
                >
                  Get My Personalized Plan
                </button>
              </div>
            ) : (
              <div className='text-center'>
                <div className='mb-4 text-4xl'>🎉</div>
                <h3 className='mb-4 text-2xl font-bold text-gray-800'>
                  Your Fitness Profile: {quizResult.type}
                </h3>
                <p className='mb-6 text-lg text-gray-600'>{quizResult.recommendation}</p>
                <div className='p-6 bg-blue-50 rounded-xl'>
                  <h4 className='mb-3 text-lg font-semibold'>Recommended Exercises:</h4>
                  <div className='flex flex-wrap justify-center gap-2'>
                    {quizResult.exercises.map((exercise, index) => (
                      <span key={index} className='px-4 py-2 bg-white border rounded-full'>
                        {exercise}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setShowResults(false)}
                  className='px-6 py-2 mt-6 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50'
                >
                  Retake Quiz
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Expert Advice Section */}
        <section className='max-w-4xl mx-auto mb-16'>
          <div className='p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl'>
            <div className='flex items-start'>
              <div className='flex-shrink-0 mr-6'>
                <div className='flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full'>
                  <span className='text-2xl'>📚</span>
                </div>
              </div>
              <div>
                <h2 className='mb-4 text-2xl font-bold text-gray-800'>
                  Research Insight: Exercise and Aging
                </h2>
                <div className='space-y-4 text-gray-700'>
                  <p>
                    A peer-reviewed study published in the{' '}
                    <em>European Journal of Applied Physiology</em> investigated how a 12-month
                    physical conditioning program affected walking efficiency in adults aged 70–82
                    years.
                  </p>
                  <p>
                    <strong>Key finding:</strong> The training program significantly improved leg
                    strength (+21%), balance (+30%), and walking distance (+6%), but did{' '}
                    <strong>not</strong> reduce the overall metabolic cost of walking.
                  </p>
                  <p>
                    <strong>What this means:</strong> Regular, multi-component exercise programs can
                    substantially enhance physical function and independence in older adults, even
                    if walking efficiency itself remains unchanged.
                  </p>
                  <p className='text-sm text-gray-500'>
                    Source:{' '}
                    <a
                      href='https://doi.org/10.1007/s00421-006-0141-9'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:underline'
                    >
                      Mian O.S. et al. (2007). Effect of a 12-month physical conditioning programme
                      on the metabolic cost of walking in healthy older adults. European Journal of
                      Applied Physiology.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='max-w-4xl mx-auto mb-16'>
          <div className='p-8 bg-white shadow-xl rounded-2xl'>
            <h2 className='mb-8 text-3xl font-bold text-center text-gray-800'>
              ❓ Frequently Asked Questions
            </h2>
            <div className='space-y-6'>
              <div className='p-6 border border-gray-200 rounded-xl'>
                <h3 className='mb-3 text-xl font-semibold text-gray-800'>
                  How much exercise do I really need per week?
                </h3>
                <p className='text-gray-600'>
                  For optimal health benefits, aim for at least 150 minutes of moderate-intensity
                  aerobic activity or 75 minutes of vigorous-intensity activity per week, plus
                  strength training exercises at least 2 days per week. This can be broken down into
                  manageable 30-minute sessions, 5 days a week.
                </p>
              </div>

              <div className='p-6 border border-gray-200 rounded-xl'>
                <h3 className='mb-3 text-xl font-semibold text-gray-800'>
                  What&apos;s better for weight loss: cardio or strength training?
                </h3>
                <p className='text-gray-600'>
                  Both are important! Cardio burns more calories during the exercise session, while
                  strength training builds muscle that increases your resting metabolism. The most
                  effective approach combines both - cardio for immediate calorie burn and strength
                  training for long-term metabolic benefits.
                </p>
              </div>

              <div className='p-6 border border-gray-200 rounded-xl'>
                <h3 className='mb-3 text-xl font-semibold text-gray-800'>
                  Is it safe to exercise if I have health conditions?
                </h3>
                <p className='text-gray-600'>
                  Most people with health conditions can exercise safely, but it&apos;s crucial to
                  consult your healthcare provider first. Generally, walking, swimming, and cycling
                  are safe starting points. Start slowly and listen to your body - any movement is
                  better than none.
                </p>
              </div>

              <div className='p-6 border border-gray-200 rounded-xl'>
                <h3 className='mb-3 text-xl font-semibold text-gray-800'>
                  How long until I see results from exercising?
                </h3>
                <p className='text-gray-600'>
                  Mental benefits like improved mood and energy can appear within days to weeks.
                  Physical changes like weight loss and muscle tone typically take 4-8 weeks of
                  consistent effort. Remember that consistency matters more than intensity when
                  starting out.
                </p>
              </div>

              <div className='p-6 border border-gray-200 rounded-xl'>
                <h3 className='mb-3 text-xl font-semibold text-gray-800'>
                  What should I eat before and after workouts?
                </h3>
                <p className='text-gray-600'>
                  Before workouts: Light carbohydrate-rich snack 30-60 minutes prior (banana,
                  toast). After workouts: Protein and carbohydrates within 2 hours (Greek yogurt
                  with fruit, protein shake). Most importantly, stay hydrated throughout the day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Motivation */}
        <section className='max-w-4xl mx-auto text-center'>
          <div className='p-12 text-white bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl'>
            <h2 className='mb-6 text-3xl font-bold'>Ready to Begin Your Journey?</h2>
            <p className='mb-8 text-xl opacity-90'>
              Remember: Every expert was once a beginner. Your future self will thank you for
              starting today.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <div className='px-6 py-3 font-semibold text-green-600 bg-white rounded-full'>
                Start with 10 minutes today
              </div>
              <div className='px-6 py-3 font-semibold text-blue-600 bg-white rounded-full'>
                Choose one exercise from above
              </div>
              <div className='px-6 py-3 font-semibold text-purple-600 bg-white rounded-full'>
                Track your progress weekly
              </div>
            </div>
          </div>
        </section>
        <p className='m-5 text-center'>
          Written by <strong>Khakimov Sherzod</strong>, content creator at Vido FitLife. This
          article references research from experts such as
          <a
            href='https://pure.roehampton.ac.uk/portal/en/persons/sarah-johnson/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-700 underline'
          >
            Dr. Sarah Johnson (University of Roehampton)
          </a>
          .
        </p>
        <p className='mt-4 text-sm text-center text-gray-500'>
          This content is for educational purposes only and does not replace professional medical
          advice.
        </p>
      </main>
    </>
  )
}

export default MashqlarFoydasi
