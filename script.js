const popup = document.querySelector('.popup')
const galleryImgs = document.querySelectorAll('.gallery-inner > img')
const closeBtn = document.querySelector('.close-popup')

galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
        document.body.classList.add('active')
        addImgElement(img.src)
    })
})

closeBtn.addEventListener('click', () => {
    if(document.body.classList.contains('active')){
        const imgEL = popup.querySelector('img')
        popup.removeChild(imgEL)
        document.body.classList.remove('active')
    }
})

function addImgElement(path){
    const img = document.createElement('img')
    if(document.body.classList.contains('active')){
        img.setAttribute('src', path)
        popup.append(img)
    }
}


