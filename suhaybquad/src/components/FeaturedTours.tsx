'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const tours = [
    {
        id: 'desert-dunes',
        name: 'Expédition Dunes Dorées',
        description: 'Surfez sur les dunes dorées du Sahara lors d\'une aventure en quad inoubliable. Sensations fortes garanties !',
        duration: '4 heures',
        difficulty: 'Intermédiaire',
        image: 'https://images.unsplash.com/photo-1622185135505-2d795003994a',
        funFact: 'Seule excursion où votre quad aura plus de sable que votre sandwich !',
        highlights: ['Vue panoramique sur le désert', 'Coucher de soleil magique', 'Thé à la menthe traditionnel'],
        price: 85
    },
    {
        id: 'atlas-mountains',
        name: 'Route de l\'Atlas',
        description: 'Explorez les majestueuses montagnes de l\'Atlas en quad et découvrez des paysages à couper le souffle.',
        duration: '6 heures',
        difficulty: 'Avancé',
        image: 'https://images.unsplash.com/photo-1610030181087-540017dc9d61',
        funFact: 'Ici, même les chèvres de montagne vous applaudissent !',
        highlights: ['Villages berbères authentiques', 'Cascades secrètes', 'Repas traditionnel inclus'],
        price: 110
    },
    {
        id: 'coastal-adventure',
        name: 'Côte Atlantique Sauvage',
        description: 'Longez la côte atlantique marocaine en quad, entre falaises impressionnantes et plages désertes.',
        duration: '5 heures',
        difficulty: 'Débutant',
        image: 'https://images.unsplash.com/photo-1515525941007-b19391261464',
        funFact: 'La seule excursion où votre coiffure sera plus sauvage que le paysage !',
        highlights: ['Plages isolées', 'Grottes marines', 'Pêcheurs locaux'],
        price: 95
    }
];

export default function FeaturedTours() {
    const [hoveredTour, setHoveredTour] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <section className="section-padding bg-white dark:bg-accent relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-primary font-bold text-sm uppercase tracking-wider">Nos aventures</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">Circuits d'Exception</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Des aventures en quad conçues pour vous faire découvrir les merveilles du Maroc,
                        avec une dose parfaite d'adrénaline et de paysages spectaculaires.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {tours.map((tour, index) => (
                        <motion.div
                            key={tour.id}
                            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                            onMouseEnter={() => setHoveredTour(tour.id)}
                            onMouseLeave={() => setHoveredTour(null)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative h-64">
                                <div
                                    className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                                />
                                <Image
                                    src={tour.image}
                                    alt={tour.name}
                                    fill
                                    className="transition-transform duration-700 group-hover:scale-110"
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Price tag */}
                                <div className="absolute top-4 right-4 z-20 bg-primary text-white font-bold px-4 py-2 rounded-full shadow-lg">
                                    {tour.price}€
                                </div>

                                {/* Tour name - overlaid on image */}
                                <div className="absolute bottom-0 left-0 w-full z-20 p-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">{tour.name}</h3>

                                    <div className="flex flex-wrap gap-2 mt-3">
                                        <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                            {tour.duration}
                                        </span>
                                        <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 002 2h6a2 2 0 002-2v-1a2 2 0 00-2-2V6a1 1 0 10-2 0v1H8V6zm10 8a1 1 0 01-1 1H3a1 1 0 110-2h14a1 1 0 011 1z" clipRule="evenodd" />
                                            </svg>
                                            {tour.difficulty}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-700 dark:text-gray-300 mb-6">{tour.description}</p>

                                <div className={`mt-6 overflow-hidden transition-all duration-500 ${hoveredTour === tour.id ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                    <div className="p-4 bg-sand/50 dark:bg-sand-dark/30 rounded-xl mb-6">
                                        <p className="text-sm italic text-primary dark:text-primary-light font-medium mb-3 flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                                            </svg>
                                            {tour.funFact}
                                        </p>
                                        <ul className="text-sm space-y-2">
                                            {tour.highlights.map((highlight, index) => (
                                                <li key={index} className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <Link
                                    href={`/circuits/${tour.id}`}
                                    className="group btn-primary w-full block text-center py-3 rounded-xl flex items-center justify-center"
                                >
                                    <span>Voir le circuit</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <Link
                        href="/circuits"
                        className="btn-secondary px-10 py-4 inline-flex items-center font-bold rounded-xl group"
                    >
                        <span>Tous nos circuits</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
} 