'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Accueil', href: '/', section: 'hero' },
        { name: 'Circuits', href: '/#circuits', section: 'featuredTours' },
        { name: 'Services', href: '/#services', section: 'whyUs' },
        { name: 'Témoignages', href: '/#testimonials', section: 'testimonials' },
        { name: 'Contact', href: '/contact', section: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Close mobile menu when route changes
        setIsMenuOpen(false);
    }, [pathname]);

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    // Fonction pour gérer le défilement vers les sections
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
        // Si on est sur la page d'accueil, on empêche la navigation par défaut
        if (pathname === '/') {
            e.preventDefault();

            const targetElement = document.getElementById(section);
            if (targetElement) {
                // Défilement fluide vers la section
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-accent/95 backdrop-blur-md shadow-lg py-2 md:py-3'
                : 'bg-transparent py-3 md:py-5'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="relative z-20">
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-16 h-16 md:w-28 md:h-28 relative mr-3">
                                <Image
                                    src="/logoQuad.png"
                                    alt="SuhaybiQuad Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className={`font-bold text-xl ${isScrolled
                                ? 'text-primary dark:text-white'
                                : 'text-white'
                                }`}>
                                <span>SUHAYBI</span>
                                <span className="text-secondary">QUAD</span>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleSmoothScroll(e, link.section)}
                                className={`
                                    px-4 py-2 rounded-md font-medium transition-colors relative group
                                    ${pathname === link.href || (pathname === '/' && link.href.startsWith('/#'))
                                        ? 'text-secondary'
                                        : `${isScrolled ? 'text-accent dark:text-gray-200' : 'text-white'} hover:text-secondary`
                                    }
                                `}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.span
                                        layoutId="activeNavIndicator"
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full"
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary rounded-full transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className={`
                                px-5 py-2.5 rounded-lg font-medium text-white transition-transform duration-300 transform hover:scale-105 
                                ${isScrolled ? 'bg-primary shadow-primary/20 shadow-lg' : 'bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20'}
                            `}
                        >
                            Réserver
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden z-20 relative w-10 h-10 flex items-center justify-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <div className="relative flex overflow-hidden items-center justify-center w-8 h-8">
                            <div className={`flex flex-col justify-between w-7 h-5 transform transition-all duration-300 origin-center overflow-hidden ${isMenuOpen ? 'translate-x-1.5' : ''}`}>
                                <div className={`bg-${isScrolled || isMenuOpen ? 'primary' : 'white'} h-[2px] w-7 transform transition-all duration-300 origin-left ${isMenuOpen ? 'rotate-45 translate-x-1' : ''}`}></div>
                                <div className={`bg-${isScrolled || isMenuOpen ? 'primary' : 'white'} h-[2px] w-7 rounded transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                                <div className={`bg-${isScrolled || isMenuOpen ? 'primary' : 'white'} h-[2px] w-7 transform transition-all duration-300 origin-left ${isMenuOpen ? '-rotate-45 translate-x-1' : ''}`}></div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-accent dark:bg-gray-900 z-10 flex flex-col"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                    >
                        <div className="h-20" /> {/* Space for header */}
                        <div className="flex flex-col px-6 py-8 space-y-6 h-full">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.section)}
                                        className={`text-2xl font-semibold block py-2 ${pathname === link.href || (pathname === '/' && link.href.startsWith('/#'))
                                            ? 'text-secondary'
                                            : 'text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-auto"
                            >
                                <Link
                                    href="/contact"
                                    className="w-full block text-center px-5 py-3 rounded-lg font-medium text-white bg-primary shadow-primary/20 shadow-lg"
                                >
                                    Réserver maintenant
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex justify-center space-x-6 pt-8"
                            >
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
} 