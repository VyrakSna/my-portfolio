// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: false,
  offset: 100
});

// Smooth scroll for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Active navigation highlighting on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section, .layout-1');
  const navLinks = document.querySelectorAll('.navbar a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.style.color = '';
    link.style.background = '';
    
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--text-primary)';
      link.style.background = 'var(--glass-bg)';
    }
  });
});

// Form submission handler
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    if (!email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Success message (in a real app, you'd send this to a server)
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
  });
}

// Add hover effect to project buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Add parallax effect to hero section (optional enhancement)
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroSection = document.querySelector('.layout-1');
  
  if (heroSection && scrolled < window.innerHeight) {
    heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroSection.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
  }
});
