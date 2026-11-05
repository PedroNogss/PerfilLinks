function toggleMode() {
    const html = document.documentElement;
    const img = document.querySelector("#profile img");
    html.classList.toggle("light");
    img.src = html.classList.contains("light")
        ? "./assets/foto%20de%20perfil%20claro.jpeg"
        : "./assets/foto%20de%20perfil%20escuro.jpg";
}
