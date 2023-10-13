const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


// Función para desplazarse hacia arriba cuando se hace clic en el botón
function subirArriba() {
  // Desplázate al principio de la página con una animación suave (scroll suave)
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
}