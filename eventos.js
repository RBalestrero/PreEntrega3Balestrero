import {
  newTicket,
  searchByID,
  searchByMail,
  searchByContact,
  viewOpenTickets,
  viewCloseTickets,
  editTicketState,
} from "./funciones.js";

import {
  render
} from "./card.js"



const search = (tickets) => {
  const input = document.querySelector(".inputFilter");
  input.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key === "Enter") {
      if (input.value) {
        let ticketById = searchByID(tickets,input.value);
        let ticketByContact = searchByContact(tickets,input.value);
        let ticketByMail = searchByMail(tickets,input.value);    
        render([...ticketById, ...ticketByContact, ...ticketByMail]);    
      } else render(tickets);
    }
  });

  input.addEventListener("change", (e) => {
    if (input.value === "") render(tickets);
  });
};

const viewOpenTicketsEvent = (tickets) => {
  const button = document.querySelector("#openTickets");
  button.addEventListener("click", () => {
    render(viewOpenTickets(tickets));
  });
};

const viewCloseTicketsEvent = (tickets) => {
  const button = document.querySelector("#closeTickets");
  button.addEventListener("click", () => {
    render(viewCloseTickets(tickets));
  });
};

const viewAll = (tickets) => {
  const button = document.querySelector("#allTickets");
  button.addEventListener("click", () => {
    render(tickets);
  });
};

const closeTicket = (tickets) => {
  console.log('click');
  const buttons = document.querySelectorAll('.btn-outline-success');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      tickets = editTicketState(tickets,button.id);
      render(tickets);
    })
  });
}


export {
  render,
  search,
  viewOpenTicketsEvent,
  viewCloseTicketsEvent,
  viewAll,
  closeTicket
};
