"use client";
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-10 md:p-16">
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3">Terms of Service</h1>
          <p className="text-sm sm:text-base text-slate-500">
            Last Updated: December 2025
          </p>
        </div>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 border-b border-slate-200 pb-3">
            1. Your Relationship With Us
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Welcome to Cities App (the "Platform"), which is provided by Cities Inc. in the United States 
            (collectively referred to as "Cities App," "we," or "us").
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            These Terms of Service (the "Terms") govern your relationship with us and set forth the terms 
            and conditions by which you may access and use the Platform and our related websites, services, 
            applications, products, and content (collectively, the "Services"). Access to certain Services or 
            features of the Services may be subject to age restrictions and not available to all users. Our 
            Services are provided for private, non-commercial use.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            For the purposes of these Terms, "you" and "your" means the user of the Services. The Terms form 
            a legally binding agreement between you and us.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            If you are under age 18, you may only use the Services with the consent of your parent or legal 
            guardian. Please ensure your parent or legal guardian has reviewed and discussed these Terms with you.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 border-b border-slate-200 pb-3">
            2. Accepting the Terms
          </h2>
          <p className="text-slate-600 leading-relaxed">
            By accessing or using our Services, you confirm that you can form a binding contract with Cities 
            App, that you accept these Terms, and that you agree to comply with them. Your access to and use 
            of our Services is also subject to our Privacy Policy and Community Guidelines, incorporated herein 
            by reference.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            If you access or use the Services on behalf of a business or entity, "you" includes both you and 
            that entity. You represent and warrant that you are authorized to bind the entity to these Terms, 
            and that the entity is legally and financially responsible for your account and access.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Your access or use of the Services constitutes acceptance of these Terms. You should save a local 
            copy of the Terms for your records.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 border-b border-slate-200 pb-3">
            3. Changes to the Terms
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We may amend these Terms from time to time, including changes to functionality, combining apps, 
            or regulatory updates. We will generally notify users of material changes, but you should review 
            the Terms regularly. Your continued access after changes constitutes acceptance.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 border-b border-slate-200 pb-3">
            4. Your Account with Us
          </h2>
          <p className="text-slate-600 leading-relaxed">
            To access certain Services, you must create an account and provide accurate, up-to-date information. 
            Keep your password confidential. You are solely responsible for activity under your account.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            We may disable accounts for violations of these Terms or any activities that may harm the Services 
            or violate laws.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            For account deletion, contact us at:{' '}
            <a 
              className="text-primary hover:text-primary/80 underline font-medium" 
              href="https://www.citiesapp.com/legal/report/feedback"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.citiesapp.com/legal/report/feedback
            </a>. Once deleted, accounts and content cannot be recovered.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 border-b border-slate-200 pb-3">
            5. Your Access to and Use of Our Services
          </h2>
          <p className="text-slate-600 leading-relaxed">You agree not to:</p>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 mt-2 pl-4">
            <li>Use the Services if you cannot legally form a contract</li>
            <li>Copy, modify, reverse engineer, or create derivative works of the Services</li>
            <li>Sell, rent, or use the Services for commercial purposes without consent</li>
            <li>Interfere with the Services, bypass restrictions, or use automated scripts</li>
            <li>Impersonate others or upload harmful, abusive, or illegal content</li>
            <li>Upload content infringing copyrights or intellectual property</li>
            <li>Upload viruses, malware, or harmful material</li>
            <li>Violate our Community Guidelines or applicable laws</li>
          </ul>
          <p className="mt-3 text-slate-600 leading-relaxed">
            We may remove content at our discretion and analyze content to provide relevant features.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 border-b border-slate-200 pb-3">
            6. Intellectual Property Rights
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We respect intellectual property rights and expect you to do the same. Use of our Services must 
            comply with our Copyright Policy.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 border-b border-slate-200 pb-3">
            7. Content
          </h2>
          <h3 className="text-lg font-medium text-primary mt-4 mb-2">Cities App Content</h3>
          <p className="text-slate-600 leading-relaxed">
            All content on the Services (software, images, graphics, videos, text, logos, and other intellectual 
            property) is owned or licensed by Cities App ("Cities App Content"). You may only use this content 
            for personal, non-commercial purposes.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Revenue generated by user activity belongs to Cities App unless otherwise agreed. You may not 
            monetize any content from the Services without express permission.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            You are granted a limited, revocable license to access the Services and Cities App Content solely 
            for personal use.
          </p>

          <h3 className="text-lg font-medium text-primary mt-6 mb-2">User-Generated Content</h3>
          <p className="text-slate-600 leading-relaxed">
            Users may upload or transmit content ("User Content"). By submitting User Content, you represent 
            that you own it or have permission to submit it.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            You grant Cities App a worldwide, perpetual, royalty-free, non-exclusive license to use, reproduce, 
            modify, publish, distribute, and display your User Content and grant sublicenses as needed. You 
            also grant rights to your name, image, and likeness as related to your User Content.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            We may remove, edit, or refuse content at our discretion. User Content is considered non-confidential.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Feedback you provide to Cities App (ideas, suggestions, or improvements) is provided on a 
            non-confidential basis, and you grant Cities App the right to use it freely without obligation.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 border-b border-slate-200 pb-3">
            8. Indemnity
          </h2>
          <p className="text-slate-600 leading-relaxed">
            You agree to indemnify and hold harmless Cities App, its affiliates, and their officers, directors, 
            employees, and agents from any claims, liabilities, or expenses arising from your breach of these Terms.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 border-b border-slate-200 pb-3">
            9. Exclusion of Warranties
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Services are provided "as is" without warranty. We do not guarantee uninterrupted or error-free 
            use, or the accuracy of content.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 border-b border-slate-200 pb-3">
            10. Limitation of Liability
          </h2>
          <p className="text-slate-600 leading-relaxed">
            To the extent permitted by law, we are not liable for indirect, incidental, or consequential losses, 
            including lost profits, goodwill, opportunity, or data.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            You are responsible for your own mobile charges and any disputes with third parties arising from 
            your use of the Services.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 border-b border-slate-200 pb-3">
            11. Other Terms
          </h2>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 pl-4">
            <li><span className="font-medium">Open Source:</span> Some software may be subject to separate open source licenses</li>
            <li><span className="font-medium">Entire Agreement:</span> These Terms are the complete agreement between you and Cities App</li>
            <li><span className="font-medium">Links:</span> Linking to our homepage must comply with these Terms</li>
            <li><span className="font-medium">Security:</span> We do not guarantee Services are free from viruses or bugs</li>
            <li><span className="font-medium">Severability:</span> Invalid provisions do not affect the remainder of the Terms</li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 border-b border-slate-200 pb-3">
            12. Dispute Resolution
          </h2>
          <h3 className="text-lg font-medium text-primary mt-4 mb-2">A. Informal Resolution</h3>
          <p className="text-slate-600 leading-relaxed">
            You and Cities App agree to attempt to resolve disputes amicably before legal action.
          </p>

          <h3 className="text-lg font-medium text-primary mt-6 mb-2">B. Exclusive Venue</h3>
          <p className="text-slate-600 leading-relaxed">
            These Terms are governed by the laws of California. Disputes will be resolved exclusively in the 
            U.S. District Court for the Central District of California or the Superior Court of California, 
            County of Los Angeles.
          </p>

          <h3 className="text-lg font-medium text-primary mt-6 mb-2">C. One-Year Limitation</h3>
          <p className="text-slate-600 leading-relaxed">
            You must initiate any action within one year of the event giving rise to a dispute; otherwise, 
            claims are permanently barred.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 border-b border-slate-200 pb-3">
            13. App Stores
          </h2>
          <h3 className="text-lg font-medium text-primary mt-4 mb-2">Apple Devices</h3>
          <p className="text-slate-600 leading-relaxed mb-2">By downloading from Apple or its App Store:</p>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 pl-4">
            <li>Apple is not a party to these Terms</li>
            <li>License is limited to personal, non-commercial use on Apple-authorized devices</li>
            <li>Apple is not responsible for maintenance, support, or content</li>
            <li>Apple may refund the purchase price for non-conformance but has no other warranty obligations</li>
            <li>Apple is not responsible for third-party claims of intellectual property infringement</li>
            <li>You represent that you are not in embargoed countries or listed as restricted parties</li>
            <li>Apple and subsidiaries are third-party beneficiaries of these Terms</li>
            <li>Family Sharing is permitted</li>
          </ul>

          <h3 className="text-lg font-medium text-primary mt-6 mb-2">Windows Phone Store</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 pl-4">
            <li>You may install one copy on up to five devices associated with your Microsoft account</li>
            <li>Microsoft and manufacturers have no obligation for maintenance or support</li>
          </ul>

          <h3 className="text-lg font-medium text-primary mt-6 mb-2">Amazon Appstore</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 pl-4">
            <li>Amazon Appstore Terms apply in case of conflict with these Terms</li>
            <li>Amazon is not responsible for compliance by you or Cities App</li>
          </ul>

          <h3 className="text-lg font-medium text-primary mt-6 mb-2">Google Play</h3>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 pl-4">
            <li>Google Play Terms apply in case of conflict with these Terms</li>
            <li>Google is not responsible for compliance by you or Cities App</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 border-b border-slate-200 pb-3">
            14. Contact Us
          </h2>
          <div className="text-slate-600 leading-relaxed space-y-1.5">
            <p>Cities Inc.</p>
            <p>5800 Bristol Parkway, Suite 100</p>
            <p>Culver City, CA 90230, USA</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;