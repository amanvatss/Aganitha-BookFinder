import React from 'react';
import HeroSection from './HeroSection';
import FeaturesGrid from './FeaturesGrid';
import StudentBenefits from './StudentBenefit';
import StatsSection from '../WelcomeScreen/StatsSection'
import CallToAction from './CallToAction';

const WelcomeScreen = () => {
  return (
    <div className="text-center py-16">
      <HeroSection />
      <FeaturesGrid />
      <StudentBenefits />
      <StatsSection />
      <CallToAction />
    </div>
  );
};

export default WelcomeScreen;