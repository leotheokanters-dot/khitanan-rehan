// ========================================
// KHITANAN REHAN - JAVASCRIPT
// ========================================

// Get URL parameters function
function getURLParams(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// Initialize guest name personalization
function initializeGuestName() {
  const guestName = getURLParams('to');
  if (guestName) {
    document.getElementById('guestName').textContent = guestName;
  }
}

// Countdown Timer
function initializeCountdown() {
  const targetDate = new Date('2026-04-12T09:00:00').getTime();
  const countdownElement = document.getElementById('countdown');

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `
        <div>
          <span>${String(days).padStart(2, '0')}</span>
          <span>Hari</span>
        </div>
        <div>
          <span>${String(hours).padStart(2, '0')}</span>
          <span>Jam</span>
        </div>
        <div>
          <span>${String(minutes).padStart(2, '0')}</span>
          <span>Menit</span>
        </div>
        <div>
          <span>${String(seconds).padStart(2, '0')}</span>
          <span>Detik</span>
        </div>
      `;
    } else {
      countdownElement.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
          <span style="font-size: 1.8rem; font-weight: bold; color: var(--primary-gold);">
            Acara telah dimulai!
          </span>
        </div>
      `;
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Initialize Map
function initializeMap() {
  // Coordinates: -6.524364, 105.737661
  const latitude = -6.524364;
  const longitude = 105.737661;

  const map = L.map('map').setView([latitude, longitude], 16);

  // OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  }).addTo(map);

  // Custom marker with gold color
  const goldMarkerIcon = L.icon({
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxNSIgZmlsbD0iI0Q0QUYzNyIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEyIiBmaWxsPSIjRThDNTQ3Ii8+PHRleHQgeD0iMjAiIHk9IjI1IiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPksg</base64>\u003c/c2lyY2xlPjwvc3ZnPg==',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -10]
  });

  // Add marker
  const marker = L.marker([latitude, longitude], { icon: goldMarkerIcon })
    .addTo(map)
    .bindPopup(`
      <div style="padding: 10px; text-align: center; font-family: 'Poppins', sans-serif;">
        <strong style="color: #D4AF37; display: block; margin-bottom: 5px;">Lokasi Khitanan Rehan</strong>
        <p style="margin: 5px 0; font-size: 12px;">Kp. Ciseukcut Barat, RT01/RW04</p>
        <p style="margin: 5px 0; font-size: 12px;">Ds. Mekarsari Kec. Panimbang</p>
        <p style="margin: 5px 0; font-size: 12px;">Kab Pandeglang, Banten</p>
      </div>
    `, {
      className: 'custom-popup'
    });

  marker.openPopup();

  // Responsive map resizing
  map.on('resize', function() {
    map.invalidateSize();
  });
}

// Smooth scroll event listener
document.addEventListener('DOMContentLoaded', function() {
  // Scroll down button
  const scrollButton = document.querySelector('.btn-scroll-down');
  if (scrollButton) {
    scrollButton.addEventListener('click', function(e) {
      e.preventDefault();
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Disable scroll in hero section during scroll animation
  let isScrolling = false;
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heroHeight = document.querySelector('.hero').offsetHeight;

    if (scrollTop > 50) {
      document.querySelector('.navbar').style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
      document.querySelector('.navbar').style.background = 'rgba(255, 255, 255, 0.95)';
    }
  });
});

// Lazy load images
function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.src === '' && img.dataset.src) {
            img.src = img.dataset.src;
            img.style.animation = 'fadeInUp 0.5s ease-out';
          }
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }
}

// Gallery modal/lightbox
function initializeGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const img = this.querySelector('img');
      const src = img.src;
      const alt = img.alt;

      // Create modal
      const modal = document.createElement('div');
      modal.className = 'gallery-modal';
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeInUp 0.3s ease-out;
      `;

      modal.innerHTML = `
        <div style="position: relative; max-width: 90%; max-height: 90%;">
          <img src="${src}" alt="${alt}" style="width: 100%; height: auto; border-radius: 15px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);">
          <button style="
            position: absolute;
            top: -40px;
            right: 0;
            background: #D4AF37;
            border: none;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">×</button>
        </div>
      `;

      document.body.appendChild(modal);

      // Close modal on click
      modal.addEventListener('click', function() {
        modal.style.animation = 'fadeInUp 0.3s ease-out reverse';
        setTimeout(() => modal.remove(), 300);
      });

      document.body.style.overflow = 'hidden';

      // Close on Escape key
      document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
          modal.remove();
          document.body.style.overflow = 'auto';
          document.removeEventListener('keydown', closeOnEscape);
        }
      });
    });
  });
}

// Accessibility: Add focus management
function initializeAccessibility() {
  const mainSections = document.querySelectorAll('section');
  mainSections.forEach(section => {
    section.addEventListener('focus', function() {
      this.style.outline = '2px solid #D4AF37';
      this.style.outlineOffset = '2px';
    });

    section.addEventListener('blur', function() {
      this.style.outline = 'none';
    });
  });
}

// Print-friendly version
function initializePrint() {
  const style = document.createElement('style');
  style.textContent = `
    @media print {
      .navbar, .btn-scroll-down, .btn-map { display: none !important; }
      body { background: white; }
      section { page-break-inside: avoid; }
    }
  `;
  document.head.appendChild(style);
}

// Initialize all when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initializeGuestName();
  initializeCountdown();
  initializeMap();
  lazyLoadImages();
  initializeGallery();
  initializeAccessibility();
  initializePrint();

  console.log('Khitanan Rehan website initialized successfully!');
  console.log('Guest personalization:', getURLParams('to') ? `to=${getURLParams('to')}` : 'No personalization');
});

// Service Worker untuk offline support (optional)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(err => {
    console.log('Service Worker registration failed:', err);
  });
}
