document.addEventListener('DOMContentLoaded', function() {
    // Product navigation
    const productLinks = document.querySelectorAll('.product-nav a');
    const productSections = document.querySelectorAll('.product-section');
    
    productLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            productLinks.forEach(l => l.classList.remove('active'));
            productSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const productId = this.getAttribute('data-product');
            document.getElementById(productId).classList.add('active');
            
            // Smooth scroll to section
            document.getElementById(productId).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Activate first tab in the newly shown section
            const firstTabBtn = document.querySelector(`#${productId} .tab-btn`);
            if (firstTabBtn) {
                firstTabBtn.click();
            }
        });
    });
    
    // Size options selection
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            sizeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Tab functionality for additional products
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const parentSection = this.closest('.product-section');
            
            // Remove active class from all buttons in this section
            parentSection.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            // Remove active class from all panes in this section
            parentSection.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Create floating WhatsApp button
    const whatsappFloat = document.createElement('a');
    whatsappFloat.href = 'https://wa.me/+233591410341?text=Hi,%20I%20need%20help%20choosing%20a%20Reload%20product';
    whatsappFloat.className = 'whatsapp-float';
    whatsappFloat.target = '_blank';
    whatsappFloat.rel = 'noopener noreferrer';
    whatsappFloat.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappFloat);
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll(
            '.feature, ' +
            '.product-section.active .product-image, ' +
            '.product-section.active .product-content, ' +
            '.product-section.active .tab-product-grid'
        );
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize animations
    const animateElements = [
        ...document.querySelectorAll('.feature'),
        ...document.querySelectorAll('.product-section.active .product-image'),
        ...document.querySelectorAll('.product-section.active .product-content'),
        ...document.querySelectorAll('.product-section.active .tab-product-grid')
    ];
    
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Set all WhatsApp links to open in new tab
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    });
    
    // Activate first tab in the active section on load
    const activeSection = document.querySelector('.product-section.active');
    if (activeSection) {
        const firstTabBtn = activeSection.querySelector('.tab-btn');
        if (firstTabBtn) {
            firstTabBtn.click();
        }
    }
});