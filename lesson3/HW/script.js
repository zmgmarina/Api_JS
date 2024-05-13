async function getRandomPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=WxybxMhS4ZPv3ZiEAIg7lBB6zOvfjoz7xrJ3dLrDGEo`);
        const photo = await response.json();
        return photo;
    } catch (error) {
        console.error('Ошибка при загрузке:', error);
        return {};
    }
}


async function loadPhoto() {
    const photo = await getRandomPhoto();
    if (photo) {
        const imageBox = document.querySelector('.image-box');
        const imageElement = document.createElement('img');
        imageElement.classList.add('image');

        imageElement.src = photo.urls.small;
        imageElement.alt = photo.alt_description;
        imageBox.appendChild(imageElement);

        const photographerName = document.querySelector('.photographer-name');
        photographerName.textContent = `${photo.user.name}`;

        const likesCounter = document.querySelector('.likes-counter');
        likesCounter.textContent = `${photo.likes}`;

    }
}


const likeButton = document.querySelector('.like-button');

likeButton.addEventListener('click', function () {
     const likesCounter = document.querySelector('.likes-counter');
     const currentlikeCounter = parseInt(likesCounter.textContent);
     likesCounter.textContent = currentlikeCounter + 1;
});


window.addEventListener('load', () => {
    loadPhoto();
});