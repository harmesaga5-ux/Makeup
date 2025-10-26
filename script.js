// Script para Makeup Kitty

// Función para manejar el clic en el botón de comprar
function comprarProducto(nombreProducto) {
    alert(`¡Gracias por tu interés en ${nombreProducto}! Esta es una versión demo. En una tienda real, aquí procesaríamos tu compra.`);
}

// Agregar event listeners a los botones de comprar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    const botonesComprar = document.querySelectorAll('.btn-comprar');
    botonesComprar.forEach(boton => {
        boton.addEventListener('click', function() {
            const nombreProducto = this.parentElement.querySelector('h3').textContent;
            comprarProducto(nombreProducto);
        });
    });
});
