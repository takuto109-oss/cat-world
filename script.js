// Modern JavaScript with Advanced Animations and Interactions
class CatWebsiteController {
    constructor() {
        this.init();
        this.setupEventListeners();
        this.setupIntersectionObserver();
        this.setupParallaxEffects();
        this.setupAdvancedAnimations();
    }

    init() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navbar = document.querySelector('.navbar');
        this.contactForm = document.querySelector('.contact-form');
        this.heroButtons = document.querySelectorAll('.hero-buttons button');
        this.floatingCards = document.querySelectorAll('.floating-card');
        
        // Initialize advanced features
        this.setupCustomCursor();
        this.setupMagneticButtons();
        this.setupParticleSystem();
    }

    setupEventListeners() {
        // Mobile navigation
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMobileNav());
        }

        // Navigation links
        document.querySelectorAll('.nav-menu a, .footer-section a').forEach(link => {
            if (link.getAttribute('href')?.startsWith('#')) {
                link.addEventListener('click', (e) => this.handleNavClick(e));
            }
        });

        // Scroll events with throttling
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => this.handleScroll(), 10);
        }, { passive: true });

        // Form handling
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
            this.setupFormValidation();
        }

        // Hero buttons
        this.heroButtons.forEach(button => {
            button.addEventListener('click', (e) => this.handleHeroButtonClick(e));
        });

        // Keyboard events
        document.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e));

        // Window resize
        window.addEventListener('resize', () => this.handleResize());

        // Mouse move for parallax
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));

        // Page visibility change
        document.addEventListener('visibilitychange', () => this.handleVisibilityChange());
    }

    toggleMobileNav() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = this.hamburger.querySelectorAll('span');
        if (this.hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            
            // Restore body scroll
            document.body.style.overflow = '';
        }

        // Animate menu items
        this.animateMenuItems();
    }

    animateMenuItems() {
        const menuItems = this.navMenu.querySelectorAll('li');
        menuItems.forEach((item, index) => {
            if (this.navMenu.classList.contains('active')) {
                item.style.animation = `slideInLeft 0.5s ease forwards ${index * 0.1}s`;
            } else {
                item.style.animation = '';
            }
        });
    }

    handleNavClick(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Smooth scroll with custom easing
            this.smoothScrollTo(targetSection);
            
            // Close mobile menu
            if (this.navMenu.classList.contains('active')) {
                this.toggleMobileNav();
            }

            // Update active nav state
            this.updateActiveNavState(targetId);
        }
    }

    smoothScrollTo(element) {
        const targetPosition = element.offsetTop - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        const easeInOutCubic = (t) => {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            const easedProgress = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + distance * easedProgress);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    }

    updateActiveNavState(targetId) {
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`.nav-menu a[href="${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    handleScroll() {
        const scrollY = window.pageYOffset;
        
        // Update navbar appearance
        if (scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }

        // Parallax effects
        this.updateParallaxElements(scrollY);
        
        // Update progress indicator
        this.updateScrollProgress();
        
        // Reveal animations
        this.handleScrollAnimations();
    }

    updateParallaxElements(scrollY) {
        // Hero parallax
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrollY * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }

        // Floating cards parallax
        this.floatingCards.forEach((card, index) => {
            const rate = scrollY * (0.1 + index * 0.05);
            card.style.transform = `translateY(${rate}px)`;
        });
    }

    updateScrollProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        // Create or update progress bar
        let progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: ${scrolled}%;
                height: 3px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
                z-index: 9999;
                transition: width 0.1s ease-out;
            `;
            document.body.appendChild(progressBar);
        } else {
            progressBar.style.width = `${scrolled}%`;
        }
    }

    handleScrollAnimations() {
        const elements = document.querySelectorAll('.feature-card, .stat-item, .team-member');
        
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('animate-fade-in-up');
            }
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm(this.contactForm)) {
            this.showNotification('入力内容をご確認ください。', 'error');
            return;
        }

        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Animate button
        this.animateSubmitButton(submitButton, true);
        
        // Simulate form submission
        setTimeout(() => {
            this.showNotification('お問い合わせを送信しました。ありがとうございます！', 'success');
            this.contactForm.reset();
            this.animateSubmitButton(submitButton, false, originalText);
            
            // Confetti effect
            this.createConfettiEffect();
        }, 2000);
    }

    animateSubmitButton(button, loading, originalText = null) {
        if (loading) {
            button.innerHTML = '<span class="loading"></span> 送信中...';
            button.disabled = true;
            button.style.transform = 'scale(0.95)';
        } else {
            button.innerHTML = originalText || '送信する';
            button.disabled = false;
            button.style.transform = '';
        }
    }

    validateForm(form) {
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            const value = input.value.trim();
            
            if (!value) {
                this.showInputError(input, '必須項目です。');
                isValid = false;
            } else if (input.type === 'email' && !this.isValidEmail(value)) {
                this.showInputError(input, '有効なメールアドレスを入力してください。');
                isValid = false;
            } else {
                this.clearInputError(input);
            }
        });
        
        return isValid;
    }

    showInputError(input, message) {
        input.style.borderColor = '#ef4444';
        input.style.boxShadow = 'inset 8px 8px 16px var(--neu-dark), inset -8px -8px 16px var(--neu-light), 0 0 0 3px rgba(239, 68, 68, 0.1)';
        
        // Remove existing error message
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) existingError.remove();
        
        // Add error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.5rem;
            animation: fadeInUp 0.3s ease-out;
        `;
        input.parentNode.appendChild(errorDiv);
    }

    clearInputError(input) {
        input.style.borderColor = '';
        input.style.boxShadow = '';
        
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) errorMessage.remove();
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    setupFormValidation() {
        const inputs = this.contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.hasAttribute('required')) {
                    this.validateForm(this.contactForm);
                }
            });
            
            input.addEventListener('input', () => {
                this.clearInputError(input);
            });
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            transform: translateX(400px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            max-width: 350px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
            backdrop-filter: blur(10px);
            background: ${colors[type]};
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
        });
        
        // Auto remove
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 400);
        }, 4000);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    handleHeroButtonClick(e) {
        const buttonText = e.target.textContent || e.target.querySelector('.btn-text').textContent;
        
        // Add click animation
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
        
        if (buttonText.includes('今すぐ始める')) {
            this.smoothScrollTo(document.querySelector('#features'));
        } else if (buttonText.includes('詳細を見る')) {
            this.smoothScrollTo(document.querySelector('#about'));
        }
    }

    handleKeyboardNavigation(e) {
        if (e.key === 'Escape' && this.navMenu.classList.contains('active')) {
            this.toggleMobileNav();
        }
        
        // Arrow key navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            this.handleArrowKeyNavigation(e.key);
        }
    }

    handleArrowKeyNavigation(key) {
        const sections = ['home', 'features', 'about', 'contact'];
        const currentSection = this.getCurrentSection();
        const currentIndex = sections.indexOf(currentSection);
        
        let targetIndex;
        if (key === 'ArrowDown') {
            targetIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else {
            targetIndex = Math.max(currentIndex - 1, 0);
        }
        
        const targetSection = document.querySelector(`#${sections[targetIndex]}`);
        if (targetSection) {
            this.smoothScrollTo(targetSection);
        }
    }

    getCurrentSection() {
        const sections = document.querySelectorAll('section[id]');
        let current = 'home';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                current = section.id;
            }
        });
        
        return current;
    }

    handleResize() {
        if (window.innerWidth > 768 && this.navMenu.classList.contains('active')) {
            this.toggleMobileNav();
        }
        
        // Update particle system
        if (this.particles) {
            this.particles.resize();
        }
    }

    handleMouseMove(e) {
        // Cursor following effect
        if (this.customCursor) {
            this.customCursor.style.left = e.clientX + 'px';
            this.customCursor.style.top = e.clientY + 'px';
        }
        
        // Parallax mouse effect
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Move floating elements based on mouse
        this.floatingCards.forEach((card, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            card.style.transform += ` translate(${x}px, ${y}px)`;
        });
    }

    handleVisibilityChange() {
        if (document.hidden) {
            // Pause animations when tab is not visible
            document.body.style.animationPlayState = 'paused';
        } else {
            // Resume animations when tab becomes visible
            document.body.style.animationPlayState = 'running';
        }
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('stats')) {
                        this.animateCounters();
                        observer.unobserve(entry.target);
                    }
                    
                    // Add reveal animation
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, options);
        
        // Observe elements
        const animatedElements = document.querySelectorAll('.features, .stats, .about, .contact');
        animatedElements.forEach(el => observer.observe(el));
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
            const duration = 2500;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    const displayValue = Math.floor(current);
                    const suffix = counter.textContent.includes('+') ? '+' : 
                                 counter.textContent.includes('/') ? '/7' : '';
                    counter.textContent = displayValue.toLocaleString() + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    const suffix = counter.textContent.includes('+') ? '+' : 
                                 counter.textContent.includes('/') ? '/7' : '';
                    counter.textContent = target.toLocaleString() + suffix;
                }
            };
            
            updateCounter();
        });
    }

    setupCustomCursor() {
        this.customCursor = document.createElement('div');
        this.customCursor.className = 'custom-cursor';
        this.customCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            opacity: 0;
        `;
        
        document.body.appendChild(this.customCursor);
        
        // Show cursor on mouse move
        document.addEventListener('mousemove', () => {
            this.customCursor.style.opacity = '0.8';
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            this.customCursor.style.opacity = '0';
        });
        
        // Scale cursor on clickable elements
        document.querySelectorAll('a, button, [role=\"button\"]').forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.customCursor.style.transform = 'scale(1.5)';
            });
            
            el.addEventListener('mouseleave', () => {
                this.customCursor.style.transform = 'scale(1)';
            });
        });
    }

    setupMagneticButtons() {
        document.querySelectorAll('.btn-primary, .btn-secondary, .feature-card').forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const strength = 0.3;
                el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = '';
            });
        });
    }

    createConfettiEffect() {
        const colors = ['#667eea', '#764ba2', '#f093fb', '#fa709a', '#fee140'];
        const confettiCount = 100;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                top: -10px;
                left: ${Math.random() * 100}vw;
                z-index: 10000;
                border-radius: 50%;
                animation: confettiFall ${Math.random() * 2 + 1}s linear forwards;
                opacity: 0.8;
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }
        
        // Add confetti animation CSS if not exists
        if (!document.querySelector('#confetti-styles')) {
            const style = document.createElement('style');
            style.id = 'confetti-styles';
            style.textContent = `
                @keyframes confettiFall {
                    0% {
                        transform: translateY(-100vh) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    setupParallaxEffects() {
        // Create floating background elements
        this.createFloatingBackground();
    }

    createFloatingBackground() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        const shapes = ['circle', 'triangle', 'square'];
        const colors = ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.15)'];
        
        for (let i = 0; i < 20; i++) {
            const shape = document.createElement('div');
            const size = Math.random() * 60 + 20;
            
            shape.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: ${shapes[Math.floor(Math.random() * shapes.length)] === 'circle' ? '50%' : '0'};
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: floatRandom ${Math.random() * 10 + 10}s infinite ease-in-out;
                z-index: 1;
            `;
            
            hero.appendChild(shape);
        }
        
        // Add float animation CSS
        if (!document.querySelector('#float-styles')) {
            const style = document.createElement('style');
            style.id = 'float-styles';
            style.textContent = `
                @keyframes floatRandom {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-20px) rotate(5deg); }
                    50% { transform: translateY(-10px) rotate(-5deg); }
                    75% { transform: translateY(-30px) rotate(3deg); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    setupAdvancedAnimations() {
        // Setup GSAP-like animations using CSS and requestAnimationFrame
        this.setupStaggerAnimations();
        this.setupMorphingAnimations();
    }

    setupStaggerAnimations() {
        const animateElements = (elements, delay = 100) => {
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }, index * delay);
            });
        };
        
        // Animate feature cards with stagger
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.feature-card');
                    animateElements(cards, 150);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        const featuresSection = document.querySelector('.features-grid');
        if (featuresSection) {
            observer.observe(featuresSection);
        }
    }

    setupMorphingAnimations() {
        // Add morphing effect to feature icons
        document.querySelectorAll('.feature-icon').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                icon.style.borderRadius = '30% 70% 70% 30% / 30% 30% 70% 70%';
            });
            
            icon.addEventListener('mouseleave', () => {
                icon.style.borderRadius = '50%';
            });
        });
    }
}

// Initialize the website controller when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CatWebsiteController();
});

// Add smooth loading effect
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
    
    // Remove any loading screens
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.remove(), 500);
    }
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register('/sw.js');
            console.log('SW registered: ', registration);
        } catch (registrationError) {
            console.log('SW registration failed: ', registrationError);
        }
    });
}

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.timing;
        const loadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    });
}

// Add CSS for dynamic animations
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .animate-slide-in-left {
        animation: slideInLeft 0.8s ease-out forwards;
    }
    
    .animate-slide-in-right {
        animation: slideInRight 0.8s ease-out forwards;
    }
    
    .custom-cursor {
        mix-blend-mode: difference;
    }
    
    @media (max-width: 768px) {
        .custom-cursor {
            display: none;
        }
    }
`;
document.head.appendChild(dynamicStyles);
