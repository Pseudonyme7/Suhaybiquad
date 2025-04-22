'use client';

import { useState, useEffect } from 'react';

const features = [
    {
        icon: '🏆',
        title: 'Expertise Inégalée',
        description: 'Notre équipe connaît chaque dune et chaque caillou du désert par leur prénom. Ils pourraient trouver leur chemin les yeux fermés (mais on préfère qu\'ils les gardent ouverts).',
    },
    {
        icon: '🦺',
        title: 'Sécurité Maximale',
        description: 'Équipement haut de gamme et briefings complets. Notre priorité : vous ramener entier, avec juste ce qu\'il faut d\'adrénaline pour épater vos collègues lundi matin.',
    },
    {
        icon: '🏍️',
        title: 'Quads Dernière Génération',
        description: 'Des machines puissantes et bien entretenues. Parce que personne n\'a envie de pousser un quad en panne sous 40°C au milieu du désert.',
    },
    {
        icon: '🌵',
        title: 'Circuits Exclusifs',
        description: 'Des parcours uniques loin des sentiers touristiques. Là où même Google Maps vous dirait "Désolé, je suis perdu".',
    },
    {
        icon: '👨‍🏫',
        title: 'Guides Passionnés',
        description: 'Des guides locaux bilingues qui partagent leur culture avec humour. Ils connaissent les meilleures anecdotes et les meilleurs restaurants cachés.',
    },
    {
        icon: '📸',
        title: 'Souvenirs Garantis',
        description: 'Photos et vidéos de votre aventure incluses. Pour que vos amis soient jaloux sur Instagram, et que votre mère arrête de croire que vous êtes juste allé à la plage.',
    },
];

export default function WhyUs() {
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="whyUs" className="section-padding py-20 bg-sand dark:bg-gray-900 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/10 to-transparent dark:from-black/10"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/10 to-transparent dark:from-black/10"></div>

            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="mb-2">
                        <span className="text-primary font-bold text-sm uppercase tracking-wider">Pourquoi nous choisir</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 relative inline-block">
                        <span className="relative z-10">Ce qui fait la différence</span>
                        <span className="absolute -bottom-3 left-0 w-full h-1 bg-secondary"></span>
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        Parce que le désert marocain est trop beau pour être parcouru à pied,
                        et trop sauvage pour être vu depuis un bus climatisé !
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredFeature(index)}
                            onMouseLeave={() => setHoveredFeature(null)}
                        >
                            <div className="flex items-start mb-6">
                                <div className={`
                                    text-4xl mr-4 transition-all duration-300 p-4 rounded-xl
                                    ${hoveredFeature === index ? 'bg-primary/10 scale-110 rotate-12' : 'bg-sand dark:bg-gray-700'}
                                `}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                                    <div className="w-10 h-1 bg-primary rounded mb-3"></div>
                                </div>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300">
                                {feature.description}
                            </p>

                            {hoveredFeature === index && (
                                <div className="absolute -top-2 -right-2 w-20 h-20">
                                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                                    <div className="absolute top-4 right-4 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center transform rotate-12 shadow-lg">
                                        <span className="text-sm font-bold">Wow!</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="glass-effect inline-block p-6 rounded-2xl max-w-3xl mx-auto border border-white/10 shadow-xl">
                        <h3 className="text-2xl font-bold mb-4 text-primary">Notre secret</h3>
                        <p className="text-lg">
                            Chaque membre de notre équipe doit pouvoir réaliser 3 blagues sur le désert, connaître 5 astuces pour enlever le sable de ses chaussures, repérer un chameau à 2km de distance et garder un sourire éclatant même après 8h dans les dunes (merci à notre chef dentiste pour les contrôles dentaires gratuits !). C'est notre standard de qualité!
                        </p>
                        <div className="mt-4 flex justify-center space-x-8">
                            <div className="flex flex-col items-center">
                                <div className="text-3xl font-bold text-secondary">100%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-3xl font-bold text-secondary">5000+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Aventuriers</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-3xl font-bold text-secondary">7+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Années d'expérience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 