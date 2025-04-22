'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        name: 'IshraQO',
        rating: 5,
        text: 'Une expérience incroyable ! Quand notre quad s\'est légèrement enlisé, Sohaïb a dit "Ne vous inquiétez pas, ce n\'est pas du sable, c\'est juste le désert qui veut un câlin!',
        location: 'Marseille, France',
        date: 'Avril 2023'
    },
    {
        id: 2,
        name: 'Jean-Michel',
        rating: 5,
        text: 'Le seul inconvénient ? Impossible de convaincre mon patron que faire du quad avec Sohaïb au Maroc devrait être considéré comme du télétravail.',
        location: 'Lyon, France',
        date: 'Mai 2023'
    },
    {
        id: 3,
        name: 'Hassen Chalgoumi',
        rating: 2,
        text: 'J\'aime li quad et li mareuk mais ji prifere la fronce quon meme je suis charles.',
        location: 'VilleJuif, France',
        date: 'Juin 2024'
    },
    {
        id: 4,
        name: 'Donald Trump',
        rating: 5,
        text: 'China is a beautiful country and I love it',
        location: 'Bruh, USA',
        date: 'Février 2024'
    }
];

function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const testimonialsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 13000);

        setIsVisible(true);

        return () => clearInterval(interval);
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }

        if (isRightSwipe) {
            setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <section
            ref={testimonialsRef}
            id="testimonials"
            className="section-padding bg-gradient-to-br from-accent/5 via-gray-100 to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-60 h-60 bg-secondary opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-primary opacity-10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <span className="text-primary font-bold text-sm uppercase tracking-wider">Témoignages</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">Ils ont adoré l'expérience</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        Découvrez ce que nos aventuriers ont à dire sur leurs escapades en quad à travers le Maroc
                    </p>
                </div>

                <div className={`relative max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Testimonial Cards */}
                    <div
                        className="overflow-hidden rounded-2xl shadow-2xl"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0"
                                >
                                    <div className="bg-white dark:bg-gray-800 p-8 md:p-10">
                                        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                                            <div className="flex-1 text-center md:text-left">
                                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{testimonial.location}</p>
                                                    </div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                                                        {testimonial.date}
                                                    </div>
                                                </div>
                                                <div className="flex justify-center md:justify-start mt-2 mb-4">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-secondary' : 'text-gray-300 dark:text-gray-600'}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <blockquote className="relative text-gray-700 dark:text-gray-300 mb-8">
                                            <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-12 w-12 text-primary/20 dark:text-primary/10" fill="currentColor" viewBox="0 0 32 32">
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                            </svg>
                                            <div className="relative z-10 italic text-lg pl-6">
                                                "{testimonial.text}"
                                            </div>
                                        </blockquote>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                                </svg>
                                                <span className="font-medium">Recommande l'expérience</span>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                                    aria-label="Témoignage précédent"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                                                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                                    aria-label="Témoignage suivant"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 mx-1.5 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'bg-primary w-6'
                                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                    }`}
                                aria-label={`Voir le témoignage ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Fun Callout */}
                <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="glass-effect inline-block p-6 rounded-2xl max-w-lg mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl border border-white/10 dark:border-gray-700/20">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-primary">Fait amusant</h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                            87% de nos clients affirment que faire du quad au Maroc est plus excitant que de manger des chips !
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials; 