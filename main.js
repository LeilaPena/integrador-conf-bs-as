// Elementos de HTML

const seccionConferencia = document.getElementById('seccion-conferencia');
const seccionComprarTickets = document.getElementById('seccion-comprar-tickets');
const botonConferencia = document.getElementById('boton-conferencia');
const botonComprarTickets = document.getElementById('boton-comprar-tickets');

botonConferencia.addEventListener('click',()=>{
    seccionComprarTickets.style.display='none';
    seccionConferencia.style.display='block';
    botonConferencia.classList.add('active');
    botonComprarTickets.classList.remove('color-verde');
})
botonComprarTickets.addEventListener('click',()=>{
    seccionConferencia.style.display='none';
    seccionComprarTickets.style.display='block';
    botonConferencia.classList.remove('active');
    botonComprarTickets.classList.add('color-verde');
})