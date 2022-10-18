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
const spanPagoTotal = document.getElementById('span-pago-total');
const textoCamposObligatorios = document.getElementById('texto-campos-obligatorios');

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

// Funcionalidad boton resumen

botonTicketsResumen.addEventListener('click', (e) => {
    e.preventDefault()
    let textoPagoTotal = '';
    if(inputTicketsNombre.value.length !== 0 && inputTicketsApellido.value.length !== 0 && inputTicketsEmail.value.length !== 0 ){
        if (selectTicketsCategoria.value === 'estudiante'){
            textoPagoTotal = (200 - 200*80/100)*inputTicketsCantidad.value
        }
        if (selectTicketsCategoria.value === 'trainee'){
            textoPagoTotal = (200 - 200*50/100)*inputTicketsCantidad.value
        }
        if (selectTicketsCategoria.value === 'junior'){
            textoPagoTotal = (200 - 200*15/100)*inputTicketsCantidad.value
        }
        textoCamposObligatorios.classList.add('invisible')
        spanPagoTotal.innerHTML= textoPagoTotal
    }
    else{
        textoCamposObligatorios.classList.remove('invisible')
        spanPagoTotal.innerHTML= '';
    }    
})

