// ===== DOM Content Loaded =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSmoothScroll();
    initProjectFilter();
    initModal();
    initScrollAnimations();
});

// ===== Navigation =====
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Active link highlighting on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Navbar background change on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// ===== Smooth Scrolling =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== Project Filter =====
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            // Filter projects
            projectCards.forEach(card => {
                const category = card.dataset.category;
                
                if (filter === 'all' || category.includes(filter)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ===== Project Modal =====
const projectData = {
    traffic: {
        title: 'AI-Based Traffic Management System',
        description: `
            <h3>Project Overview</h3>
            <p>A comprehensive AI-powered traffic management system that uses deep learning for real-time traffic optimization.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>Real-time traffic monitoring and analysis</li>
                <li>LSTM-based traffic flow prediction with 92% accuracy</li>
                <li>YOLOv5 emergency vehicle detection with 95% accuracy</li>
                <li>30% reduction in simulated traffic congestion</li>
                <li>Interactive React-based dashboard</li>
            </ul>
            
            <h3>Technologies Used</h3>
            <p>Python, TensorFlow, LSTM, YOLOv5, OpenCV, React, REST APIs</p>
        `,
        images: []
    },
    car: {
        title: 'Car Price Prediction System',
        description: `
            <h3>Project Overview</h3>
            <p>Machine learning-powered system for accurate car price prediction using multiple regression models.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>10% improvement in price prediction accuracy</li>
                <li>5 REST APIs for seamless integration</li>
                <li>Responsive web interface</li>
                <li>Real-time prediction capabilities</li>
                <li>Django backend with ML model integration</li>
            </ul>
            
            <h3>Technologies Used</h3>
            <p>Python, Django, Machine Learning, HTML, CSS, JavaScript, REST APIs</p>
        `,
        images: []
    },
    interior: {
        title: 'Interior Design Web Application',
        description: `
            <h3>Project Overview</h3>
            <p>AI-enhanced interior design application with an intuitive Gradio-powered interface for designers and architects.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>Intuitive Gradio-based interactive interface</li>
                <li>Real-time design visualization</li>
                <li>AI-enhanced design suggestions</li>
                <li>Enhanced user experience for designers</li>
                <li>Machine learning-powered design optimization</li>
            </ul>
            
            <h3>Technologies Used</h3>
            <p>Python, Gradio, Machine Learning, UI/UX Design</p>
        `,
        images: [
            'Project images/Interior design/Screenshot (105).png',
            'Project images/Interior design/Screenshot (106).png',
            'Project images/Interior design/Screenshot (107).png',
            'Project images/Interior design/Screenshot (108).png',
            'Project images/Interior design/Screenshot (109).png',
            'Project images/Interior design/Screenshot (110).png'
        ]
    },
    resume: {
        title: 'Cloud-Based Resume Builder',
        description: `
            <h3>Project Overview</h3>
            <p>Cloud-based resume creation platform with real-time editing, multiple templates, and secure storage.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>Multiple professional resume templates</li>
                <li>Real-time editing and preview</li>
                <li>Secure cloud storage</li>
                <li>User-friendly interface</li>
                <li>Export to PDF functionality</li>
            </ul>
            
            <h3>Technologies Used</h3>
            <p>Cloud Computing, HTML, CSS, JavaScript, Web Development</p>
        `,
        images: [
            'Project images/Cloud based reume builder/Resume 01.jpg',
            'Project images/Cloud based reume builder/Resume 02.jpg',
            'Project images/Cloud based reume builder/Resume 03.jpg',
            'Project images/Cloud based reume builder/Resume 04.jpg',
            'Project images/Cloud based reume builder/Resume 05.jpg',
            'Project images/Cloud based reume builder/Resume 06.jpg'
        ]
    },
    phishing: {
        title: 'Phishing Detection System',
        description: `
            <h3>Project Overview</h3>
            <p>Machine learning-powered phishing detection system with real-time URL analysis and threat assessment.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>Real-time URL threat analysis</li>
                <li>Machine learning pattern detection</li>
                <li>Custom feature extraction algorithms</li>
                <li>Streamlit-based interactive interface</li>
                <li>Comprehensive testing with Simnept simulation</li>
                <li>High accuracy in phishing identification</li>
            </ul>
            
            <h3>Technologies Used</h3>
            <p>Python, Streamlit, Machine Learning, Cybersecurity, URL Analysis</p>
        `,
        images: [
            'Project images/Phishing/Screenshot (340).png',
            'Project images/Phishing/Screenshot (341).png',
            'Project images/Phishing/Screenshot (342).png',
            'Project images/Phishing/Screenshot (343).png',
            'Project images/Phishing/Screenshot (344).png',
            'Project images/Phishing/Screenshot (345).png'
        ]
    }
};

function initModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = modal.querySelector('.modal-close');

    // Close modal on X click
    modalClose.addEventListener('click', closeModal);

    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalGallery = document.getElementById('modalGallery');
    const modalDescription = document.getElementById('modalDescription');

    const project = projectData[projectId];
    
    if (project) {
        modalTitle.textContent = project.title;
        modalDescription.innerHTML = project.description;

        // Build image gallery
        modalGallery.innerHTML = '';
        if (project.images && project.images.length > 0) {
            project.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = project.title;
                img.addEventListener('click', () => openImageFullscreen(imgSrc));
                modalGallery.appendChild(img);
            });
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openImageFullscreen(src) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
    `;
    
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.stat-item, .skill-category, .project-card, .cert-card, .timeline-item, .contact-item'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== Project Videos =====
const projectVideos = {
    traffic: {
        title: 'AI-Based Traffic Management System - Demo',
        video: 'Project Video/AI_BASED_TRAFFIC_MANAGEMENT_SYSTEM/AI_BASED_TRAFFIC_MANAGEMENT_SYSTEM_DETECTING_EMERGENCY_VEHILCE(VIDEO).mp4'
    }
};

function playProjectVideo(projectId) {
    const videoData = projectVideos[projectId];
    
    if (videoData) {
        const modal = document.getElementById('videoModal');
        const title = document.getElementById('videoModalTitle');
        const video = document.getElementById('projectVideo');
        const source = document.getElementById('videoSource');
        
        title.textContent = videoData.title;
        source.src = videoData.video;
        video.load();
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Auto-play the video
        video.play().catch(e => console.log('Auto-play prevented:', e));
    } else {
        alert('Demo video coming soon!');
    }
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('projectVideo');
    
    video.pause();
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize video modal close handlers
document.addEventListener('DOMContentLoaded', () => {
    const videoModal = document.getElementById('videoModal');
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }
    
    // Close video modal on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });
});

// ===== Make functions globally available =====
window.openProjectModal = openProjectModal;
window.playProjectVideo = playProjectVideo;
window.closeVideoModal = closeVideoModal;
