const tabs = document.querySelectorAll('.sidebar ul li');
let cardsPerPage = 5; 
let currentPage = 1;
let filteredCards = []; 

const cards = document.querySelectorAll('.extractor-card');
const paginationLinks = document.querySelectorAll('.pagination .page');
const prevButton = document.querySelector('.pagination .prev');
const nextButton = document.querySelector('.pagination .next');


function filterCards(category) {
    filteredCards = Array.from(cards).filter(card => {
        return category === 'all' || card.getAttribute('data-category') === category;
    });


    currentPage = 1;
    showPage(currentPage);
    updatePaginationLinks();
}

function showPage(page) {
    cards.forEach(card => {
        card.style.display = 'none';
    });

    filteredCards.forEach((card, index) => {
        if (index >= (page - 1) * cardsPerPage && index < page * cardsPerPage) {
            card.style.display = 'block';
        }
    });

    
    paginationLinks.forEach(link => {
        link.classList.remove('active');
        if (parseInt(link.getAttribute('data-page')) === page) {
            link.classList.add('active');
        }
    });

  
    prevButton.classList.toggle('disabled', page === 1);
    nextButton.classList.toggle('disabled', page === totalPages());
}

function totalPages() {
    return Math.ceil(filteredCards.length / cardsPerPage);
}


function updatePaginationLinks() {
    paginationLinks.forEach((link, index) => {
        if (index < totalPages()) {
            link.style.display = 'inline-block';
        } else {
            link.style.display = 'none';
        }
    });
}

// Event listeners for pagination
paginationLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = parseInt(link.getAttribute('data-page'));
        showPage(currentPage);
    });
});

prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage < totalPages()) {
        currentPage++;
        showPage(currentPage);
    }
});

// Event listeners for sidebar tabs
tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        // Set active class on clicked tab
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        const category = this.getAttribute('data-category');
        filterCards(category);
    });
});

// view all
filterCards('all');








