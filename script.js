// Simple Mobile Menu Functions
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Auto-close on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// Image Modal Functionality - DISABLED
// const modal = document.getElementById('imageModal');
// const modalImg = document.getElementById('modalImage');
// const captionText = document.getElementById('caption');
// const closeModal = document.getElementsByClassName('close')[0];

// Add click event to all image items - DISABLED
// const imageItems = document.querySelectorAll('.image-item');
// imageItems.forEach(item => {
//     item.addEventListener('click', () => {
//         modal.style.display = 'block';
        
//         // Check if it's an image or placeholder
//         const img = item.querySelector('img');
//         const placeholder = item.querySelector('.image-placeholder span');
        
//         if (img) {
//             // Use the actual image, but try to load fullsize version
//             const imageSrc = img.src;
//             const fullsizeSrc = imageSrc.replace('/thumbnails/', '/fullsize/');
//             modalImg.src = fullsizeSrc;
//             captionText.innerHTML = img.alt || 'Illustration';
//         } else if (placeholder) {
//             // Fallback to placeholder
//             modalImg.src = 'https://via.placeholder.com/1200x750/f8f9fa/666?text=' + encodeURIComponent(placeholder.textContent);
//             captionText.innerHTML = placeholder.textContent;
//         }
        
//         // Prevent body scrolling when modal is open
//         document.body.style.overflow = 'hidden';
//     });
// });

// Close modal when clicking the X - DISABLED
// if (closeModal) {
//     closeModal.onclick = function() {
//         modal.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     }
// }

// Close modal when clicking outside the image - DISABLED
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     }
// }

// Close modal with ESC key - DISABLED
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Escape' && modal.style.display === 'block') {
//         modal.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     }
// });

// Intersection Observer for fade-in animations - DISABLED
// const observerOptions = {
//     threshold: 0.05,
//     rootMargin: '0px 0px 100px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = '1';
//             entry.target.style.transform = 'translateY(0)';
//         }
//     });
// }, observerOptions);

// Observe image items for scroll animations - DISABLED
// document.querySelectorAll('.image-item').forEach((item, index) => {
//     item.style.opacity = '0';
//     item.style.transform = 'translateY(20px)';
//     item.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
//     observer.observe(item);
// });

// Smooth page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Image lazy loading (for when you add real images)
function lazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Call lazy load function
lazyLoad();

// Add CSS for smooth page load and mobile menu
const style = document.createElement('style');
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .mobile-menu-toggle {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1001;
        background: #fff;
        border: 1px solid #eee;
        padding: 10px 15px;
        cursor: pointer;
        font-size: 12px;
        letter-spacing: 0.02em;
        font-family: 'Inter', sans-serif;
        display: none;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-toggle {
            display: block;
        }
        
        .sidebar-nav {
            transition: transform 0.3s ease;
        }
    }
`;
document.head.appendChild(style);