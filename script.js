// Fungsi untuk mengatur increment dan decrement
function updateValue(buttonId, inputId, operation) {
    const button = document.getElementById(buttonId);
    const input = document.getElementById(inputId);

    // Pastikan elemen ditemukan
    if (!button || !input) {
        console.error(`Element with ID ${buttonId} or ${inputId} not found.`);
        return;
    }

    // Tambahkan event listener ke tombol
    button.addEventListener("click", () => {
        let currentValue = parseInt(input.value, 10);
        if (isNaN(currentValue)) currentValue = 0;

        if (operation === "increment") {
            input.value = currentValue + 1;
        } else if (operation === "decrement" && currentValue > parseInt(input.min, 10)) {
            input.value = currentValue - 1;
        }
    });
}

// Inisialisasi fungsi pada DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    updateValue('decrease-rooms', 'rooms', 'decrement');
    updateValue('increase-rooms', 'rooms', 'increment');
});

// Initialize buttons for Rooms
updateValue("increase-rooms", "rooms", "increment");
updateValue("decrease-rooms", "rooms", "decrement");

// Initialize buttons for Adults
updateValue("increase-adults", "adults", "increment");
updateValue("decrease-adults", "adults", "decrement");

// Initialize buttons for Children
updateValue("increase-children", "children", "increment");
updateValue("decrease-children", "children", "decrement");

// Script Carousel Modal on Item Detail 
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.item-detail-secondary img');
    const carousel = document.querySelector('#carouselModalImages .carousel-inner');

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            const carouselItems = carousel.querySelectorAll('.carousel-item');
            carouselItems.forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
        });
    });
});

// Script untuk Destination-detail bagian hero
// Change main image when clicking a thumbnail
function changeMainImage(src) {
    document.getElementById('mainImage').src = src;
}

// Open the carousel modal
document.getElementById('mainImage').addEventListener('click', function () {
    const modal = new bootstrap.Modal(document.getElementById('carouselModal'));
    modal.show();
});

