
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { CheckCircleIcon } from '../components/icons';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'Basic',
    price: '25,000',
    employees: 'up to 15',
    features: ['2-Hour Session', 'Basic First Aid', 'CPR Basics', 'Digital Certificates'],
    highlight: false,
  },
  {
    name: 'Standard',
    price: '50,000',
    employees: 'up to 30',
    features: ['Half-Day Session', 'All Basic Features', 'Advanced Wound Care', 'Emergency Scenarios', 'Printed Certificates'],
    highlight: true,
  },
  {
    name: 'Pro',
    price: '90,000',
    employees: 'up to 50',
    features: ['Full-Day Session', 'All Standard Features', 'Customized Scenarios', 'AED Training', 'First Aid Kit Audit'],
    highlight: false,
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
      <PageHeader title="RH Pro Training" subtitle="Safe Teams, Strong Businesses." />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl font-bold text-rh-blue">Workplace Training Packages</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our workplace program tailors first aid training to your team’s specific needs, ensuring compliance and building a culture of safety and preparedness.
          </p>
        </AnimatedSection>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <AnimatedSection key={pkg.name} className="flex" style={{ transitionDelay: `${index * 150}ms` }}>
              <div className={`relative w-full flex flex-col border rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${pkg.highlight ? 'border-rh-red' : 'border-gray-200'}`}>
                {pkg.highlight && (
                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-rh-red text-white text-sm font-bold px-4 py-1 rounded-full">Most Popular</div>
                )}
                <h3 className="text-2xl font-bold text-rh-blue">{pkg.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-rh-blue">KES {pkg.price}</span>
                </p>
                <p className="mt-1 text-gray-500">{pkg.employees} employees</p>
                <ul className="mt-8 space-y-4 text-gray-600 flex-grow">
                  {pkg.features.map(feature => (
                    <li key={feature} className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to="/contact" className={`w-full text-center font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ${pkg.highlight ? 'bg-rh-red text-white hover:bg-opacity-90' : 'bg-rh-off-white text-rh-blue hover:bg-gray-200'}`}>
                    Get Started
                  </Link>
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
