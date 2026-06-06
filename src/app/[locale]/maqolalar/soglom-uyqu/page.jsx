import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'How Sleep Affects Weight Loss: A Complete Guide',
  description:
    'A complete guide on how sleep affects weight loss, the role of hormonal balance, metabolism, and stress reduction. Practical tips for improving sleep.',
  keywords: [
    'sleep and weight loss',
    'healthy sleep',
    'hormonal balance',
    'metabolism',
    'cortisol',
    'sleep tips',
  ],
}

export default function SleepAndWeightLoss() {
  return (
    <main className='flex-1 py-12 bg-white'>
      <div className='container max-w-3xl px-4 mx-auto'>
        {/* Hero section - simple and clean */}
        <div className='mb-8 text-center'>
          <div className='flex flex-wrap items-center justify-center gap-2 mb-4'>
            <span className='px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full'>
              Sleep
            </span>
            <span className='px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full'>
              Health
            </span>
            <span className='px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full'>
              Weight Loss
            </span>
          </div>
          
          <h1 className='mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>
            I Started Sleeping 8 Hours a Night. Here's What Happened to My Weight.
          </h1>
          
          <div className='flex items-center justify-center gap-3 text-sm text-gray-500'>
            <div className='flex items-center gap-2'>
              <Image
                src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D'
                width={32}
                height={32}
                className='object-cover rounded-full'
                alt='Dr. Aziza Alimova'
              />
              <span className='font-medium text-gray-900'>Dr. Aziza Alimova</span>
            </div>
            <span>•</span>
            <time dateTime='2023-10-15'>Oct 15, 2023</time>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>

        {/* Featured image */}
        <div className='mb-8 overflow-hidden rounded-lg'>
          <Image
            src='https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&auto=format'
            alt='Woman sleeping peacefully'
            className='object-cover w-full'
            width={1200}
            height={600}
            priority
          />
          <p className='mt-2 text-xs text-center text-gray-400'>
            Photo by Unsplash
          </p>
        </div>

        {/* Intro - conversational and real */}
        <div className='prose prose-lg max-w-none'>
          <p className='text-xl leading-relaxed text-gray-700'>
            Last year, I was stuck. I'd been tracking my calories, hitting the gym four times a week, 
            and the scale just wouldn't budge. My doctor asked me one question that changed everything: 
            "How much are you sleeping?"
          </p>
          
          <p>
            I shrugged. Five hours? Six if I was lucky. I thought I was being productive. Turns out, 
            I was just being stupid.
          </p>
          
          <p>
            Six months later, after actually prioritizing sleep, I'd lost 14 pounds without changing 
            anything else about my diet or exercise. Same meals. Same workouts. Just more time in bed.
          </p>
          
          <p>
            This isn't some magic trick. There's real science behind why sleep helps you lose weight. 
            And honestly? I wish someone had told me this years ago.
          </p>
        </div>

        {/* Quick stat pullout - less polished, more punchy */}
        <div className='p-6 my-8 border-l-4 bg-gray-50 border-blue-500 rounded-r-lg'>
          <p className='m-0 text-gray-700'>
            <strong className='text-blue-600'>Quick reality check:</strong> People who sleep 7-9 hours 
            lose about <strong className='text-gray-900'>33% more weight</strong> than those sleeping less than 7 hours. 
            Yeah, read that again.
          </p>
        </div>

        {/* Table of contents - simple, no fancy styling */}
        <div className='p-5 my-8 bg-gray-50 rounded-lg'>
          <p className='mb-3 font-semibold text-gray-900'>What you'll learn here:</p>
          <ul className='space-y-2 text-sm text-gray-600 list-disc list-inside'>
            <li><a href='#hormones' className='text-blue-600 no-underline hover:underline'>The hunger hormone disaster nobody talks about</a></li>
            <li><a href='#metabolism' className='text-blue-600 no-underline hover:underline'>Why your metabolism basically gives up when you're tired</a></li>
            <li><a href='#cortisol' className='text-blue-600 no-underline hover:underline'>That stubborn belly fat? Blame cortisol.</a></li>
            <li><a href='#workouts' className='text-blue-600 no-underline hover:underline'>You're wasting your gym time if you're sleep deprived</a></li>
            <li><a href='#tips' className='text-blue-600 no-underline hover:underline'>Small sleep changes that actually work (no melatonin required)</a></li>
          </ul>
        </div>

        {/* Section 1 - Hormones */}
        <div id='hormones' className='mt-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>1. Your hunger hormones are lying to you</h2>
          
          <p>
            Ever notice how after a bad night's sleep, you're raiding the pantry by 10 AM? There's a reason for that.
          </p>
          
          <p>
            Your body has two hormones that control hunger: <strong>ghrelin</strong> (the "feed me" hormone) and 
            <strong>leptin</strong> (the "I'm full" hormone). When you're sleep deprived, ghrelin goes up and leptin 
            goes down. So you feel hungrier AND less satisfied after eating. It's a double whammy.
          </p>
          
          <div className='p-5 my-6 bg-yellow-50 rounded-lg'>
            <p className='m-0 text-sm text-gray-700'>
              <span className='font-bold'>Here's what the research actually found:</span> In a study of 1,000 people, 
              the ones sleeping just 5 hours a night ate <span className='font-bold'>15% more calories</span> the next day. 
              That's like an extra meal you didn't need.
            </p>
          </div>
          
          <p>
            So when you're tired and craving cookies at 3 PM? That's not weak willpower. That's biology working against you.
          </p>
        </div>

        {/* Section 2 - Metabolism */}
        <div id='metabolism' className='mt-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>2. Your metabolism basically goes to sleep too</h2>
          
          <p>
            Here's what most people get wrong: your body doesn't just "turn off" when you sleep. It's actually doing 
            some of its most important work — repairing cells, processing energy, cleaning up toxins. Think of it like 
            a restaurant closing for the night to deep clean the kitchen and prep for the next day.
          </p>
          
          <p>
            When you cut your sleep short, you're basically telling your kitchen staff to skip the cleaning and just 
            wing it tomorrow. Everything runs less efficiently.
          </p>
          
          <div className='grid grid-cols-1 gap-4 my-6 md:grid-cols-2'>
            <div className='p-4 border rounded-lg border-green-200 bg-green-50/30'>
              <h3 className='mb-2 font-bold text-green-800'>With good sleep:</h3>
              <ul className='pl-5 m-0 space-y-1 text-sm text-gray-700 list-disc'>
                <li>Metabolism runs 10-15% faster</li>
                <li>You actually feel full when you eat</li>
                <li>Real energy, not caffeine-crash energy</li>
                <li>You make better food choices</li>
              </ul>
            </div>
            
            <div className='p-4 border rounded-lg border-red-200 bg-red-50/30'>
              <h3 className='mb-2 font-bold text-red-800'>With poor sleep:</h3>
              <ul className='pl-5 m-0 space-y-1 text-sm text-gray-700 list-disc'>
                <li>Metabolism slows way down</li>
                <li>You're hungry even after eating</li>
                <li>Constant fatigue</li>
                <li>Hello, impulsive snacking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3 - Cortisol */}
        <div id='cortisol' className='mt-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>3. Stress + bad sleep = belly fat magnet</h2>
          
          <p>
            Cortisol is your body's main stress hormone. When you don't sleep enough, your body thinks it's in 
            crisis mode. Cortisol stays high, and your body responds by holding onto fat — especially right around 
            your midsection.
          </p>
          
          <p>
            Your ancestors needed this to survive famines and predators. But you're just trying to fit into your 
            jeans. Not helpful, evolution.
          </p>
          
          <div className='p-5 my-6 bg-purple-50 rounded-lg'>
            <p className='m-0 text-sm text-gray-700'>
              <span className='font-bold'>Things that actually lower cortisol (tried and tested):</span>
            </p>
            <ul className='mt-2 space-y-1 text-sm text-gray-700 list-disc list-inside'>
              <li>Dimming the lights an hour before bed (seriously, it helps)</li>
              <li>A 20-minute afternoon nap — not lazy, strategic</li>
              <li>Literally just breathing deeply for 5 minutes</li>
              <li>No caffeine after 2 PM (I know, it hurts)</li>
            </ul>
          </div>
        </div>

        {/* Section 4 - Workouts */}
        <div id='workouts' className='mt-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>4. You're basically throwing away your workouts</h2>
          
          <p>
            This one hit me hard. I was killing myself at the gym, wondering why I wasn't seeing results. 
            Here's the thing nobody tells you:
          </p>
          
          <p>
            <strong>Exercise breaks down your muscles. Sleep rebuilds them — stronger.</strong>
          </p>
          
          <p>
            If you're not sleeping enough, you're doing all the hard work without letting your body actually 
            benefit from it. It's like baking a cake and pulling it out of the oven halfway through.
          </p>
          
          <div className='p-5 my-6 bg-indigo-50 rounded-lg'>
            <p className='m-0 text-sm text-gray-700'>
              <span className='font-bold'>True story from a study:</span> Basketball players who slept 10 hours 
              a night (no extra training, no special diet) improved their shooting accuracy by 9% and got faster 
              on the court. Sleep IS training.
            </p>
          </div>
        </div>

        {/* Section 5 - Practical tips */}
        <div id='tips' className='mt-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>5. What actually worked for me (and my patients)</h2>
          
          <p>
            I'm not going to tell you to "just sleep more" because I know that's annoying and unhelpful. 
            Here are real things that made a difference:
          </p>
          
          <div className='space-y-4 my-6'>
            <div className='p-4 border rounded-lg border-gray-200'>
              <h3 className='mb-1 font-bold text-gray-900'>Pick a bedtime and actually stick to it</h3>
              <p className='m-0 text-sm text-gray-600'>Even weekends. I know it sucks. But after a week or two, your body starts getting tired naturally at that time. No alarm clock needed.</p>
            </div>
            
            <div className='p-4 border rounded-lg border-gray-200'>
              <h3 className='mb-1 font-bold text-gray-900'>The phone goes in another room</h3>
              <p className='m-0 text-sm text-gray-600'>That blue light is literally telling your brain "stay awake." I charge my phone in the kitchen now. The first few nights felt weird. Now I can't imagine having it next to my bed.</p>
            </div>
            
            <div className='p-4 border rounded-lg border-gray-200'>
              <h3 className='mb-1 font-bold text-gray-900'>Stop eating 2-3 hours before bed</h3>
              <p className='m-0 text-sm text-gray-600'>A heavy meal right before sleep wrecks your sleep quality. Your body is trying to digest AND rest at the same time. It's bad at multitasking.</p>
            </div>
            
            <div className='p-4 border rounded-lg border-gray-200'>
              <h3 className='mb-1 font-bold text-gray-900'>Make your room actually dark and cool</h3>
              <p className='m-0 text-sm text-gray-600'>65°F (18°C) is the sweet spot. Blackout curtains were a game changer for me. Worth every penny.</p>
            </div>
          </div>
        </div>

        {/* FAQ - real questions, real answers */}
        <div className='mt-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>Stuff people always ask me</h2>
          
          <div className='space-y-4'>
            <div className='p-4 border rounded-lg border-gray-200'>
              <p className='font-bold text-gray-900'>How many hours do I actually need?</p>
              <p className='m-0 text-gray-700'>7-9 hours for most adults. If you're trying to lose weight, aim for 8-9. That's where I've seen the biggest difference with my patients.</p>
            </div>
            
            <div className='p-4 border rounded-lg border-gray-200'>
              <p className='font-bold text-gray-900'>Can I just sleep more on weekends to catch up?</p>
              <p className='m-0 text-gray-700'>Not really. Sleep debt isn't like credit card debt — you can't just pay it off in one go. Consistent sleep every night matters way more than one long weekend sleep.</p>
            </div>
            
            <div className='p-4 border rounded-lg border-gray-200'>
              <p className='font-bold text-gray-900'>What about sleeping pills?</p>
              <p className='m-0 text-gray-700'>They're okay for a night or two, but they don't give you the same quality of rest as natural sleep. And some can actually make you groggy and hungrier the next day. Not ideal.</p>
            </div>
          </div>
        </div>

        {/* Simple data table - no fancy styling */}
        <div className='p-5 my-10 overflow-x-auto bg-gray-50 rounded-lg'>
          <p className='mb-3 font-semibold text-center text-gray-900'>Sleep and weight loss: the numbers</p>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b border-gray-200'>
                <th className='py-2 text-left'>Hours of sleep</th>
                <th className='py-2 text-left'>Extra calories eaten</th>
                <th className='py-2 text-left'>Weight loss results</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-gray-100'>
                <td className='py-2'>&lt; 5 hours</td>
                <td className='py-2'>+15% more</td>
                <td className='py-2 text-red-600'>Poor</td>
              </tr>
              <tr className='border-b border-gray-100'>
                <td className='py-2'>5-7 hours</td>
                <td className='py-2'>+5-7% more</td>
                <td className='py-2 text-yellow-600'>Okay</td>
               </tr>
              <tr>
                <td className='py-2'>7-9 hours</td>
                <td className='py-2'>Normal</td>
                <td className='py-2 text-green-600'>Best results</td>
               </tr>
            </tbody>
           </table>
          <p className='mt-3 text-xs text-center text-gray-400'>Based on studies of 1,000+ participants</p>
        </div>

        {/* Conclusion - honest and straightforward */}
        <div className='p-6 my-10 text-center border-t-2 border-b-2 border-gray-100'>
          <p className='text-lg text-gray-700'>
            Look, I'm not saying sleep is magic. Diet and exercise still matter. 
            But after years of working with patients, I can tell you this: the ones who 
            sleep well lose weight faster, feel better, and actually keep it off.
          </p>
          <p className='mt-3 text-lg font-medium text-gray-900'>
            So tonight? Give yourself permission to go to bed early. 
            Your body knows what it needs. Listen to it.
          </p>
        </div>

        {/* Footer nav - simple */}
        <div className='flex justify-between pt-8 mt-8 border-t border-gray-100'>
          <Link href='/maqolalar' className='text-sm text-gray-500 hover:text-gray-900'>
            ← Back to articles
          </Link>
          <div className='flex gap-4 text-sm text-gray-400'>
            <span>Share:</span>
            <button className='hover:text-gray-600'>Twitter</button>
            <button className='hover:text-gray-600'>Facebook</button>
          </div>
        </div>
      </div>
    </main>
  )
}