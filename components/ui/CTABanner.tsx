import React from 'react';
import { Container } from './Container';
import { Button } from './Button';

export const CTABanner = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Kickstart Your Career?
            </h2>
            <p className="text-xl text-indigo-100 mb-10">
              Join 50,000+ freshers who receive curated job alerts every morning. 
              No spam, just opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/jobs" size="lg" className="bg-white text-primary hover:bg-indigo-50 w-full sm:w-auto">
                Find Your Job
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
