document.addEventListener('DOMContentLoaded', function() {
    // Gallery Items Data
    const galleryItems = [
        {
            img: 'images/products/t-shirt-1.jpg',
            title: 'Hand Embroidery T-Shirt',
            description: 'Custom couples t-shirt with intricate Aari work'
        },
        {
            img: 'images/products/bridal-blouse.png',
            title: 'Bridal Blouse Design',
            description: 'Heavy beads work for special occasions'
        },
        {
            img: 'images/products/mens-shirt.jpg',
            title: 'Men Traditional Shirt',
            description: 'Golden zari and stone work'
        },
        {
            img: 'images/products/kids-shirt.jpg',
            title: 'Kids Aari Shirt',
            description: 'White cut tube work and beads'
        },
        {
            img: 'images/products/craft.jpg',
            title: 'Crafted Aari Work',
            description: 'Unique hand-crafted Aari embroidery'
        },
        {
            img: 'images/products/blouse-design.jpg',
            title: 'Aari Embroidery Blouse',
            description: 'Beautiful beads working design'
        }
    ];

    // Populate Gallery
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <div class="gallery-item-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Form Submission Handling
    const enquiryForm = document.getElementById('enquiryForm');
    
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real implementation, you would send this data to a server
        alert('Thank you for your enquiry! We will contact you shortly.');
        this.reset();
    });

    // Intersection Observer for Scroll Animations
    const sections = document.querySelectorAll('.gallery, .about, .contact');
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // WhatsApp Button Animation
    const whatsappButton = document.querySelector('.whatsapp-float');
    
    whatsappButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(10deg)';
    });
    
    whatsappButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });

    // Mobile Navigation Toggle (for smaller screens)
    const mobileMenuButton = document.createElement('div');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '☰';
    document.querySelector('.header').appendChild(mobileMenuButton);
    
    mobileMenuButton.addEventListener('click', function() {
        document.querySelector('.nav').classList.toggle('active');
    });
});