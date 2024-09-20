const dogContainer = document.getElementById('dogContainer');
const getDogImageButton = document.getElementById('dogButton');

async function fetchDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        displayDogImage(data.message);
    } catch (error) {
        console.error('Error fetching dog image:', error);
    }
}

function displayDogImage(imageUrl) {
    dogContainer.innerHTML = `<img class="dog-image" src="${imageUrl}" alt="A random dog">`;
}

getDogImageButton.addEventListener('click', fetchDogImage);
