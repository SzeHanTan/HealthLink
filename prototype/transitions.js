/**
 * Smooth Page Transitions for HealthLink Prototype
 * Creates seamless navigation between screens like a real mobile app
 */

(function() {
    'use strict';

    const TRANSITION_DURATION = 250; // milliseconds

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        // Handle all internal links
        document.querySelectorAll('a[href]').forEach(link => {
            const href = link.getAttribute('href');
            
            // Only handle local HTML links (not external, anchors, or javascript)
            if (href && 
                !href.startsWith('http') && 
                !href.startsWith('#') && 
                !href.startsWith('javascript:') &&
                !href.startsWith('mailto:') &&
                !href.startsWith('tel:') &&
                (href.endsWith('.html') || href.includes('.html'))) {
                
                link.addEventListener('click', handleNavigation);
            }
        });

        // Handle browser back/forward buttons
        window.addEventListener('pageshow', function(event) {
            if (event.persisted) {
                // Page was restored from cache (back/forward navigation)
                document.body.classList.remove('page-exit');
                document.body.style.animation = 'none';
                document.body.offsetHeight; // Trigger reflow
                document.body.style.animation = '';
            }
        });

        // Initialize Presentation Mode
        initPresentationMode();
    }

    // ===== PRESENTATION MODE =====
    function initPresentationMode() {
        // Create toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'presentation-toggle';
        toggleBtn.innerHTML = '<i class="fas fa-expand"></i>';
        toggleBtn.title = 'Toggle Presentation Mode (Press P)';
        toggleBtn.onclick = togglePresentationMode;
        document.body.appendChild(toggleBtn);

        // Create hint tooltip
        const hint = document.createElement('div');
        hint.className = 'presentation-hint';
        hint.textContent = 'Press P for Presentation Mode';
        document.body.appendChild(hint);

        // Show hint briefly on load
        setTimeout(() => {
            hint.classList.add('show');
            setTimeout(() => hint.classList.remove('show'), 3000);
        }, 1000);

        // Keyboard shortcut (P key or F key for fullscreen)
        document.addEventListener('keydown', function(e) {
            // Don't trigger if typing in an input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            if (e.key === 'p' || e.key === 'P') {
                togglePresentationMode();
            }
            // ESC to exit presentation mode
            if (e.key === 'Escape' && document.body.classList.contains('presentation-mode')) {
                togglePresentationMode();
            }
        });

        // Restore presentation mode if it was active
        if (sessionStorage.getItem('presentationMode') === 'true') {
            document.body.classList.add('presentation-mode');
            toggleBtn.innerHTML = '<i class="fas fa-compress"></i>';
        }
    }

    function togglePresentationMode() {
        const isPresenting = document.body.classList.toggle('presentation-mode');
        const toggleBtn = document.querySelector('.presentation-toggle');
        
        if (isPresenting) {
            toggleBtn.innerHTML = '<i class="fas fa-compress"></i>';
            sessionStorage.setItem('presentationMode', 'true');
        } else {
            toggleBtn.innerHTML = '<i class="fas fa-expand"></i>';
            sessionStorage.setItem('presentationMode', 'false');
        }
    }

    function handleNavigation(event) {
        const link = event.currentTarget;
        const href = link.getAttribute('href');

        // Don't intercept if modifier keys are pressed (new tab, etc.)
        if (event.metaKey || event.ctrlKey || event.shiftKey) {
            return;
        }

        event.preventDefault();

        // Add exit animation class
        document.body.classList.add('page-exit');

        // Navigate after animation completes
        setTimeout(() => {
            window.location.href = href;
        }, TRANSITION_DURATION);
    }

    // Preload linked pages on hover for faster navigation
    const preloadedLinks = new Set();

    document.addEventListener('mouseover', function(event) {
        const link = event.target.closest('a[href]');
        if (!link) return;

        const href = link.getAttribute('href');
        if (href && 
            !href.startsWith('http') && 
            !href.startsWith('#') &&
            href.endsWith('.html') &&
            !preloadedLinks.has(href)) {
            
            preloadedLinks.add(href);
            
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'prefetch';
            preloadLink.href = href;
            document.head.appendChild(preloadLink);
        }
    });
})();



