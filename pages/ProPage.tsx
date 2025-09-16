
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { CheckCircleIcon } from '../components/icons';

const trainingPackages = [
  {
    name: 'Basic',
    duration: '2-Hour Session',
    description: 'A concise introduction to essential first aid skills for any workplace.',
    features: [
      'Emergency scene management',
      'Basic life support (CPR)',
      'Choking emergencies',
      'Wound and bleeding care',
    ],
    color: 'bg-rh-light-blue',
  },
  {
    name: 'Standard',
    duration: 'Half-Day Training',
    description: 'Comprehensive training covering a wider range of common workplace incidents.',
    features: [
      'All Basic features',
      'Dealing with shock and fainting',
      'Burns and scalds',
      'Fractures and sprains',
      'Medical emergencies (e.g., seizures)',
    ],
    color: 'bg-rh-blue',
  },
  {
    name: 'Pro',
    duration: 'Full-Day Certification',
    description: 'In-depth, hands-on training tailored to your industry\'s specific risks.',
    features: [
      'All Standard features',
      'Advanced scenario-based practice',
      'Use of AED (Defibrillator)',
      'Head, neck, and spinal injuries',
      'Customized modules for your workplace',
    ],
    color: 'bg-rh-red',
  },
];

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-rh-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <p className="mt-2 text-lg text-rh-light-blue">{subtitle}</p>
        </div>
    </div>
);

const ProPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="RH Pro Workplace Training" subtitle="Safe Teams, Strong Businesses." />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl font-bold text-rh-blue">Invest in Your Team's Safety</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Our certified trainers deliver engaging, practical first aid courses designed for the workplace. Equip your employees with the confidence and skills to respond effectively in an emergency, ensuring a safer environment for everyone.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingPackages.map((pkg, index) => (
            <AnimatedSection key={pkg.name} className="flex" style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:-translate-y-2">
                <div className={`p-6 ${pkg.color}`}>
                  <h3 className="text-2xl font-bold text-white text-center">{pkg.name}</h3>
                  <p className="text-center text-white opacity-90 mt-1">{pkg.duration}</p>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-center text-gray-600">{pkg.description}</p>
                  <ul className="mt-6 space-y-4 text-gray-700 flex-grow">
                    {pkg.features.map(feature => (
                      <li key={feature} className="flex items-start">
                        <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link to="/contact" className="block w-full text-center bg-rh-red text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300">
                        Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProPage;
