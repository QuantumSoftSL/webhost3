// Sample movie data with watch and download links
const movies = [
    {
        id: 1,
        title: "The Dark Knight",
        year: "2008",
        runtime: "152 min",
        rating: "9.0",
        genre: ["Action", "Crime", "Drama"],
        plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug",
        watchLink: "https://ww4.123moviesfree.net/movie/batman-the-dark-knight-2070/",
        downloadLink: "https://www.profitableratecpm.com/mp28d68d?key=b60cd7638978b3a6f919cc33cc3aa543"
    },
    {
        id: 2,
        title: "Inception",
        year: "2010",
        runtime: "148 min",
        rating: "8.8",
        genre: ["Action", "Adventure", "Sci-Fi"],
        plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH",
        watchLink: "https://ww4.123moviesfree.net/movie/inception-2756/",
        downloadLink: "https://www.profitableratecpm.com/mp28d68d?key=b60cd7638978b3a6f919cc33cc3aa543"
    },
    {
        id: 3,
        title: "Dragon",
        year: "2010",
        runtime: "148 min",
        rating: "8.8",
        genre: ["Action", "Adventure", "Sci-Fi"],
        plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH",
        watchLink: "https://ww4.123moviesfree.net/movie/inception-2756/",
        downloadLink: "https://www.profitableratecpm.com/mp28d68d?key=b60cd7638978b3a6f919cc33cc3aa543"
    },
    // Add similar entries for all other movies with watchLink and downloadLink
    // ...
];

// DOM Elements
const featuredMoviesContainer = document.getElementById('featuredMovies');
const trendingMoviesContainer = document.getElementById('trendingMovies');
const movieModal = document.getElementById('movieModal');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const modalRuntime = document.getElementById('modalRuntime');
const modalRating = document.getElementById('modalRating');
const modalPlot = document.getElementById('modalPlot');
const modalGenres = document.getElementById('modalGenres');
const modalPoster = document.getElementById('modalPoster');
const closeBtn = document.querySelector('.close-btn');

// Display movies
function displayMovies() {
    // Featured movies (first 4)
    featuredMoviesContainer.innerHTML = movies.slice(0, 4).map(movie => `
        <div class="movie-card" data-id="${movie.id}">
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}">
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="movie-rating">★ ${movie.rating}</span>
                </div>
                <div class="movie-links">
                    <a href="${movie.watchLink}" class="watch-link" target="_blank">Watch</a>
                    <a href="${movie.downloadLink}" class="download-link" target="_blank">Download</a>
                </div>
            </div>
        </div>
    `).join('');

    // Trending movies (last 4)
    trendingMoviesContainer.innerHTML = movies.slice(4, 8).map(movie => `
        <div class="movie-card" data-id="${movie.id}">
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}">
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="movie-rating">★ ${movie.rating}</span>
                </div>
                <div class="movie-links">
                    <a href="${movie.watchLink}" class="watch-link" target="_blank">Watch</a>
                    <a href="${movie.downloadLink}" class="download-link" target="_blank">Download</a>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners to movie cards
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking on watch/download links
            if (!e.target.classList.contains('watch-link') && !e.target.classList.contains('download-link')) {
                const movieId = parseInt(card.getAttribute('data-id'));
                const movie = movies.find(m => m.id === movieId);
                openModal(movie);
            }
        });
    });
}

// Open modal with movie details
function openModal(movie) {
    modalTitle.textContent = movie.title;
    modalYear.textContent = movie.year;
    modalRuntime.textContent = movie.runtime;
    modalRating.textContent = `★ ${movie.rating}`;
    modalPlot.textContent = movie.plot;
    modalPoster.src = movie.poster;
    modalPoster.alt = movie.title;
    
    // Clear and add genres
    modalGenres.innerHTML = '';
    movie.genre.forEach(genre => {
        const genreSpan = document.createElement('span');
        genreSpan.textContent = genre;
        modalGenres.appendChild(genreSpan);
    });
    
    // Update modal buttons with actual links
    const watchBtn = document.querySelector('.modal-buttons .watch-btn');
    const downloadBtn = document.querySelector('.modal-buttons .download-btn');
    
    watchBtn.onclick = () => window.open(movie.watchLink, '_blank');
    downloadBtn.onclick = () => window.open(movie.downloadLink, '_blank');
    
    movieModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    movieModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === movieModal) {
        closeModal();
    }
});

// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayMovies();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Form validation
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const closeModal = document.querySelector('.close-modal');
    
    // Validate name
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
        } else {
            nameError.textContent = '';
        }
    });
    
    // Validate email
    emailInput.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
        } else if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
        } else {
            emailError.textContent = '';
        }
    });
    
    // Validate subject
    subjectInput.addEventListener('input', () => {
        if (subjectInput.value.trim() === '') {
            subjectError.textContent = 'Subject is required';
        } else {
            subjectError.textContent = '';
        }
    });
    
    // Validate message
    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
        } else if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message should be at least 10 characters';
        } else {
            messageError.textContent = '';
        }
    });
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields before submission
        let isValid = true;
        
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        }
        
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        }
        
        if (subjectInput.value.trim() === '') {
            subjectError.textContent = 'Subject is required';
            isValid = false;
        }
        
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message should be at least 10 characters';
            isValid = false;
        }
        
        if (isValid) {
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show the success modal
            successModal.style.display = 'flex';
            
            // Reset form
            contactForm.reset();
            nameError.textContent = '';
            emailError.textContent = '';
            subjectError.textContent = '';
            messageError.textContent = '';
        }
    });
    
    // Close modal
    closeModalBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
    });
    
    closeModal.addEventListener('click', () => {
        successModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });
});