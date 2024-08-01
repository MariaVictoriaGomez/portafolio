document.addEventListener('DOMContentLoaded', function() {
    const hero = document.getElementById('hero');
    const about = document.getElementById('about');
    const themeToggle = document.getElementById('theme-toggle');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const body = document.body;

    const handleScroll = () => {
        const heroPos = hero.getBoundingClientRect().top;
        const aboutPos = about.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.5;

        if (heroPos < screenPos) {
            hero.classList.add('show');
        }

        if (aboutPos < screenPos) {
            about.classList.add('show');
        }
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Initialize tsParticles
    tsParticles.load("tsparticles", {
        particles: {
            number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ["#FF69B4", "#BA55D3", "#8A2BE2"]
            },
            shape: {
                type: "polygon",
                polygon: {
                    nb_sides: 6
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 10,
                random: true,
                anim: {
                    enable: true,
                    speed: 10,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

//Fade-in/Fade-out

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.slice(1);
                const targetSection = document.getElementById(targetId);
                
                sections.forEach(section => {
                    section.style.opacity = '0';
                    setTimeout(() => {
                        section.style.display = 'none';
                        targetSection.style.display = 'block';
                        setTimeout(() => targetSection.style.opacity = '1', 50);
                    }, 500);
                });
            }
        });
    });
});
