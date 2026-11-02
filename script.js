function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar tag img
    const img = document.querySelector("#profile img")

    //subst imagem
if (html.classList.contains('light')) {
    //com light mode trocar
img.setAttribute('src', './assets/images.jpg')


    }
else {
    //sem light mode manter
img.setAttribute('src', './assets/Gemini_Generated_Image_deq3hxdeq3hxdeq3.jpg')

}







}