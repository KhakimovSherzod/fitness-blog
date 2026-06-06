const TermsPage = () => {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Terms &amp; Conditions</h1>
      <p className="text-gray-700 mb-4">Last updated: March 2025</p>

      <section className="space-y-4 text-gray-800 leading-relaxed">
        <p>
          Welcome to <strong>Vido FitLife</strong>. By accessing or using our website
          (vido.fitlife.uz), you agree to these Terms &amp; Conditions. 
          If you do not agree, please stop using the website.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Purpose of the Website</h2>
        <p>
          Vido FitLife provides articles, workouts, recipes, and wellness information 
          for educational purposes only. Our goal is to help users learn about 
          healthy living and improve their lifestyle. 
          The information on this site is <strong>not medical advice</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8">2. Use of Our Content</h2>
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>copy, republish, or redistribute our content without permission</li>
          <li>use our content for commercial purposes without approval</li>
          <li>modify or claim our content as your own</li>
        </ul>
        <p>
          You may share short parts of our content if you provide a link back to the source page.
        </p>

        <h2 className="text-2xl font-semibold mt-8">3. No Professional or Medical Advice</h2>
        <p>
          Vido FitLife is not operated by doctors, nutritionists, or certified medical 
          professionals. All content on this website is general information only. 
          Always consult a healthcare provider before starting new diets, workouts, 
          or health programs.
        </p>

        <h2 className="text-2xl font-semibold mt-8">4. User Responsibilities</h2>
        <p>By using the website, you agree to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>follow all applicable laws</li>
          <li>use the website for lawful purposes only</li>
          <li>not attempt to harm, hack, or disrupt the website</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">5. External Links</h2>
        <p>
          Vido FitLife may contain links to external websites. We are not responsible for 
          the content, accuracy, or privacy practices of those websites. You use them at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-8">6. Advertising & Google AdSense</h2>
        <p>
          Our website may display advertisements such as Google AdSense. These third-party 
          advertisers may use cookies to personalize ads based on your behavior. 
          You can manage ad personalization through your Google account settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8">7. Changes to These Terms</h2>
        <p>
          We may update these Terms &amp; Conditions at any time. Any changes will be posted 
          on this page with a new “Last updated” date.
        </p>

        <h2 className="text-2xl font-semibold mt-8">8. Contact Us</h2>
        <p>
          If you have questions about these Terms &amp; Conditions, feel free to contact us:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Email: <strong>info.vido.fitlife@gmail.com</strong></li>
          <li>Phone: <strong>+998 99 818-42-00</strong></li>
        </ul>
      </section>
    </main>
  );
};

export default TermsPage;