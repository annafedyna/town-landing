const hotels = [
    'images/hotels/kamelot.jpg',
    'images/hotels/oldcontinent.jpg',
    'images/hotels/uzhhorod.jpg'
];
let currentIndex = 0;

function updateImage(){
    const imgElement = document.getElementById('carousel-image');
    imgElement.src = hotels[currentIndex];
};

document.getElementById('next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % hotels.length; 
    updateImage(); 
});

document.getElementById('prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + hotels.length) % hotels.length; 
    updateImage(); 
});

updateImage();