// Navigation scripts
        document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.getElementById('navbar');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuClose = document.getElementById('mobileMenuClose');
            const overlay = document.getElementById('overlay');
            
            // Scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // Mobile menu toggle
            mobileMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            function closeMobileMenu() {
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            mobileMenuClose.addEventListener('click', closeMobileMenu);
            overlay.addEventListener('click', closeMobileMenu);
            
            // Close mobile menu when clicking on a link
            document.querySelectorAll('.mobile-nav-links a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
            
            // Animation des éléments au défilement
            if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                gsap.registerPlugin(ScrollTrigger);
                
                // Animation des éléments avec la classe fade-in-element
                gsap.utils.toArray('.fade-in-element').forEach(element => {
                    gsap.fromTo(element, 
                        {
                            opacity: 0,
                            y: 50
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            scrollTrigger: {
                                trigger: element,
                                start: 'top 80%',
                                toggleActions: 'play none none reverse'
                            },
                            ease: 'power2.out'
                        }
                    );
                });
                
                // Animation des boutons au survol
                gsap.utils.toArray('button').forEach(button => {
                    button.addEventListener('mouseenter', function() {
                        gsap.to(this, { scale: 1.05, duration: 0.3 });
                    });
                    
                    button.addEventListener('mouseleave', function() {
                        gsap.to(this, { scale: 1, duration: 0.3 });
                    });
                });
            }
            
            // Accordéon FAQ
            document.querySelectorAll('.accordion-header').forEach(header => {
                header.addEventListener('click', () => {
                    const item = header.parentElement;
                    const isActive = item.classList.contains('active');
                    
                    // Fermer tous les autres accordéons
                    document.querySelectorAll('.accordion-item').forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Ouvrir/fermer l'accordéon actuel
                    item.classList.toggle('active', !isActive);
                });
            });
            
            // Rafraîchir ScrollTrigger après le chargement complet
            window.addEventListener('load', function() {
                if (typeof ScrollTrigger !== 'undefined') {
                    ScrollTrigger.refresh();
                }
            });
        });