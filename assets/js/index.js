// Navigation au scroll
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Animation des sections au scroll
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight * 0.85) {
                    section.classList.add('visible');
                    
                    // Animation des cartes de service
                    if (section.id === 'services') {
                        const serviceCards = section.querySelectorAll('.service-card');
                        serviceCards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('visible');
                            }, index * 200);
                        });
                    }
                    
                    // Animation des cartes WELOVE
                    if (section.id === 'welove') {
                        const weloveCards = section.querySelectorAll('.welove-card');
                        weloveCards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('visible');
                            }, index * 200);
                        });
                        
                        const stats = section.querySelectorAll('.stat');
                        stats.forEach((stat, index) => {
                            setTimeout(() => {
                                stat.classList.add('visible');
                            }, index * 300);
                        });
                    }
                }
            });
        });
        
        // Menu mobile
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenuClose = document.getElementById('mobileMenuClose');
        const mobileMenu = document.getElementById('mobileMenu');
        const overlay = document.getElementById('overlay');
        
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('open');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        overlay.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Indicateur de défilement
        const scrollIndicator = document.getElementById('scrollIndicator');
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
        
        // Animation des particules flottantes
        const particlesContainer = document.getElementById('particles');
        const particleCount = 15;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Taille aléatoire
            const size = Math.random() * 10 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Position de départ aléatoire
            particle.style.left = `${Math.random() * 100}%`;
            
            // Animation avec délai aléatoire
            particle.style.animationDelay = `${Math.random() * 15}s`;
            
            particlesContainer.appendChild(particle);
        }
        
        // Initialiser l'animation des sections visibles au chargement
        window.dispatchEvent(new Event('scroll'));
        
        // Redirection du bouton "Nous Contacter" vers la section contact
        document.querySelectorAll('.nav-cta, .mobile-cta').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Fermer le menu mobile si ouvert
                mobileMenu.classList.remove('open');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });