
import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { XIcon } from '../components/icons';

const images = [
  { src: 'https://picsum.photos/500/300?random=20', caption: 'Students practicing CPR' },
  { src: 'https://picsum.photos/500/800?random=21', caption: 'Workplace training demo' },
  { src: 'https://picsum.photos/500/500?random=22', caption: 'CSR sponsor event' },
  { src: 'https://picsum.photos/500/700?random=23', caption: 'Interactive learning session' },
  { src: 'https://picsum.photos/500/400?random=24', caption: 'Graduation day for RH Kids' },
  { src: 'https://picsum.photos/500/600?random=25', caption: 'Team building and first aid' },
  { src: 'https://picsum.photos/500/300?random=26', caption: 'Learning to use a defibrillator' },
  { src: 'https://picsum.photos/500/500?random=27', caption: 'Community outreach program' },
];

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-rh-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <p className="mt-2 text-lg text-rh-light-blue">{subtitle}</p>
        </div>
    </div>
);

const Lightbox: React.FC<{ src: string; caption: string; onClose: () => void }> = ({ src, caption, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={onClose}>
    <div className="relative bg-white p-4 rounded-lg shadow-2xl max-w-4xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
      <img src={src} alt={caption} className="w-full h-full object-contain max-h-[80vh]" />
      <p className="mt-2 text-center text-rh-blue">{caption}</p>
      <button onClick={onClose} className="absolute -top-4 -right-4 bg-white text-rh-red p-2 rounded-full shadow-lg">
        <XIcon className="w-6 h-6" />
      </button>
    </div>
  </div>
);

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string, caption: string } | null>(null);

  return (
    <div>
        <PageHeader title="Our Gallery" subtitle="Moments from our training sessions and events." />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105" onClick={() => setSelectedImage(image)}>
                        <img src={image.src} alt={image.caption} className="w-full h-auto block" />
                    </div>
                ))}
                </div>
            </AnimatedSection>
        </div>
        {selectedImage && <Lightbox src={selectedImage.src} caption={selectedImage.caption} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default GalleryPage;
