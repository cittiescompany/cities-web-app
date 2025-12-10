import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="bg-card shadow-xl rounded-lg p-8 sm:p-12 w-full max-w-4xl space-y-8">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-2">
            About Us — Cities App
          </h1>
          <p className="text-sm text-muted-foreground">
            Cities Innovation LLC
          </p>
        </header>

        <section className="space-y-4">
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
            Cities App is the world’s first AI-powered, city-based social economy built to empower everyday people — creators, buyers, sellers, and local businesses — to earn, connect, and thrive within their local communities.
          </p>
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
            For years, the digital world has been controlled by global platforms that take everything and give almost nothing back.
            <br />
            Creators earn nothing.
            <br />
            Users get shadow-banned.
            <br />
            Content gets stolen.
            <br />
            Local businesses get ignored.
            <br />
            Buyers get scammed.
          </p>
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed font-semibold">
            We decided to fix all of it.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary pt-4">
            Our Mission
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            To build a safe, fair, and profitable digital ecosystem for every city, where people can earn real income, support local commerce, and interact with trust.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary pt-4">
            What We Do
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Cities App transforms every city into its own digital economy with five powerful features:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-foreground">1. Monetization for Everyone</h3>
              <p className="text-foreground/80 leading-relaxed">
                Every like, comment, and view on your content pays you real money — instantly.
                <br />
                No thresholds. No tricks. No broken creator funds.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-foreground">2. Total Content Protection</h3>
              <p className="text-foreground/80 leading-relaxed">
                With AI fingerprinting and smart watermarking, your photos and videos are protected from theft and unauthorized reposting forever.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-foreground">3. Hyper-Local Marketplace</h3>
              <p className="text-foreground/80 leading-relaxed">
                Buy and sell safely within your city — cars, properties, electronics, items — all verified and organized by location.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-foreground">4. Escrow-Protected Transactions</h3>
              <p className="text-foreground/80 leading-relaxed">
                Our Cities Secure Escrow™ ensures your money is safe until you receive, inspect, and approve your item.
                <br />
                Zero scams. Zero fraud.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-foreground">5. AI-Powered City Communities</h3>
              <p className="text-foreground/80 leading-relaxed">
                Discover people, businesses, meetups, and opportunities around you.
                <br />
                Your digital neighborhood — finally organized.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary pt-4">
            Why We Exist
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Because the world doesn’t need another global social network.
            <br />
            It needs a city-based economy where:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 leading-relaxed">
            <li>Creators actually get paid</li>
            <li>Content stays protected</li>
            <li>Communities stay connected</li>
            <li>Local businesses grow</li>
            <li>Buyers and sellers transact safely</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed font-semibold">
            Cities App is rebuilding digital life from the ground up — city by city, community by community.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary pt-4">
            Our Vision
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            To become the global infrastructure for local digital economies, empowering millions of people to earn, trade, and connect through a trusted city ecosystem.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;