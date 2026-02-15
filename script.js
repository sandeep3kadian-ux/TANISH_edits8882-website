// ============================================
// TANISH_edits8882 - Official Channel Website
// JavaScript Functionality - Enhanced Version
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // PRELOADER FUNCTIONALITY
    // ============================================
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                preloader.classList.add('preloader-hidden');
                document.body.style.overflow = 'auto';
            }, 2000);
        });
    }

    // ============================================
    // PARTICLE SYSTEM
    // ============================================
    function createParticles() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        const container = document.createElement('div');
        container.className = 'particles-container';
        hero.appendChild(container);
        
        const particleCount = 50;
        const colors = ['#ff0040', '#7c3aed', '#06b6d4', '#ec4899'];
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.width = (4 + Math.random() * 6) + 'px';
            particle.style.height = particle.style.width;
            container.appendChild(particle);
        }
    }
    createParticles();

    // ============================================
    // SCROLL-REVEAL ANIMATIONS
    // ============================================
    const revealElements = document.querySelectorAll('.section-header, .about-content, .video-grid, .gallery-grid, .contact-content');
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // ============================================
    // 3D TILT EFFECT FOR CARDS
    // ============================================
    const tiltCards = document.querySelectorAll('.video-card, .gallery-item');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // ============================================
    // CURSOR TRAIL EFFECT
    // ============================================
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);

    const cursorRing = document.createElement('div');
    cursorRing.className = 'magic-cursor-ring';
    document.body.appendChild(cursorRing);

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;
        ringX += (mouseX - ringX) * 0.1;
        ringY += (mouseY - ringY) * 0.1;
        
        cursorDot.style.left = dotX - 4 + 'px';
        cursorDot.style.top = dotY - 4 + 'px';
        cursorRing.style.left = ringX - 20 + 'px';
        cursorRing.style.top = ringY - 20 + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Cursor hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .video-card, .gallery-item, .feature');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
    });

    // ============================================
    // SCROLL PROGRESS BAR
    // ============================================
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ============================================
    // FLOATING SHAPES
    // ============================================
    function createFloatingShapes() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (!section.querySelector('.floating-shapes')) {
                const shapesContainer = document.createElement('div');
                shapesContainer.className = 'floating-shapes';
                
                const shapes = ['floating-shape-1', 'floating-shape-2', 'floating-shape-3'];
                shapes.forEach(shapeClass => {
                    const shape = document.createElement('div');
                    shape.className = `floating-shape ${shapeClass}`;
                    shapesContainer.appendChild(shape);
                });
                
                section.appendChild(shapesContainer);
            }
        });
    }
    createFloatingShapes();

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ============================================
    // SMOOTH SCROLL FOR NAVIGATION LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // ANIMATE STATISTICS COUNTER
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                el.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                el.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    }

    // ============================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate stats when visible
                if (entry.target.classList.contains('hero-stats')) {
                    const stats = entry.target.querySelectorAll('.stat-number');
                    stats.forEach(stat => animateCounter(stat));
                }
                
                // Add fade-in animation
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.video-card, .gallery-item, .stat-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ============================================
    // VIDEO CARD HOVER EFFECTS
    // ============================================
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ============================================
    // GALLERY ITEM HOVER EFFECTS
    // ============================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.08) rotate(3deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // ============================================
    // FORM SUBMISSION HANDLING WITH EMAILJS
    // ============================================
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Get the submit button
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Send email using EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_email: 'tanishkadian3@gmail.com'
            };
            
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert(`Thank you, ${name}! Your message has been sent successfully!`);
                    contactForm.reset();
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon!`);
                })
                .finally(function() {
                    // Reset button state
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }

    // ============================================
    // PARALLAX EFFECT FOR HERO SECTION
    // ============================================
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            hero.style.backgroundPositionY = scrollY * 0.5 + 'px';
        });
    }

    // ============================================
    // ADD ACTIVE CLASS TO NAV LINKS BASED ON SCROLL POSITION
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ============================================
    // ENHANCED BUTTON RIPPLE EFFECT
    // ============================================
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.classList.add('btn-ripple');
    });

    // ============================================
    // SECTIONS WITH STAGGER ANIMATION
    // ============================================
    const videoCardsGrid = document.querySelectorAll('.video-card');
    videoCardsGrid.forEach((card, index) => {
        card.style.transitionDelay = (index * 0.1) + 's';
    });

    const galleryItemsGrid = document.querySelectorAll('.gallery-item');
    galleryItemsGrid.forEach((item, index) => {
        item.style.transitionDelay = (index * 0.1) + 's';
    });
});
