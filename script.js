// HealthLink Smart ID - Prototype Interactions

document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation between sections
    const navBtns = document.querySelectorAll('.screen-nav .nav-btn');
    const citizenSection = document.getElementById('citizen-section');
    const providerSection = document.getElementById('provider-section');
    
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            navBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const section = this.dataset.section;
            if (section === 'citizen') {
                citizenSection?.scrollIntoView({ behavior: 'smooth' });
            } else if (section === 'provider') {
                providerSection?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Language selector
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            langBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Tab interactions
    const tabs = document.querySelectorAll('.tab, .filter-tab, .patient-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const siblings = this.parentElement.querySelectorAll('.tab, .filter-tab, .patient-tab');
            siblings.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Role card selection
    const roleCards = document.querySelectorAll('.role-card');
    roleCards.forEach(card => {
        card.addEventListener('click', function() {
            roleCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Toggle switches
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // Scan option buttons
    const scanOptions = document.querySelectorAll('.scan-option');
    scanOptions.forEach(option => {
        option.addEventListener('click', function() {
            scanOptions.forEach(o => o.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Quick reply buttons
    const quickReplies = document.querySelectorAll('.quick-reply');
    quickReplies.forEach(reply => {
        reply.addEventListener('click', function() {
            // Simulate sending message
            this.style.opacity = '0.5';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.action-card, .record-card, .appointment-card, .benefit-card, .verify-btn');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Emergency button pulse
    const emergencyBtn = document.querySelector('.emergency-btn');
    if (emergencyBtn) {
        emergencyBtn.addEventListener('click', function() {
            alert('Emergency Mode would be activated in the real app!');
        });
    }
    
    // Simulate NFC scan animation
    const nfcIcon = document.querySelector('.nfc-icon.pulse');
    if (nfcIcon) {
        setInterval(() => {
            nfcIcon.style.transform = 'scale(1.1)';
            setTimeout(() => {
                nfcIcon.style.transform = 'scale(1)';
            }, 150);
        }, 3000);
    }
    
    // Provider nav buttons
    const provNavBtns = document.querySelectorAll('.prov-nav-btn');
    provNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.closest('.provider-nav');
            parent.querySelectorAll('.prov-nav-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Smooth scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add intersection observer for animations
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
    
    document.querySelectorAll('.screen-wrapper').forEach(screen => {
        screen.style.opacity = '0';
        screen.style.transform = 'translateY(20px)';
        screen.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(screen);
    });
    
    console.log('HealthLink Smart ID Prototype loaded successfully!');
});

