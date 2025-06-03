let carrito = [];

function agregarAlCarrito(plato) {
    carrito.push(plato);
    actualizarVistaCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarVistaCarrito();
}

function actualizarVistaCarrito() {
    const lista = document.getElementById('lista-carrito');
    lista.innerHTML = '';
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item} <button onclick="eliminarDelCarrito(${index})">X</button>`;
        lista.appendChild(li);
    });
}

function obtenerModoPedido() {
    const radios = document.getElementsByName('modo');
    for (let radio of radios) {
        if (radio.checked) return radio.value;
    }
    return '';
}

function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de hacer el pedido.');
        return;
    }
    const modo = obtenerModoPedido();
    const mensaje = 'Hola, quiero hacer el siguiente pedido:%0A' + carrito.map(p => '- ' + p).join('%0A') + `%0A%0AModo de pedido: ${modo}`;
    const telefono = '573229235925';
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    window.open(url, '_blank');
}