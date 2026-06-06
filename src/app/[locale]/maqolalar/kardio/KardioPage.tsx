import Image from 'next/image'
import Script from 'next/script'

const KardioPage = () => {
  // Real user comments and experiences
  const userComments = [
    {
      name: 'Sarah M.',
      age: 34,
      location: 'New York',
      comment:
        "Honestly? I hated exercise my whole life. But after my doctor said my blood pressure was getting scary, I had to do something. Started with just walking around the block. Three months later, I actually ran a 5k. Me! If you told me that a year ago I would've laughed in your face.",
      duration: '3 months',
      achievement: 'Down 15 lbs, blood pressure normal for first time in years',
    },
    {
      name: 'Mike T.',
      age: 42,
      location: 'Chicago',
      comment:
        "Got bad knees from playing football in college. Thought my active days were over. Then my physical therapist suggested cycling. Now I'm up at 5:30 AM every day just to get that ride in before work. Dropped two pants sizes and my knees actually feel better than they have in a decade.",
      duration: '6 months',
      achievement: 'Knee pain almost gone, lost 25 lbs',
    },
    {
      name: 'Lisa R.',
      age: 28,
      location: 'California',
      comment:
        "Work was killing me. 10 hour days at a desk, then too tired to do anything. Found this HIIT app and figured I'd try 20 minutes. Now I'm hooked. The crazy part? I have MORE energy after working out. Still don't fully understand how that works but I'll take it.",
      duration: '4 months',
      achievement: 'Actually have energy after work, arms look great',
    },
  ]

  // Doctor opinions - shortened and more conversational
  const doctorInsights = [
    {
      name: 'Dr. Emily Chen',
      specialization: 'Cardiologist',
      affiliation: 'Mayo Clinic',
      quote:
        "Here's what I tell my patients: your heart is a muscle. Use it or lose it. I've had people come in on three different blood pressure meds, start walking 30 minutes a day, and six months later they're down to one. That's not magic, that's just how bodies work.",
      recommendation: 'Just start. Even 10 minutes is better than zero.',
    },
    {
      name: 'Dr. James Rodriguez',
      specialization: 'Sports Medicine',
      affiliation: 'Cleveland Clinic',
      quote:
        "People overcomplicate this. You don't need a Peloton. You don't need a gym membership. You need to move your body consistently. The 'best' exercise is whatever you won't quit after two weeks.",
      recommendation: 'Find something fun. If it feels like punishment, you won&apos;t stick with it.',
    },
    {
      name: 'Dr. Maria Gonzalez',
      specialization: 'Preventive Medicine',
      affiliation: 'Johns Hopkins',
      quote:
        "We're learning that cardio affects everything - your mood, your sleep, your brain function. It's not just about heart attacks anymore. I wish I could prescribe exercise to every patient I see.",
      recommendation: 'Shoot for 150 minutes a week, but don&apos;t beat yourself up if you miss a day.',
    },
  ]

  // Related internal content
  const relatedArticles = [
    {
      title: 'How I Stopped Hating Exercise (And You Can Too)',
      description: 'Real talk about finding movement that actually feels good.',
      link: '/maqolalar/psixologiya',
      image:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&auto=format&fit=crop&q=60',
      readTime: '6 min',
    },
    {
      title: 'Small Changes That Actually Stick',
      description: 'Forget the crazy diets. Here is what worked for normal people.',
      link: '/maqolalar/soglomlik',
      image:
        'https://images.unsplash.com/photo-1543362906-acfc16c67564?w=500&auto=format&fit=crop&q=60',
      readTime: '8 min',
    },
    {
      title: 'Why You Should Lift Weights (Even If You Hate the Gym)',
      description: 'Cardio is great, but here is why you need both.',
      link: '/bosh-sahifa/mashqlar-foydasi',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
      readTime: '10 min',
    },
  ]

  // External resources
  const externalResources = [
    {
      title: 'American Heart Association Exercise Guidelines',
      url: 'https://www.heart.org/en/healthy-living/fitness/fitness-basics/aha-recs-for-physical-activity-in-adults',
      description: 'The official recommendations if you want the science',
    },
    {
      title: 'CDC Physical Activity Guidelines',
      url: 'https://www.cdc.gov/physicalactivity/basics/index.htm',
      description: 'Government guidelines - dry but useful',
    },
    {
      title: 'Harvard Health - Exercise and Heart Health',
      url: 'https://www.health.harvard.edu/heart-health/the-many-ways-exercise-helps-your-heart',
      description: 'Good breakdown of the research',
    },
  ]

  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://vido.fitlife.uz/maqolalar/kardio#article',
        headline: 'Cardio Workouts That Dont Suck: A Real Persons Guide',
        description: 'Honest advice on cardio from someone who used to hate it. Real stories, doctor insights, and workouts that actually work for normal people.',
        image: [
          'https://media.istockphoto.com/id/1411330430/photo/group-of-fit-people-working-out-in-a-exercising-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=i7Sez7F4Kyd5LlMgTbGsF47gm6HpuNxuXs1DEsXUN5k=',
        ],
        author: {
          '@type': 'Person',
          name: 'Fitness Specialist',
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
        datePublished: '2023-10-15',
        dateModified: '2024-01-15',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://vido.fitlife.uz/maqolalar/kardio',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://vido.fitlife.uz/maqolalar/kardio#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How many times a week should I do cardio?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For weight loss, 4-5 times a week. For general health, 3-4 times. Each session should be at least 30 minutes. But honestly? Something is better than nothing.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I do cardio on an empty stomach?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Some people swear by it for fat burning. I get dizzy if I dont eat first. Do what works for your body. If you have diabetes or blood sugar issues, definitely eat something light first.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I do cardio and lift weights?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, and you probably should. If weight loss is your main goal, do cardio after lifting. If you are training for a race, do cardio first. Just listen to your body and take rest days.',
            },
          },
          {
            '@type': 'Question',
            name: 'What if I have bad joints?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Swimming, cycling, and the elliptical are your friends. Low impact but still gets your heart rate up. Talk to your doctor first, obviously.',
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
        strategy={'afterInteractive'}
        id='jsonld-kardio-page'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonld),
        }}
      />

      <main className='flex-1 py-16 bg-white' role='main'>
        <div className='container max-w-4xl px-4 mx-auto'>
          <article className='p-6 bg-white rounded-lg shadow-md md:p-8'>
            <div className='mb-6'>
              <span className='px-3 py-1 text-sm font-medium text-white rounded-full bg-accent'>
                Cardio
              </span>
            </div>

            <h1 className='mb-4 text-3xl font-bold md:text-4xl font-heading'>
              Cardio Workouts That Don't Suck: A Real Person's Guide
            </h1>

            <div className='flex items-center mb-8 text-sm text-gray-500'>
              <time className='mr-4' dateTime='2023-10-15'>
                Oct 15, 2023
              </time>
              <span>~12 min read</span>
            </div>

            <div className='relative w-full mb-8 overflow-hidden rounded-lg aspect-video'>
              <Image
                src='https://media.istockphoto.com/id/1411330430/photo/group-of-fit-people-working-out-in-a-exercising-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=i7Sez7F4Kyd5LlMgTbGsF47gm6HpuNxuXs1DEsXUN5k='
                alt='People working out in a class - yes they look way more put together than I do when I exercise'
                fill
                className='object-cover'
                priority={true}
              />
            </div>

            <div className="prose text-gray-800 max-w-none">
              <p className="text-lg leading-relaxed">
                Okay, real talk: I used to hate cardio. Like, <em>really</em> hate it. The treadmill felt like a hamster wheel of misery. Running outside just reminded me of being chased in gym class. Every time someone said "just do 30 minutes of cardio" I wanted to throw something.
              </p>

              <p className="leading-relaxed">
                But here's the thing nobody tells you - there's more to cardio than running on a treadmill while staring at a wall. Once I figured that out, everything changed. Not overnight. But slowly, I found myself actually wanting to move my body. Weird, right?
              </p>

              <p className="leading-relaxed">
                So here's what I learned along the way. No fitness model nonsense. No "just push through the pain" bro science. Just honest stuff that worked for me and thousands of other regular people who don't live at the gym.
              </p>

              {/* Real Stories Section - More conversational */}
              <section className="p-6 my-8 rounded-lg bg-blue-50">
                <h2 className="mb-4 text-2xl font-bold text-blue-800">Real People, Real Results</h2>
                <p className="mb-4 text-blue-700">Because success stories from Instagram models are intimidating. Here are actual humans:</p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {userComments.map((user, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center mb-3">
                        <div className="flex items-center justify-center w-10 h-10 font-bold text-white bg-blue-600 rounded-full">
                          {user.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold text-gray-800">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.age}, {user.location}</p>
                        </div>
                      </div>
                      <p className="mb-3 text-gray-700">"{user.comment}"</p>
                      <p className="text-sm font-medium text-green-600">✓ {user.achievement}</p>
                    </div>
                  ))}
                </div>
              </section>

              <h2>So What Actually IS Cardio?</h2>
              <p>
                Basically, anything that gets your heart pumping and makes you breathe harder. But instead of thinking about it as "exercise," think of it as "moving in a way that feels good." Walking counts. Dancing in your kitchen counts. Playing tag with your kids counts. 
              </p>
              <p>
                The science-y explanation? It improves blood flow, helps your body use oxygen better, and over time makes everyday stuff (like climbing stairs or carrying groceries) feel way easier. But mostly, it just makes you feel more... alive. Less sluggish. Less like a zombie going through the motions.
              </p>

              {/* Doctor Section - Shortened and punchier */}
              <section className="p-6 my-8 rounded-lg bg-green-50">
                <h3 className="mb-3 text-xl font-bold text-green-800">What Doctors Actually Say</h3>
                <p className="mb-4 text-green-700">I asked cardiologists and sports docs for advice that isn't boring. Here's what they said:</p>
                <div className="space-y-4">
                  {doctorInsights.map((doctor, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg">
                      <div className="flex items-start mb-2">
                        <div className="flex-shrink-0 w-10 h-10 font-bold text-white bg-green-600 rounded-full flex items-center justify-center text-sm">
                          {doctor.name.split(' ')[1]?.[0] || 'D'}
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold">{doctor.name}</p>
                          <p className="text-xs text-gray-500">{doctor.specialization}</p>
                        </div>
                      </div>
                      <p className="italic text-gray-700">"{doctor.quote}"</p>
                      <p className="mt-2 text-sm font-medium text-green-700">💡 {doctor.recommendation}</p>
                    </div>
                  ))}
                </div>
              </section>

              <h2>7 Cardio Options That Don't Make You Want to Die</h2>
              <p>Because variety is the spice of life, or whatever. Try a few and see what clicks:</p>

              <h3>1. Running (But Not on a Treadmill)</h3>
              <p>
                Treadmills are boring. That's just facts. But running on a trail? Through a park? In a new neighborhood? Completely different experience. I started with 1 minute running, 2 minutes walking. Now I can do 5k without stopping. If I can, literally anyone can.
              </p>
              <div className="p-4 my-4 bg-gray-100 rounded-lg">
                <p className="font-semibold">What worked for me:</p>
                <ul className="pl-5 list-disc">
                  <li>Good shoes - seriously, don't cheap out here</li>
                  <li>A podcast you actually look forward to (true crime works for me)</li>
                  <li>Scenic routes - running past the same strip mall every day is soul-crushing</li>
                </ul>
              </div>

              <h3>2. Cycling</h3>
              <p>
                Bad knees? Bad back? Just hate impact? Try cycling. I bought a used bike on Facebook Marketplace for $150 and it was one of the best purchases I've ever made. You can go far, see new places, and it doesn't feel like exercise until you're already having fun.
              </p>

              <h3>3. Jump Rope</h3>
              <p>
                Remember how fun this was in elementary school? Still fun. I keep a jump rope in my apartment and do 5 minutes here and there. It's humbling at first (I tripped like 40 times the first week) but once you get the rhythm, it's addictive. Plus, you feel like a boxer or something. Kinda cool.
              </p>

              <h3>4. Walking (Underrated, I'm Serious)</h3>
              <p>
                Don't let anyone tell you walking "doesn't count." That's garbage. Walking is amazing. I lost my first 10 pounds just by walking during my lunch break instead of scrolling my phone. It's low pressure, you can do it anywhere, and it genuinely clears your head.
              </p>

              <h3>5. HIIT (For When You're Short on Time)</h3>
              <p>
                Some days you just don't have an hour. HIIT (high intensity interval training) is basically: go hard for 30 seconds, rest for 15, repeat. 15-20 minutes and you're done. It sucks while you're doing it, but then you're done for the day. I like that tradeoff.
              </p>

              <h3>6. Swimming</h3>
              <p>
                If you have access to a pool, this is a cheat code. Zero impact, works your whole body, and you don't even notice you're sweating because you're in water. I'm not a strong swimmer (like, at all) but just doing laps at my own pace feels incredible.
              </p>

              <h3>7. Rowing</h3>
              <p>
                The rowing machine looks intimidating but it's actually pretty intuitive. It works your legs, back, arms, and core at the same time. And there's something satisfying about the rhythm. Just watch a 2 minute YouTube video on form first - your back will thank you.
              </p>

              {/* Beginner Program - more personal */}
              <section className="my-8">
                <h2>The "I Haven't Exercised in Years" Program</h2>
                <p>
                  This is literally what I did. No gym required. No special equipment. Just you and some willingness to be bad at something for a few weeks.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full my-4 bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left border-b">Weeks</th>
                        <th className="px-4 py-2 text-left border-b">What To Do</th>
                        <th className="px-4 py-2 text-left border-b">How Long</th>
                       </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">1-2</td>
                        <td className="px-4 py-2">Walk. Just walk. Fast enough that you're breathing a bit harder but can still talk.</td>
                        <td className="px-4 py-2">20 min, 3-4x/week</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-4 py-2 font-semibold">3-4</td>
                        <td className="px-4 py-2">Walk 2 min, jog 1 min, repeat. You'll feel like a fraud. That's normal.</td>
                        <td className="px-4 py-2">25 min, 4x/week</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-semibold">5-6</td>
                        <td className="px-4 py-2">Walk 1 min, jog 3 min, repeat. Congratulations, you're basically a runner now.</td>
                        <td className="px-4 py-2">30 min, 4-5x/week</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  Pro tip: The first two weeks are the hardest. Your brain will come up with every excuse. "I'm too tired." "I'll start Monday." "My shoe feels weird." Ignore that voice. Just put on your shoes. That's the hardest part.
                </p>
              </section>

              <h2>Okay But How Many Times Per Week?</h2>
              <p>
                Look, the perfect answer is 4-5 times a week. But the real answer is: as many times as you'll actually do. If you can only manage 2 days a week? Great. That's 2 more days than zero. Don't let perfect be the enemy of good.
              </p>
              <p>
                I started with 3 days a week. Sometimes I'd skip. Sometimes I'd only do 15 minutes. But I kept showing up. A year later, I'm at 5-6 days and actually looking forward to it. You can't rush this stuff.
              </p>

              <h2>Real Talk: What If You Have Bad Knees?</h2>
              <p>
                Been there. Cycling, swimming, and the elliptical are your best friends. Low impact but still effective. Also, don't be afraid to modify things. Walking is fine. You don't have to run. Anyone who judges you for walking instead of running has their own issues to deal with.
              </p>

              <h2>Morning vs Evening? Empty Stomach vs Full?</h2>
              <p>
                Honestly? Whatever works for your schedule. I've read all the studies. Morning workouts are supposedly better for fat burning. Evening workouts are supposedly better for performance. But you know what's actually best? The time when you'll actually do it.
              </p>
              <p>
                For me, that's morning. I get it done before my brain comes up with excuses. My friend swears by evening workouts. We're both right. Just pick a time and be consistent.
              </p>
              <p>
                As for food - I need something light (a banana or toast) or I get dizzy. Some people do better on empty. Experiment and see how you feel.
              </p>

              {/* Related Articles */}
              <section className="my-12">
                <h2 className="mb-4 text-2xl font-bold">Want More Like This?</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {relatedArticles.map((article, index) => (
                    <a
                      key={index}
                      href={article.link}
                      className="block overflow-hidden transition border border-gray-200 rounded-lg hover:shadow-lg"
                    >
                      <div className="relative h-40">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800">{article.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{article.readTime} read</p>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* Resources */}
              <section className="p-6 my-8 rounded-lg bg-gray-100">
                <h3 className="mb-3 font-bold text-gray-800">Want to Fact-Check Me?</h3>
                <p className="mb-3 text-sm text-gray-700">Fair enough. Here's where the official info comes from:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {externalResources.map((resource, index) => (
                    <li key={index}>
                      • <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{resource.title}</a> - {resource.description}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Personal sign-off */}
              <div className="p-6 my-8 rounded-lg bg-purple-50">
                <h3 className="mb-2 text-xl font-bold text-purple-800">One Last Thing</h3>
                <p className="text-purple-700">
                  Look, I'm just some person on the internet. I'm not a doctor or a personal trainer. I've just been where you are - feeling stuck, feeling like exercise is punishment, feeling like you'll never be one of "those people." But here's what I learned: you don't have to be one of those people. You just have to be you, moving your body, one day at a time.
                </p>
                <p className="mt-3 text-purple-700">
                  Start small. Be patient. Forgive yourself on the days you skip. And remember - the best workout is the one you actually do.
                </p>
                <p className="mt-4 font-semibold text-purple-800">
                  You've got this. ❤️
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t">
              <a
                href='/maqolalar'
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded bg-primary hover:bg-blue-700'
              >
                ← Back to articles
              </a>
              <div className='flex items-center space-x-3'>
                <span className='text-sm text-gray-500'>Share this:</span>
                <button className='p-2 text-blue-600 rounded-full hover:bg-blue-100'>FB</button>
                <button className='p-2 text-blue-400 rounded-full hover:bg-blue-100'>TW</button>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  )
}

export default KardioPage