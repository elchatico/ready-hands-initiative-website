
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-rh-blue">
         <img 
            src="https://picsum.photos/1600/900?random=1" 
            alt="First aid training session" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        <div className="relative z-10 p-4">
            <AnimatedSection>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                    Confidence. Care. Readiness.
                </h1>
            </AnimatedSection>
            <AnimatedSection className="mt-4">
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-rh-off-white">
                    Empowering every community member with essential first aid knowledge.
                </p>
            </AnimatedSection>
            <AnimatedSection className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/pro" className="w-full sm:w-auto bg-rh-red text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                    Book Training
                </Link>
                <Link to="/csr" className="w-full sm:w-auto bg-rh-off-white text-rh-blue font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                    Sponsor a School
                </Link>
            </AnimatedSection>
        </div>
      </section>

      {/* Highlight Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection className="w-full">
                 <HighlightCard
                    title="RH Kids"
                    description="Young Hands, Ready Hearts. [Replace later with real stats]."
                    imageUrl="https://picsum.photos/400/300?random=2"
                    linkTo="/kids"
                />
            </AnimatedSection>
            <AnimatedSection className="w-full" style={{transitionDelay: '200ms'}}>
                 <HighlightCard
                    title="RH Pro"
                    description="Safe Teams, Strong Businesses. [Replace later with partner names]."
                    imageUrl="https://picsum.photos/400/300?random=3"
                    linkTo="/pro"
                />
            </AnimatedSection>
             <AnimatedSection className="w-full" style={{transitionDelay: '400ms'}}>
                 <HighlightCard
                    title="CSR Sponsorship"
                    description="Train a Worker. Empower a Child. Save a Community."
                    imageUrl="https://picsum.photos/400/300?random=4"
                    linkTo="/csr"
                />
            </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

interface HighlightCardProps {
    title: string;
    description: string;
    imageUrl: string;
    linkTo: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ title, description, imageUrl, linkTo }) => (
    <Link to={linkTo} className="group block bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full">
        <div className="h-48 overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-rh-blue">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
            <span className="mt-4 inline-block text-rh-red font-semibold group-hover:underline">
                Learn More &rarr;
            </span>
        </div>
    </Link>
);


export default HomePage;
