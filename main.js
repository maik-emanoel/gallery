const imagesUrl = [
    { 
        url: 'https://source.unsplash.com/random/?city,night',
        alt: 'Imagem aleatória noturna'
    },
    {
        url: 'https://source.unsplash.com/random/?city',
        alt: 'Imagem aleatória de uma cidade'
    },
    {
        url: 'https://source.unsplash.com/random/?night',
        alt: 'Imagem aleatória de uma cidade'
    },
    {
        url: 'https://source.unsplash.com/random/?abstract',
        alt: 'Imagem aleatória de uma cidade'
    },
    {
        url: 'https://source.unsplash.com/random/?universe',
        alt: 'Imagem aleatória de uma cidade'
    },
    {
        url: 'https://source.unsplash.com/random/?water',
        alt: 'Imagem aleatória de uma cidade'
    },
    {
        url: 'https://source.unsplash.com/random/?day',
        alt: 'Imagem aleatória de uma cidade'
    },
    {
        url: 'https://source.unsplash.com/random/?light',
        alt: 'Imagem aleatória de uma cidade'
    }
]

const imgContainer = document.querySelector('.img-container')

const imgWrapper = document.createElement('div')
const h2Wrapper = document.createElement('h2')

h2Wrapper.classList.add('title-img')
imgWrapper.classList.add('img-wrapper')
imgWrapper.innerHTML = `<img src="${imagesUrl[0].url}" alt="${imagesUrl[0].alt}" class="img"/>`

imgContainer.appendChild(imgWrapper)
imgWrapper.appendChild(h2Wrapper)