"use client"
import React from 'react';

const DisclaimerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="bg-card shadow-xl rounded-lg p-8 sm:p-12 w-full max-w-4xl space-y-8">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-2">
            Disclaimer
          </h1>
          <p className="text-sm text-muted-foreground">
            Effective Date: May 18, 2025
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary pt-4">
            1. General Information
          </h2>
          <p className="text-foreground/90 leading-relaxed">
            The information provided by Cities Platforms and Innovation (“we,” “us” or “our”) on our mobile application and website is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary pt-4">
            2. External Links
          </h2>
          <p className="text-foreground/90 leading-relaxed">
            The Service may contain (or you may be sent through the Service) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary pt-4">
            3. User Responsibility
          </h2>
          <p className="text-foreground/90 leading-relaxed">
            Users are solely responsible for verifying the legitimacy of users, posts, transactions, and neighborhood content shared through the platform. Cities Platforms and Innovation Ltd is not liable for any losses, damages, or disputes arising from interactions between users.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary pt-4">
            4. No Professional Advice
          </h2>
          <p className="text-foreground/90 leading-relaxed">
            The information provided on the Service is not intended as, and shall not be understood or construed as, professional advice (legal, financial, medical, etc.). You should consult with a qualified professional for specific advice tailored to your situation.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary pt-4">
            5. Limitation of Liability
          </h2>
          <p className="text-foreground/90 leading-relaxed">
            In no event shall Cities Platforms and Innovation, nor its directors, employees, or affiliates, be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use of or inability to use the Service, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary pt-4">
            6. Contact Us
          </h2>
          <p className="text-foreground/90 leading-relaxed mb-4">
            If you have any questions or concerns regarding this Disclaimer, please contact us at:
          </p>
          <div className="text-foreground/90 leading-relaxed space-y-1">
            <p>Cities Platforms and Innovation Ltd</p>
            <p>📍 Magodo, Ikeja Lagos</p>
            <p>📧 Email: support@cittis.cc</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DisclaimerPage;