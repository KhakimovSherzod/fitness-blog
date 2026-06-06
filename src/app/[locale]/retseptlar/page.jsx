import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'How to Make Uzbek Dishes Healthier | Healthy National Cuisine',
  description:
    'How can you make Uzbek national dishes healthier? A complete guide to making your favorite dishes like plov, manti, lagman, and more healthier.',
  keywords: [
    'uzbek cuisine',
    'healthy eating',
    'national dishes',
    'plov',
    'manti',
    'lagman',
    'uzbek kitchen',
    'healthier',
    'diet dishes',
    'healthy weight loss',
    'recipes for weight loss',
    'weight loss',
  ],
}

export default function UzbekHealthyCuisine() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'How to Make Uzbek Dishes Healthier | Healthy National Cuisine',
            description:
              'How can you make Uzbek national dishes healthier? A complete guide to making your favorite dishes like plov, manti, lagman, and more healthier.',
            keywords: [
              'uzbek cuisine',
              'healthy eating',
              'national dishes',
              'plov',
              'manti',
              'lagman',
              'uzbek kitchen',
              'healthier',
              'diet dishes',
              'healthy weight loss',
              'recipes for weight loss',
              'weight loss',
            ],
            author: {
              '@type': 'Person',
              name: 'Shahzoda Ismoilova',
            },
            publisher: {
              '@type': 'Organization',
              name: 'VIDO FitLife',
              logo: {
                '@type': 'ImageObject',
                url: 'https://vido.fitlife.uz/og-image.png',
              },
            },
            datePublished: '2023-11-05',
            image: ['https://picsum.photos/800/400?random=22'],
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://vido.fitlife.uz/retseptlar',
            },
          }),
        }}
      />
      <main className='flex-1 py-12 bg-white'>
        <div className='container max-w-3xl px-4 mx-auto'>
          
          {/* Header */}
          <div className='mb-8 text-center'>
            <div className='flex flex-wrap items-center justify-center gap-2 mb-4'>
              <span className='px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full'>
                Uzbek Food
              </span>
              <span className='px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full'>
                Healthy Cooking
              </span>
              <span className='px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full'>
                Weight Loss
              </span>
            </div>
            
            <h1 className='mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>
              I Didn't Want to Give Up Uzbek Food. So I Made It Healthier.
            </h1>
            
            <div className='flex items-center justify-center gap-3 text-sm text-gray-500'>
              <div className='flex items-center gap-2'>
                <Image
                  src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60'
                  width={32}
                  height={32}
                  className='object-cover rounded-full'
                  alt='Shahzoda Ismoilova'
                />
                <span className='font-medium text-gray-900'>Shahzoda Ismoilova</span>
              </div>
              <span>•</span>
              <time dateTime='2023-11-05'>Nov 5, 2023</time>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </div>

          {/* Main image */}
          <div className='mb-8 overflow-hidden rounded-lg'>
            <Image
              src='https://picsum.photos/800/400?random=22'
              alt='Uzbek dishes spread on a dastarkhan'
              className='object-cover w-full'
              width={800}
              height={450}
              priority
            />
          </div>

          {/* Intro - personal story */}
          <div className='prose prose-lg max-w-none'>
            <p className='text-xl leading-relaxed text-gray-700'>
              A few years ago, I had a problem. I loved Uzbek food — like, really loved it. But my body was 
              starting to send me signals I couldn't ignore anymore.
            </p>
            
            <p>
              The thing is, nobody grows up eating this food thinking about calories. We eat plov at weddings, 
              manti on Sundays with family, lagman when we're feeling sick. It's comfort. It's home.
            </p>
            
            <p>
              But traditional Uzbek cooking can be heavy. Lots of oil. Lots of meat. Lots of fried things. 
              And when you're trying to lose weight or just eat better, that feels impossible to fit in.
            </p>
            
            <p>
              So I did what any self-respecting dietitian who loves her culture would do. I got into the kitchen 
              and started experimenting. Could I make plov that tasted like my grandmother's but didn't leave me 
              feeling guilty? Spoiler: yes. Here's how.
            </p>
          </div>

          {/* Key takeaway box */}
          <div className='p-5 my-8 border-l-4 bg-amber-50 border-amber-500 rounded-r-lg'>
            <p className='m-0 text-gray-700'>
              <strong className='text-amber-700'>Here's what I discovered:</strong> Small changes to how you 
              cook can cut calories by <strong className='text-gray-900'>30-40%</strong> without ruining the taste. 
              And honestly? My family didn't even notice.
            </p>
          </div>

          {/* What we'll cover */}
          <div className='p-5 my-8 bg-gray-50 rounded-lg'>
            <p className='mb-3 font-semibold text-gray-900'>Here's what I'll walk you through:</p>
            <ul className='space-y-2 text-sm text-gray-600 list-disc list-inside'>
              <li><a href='#fat' className='text-amber-700 no-underline hover:underline'>Cutting the oil without cutting the flavor</a></li>
              <li><a href='#veggies' className='text-amber-700 no-underline hover:underline'>The vegetable trick that changed my cooking</a></li>
              <li><a href='#cooking' className='text-amber-700 no-underline hover:underline'>Why I started steaming instead of frying</a></li>
              <li><a href='#salt' className='text-amber-700 no-underline hover:underline'>Spices that make you forget about salt</a></li>
              <li><a href='#portion' className='text-amber-700 no-underline hover:underline'>How I trick my brain into eating less</a></li>
              <li><a href='#desserts' className='text-amber-700 no-underline hover:underline'>Sweets that won't wreck your diet</a></li>
              <li><a href='#dishes' className='text-amber-700 no-underline hover:underline'>My specific fixes for plov, manti, and lagman</a></li>
            </ul>
          </div>

          {/* Section 1 - Fat */}
          <div id='fat' className='mt-12'>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>1. Less oil. Same taste. I promise.</h2>
            
            <p>
              Here's a confession: I used to pour oil into the pot without measuring. "Until it looks right," 
              my grandmother taught me. But "looks right" for her meant a lot more oil than any of us actually need.
            </p>
            
            <p>
              I started measuring. And cutting back. The first time I made plov with 30% less oil, I was nervous. 
              Would it be dry? Would the rice stick? Would my family complain?
            </p>
            
            <p>
              Nobody said a word. The rice was fine. The flavors were still there. And I felt a lot better about 
              eating it.
            </p>
            
            <div className='p-5 my-6 bg-green-50 rounded-lg'>
              <p className='m-0 text-sm text-gray-700'>
                <span className='font-bold'>A trick that actually works:</span> Use a spray bottle for oil instead 
                of pouring. Or just measure with a spoon — you'll be surprised how little you can get away with. 
                And swap out animal fat for olive oil or avocado oil when you can.
              </p>
            </div>
            
            <div className='grid grid-cols-1 gap-4 my-6 md:grid-cols-2'>
              <div className='p-4 border rounded-lg border-red-200 bg-red-50/30'>
                <h3 className='mb-2 font-bold text-red-800'>What I stopped doing:</h3>
                <ul className='pl-5 m-0 space-y-1 text-sm text-gray-700 list-disc'>
                  <li>Pouring oil straight from the bottle</li>
                  <li>Cooking everything in lamb fat</li>
                  <li>Using cheap vegetable oils</li>
                </ul>
              </div>
              
              <div className='p-4 border rounded-lg border-green-200 bg-green-50/30'>
                <h3 className='mb-2 font-bold text-green-800'>What I use now:</h3>
                <ul className='pl-5 m-0 space-y-1 text-sm text-gray-700 list-disc'>
                  <li>Olive oil for everyday cooking</li>
                  <li>Sesame oil for flavor (just a little)</li>
                  <li>Avocado oil for high heat</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 - Vegetables */}
          <div id='veggies' className='mt-12'>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>2. More vegetables = more flavor (no really)</h2>
            
            <p>
              This one surprised me. I always thought of vegetables as filler — something you add because you have to, 
              not because you want to.
            </p>
            
            <p>
              But when I started doubling the carrots in my plov and throwing in bell peppers and chickpeas, 
              something happened. The dish had more texture. More color. More interesting flavors. And way fewer 
              calories per bite.
            </p>
            
            <p>
              Now I add vegetables to everything. Manti? I mix pumpkin into the filling. Lagman? Whatever vegetables 
              I have in the fridge go in — cabbage, eggplant, green beans. It's never made anything worse.
            </p>
            
            <div className='p-5 my-6 bg-blue-50 rounded-lg'>
              <p className='m-0 text-sm text-gray-700'>
                <span className='font-bold'>Try this next time you cook:</span>
              </p>
              <ul className='mt-2 space-y-1 text-sm text-gray-700 list-disc list-inside'>
                <li>Plov: Double the carrots. Add bell peppers and chickpeas.</li>
                <li>Manti: Replace some potato with pumpkin or zucchini.</li>
                <li>Lagman: Literally any vegetable works. Clean out your fridge.</li>
                <li>Shashlik: Grill vegetables right next to the meat.</li>
              </ul>
            </div>

            {/* Simple table */}
            <div className='p-4 my-6 overflow-x-auto bg-gray-50 rounded-lg'>
              <p className='mb-3 text-sm font-semibold text-center text-gray-900'>What a difference this makes:</p>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='border-b border-gray-200'>
                    <th className='py-2 text-left'>Dish</th>
                    <th className='py-2 text-left'>Add these</th>
                    <th className='py-2 text-left'>Calories saved</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-gray-100'>
                    <td className='py-2'>Plov</td>
                    <td className='py-2'>Extra carrots, bell peppers</td>
                    <td className='py-2 text-green-700'>20-25% less</td>
                  </tr>
                  <tr className='border-b border-gray-100'>
                    <td className='py-2'>Manti</td>
                    <td className='py-2'>Pumpkin, zucchini</td>
                    <td className='py-2 text-green-700'>15-20% less</td>
                  </tr>
                  <tr className='border-b border-gray-100'>
                    <td className='py-2'>Lagman</td>
                    <td className='py-2'>Cabbage, eggplant, beans</td>
                    <td className='py-2 text-green-700'>10-15% less</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3 - Cooking methods */}
          <div id='cooking' className='mt-12'>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>3. I stopped frying so much. Here's what happened.</h2>
            
            <p>
              My mom used to fry manti after steaming them. "It adds flavor," she'd say. And she wasn't wrong — 
              it was delicious. But that second frying adds so much oil that you might as well be eating something else.
            </p>
            
            <p>
              Now I steam everything that can be steamed. Manti, chuchvara, dumplings — they come out tender and 
              flavorful without any oil at all. And for things that need to be crispy? The oven does a great job 
              with a fraction of the oil.
            </p>
            
            <div className='grid grid-cols-1 gap-4 my-6 md:grid-cols-2'>
              <div className='p-4 border rounded-lg border-gray-200'>
                <h3 className='mb-1 font-bold text-gray-900'>Steaming</h3>
                <p className='m-0 text-sm text-gray-600'>Manti, chuchvara, dumplings — all amazing steamed. Zero oil needed. Your steamer is your friend.</p>
              </div>
              
              <div className='p-4 border rounded-lg border-gray-200'>
                <h3 className='mb-1 font-bold text-gray-900'>Baking</h3>
                <p className='m-0 text-sm text-gray-600'>Samsa in the oven instead of fried? Uses 70% less oil and still gets crispy.</p>
              </div>
            </div>
          </div>

          {/* Section 4 - Salt and spices */}
          <div id='salt' className='mt-12'>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>4. Salt isn't your only option</h2>
            
            <p>
              I love salt. I'm not going to pretend I don't. But too much of it started affecting my blood pressure, 
              so I had to figure something out.
            </p>
            
            <p>
              The answer was already in my spice cabinet. Cumin (zira), coriander, black pepper, paprika, fresh herbs — 
              once I started using these generously, I barely noticed the missing salt. And my food actually had 
              more interesting flavor, not less.
            </p>
            
            <div className='p-5 my-6 bg-purple-50 rounded-lg'>
              <p className='m-0 text-sm text-gray-700'>
                <span className='font-bold'>My go-to spices:</span> Cumin, coriander, black pepper, dried dill, 
                parsley, and a little red pepper when I want heat. Try these before you reach for the salt shaker. 
                You might be surprised.
              </p>
            </div>
          </div>

          {/* Section 5 - Portion control */}
          <div id='portion' className='mt-12'>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>5. The plate trick (it feels silly but it works)</h2>
            
            <p>
              This sounds too simple, but hear me out. I switched from our big dinner plates to smaller salad plates.
            </p>
            
            <p>
              Same amount of food looks like way more on a smaller plate. Your brain gets satisfied with less. 
              You eat less without feeling deprived. It's not magic, but it feels like it.
            </p>
            
            <div className='p-5 my-6 bg-yellow-50 rounded-lg'>
              <p className='m-0 text-sm text-gray-700'>
                <span className='font-bold'>Other things that helped me:</span>
              </p>
              <ul className='mt-2 space-y-1 text-sm text-gray-700 list-disc list-inside'>
                <li>Eating slowly — put your fork down between bites</li>
                <li>Starting with salad or soup before the main dish</li>
                <li>Drinking water 20 minutes before eating</li>
                <li>Waiting 10 minutes before going back for seconds</li>
              </ul>
            </div>
          </div>

          {/* Section 6 - Desserts */}
          <div id='desserts' className='mt-12'>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>6. Sweets that won't ruin your day</h2>
            
            <p>
              Giving up halva and other Uzbek sweets felt impossible at first. But then I realized I didn't have to 
              give them up entirely — just change how I made them.
            </p>
            
            <p>
              Less sugar, more fruit. Honey instead of refined sugar. And sometimes, honestly, just a really good 
              piece of melon or a bowl of fresh berries. Uzbekistan has amazing fruit. Use it.
            </p>
            
            <div className='grid grid-cols-1 gap-4 my-6 md:grid-cols-2'>
              <div className='p-4 border rounded-lg border-pink-200 bg-pink-50/30'>
                <h3 className='mb-1 font-bold text-pink-800'>Traditional sweets (healthier):</h3>
                <ul className='pl-5 m-0 text-sm text-gray-700 list-disc'>
                  <li>Halva with half the sugar</li>
                  <li>Nisholda sweetened with honey</li>
                  <li>Jam with less sugar, more fruit</li>
                </ul>
              </div>
              
              <div className='p-4 border rounded-lg border-green-200 bg-green-50/30'>
                <h3 className='mb-1 font-bold text-green-800'>New favorites:</h3>
                <ul className='pl-5 m-0 text-sm text-gray-700 list-disc'>
                  <li>Fresh fruit salad</li>
                  <li>Baked apples with cinnamon</li>
                  <li>Frozen grapes (trust me on this)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 7 - Specific dishes */}
          <div id='dishes' className='mt-12'>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>7. How I fixed my favorites</h2>
            
            <div className='p-5 my-6 border rounded-lg border-amber-200 bg-amber-50/30'>
              <h3 className='mb-2 font-bold text-amber-800'>Plov (the big one)</h3>
              <ul className='pl-5 space-y-1 text-sm text-gray-700 list-disc'>
                <li>Cut oil by 30% — nobody noticed</li>
                <li>Double the carrots, add bell peppers</li>
                <li>Replace some rice with quinoa or bulgur</li>
                <li>Try chicken instead of lamb sometimes</li>
              </ul>
            </div>
            
            <div className='p-5 my-6 border rounded-lg border-green-200 bg-green-50/30'>
              <h3 className='mb-2 font-bold text-green-800'>Manti</h3>
              <ul className='pl-5 space-y-1 text-sm text-gray-700 list-disc'>
                <li>Roll the dough thinner (more filling, less dough)</li>
                <li>Add pumpkin or zucchini to the filling</li>
                <li>Steam only — no post-steaming frying</li>
                <li>Turkey instead of lamb</li>
              </ul>
            </div>
            
            <div className='p-5 my-6 border rounded-lg border-blue-200 bg-blue-50/30'>
              <h3 className='mb-2 font-bold text-blue-800'>Lagman</h3>
              <ul className='pl-5 space-y-1 text-sm text-gray-700 list-disc'>
                <li>Load up on vegetables — seriously, double them</li>
                <li>Use less oil in the sauce</li>
                <li>Whole grain noodles instead of white flour</li>
                <li>More broth, fewer noodles</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className='mt-12'>
            <h2 className='mb-4 text-2xl font-bold text-gray-900'>Questions I get asked all the time</h2>
            
            <div className='space-y-4'>
              <div className='p-4 border rounded-lg border-gray-200'>
                <p className='font-bold text-gray-900'>What's the best oil for plov?</p>
                <p className='m-0 text-gray-700'>Olive oil or avocado oil. Less saturated fat than traditional oils, and they handle high heat well. Sesame oil adds great flavor too, but use it sparingly — it's strong.</p>
              </div>
              
              <div className='p-4 border rounded-lg border-gray-200'>
                <p className='font-bold text-gray-900'>Can I freeze healthier manti?</p>
                <p className='m-0 text-gray-700'>Absolutely. Make a big batch, steam them, then freeze. Reheat in a steamer or microwave. Way better than store-bought frozen ones.</p>
              </div>
              
              <div className='p-4 border rounded-lg border-gray-200'>
                <p className='font-bold text-gray-900'>How do I use less salt without losing flavor?</p>
                <p className='m-0 text-gray-700'>Cumin (zira) is your best friend. Also try coriander, black pepper, fresh herbs, and a squeeze of lemon at the end. The acid from lemon tricks your tongue into thinking there's more salt.</p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className='p-6 my-10 text-center border-t-2 border-b-2 border-gray-100'>
            <p className='text-lg text-gray-700'>
              Look, I still eat my grandmother's traditional plov when I visit her. Some things are worth the extra calories.
            </p>
            <p className='mt-3 text-gray-700'>
              But on regular days? I make these healthier versions. And after a while, my family stopped noticing the difference. 
              The flavors are still there. The love is still there. Just with less oil and more vegetables.
            </p>
            <p className='mt-3 text-lg font-medium text-gray-900'>
              Try it this week. Start with one dish. See what happens.
            </p>
          </div>

          {/* Footer */}
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
    </>
  )
}