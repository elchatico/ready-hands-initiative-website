
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const teamMembers = [
  {
    name: 'Grace Owuor',
    role: 'Founder & Executive Director',
    imageUrl: 'https://picsum.photos/400/400?random=10',
    bio: 'Grace founded RHI with a passion for community safety and empowerment. Her vision drives our mission forward every day.'
  },
  {
    name: '[Replace Name]',
    role: 'Lead Trainer',
    imageUrl: 'https://picsum.photos/400/400?random=11',
    bio: 'An experienced paramedic and educator, bringing real-world expertise to every training session.'
  },
  {
    name: '[Replace Name]',
    role: 'Program Coordinator',
    imageUrl: 'https://picsum.photos/400/400?random=12',
    bio: 'Manages our school and corporate partnerships, ensuring a smooth and impactful experience for all.'
  },
    {
    name: '[Replace Name]',
    role: 'Marketing & Outreach',
    imageUrl: 'https://picsum.photos/400/400?random=13',
    bio: 'Spreads the word about RHI\'s mission and connects us with communities in need.'
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


const TeamCard: React.FC<typeof teamMembers[0]> = ({ name, role, imageUrl, bio }) => (
  <div className="group relative bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={name} className="w-full h-80 object-cover" />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-rh-light-blue">{role}</p>
    </div>
    <div className="absolute inset-0 bg-rh-blue bg-opacity-90 p-6 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-rh-light-blue mb-4">{role}</p>
      <p className="text-sm">{bio}</p>
    </div>
  </div>
);

const TeamPage: React.FC = () => {
  return (
    <div>
        <PageHeader title="Meet Our Team" subtitle="The passionate individuals behind our mission." />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
                <TeamCard key={index} {...member} />
            ))}
            </AnimatedSection>
        </div>
    </div>
  );
};

export default TeamPage;
