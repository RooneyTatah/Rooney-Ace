// Hamburger Menu Toggle
const toggleHamburger = () => {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
};

 // Smooth Scrolling
        const smoothScroll = () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = anchor.getAttribute('href');
                    const target = document.querySelector(targetId);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        if (window.innerWidth <= 768) {
                            document.querySelector('.nav-list').classList.remove('active');
                            document.querySelector('.hamburger i').classList.replace('fa-times', 'fa-bars');
                        }
                    }
                });
            });
        };


        // Scroll Animations
        const setupScrollAnimations = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        };

        // Particle System
        const createParticles = () => {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 10}s`;
                particle.style.animationDuration = `${Math.random() * 5 + 10}s`;
                particlesContainer.appendChild(particle);
            }
        };

        // Navbar Scroll Effect
        const navbarScrollEffect = () => {
            window.addEventListener('scroll', () => {
                const navbar = document.querySelector('.navbar');
                navbar.classList.toggle('scrolled', window.scrollY > 50);
            });
        };

        // Form Submission Simulation
        const handleFormSubmission = () => {
            const form = document.getElementById('contact-form');
            const messageDiv = document.getElementById('form-message');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const button = form.querySelector('.submit-btn');
                    button.disabled = true;
                    button.textContent = 'Sending...';
                    messageDiv.style.display = 'none';

                    setTimeout(() => {
                        messageDiv.style.display = 'block';
                        messageDiv.style.color = 'var(--text-accent)';
                        messageDiv.textContent = 'Message sent successfully!';
                        form.reset();
                        button.disabled = false;
                        button.textContent = 'Send Message';
                        setTimeout(() => {
                            messageDiv.style.display = 'none';
                        }, 3000);
                    }, 1500);
                });
            }
        };

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            smoothScroll();
            toggleHamburger();
            setupScrollAnimations();
            createParticles();
            navbarScrollEffect();
            handleFormSubmission();
        });