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
  ],
}

export default function UzbekHealthyCuisine() {
  return (
    <main className='flex-1 py-12 bg-white'>
      <div className='container max-w-3xl px-4 mx-auto'>
        
        {/* Header - simple and personal */}
        <div className='mb-8 text-center'>
          <div className='flex flex-wrap items-center justify-center gap-2 mb-4'>
            <span className='px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full'>
              Uzbek Food
            </span>
            <span className='px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full'>
              Healthy Cooking
            </span>
            <span className='px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full'>
              Nutrition Tips
            </span>
          </div>
          
          <h1 className='mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>
            I Love Plov Too Much to Give It Up. So I Fixed It.
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

        {/* Hero image */}
        <div className='mb-8 overflow-hidden rounded-lg'>
          <Image
            src='https://media.istockphoto.com/id/1133734645/photo/traditional-uzbek-oriental-cuisine-uzbek-family-table-from-different-dishes-in-national.webp?a=1&b=1&s=612x612&w=0&k=20&c=OslDrIjnBHRq418R9AYEFLsCdyn54sSWl1eCKhObHJg='
            alt='Traditional Uzbek dishes spread on a table'
            className='object-cover w-full'
            width={800}
            height={450}
            priority
          />
        </div>

        {/* Intro - personal story */}
        <div className='prose prose-lg max-w-none'>
          <p className='text-xl leading-relaxed text-gray-700'>
            My grandmother made the best plov in our neighborhood. Everyone said so. Rich, fragrant, 
            with that perfect layer of oil on top that made you feel both guilty and happy at the same time.
          </p>
          
          <p>
            A few years ago, I realized I couldn't eat like that anymore. My clothes were getting tighter, 
            my energy was dropping, and honestly? I felt heavy after every family gathering.
          </p>
          
          <p>
            But here's the thing — I refused to give up Uzbek food. Plov, manti, lagman... this is my culture. 
            These flavors are home to me. So instead of quitting, I started experimenting. What if I could keep 
            the taste but lose the extra calories?
          </p>
          
          <p>
            Turns out, you can. Here's what I figured out after hundreds of trips to the kitchen.
          </p>
        </div>

        {/* Quick stat box */}
        <div className='p-6 my-8 border-l-4 bg-amber-50 border-amber-500 rounded-r-lg'>
          <p className='m-0 text-gray-700'>
            <strong className='text-amber-700'>The good news:</strong> With a few small changes, you can cut 
            the calories in your favorite Uzbek dishes by <strong className='text-gray-900'>30-40%</strong> 
            without losing the flavor you love. Yes, really.
          </p>
        </div>

        {/* Table of contents - clean and simple */}
        <div className='p-5 my-8 bg-gray-50 rounded-lg'>
          <p className='mb-3 font-semibold text-gray-900'>Here's what I'll show you:</p>
          <ul className='space-y-2 text-sm text-gray-600 list-disc list-inside'>
            <li><a href='#fat' className='text-amber-700 no-underline hover:underline'>How I cut the oil without ruining the taste</a></li>
            <li><a href='#veggies' className='text-amber-700 no-underline hover:underline'>The vegetable trick my grandma actually approved</a></li>
            <li><a href='#cooking' className='text-amber-700 no-underline hover:underline'>Why I stopped frying (mostly)</a></li>
            <li><a href='#salt' className='text-amber-700 no-underline hover:underline'>Spices that make you forget about salt</a></li>
            <li><a href='#portion' className='text-amber-700 no-underline hover:underline'>The plate trick that changed everything</a></li>
            <li><a href='#desserts' className='text-amber-700 no-underline hover:underline'>Sweets that won't ruin your day</a></li>
            <li><a href='#dishes' className='text-amber-700 no-underline hover:underline'>My go-to fixes for plov, manti, and lagman</a></li>
          </ul>
        </div>

        {/* Section 1 - Reduce fat */}
        <div id='fat' className='mt-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>1. Less oil, same flavor (I promise)</h2>
          
          <p>
            Traditional Uzbek cooking uses a lot of oil. Like, a LOT. And don't get me started on the lamb fat.
            My grandmother would say the oilier the plov, the better the cook. But our bodies aren't built 
            for that much fat, especially if we're sitting at desks all day.
          </p>
          
          <p>
            Here's what worked for me: I started using <strong>25-30% less oil</strong> than the recipe called for. 
            At first, I was scared the food would be dry or bland. But you know what? Nobody noticed. 
            The flavors were still there. The texture was still good.
          </p>
          
          <div className='p-5 my-6 bg-green-50 rounded-lg'>
            <p className='m-0 text-sm text-gray-700'>
              <span className='font-bold'>Pro tip from my kitchen:</span> When making plov, instead of pouring 
              oil straight into the pot, try using a spray bottle or just measure it with a spoon. 
              You'll be shocked how little you actually need. And swap animal fat for olive oil or avocado oil 
              — your heart will thank you.
            </p>
          </div>
          
          <div className='grid grid-cols-1 gap-4 my-6 md:grid-cols-2'>
            <div className='p-4 border rounded-lg border-red-200 bg-red-50/30'>
              <h3 className='mb-2 font-bold text-red-800'>What I stopped doing:</h3>
              <ul className='pl-5 m-0 space-y-1 text-sm text-gray-700 list-disc'>
                <li>Pouring oil straight from the bottle ("until it looks right")</li>
                <li>Cooking everything in lamb fat</li>
                <li>Using cheap vegetable oils</li>
              </ul>
            </div>
            
            <div className='p-4 border rounded-lg border-green-200 bg-green-50/30'>
              <h3 className='mb-2 font-bold text-green-800'>What I use now:</h3>
              <ul className='pl-5 m-0 space-y-1 text-sm text-gray-700 list-disc'>
                <li>Olive oil for most cooking</li>
                <li>Sesame oil for flavor (just a little)</li>
                <li>Avocado oil for high-heat dishes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2 - More vegetables */}
        <div id='veggies' className='mt-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>2. The vegetable hack nobody told me about</h2>
          
          <p>
            Here's a secret: you can add way more vegetables to Uzbek dishes than recipes say, and it actually 
            makes them taste better. More color, more texture, more flavor. And fewer calories per bite.
          </p>
          
          <p>
            When I make plov now, I double the carrots. I throw in bell peppers. Sometimes I add chickpeas or 
            green peas. The rice-to-veggie ratio changes completely. And honestly? I don't miss the extra meat.
          </p>
          
          <div className='p-5 my-6 bg-blue-50 rounded-lg'>
            <p className='m-0 text-sm text-gray-700'>
              <span className='font-bold'>Try this this week:</span>
            </p>
            <ul className='mt-2 space-y-1 text-sm text-gray-700 list-disc list-inside'>
              <li>Plov: double the carrots, add bell peppers and chickpeas</li>
              <li>Manti: replace some potato with pumpkin or zucchini</li>
              <li>Lagman: literally add any vegetable you have — cabbage, eggplant, green beans</li>
              <li>Shashlik: grill vegetables right alongside the meat</li>
            </ul>
          </div>

          {/* Simple table */}
          <div className='p-4 my-6 overflow-x-auto bg-gray-50 rounded-lg'>
            <p className='mb-3 text-sm font-semibold text-center text-gray-900'>What a difference vegetables make:</p>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b border-gray-200'>
                  <th className='py-2 text-left'>Dish</th>
                  <th className='py-2 text-left'>Add these vegetables</th>
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
                <tr>
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
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>3. I stopped frying everything. Here's what happened.</h2>
          
          <p>
            My mom used to fry manti after steaming them. "For extra flavor," she'd say. And yes, it was delicious. 
            But that second frying adds so much oil that you might as well be eating something else entirely.
          </p>
          
          <p>
            Now I steam everything that can be steamed. Manti, chuchvara, even some types of samsa. 
            And for things that need to be crispy? I bake them instead of deep frying.
          </p>
          
          <div className='grid grid-cols-1 gap-4 my-6 md:grid-cols-2'>
            <div className='p-4 border rounded-lg border-gray-200'>
              <h3 className='mb-1 font-bold text-gray-900'>Steaming</h3>
              <p className='m-0 text-sm text-gray-600'>Manti, chuchvara, dumplings — all of these taste amazing steamed. No oil needed at all.</p>
            </div>
            
            <div className='p-4 border rounded-lg border-gray-200'>
              <h3 className='mb-1 font-bold text-gray-900'>Baking</h3>
              <p className='m-0 text-sm text-gray-600'>Samsa in the oven instead of fried? Uses 70% less oil. Still crispy.</p>
            </div>
          </div>
        </div>

        {/* Section 4 - Salt and spices */}
        <div id='salt' className='mt-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>4. Salt is not your only friend</h2>
          
          <p>
            Uzbek food can be salty. Really salty. And I love salt as much as anyone, but my blood pressure 
            started sending me warning signs. So I had to figure something out.
          </p>
          
          <p>
            The answer? Spices. Lots of them. Cumin, coriander, black pepper, paprika, fresh herbs. 
            Once I started loading up on these, I barely noticed the missing salt.
          </p>
          
          <div className='p-5 my-6 bg-purple-50 rounded-lg'>
            <p className='m-0 text-sm text-gray-700'>
              <span className='font-bold'>My spice cabinet staples:</span> Cumin (zira), coriander, black pepper, 
              dried dill, parsley, and a little bit of red pepper when I want heat. Try using these before 
              you reach for the salt shaker. You might be surprised.
            </p>
          </div>
        </div>

        {/* Section 5 - Portion control */}
        <div id='portion' className='mt-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>5. The plate trick (it's almost silly how well this works)</h2>
          
          <p>
            Here's something that sounds too simple to work, but it does: use smaller plates.
          </p>
          
          <p>
            I switched from our big dinner plates to smaller salad plates. Same amount of food looks like 
            WAY more on a smaller plate. Your brain gets satisfied with less. It's not magic, but it feels like it.
          </p>
          
          <div className='p-5 my-6 bg-yellow-50 rounded-lg'>
            <p className='m-0 text-sm text-gray-700'>
              <span className='font-bold'>Other things that helped me eat less without feeling deprived:</span>
            </p>
            <ul className='mt-2 space-y-1 text-sm text-gray-700 list-disc list-inside'>
              <li>Eating slowly — put your fork down between bites</li>
              <li>Starting with salad or soup before the main dish</li>
              <li>Drinking water 20 minutes before eating</li>
              <li>Not going back for seconds right away (wait 10 minutes)</li>
            </ul>
          </div>
        </div>

        {/* Section 6 - Desserts */}
        <div id='desserts' className='mt-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>6. Sweets that won't ruin your progress</h2>
          
          <p>
            Giving up halva and other Uzbek sweets felt impossible at first. But then I realized I didn't have to 
            give them up entirely — just change how I made them.
          </p>
          
          <p>
            Less sugar, more fruit, natural sweeteners instead of refined sugar. And sometimes? Just a really 
            good piece of melon or a bowl of fresh berries. Uzbekistan has amazing fruit. Use it.
          </p>
          
          <div className='grid grid-cols-1 gap-4 my-6 md:grid-cols-2'>
            <div className='p-4 border rounded-lg border-pink-200 bg-pink-50/30'>
              <h3 className='mb-1 font-bold text-pink-800'>Traditional sweets (fixed):</h3>
              <ul className='pl-5 m-0 text-sm text-gray-700 list-disc'>
                <li>Halva with half the sugar</li>
                <li>Nisholda sweetened with honey</li>
                <li>Murabbo with less sugar, more fruit</li>
              </ul>
            </div>
            
            <div className='p-4 border rounded-lg border-green-200 bg-green-50/30'>
              <h3 className='mb-1 font-bold text-green-800'>New favorites:</h3>
              <ul className='pl-5 m-0 text-sm text-gray-700 list-disc'>
                <li>Fresh fruit salad</li>
                <li>Baked apples with cinnamon</li>
                <li>Frozen grapes (trust me, try it)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 7 - Specific dishes */}
        <div id='dishes' className='mt-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>7. How I fixed my favorite dishes</h2>
          
          <div className='p-5 my-6 border rounded-lg border-amber-200 bg-amber-50/30'>
            <h3 className='mb-2 font-bold text-amber-800'>Plov (the big one)</h3>
            <ul className='pl-5 space-y-1 text-sm text-gray-700 list-disc'>
              <li>Cut oil by 30% — nobody noticed</li>
              <li>Double the carrots and add bell peppers</li>
              <li>Replace some rice with quinoa or bulgur</li>
              <li>Use chicken breast instead of lamb sometimes</li>
            </ul>
          </div>
          
          <div className='p-5 my-6 border rounded-lg border-green-200 bg-green-50/30'>
            <h3 className='mb-2 font-bold text-green-800'>Manti</h3>
            <ul className='pl-5 space-y-1 text-sm text-gray-700 list-disc'>
              <li>Roll the dough thinner (more filling, less carbs)</li>
              <li>Add pumpkin or zucchini to the filling</li>
              <li>Steam only — no post-steaming frying</li>
              <li>Turkey meat instead of lamb</li>
            </ul>
          </div>
          
          <div className='p-5 my-6 border rounded-lg border-blue-200 bg-blue-50/30'>
            <h3 className='mb-2 font-bold text-blue-800'>Lagman</h3>
            <ul className='pl-5 space-y-1 text-sm text-gray-700 list-disc'>
              <li>Load up on vegetables — seriously, double them</li>
              <li>Use less oil in the sauce</li>
              <li>Whole grain noodles instead of white flour</li>
              <li>More broth, less noodles</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className='mt-12'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>Questions my patients ask me all the time</h2>
          
          <div className='space-y-4'>
            <div className='p-4 border rounded-lg border-gray-200'>
              <p className='font-bold text-gray-900'>What's the best oil for plov?</p>
              <p className='m-0 text-gray-700'>Olive oil or avocado oil. Less saturated fat than traditional oils, and they handle high heat well. Sesame oil adds great flavor too, but use it sparingly — it's strong.</p>
            </div>
            
            <div className='p-4 border rounded-lg border-gray-200'>
              <p className='font-bold text-gray-900'>Can I freeze healthier manti?</p>
              <p className='m-0 text-gray-700'>Absolutely. Make a big batch, steam them, then freeze. Reheat in a steamer or microwave. Way better than frozen ones from the store.</p>
            </div>
            
            <div className='p-4 border rounded-lg border-gray-200'>
              <p className='font-bold text-gray-900'>How do I reduce salt without losing flavor?</p>
              <p className='m-0 text-gray-700'>Cumin (zira) is your best friend. Also try coriander, black pepper, fresh herbs, and a squeeze of lemon at the end. The acid from lemon tricks your tongue into thinking there's more salt than there actually is.</p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className='p-6 my-10 text-center border-t-2 border-b-2 border-gray-100'>
          <p className='text-lg text-gray-700'>
            Look, I still eat my grandmother's plov when I visit her. Some traditions are worth the extra calories.
          </p>
          <p className='mt-3 text-gray-700'>
            But on regular days? I make these healthier versions. And honestly? My family doesn't even notice the difference 
            anymore. The flavors are still there. The love is still there. Just with less oil and more vegetables.
          </p>
          <p className='mt-3 text-lg font-medium text-gray-900'>
            Give it a try this week. Start with one dish. See if anyone notices.
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
  )
}