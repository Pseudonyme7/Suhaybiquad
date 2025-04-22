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
        image: '/quad.png',
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
        image: '/QuadOrange.png',
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
        image: '/epicQuadd.png',
        funFact: 'La seule excursion où votre coiffure sera plus sauvage que le paysage !',
        highlights: ['Plages isolées', 'Grottes marines', 'Pêcheurs locaux'],
        price: 95
    }
];

export default function FeaturedTours() {
    const [hoveredTour, setHoveredTour] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <section id="featuredTours" className="section-padding bg-gradient-to-b from-amber-50/80 via-amber-100/60 to-amber-50/80 dark:bg-gradient-to-b dark:from-amber-900/30 dark:via-amber-800/20 dark:to-amber-900/30 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-orange-100/40 dark:bg-orange-700/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber-100/50 dark:bg-amber-700/20 blur-3xl"></div>
            <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-yellow-100/30 dark:bg-yellow-700/10 blur-xl"></div>

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

                {/* Offre promotionnelle spéciale */}
                <motion.div
                    className="mb-12 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-xl p-5 text-white text-center shadow-lg relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] opacity-10"></div>
                    <h3 className="text-2xl font-bold mb-2">🦷 OFFRE SPÉCIALE AVENTURIERS 🦷</h3>
                    <p className="text-lg mb-3">Votre guide Sohaïb est aussi dentiste de profession !</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 mb-3">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex-1 max-w-xs">
                            <span className="font-bold block">1 DENT CASSÉE = 1 COURONNE OFFERTE</span>
                            <span className="text-sm italic">Parce que l'aventure ne devrait pas vous coûter votre sourire</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex-1 max-w-xs">
                            <span className="font-bold block">PACK DUO : QUAD + DÉTARTRAGE</span>
                            <span className="text-sm italic">Nettoyage du sable dans vos dents inclus !</span>
                        </div>
                    </div>
                    <p className="text-xs italic">* Offre soumise à conditions : il faut vraiment se casser une dent pendant le circuit (non recommandé)</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {tours.map((tour, index) => (
                        <motion.div
                            key={tour.id}
                            className="group relative bg-white/90 dark:bg-gray-800/90 rounded-2xl overflow-hidden shadow-xl will-change-transform hover:shadow-2xl hover:-translate-y-2 border-2 border-white dark:border-white/50"
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
                                    className="will-change-transform group-hover:scale-105 transition-transform duration-500"
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Price tag */}
                                <div className="absolute top-4 right-4 z-20 bg-secondary text-white font-bold px-4 py-2 rounded-full shadow-lg border-2 border-white/70">
                                    {tour.price}€
                                </div>

                                {/* Tour name - overlaid on image */}
                                <div className="absolute bottom-0 left-0 w-full z-20 p-6">
                                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{tour.name}</h3>

                                    <div className="flex flex-wrap gap-2 mt-3">
                                        <span className="inline-flex items-center px-3 py-1 bg-yellow-500/40 text-white text-sm rounded-full border border-white/70">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                            {tour.duration}
                                        </span>
                                        <span className="inline-flex items-center px-3 py-1 bg-green-600/40 text-white text-sm rounded-full border border-white/70">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 002 2h6a2 2 0 002-2v-1a2 2 0 00-2-2V6a1 1 0 10-2 0v1H8V6zm10 8a1 1 0 01-1 1H3a1 1 0 110-2h14a1 1 0 011 1z" clipRule="evenodd" />
                                            </svg>
                                            {tour.difficulty}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-gradient-to-br from-white/80 to-yellow-50/80 dark:from-gray-800/90 dark:to-yellow-900/30">
                                <p className="text-gray-700 dark:text-gray-300 mb-4">{tour.description}</p>

                                {/* Funfact */}
                                <div className="p-4 bg-green-50/70 dark:bg-green-900/30 rounded-xl mb-5 border-2 border-white/70 dark:border-white/30 shadow-sm">
                                    <p className="text-sm italic text-primary dark:text-green-400 font-medium flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                                        </svg>
                                        {tour.funFact}
                                    </p>
                                </div>

                                {/* Promotion dentaire */}
                                <div className="p-4 bg-gradient-to-br from-yellow-100/60 to-green-100/50 dark:from-yellow-800/40 dark:to-green-800/30 rounded-xl mb-5 border-2 border-white/70 dark:border-white/30 shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <span className="text-lg mr-2">🦷</span>
                                        <span className="font-bold text-secondary dark:text-yellow-400 text-sm">
                                            {tour.id === 'desert-dunes'
                                                ? 'PROMO DENTS DE SAGESSE'
                                                : tour.id === 'atlas-mountains'
                                                    ? 'OFFRE IMPLANT PREMIUM'
                                                    : 'PACK SOURIRE ÉCLATANT'}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-700 dark:text-gray-300">
                                        {tour.id === 'desert-dunes'
                                            ? 'Tombez sur du sable plutôt que chez un autre dentiste ! En cas de chute, Sohaïb vérifie votre dentition gratuitement !'
                                            : tour.id === 'atlas-mountains'
                                                ? 'Le circuit le plus extrême ! Si vous perdez une dent dans l\'Atlas, Sohaïb vous offre 20% sur un implant haut de gamme "Aussi solide que les roches de l\'Atlas" !'
                                                : 'Combo exclusif : après les embruns marins, un détartrage offert pour retrouver votre sourire éclatant !'}
                                    </p>
                                </div>

                                <Link
                                    href={`/circuits/${tour.id}`}
                                    className="group bg-secondary hover:bg-yellow-500 transition-colors text-white w-full block text-center py-3 rounded-xl flex items-center justify-center border-2 border-white/70 shadow-md"
                                >
                                    <span>Voir le circuit</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </motion.div>
            </div>

            <style jsx global>{`
                .will-change-transform {
                    will-change: transform;
                }
                
                @media (prefers-reduced-motion: reduce) {
                    .group:hover {
                        transform: none !important;
                    }
                    .group-hover\\:scale-105 {
                        transform: none !important;
                    }
                }
            `}</style>
        </section>
    );
} 