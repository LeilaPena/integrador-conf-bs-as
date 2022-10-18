// Elementos de HTML

const seccionConferencia = document.getElementById('seccion-conferencia');
const seccionComprarTickets = document.getElementById('seccion-comprar-tickets');
const botonConferencia = document.getElementById('boton-conferencia');
const botonComprarTickets = document.getElementById('boton-comprar-tickets');
const inputTicketsNombre = document.getElementById('input-tickets-nombre');
const inputTicketsApellido = document.getElementById('input-tickets-apellido');
const inputTicketsEmail = document.getElementById('input-tickets-email');
const inputTicketsCantidad = document.getElementById('input-tickets-cantidad');
const selectTicketsCategoria = document.getElementById('select-tickets-categoria');
const botonTicketsBorrar = document.getElementById('boton-tickets-borrar');
const botonTicketsResumen = document.getElementById('boton-tickets-resumen');

// Botones para ver cada sección

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

// Funcionalidad boton borrar inputs

botonTicketsBorrar.addEventListener('click', (e) =>{
    e.preventDefault()
    inputTicketsNombre.value = "";
    inputTicketsApellido.value = "";
    inputTicketsEmail.value = "";
    inputTicketsCantidad.value = 0;
    selectTicketsCategoria.value = "estudiante";
})