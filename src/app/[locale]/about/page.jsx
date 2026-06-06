const AboutPage = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left">About Us</h1>

      {/* Intro Section with Image */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Welcome to <strong>Vido FitLife</strong> — a place created to bring clear, 
            simple, and practical information about healthy living. This website was 
            built with one purpose: to help people make better choices about their 
            health, fitness, and nutrition.
          </p>
          <p>
            Whether you're trying to lose weight, improve your eating habits, start 
            working out, or simply understand your body better — we aim to provide 
            helpful, science-based content that fits real life.
          </p>
        </div>
        <div className="bg-gray-200 rounded-xl h-64 md:h-80 flex items-center justify-center text-gray-500">
          {/* Image Placeholder */}
          <span className="text-lg">Intro Image: Healthy Lifestyle</span>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="order-2 md:order-1 bg-gray-200 rounded-xl h-64 flex items-center justify-center text-gray-500">
          {/* Image Placeholder */}
          <span className="text-lg">Mission Image: Our Goal</span>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to make healthy living understandable and accessible for 
            everyone. No complicated terms, no unrealistic expectations, no extreme diets. 
            We focus on practical, realistic tips that people can use in everyday life, 
            especially in our region where information in local languages is limited.
          </p>
        </div>
      </section>

      {/* What We Offer with Image */}
      <section className="grid md:grid-cols-2 gap-8 items-start mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-3 leading-relaxed">
            <li>Articles on healthy living, weight loss, and wellness</li>
            <li>Workout guides suitable for home or gym</li>
            <li>Healthy, simple, and affordable recipes</li>
            <li>Explanations based on real science, not trends</li>
            <li>Stories and experiences from real people</li>
          </ul>
        </div>
        <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center text-gray-500">
          {/* Image Placeholder */}
          <span className="text-lg">Offerings Image: Illustrations</span>
        </div>
      </section>

      {/* Why We Created This Website with Image */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="order-2 md:order-1 bg-gray-200 rounded-xl h-64 flex items-center justify-center text-gray-500">
          {/* Image Placeholder */}
          <span className="text-lg">Why We Created: Community Image</span>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold mb-4">Why We Created Vido FitLife</h2>
          <p className="text-gray-700 leading-relaxed">
            We noticed that every year more people struggle with weight, stress, 
            fast food habits, and lack of physical activity. At the same time, 
            reliable information about health is hard to find, especially locally.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            That is why we decided to collect all valuable information in one place — 
            simple, clean, trustworthy, and accessible for everyone.
          </p>
        </div>
      </section>

      {/* Our Promise (text only, full width) */}
      <section className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
        <p className="text-gray-700 leading-relaxed">
          We promise to keep our content honest, practical, and helpful.  
          We do not promote extreme diets, false supplements, or unhealthy trends.  
          Our goal is to help people improve their lifestyle step-by-step.
        </p>
      </section>

      {/* Team Section with Image */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center text-gray-500">
          {/* Image Placeholder */}
          <span className="text-lg">Team Image: Group Photo</span>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-700 leading-relaxed">
            Vido FitLife is built by people who care about health, personal 
            development, and sharing knowledge. We are not a large company — just a 
            small team working to make useful content for everyone.
          </p>
        </div>
      </section>

      {/* Contact CTA with subtle image/icon */}
      <section className="bg-gray-100 p-6 rounded-xl mt-12 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-xl font-semibold mb-2">Stay Connected</h2>
          <p className="text-gray-700 mb-4">
            If you have questions, suggestions, or want to share your story,  
            feel free to contact us anytime.
          </p>
          <ul className="space-y-1 text-gray-800">
            <li>Email: <strong>info.vido.fitlife@gmail.com</strong></li>
            <li>Phone: <strong>+998 99 818-42-00</strong></li>
          </ul>
        </div>
        <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center text-gray-500">
          {/* Contact Image/Icon Placeholder */}
          <span className="text-sm">Contact/Map Illustration</span>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;