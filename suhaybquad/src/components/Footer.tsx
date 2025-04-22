'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
    const [showJoke, setShowJoke] = useState(false);
    const [jokeIndex, setJokeIndex] = useState(0);

    const desertJokes = [
        "Pourquoi les quads n'ont jamais soif dans le désert ? Parce qu'ils ont toujours leur gourde... d'essence !",
        "C'est un quad qui rentre dans un café. Le serveur dit: 'Désolé, on ne sert pas les véhicules à moteur ici.' Le quad répond: 'C'est pas grave, je suis juste venu pour le SABLE-wich !'",
        "Comment appelle-t-on un quad qui a peur du désert ? Un quadrophobe !",
        "Quelle est la différence entre un chameau et un quad ? Le chameau peut faire une semaine sans boire, le quad seulement quelques heures !",
        "Pourquoi les quads sont-ils les meilleurs véhicules au Maroc ? Parce qu'ils savent toujours comment dune-er !"
    ];

    const quickLinks = [
        { name: "Accueil", href: "/" },
        { name: "Circuits", href: "/circuits" },
        { name: "Tarifs", href: "/tarifs" },
        { name: "Galerie", href: "/galerie" },
        { name: "À propos", href: "/a-propos" },
        { name: "Contact", href: "/contact" },
    ];

    const circuits = [
        { name: "Expédition Dunes Dorées", href: "/circuits/desert" },
        { name: "Route de l'Atlas", href: "/circuits/montagnes" },
        { name: "Côte Atlantique Sauvage", href: "/circuits/cotes" },
        { name: "Oasis Cachées", href: "/circuits/oasis" },
    ];

    const handleJokeClick = () => {
        setShowJoke(true);
        setJokeIndex((prev) => (prev + 1) % desertJokes.length);
    };

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-primary/10 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {/* Brand section */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-1">
                                <span className="text-primary">Sohaïbi</span>
                                <span className="text-secondary">Quad</span>
                            </h2>
                            <p className="text-sm text-gray-400 italic">L'aventure à 4 roues !</p>
                        </div>

                        <p className="text-gray-300 mb-6">
                            Découvrez le Maroc autrement ! Nos aventures en quad vous feront vivre des moments inoubliables dans des paysages à couper le souffle.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300">123 Avenue Mohammed V</p>
                                    <p className="text-sm text-gray-300">Marrakech, Maroc</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-300">+212 6 12 34 56 78</p>
                                    <p className="text-sm text-gray-300">Lun-Ven: 9h-18h</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
                            Liens rapides
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-gray-300 hover:text-primary transition-colors flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Circuits Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
                            Nos Circuits
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
                        </h3>
                        <ul className="space-y-3">
                            {circuits.map((circuit, index) => (
                                <li key={index}>
                                    <Link href={circuit.href} className="text-gray-300 hover:text-primary transition-colors flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                        </svg>
                                        {circuit.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Desert Joke Section */}
                        <div className="mt-6 pt-6 border-t border-gray-800">
                            <button
                                onClick={handleJokeClick}
                                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg text-sm font-medium flex items-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                Blague du désert 🌵
                            </button>

                            {showJoke && (
                                <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
                                    <p className="italic text-sm text-gray-300">{desertJokes[jokeIndex]}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-bold mb-4 text-white relative inline-block">
                            Suivez-nous
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
                        </h3>

                        <div className="flex space-x-4 mb-8">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary transition-colors flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary transition-colors flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary transition-colors flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary transition-colors flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.3-.67.34-1.03c.04-.39.02-.79.02-1.18c0-4.25.02-8.5-.02-12.75z" />
                                </svg>
                            </a>
                        </div>

                        <div className="bg-gray-800 p-5 rounded-2xl border border-gray-700">
                            <h4 className="text-base font-semibold mb-3">Newsletter</h4>
                            <p className="text-sm text-gray-400 mb-4">Inscrivez-vous pour recevoir nos offres spéciales et actualités</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="flex-1 bg-gray-700 text-white border border-gray-600 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                                <button className="bg-primary hover:bg-primary-light transition-colors rounded-r-lg px-4 py-2 text-sm font-medium">
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p>© {new Date().getFullYear()} SohaïbiQuad - La meilleure façon de dompter le désert sur 4 roues !</p>
                        <p className="mt-4 md:mt-0 text-gray-500">* Aucun chameau n'a été dépassé dans la réalisation de ce site web 🐪</p>
                    </div>
                </div>
            </div>
        </footer>
    );
} 