'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    const backgroundDesertImages = [
        {
            url: 'https://images5.alphacoders.com/108/1085132.jpg',
            alt: 'Dunes du désert marocain',
            position: 'center'
        },
        {
            url: 'https://live.staticflickr.com/1588/24336739220_4e481ad8ba_h.jpg',
            alt: 'Paysage désertique avec montagnes',
            position: 'center'
        }
    ];

    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgroundDesertImages.length);
        }, 8000);

        setIsVisible(true);

        return () => clearInterval(interval);
    }, [backgroundDesertImages.length]);

    return (
        <div
            ref={heroRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32"
        >
            {/* Background images with subtle zoom effect */}
            <div className="absolute inset-0 z-0">
                {backgroundDesertImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${index === currentBg ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${image.url})`,
                            backgroundSize: 'cover',
                            backgroundPosition: image.position,
                            transform: index === currentBg ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 8s ease-out, opacity 1.5s ease-in-out'
                        }}
                        aria-hidden="true"
                    />
                ))}
            </div>

            {/* Overlay pattern */}
            <div
                className="absolute inset-0 z-10 opacity-30"
                style={{
                    backgroundImage: 'url("/pattern.svg")',
                    backgroundSize: '20px 20px'
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 z-10"></div>

            {/* Main hero content container */}
            <div className="container z-20 relative flex flex-col-reverse lg:flex-row items-center justify-between py-8 md:py-20 gap-8 px-4 mt-14 md:mt-0">
                {/* Left content - text */}
                <motion.div
                    className="w-full lg:w-1/2 text-white"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="mb-6">
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <span className="text-white">SUHAYBI</span>
                            <span className="text-secondary">QUAD</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Embarquez pour une aventure extraordinaire à travers les
                            <span className="text-secondary font-semibold"> paysages spectaculaires </span>
                            du Maroc avec nos quads de dernière génération.
                        </motion.p>
                    </div>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-5 sm:justify-start justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Link
                            href="/circuits"
                            className="btn-primary px-8 py-4 rounded-full text-lg font-bold transform hover:scale-105 transition-all flex items-center gap-2 group w-64 sm:w-auto"
                        >
                            Nos circuits
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/contact"
                            className="btn-secondary px-8 py-4 rounded-full text-lg font-bold transform hover:scale-105 transition-all w-64 sm:w-auto"
                        >
                            Réserver
                        </Link>
                    </motion.div>

                    {/* Features badges */}
                    <motion.div
                        className="mt-12 flex flex-wrap gap-4 justify-center sm:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        {['Guides experts', 'Quads dernière génération', 'Paysages à couper le souffle'].map((feature, index) => (
                            <span
                                key={index}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium flex items-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {feature}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right content - quad image */}
                <motion.div
                    className="w-full lg:w-1/2 relative"
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="relative h-[300px] sm:h-[400px] lg:h-[550px] w-full">
                        <Image
                            src="/quad.png"
                            alt="Quad SUHAYBINOUNI"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[15px] bg-black/20 rounded-full blur-xl"></div>

                    {/* Stats badge */}
                    <motion.div
                        className="absolute top-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <div className="text-2xl font-bold text-secondary">2025</div>
                        <div className="text-sm">Modèle premium</div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8 text-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </motion.div>
        </div>
    );
} 