// import { ticketList } from "./data.js";
import {
  newTicket,
  searchTicketByID,
  viewOpenTickets,
  viewCloseTickets,
  editTicketState,
} from "./funciones.js";

// import { ticketList } from "./data.js";

const render = (list) =>{
  const ticket = document.querySelector(".ticketContainer");

  ticket.innerHTML = '';

  for(let i = 0; i<list.length; i++)
  {
    ticket.insertAdjacentHTML('beforeend',`
      <div class="ticket">
          <div class="infoTicket">
            <div class="infoTitle">N° de ticket</div>
            <div class="infoTitle">Contacto</div>
            <div class="infoTitle">Correo</div>
            <div class="infoTitle">Estado</div>
            <div class="infoTitle">Descripción</div>
  
            <div class="infoContent">${list[i].idTicket}</div>
            <div class="infoContent">${list[i].nombre}</div>
            <div class="infoContent">${list[i].email}</div>
            <div class="infoContent">${list[i].estado}</div>
            <div class="infoContent" id="description">${list[i].asunto}</div>
          </div>
          <div class="buttonsTicket">
            <button>Resuelto</button>
            <button>Eliminar</button>
          </div>
        </div>`);
  }
}

const searchByIdEvent = (tickets) => {
  const button = document.querySelector('.inputFilterButton');
  const input = document.querySelector('.inputFilter');

  input.addEventListener('keydown', (e) => {
    console.log(e);
    if(e.key === 'Enter'){
      if(input.value){
        let ticket = searchTicketByID(tickets,input.value);
        render(ticket);
      }
      else render(tickets);
      
    }
  })

  input.addEventListener('change', e => {
    if(input.value === '') render(tickets);
  })
}

const viewOpenTicketsEvent = (tickets) => {
  const button = document.querySelector('#openTickets');
  button.addEventListener('click',() => {
    render(viewOpenTickets(tickets));
  })
}

const viewCloseTicketsEvent = (tickets) => {
  const button = document.querySelector('#closeTickets');
  button.addEventListener('click',() => {
    render(viewCloseTickets(tickets));
  })
}

const viewAll = (tickets) => {
  const button = document.querySelector('#allTickets');
  button.addEventListener('click', () => {
    render(tickets);
  })
}



export{
  render,
  searchByIdEvent,
  viewOpenTicketsEvent,
  viewCloseTicketsEvent,
  viewAll
};
