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
    
    // Create floating WhatsApp button
    const whatsappFloat = document.createElement('a');
    whatsappFloat.href = 'https://wa.me/1234567890?text=Hi,%20I%20need%20help%20choosing%20a%20Reload%20product';
    whatsappFloat.className = 'whatsapp-float';
    whatsappFloat.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappFloat);
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature, .product-section.active .product-image, .product-section.active .product-content');
        
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
        ...document.querySelectorAll('.product-section.active .product-content')
    ];
    
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});