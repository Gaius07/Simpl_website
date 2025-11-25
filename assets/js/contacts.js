// Animation d'apparition au défilement
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
                observer.observe(el);
            });

            // Gestion du formulaire
            const form = document.getElementById('contact-form');
            const submitBtn = document.getElementById('submit-btn');
            const btnText = document.getElementById('btn-text');
            const btnLoading = document.getElementById('btn-loading');

            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simulation d'envoi
                btnText.classList.add('hidden');
                btnLoading.classList.remove('hidden');
                
                setTimeout(() => {
                    // Réinitialiser le formulaire
                    form.reset();
                    btnText.classList.remove('hidden');
                    btnLoading.classList.add('hidden');
                    
                    // Afficher un message de succès (vous pourriez ajouter une notification ici)
                    alert('Votre message a été envoyé avec succès ! Un expert SIMPL\' vous recontactera dans les 2 heures ouvrables.');
                }, 2000);
            });

            // Amélioration de l'interaction des champs
            const inputs = document.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.classList.add('ring-2', 'ring-gold-luxury', 'ring-opacity-50');
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.classList.remove('ring-2', 'ring-gold-luxury', 'ring-opacity-50');
                });
            });
        });