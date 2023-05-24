const imagesUrl = [
    { 
        url: 'https://source.unsplash.com/random/?city,night',
        alt: 'Imagem aleatória noturna'
    },
    {
        url: 'https://source.unsplash.com/random/?city',
        alt: 'Imagem aleatória relacionada a uma cidade'
    },
    {
        url: 'https://source.unsplash.com/random/?night',
        alt: 'Imagem aleatória relacionada a cidade'
    },
    {
        url: 'https://source.unsplash.com/random/?abstract',
        alt: 'Imagem aleatória abstrata'
    },
    {
        url: 'https://source.unsplash.com/random/?universe',
        alt: 'Imagem aleatória relacionada ao universo'
    },
    {
        url: 'https://source.unsplash.com/random/?water',
        alt: 'Imagem aleatória relacionada a água'
    },
    {
        url: 'https://source.unsplash.com/random/?day',
        alt: 'Imagem aleatória relacionada ao dia'
    },
    {
        url: 'https://source.unsplash.com/random/?light',
        alt: 'Imagem aleatória relacionada a luz'
    },
    {
        url: 'https://source.unsplash.com/random/?ice',
        alt: 'Imagem aleatória relacionada ao gelo'
    },
    {
        url: 'https://source.unsplash.com/random/?sky',
        alt: 'Imagem aleatória relacionada a céu'
    },
    {
        url: 'https://source.unsplash.com/random/?planet',
        alt: 'Imagem aleatória relacionada á um planeta'
    },
    {
        url: 'https://source.unsplash.com/random/?sun',
        alt: 'Imagem aleatória relacionada ao sol'
    },
    {
        url: 'https://source.unsplash.com/random/?florest',
        alt: 'Imagem aleatória relacionada a uma floresta'
    },
    {
        url: 'https://source.unsplash.com/random/?nature',
        alt: 'Imagem aleatória relacionada a natureza'
    }
]

const imgContainer = document.querySelector('.img-container')

window.addEventListener('load', () => {
    imagesUrl.map((image) => {
        const imgWrapper = document.createElement('div')
        const h2Wrapper = document.createElement('h2')

        h2Wrapper.classList.add('title-img')
        imgWrapper.classList.add('img-wrapper')
        imgWrapper.innerHTML = `<img src="${image.url}" alt="${image.alt}" class="img"/>`

        imgContainer.appendChild(imgWrapper)
        imgWrapper.appendChild(h2Wrapper)
    })
})