import {
  newTicket,
  searchByID,
  searchByMail,
  searchByContact,
  viewOpenTickets,
  viewCloseTickets,
  editTicketState,
  deleteTicket,
} from "./funciones.js";

import { render } from "./card.js";

const search = () => {
  let tickets;
  const input = document.querySelector(".inputFilter");
  input.addEventListener("click", () => {
    tickets = JSON.parse(localStorage.getItem("ticketList"));
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (input.value) {
        const ticketById = searchByID(tickets, input.value);
        const ticketByContact = searchByContact(tickets, input.value);
        const ticketByMail = searchByMail(tickets, input.value);
        render([...ticketById, ...ticketByContact, ...ticketByMail]);
      } else render(tickets);
    }
  });

  input.addEventListener("change", () => {
    if (input.value === "") render(tickets);
  });

  input.addEventListener("focusout", () => {
    if (input.value === "") render(tickets);
    else {
      const ticketById = searchByID(tickets, input.value);
      const ticketByContact = searchByContact(tickets, input.value);
      const ticketByMail = searchByMail(tickets, input.value);
      render([...ticketById, ...ticketByContact, ...ticketByMail]);
    }
  });
};

const viewOpenTicketsEvent = () => {
  const button = document.querySelector("#openTickets");
  button.addEventListener("click", () => {
    const tickets = JSON.parse(localStorage.getItem("ticketList"));
    render(viewOpenTickets(tickets));
  });
};

const viewCloseTicketsEvent = () => {
  const button = document.querySelector("#closeTickets");
  button.addEventListener("click", () => {
    const tickets = JSON.parse(localStorage.getItem("ticketList"));
    render(viewCloseTickets(tickets));
  });
};

const viewAll = () => {
  const tickets = JSON.parse(localStorage.getItem("ticketList"));
  const button = document.querySelector("#allTickets");
  button.addEventListener("click", () => {
    render(tickets);
  });
};

const closeTicket = (tickets) => {
  const buttons = document.querySelectorAll(".btn-outline-success");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      tickets = editTicketState(tickets, button.id);
      render(tickets);
    });
  });
};

const deleteTicketEvent = (tickets) => {
  const button = document.querySelectorAll(".btn-outline-danger");
  button.forEach((button) => {
    button.addEventListener("click", (e) => {
      tickets = deleteTicket(tickets, e.target.id);
      render(tickets);
      let ticketList = JSON.parse(localStorage.getItem("ticketList"));
      let index = ticketList.findIndex(
        (ticket) => ticket.idTicket === e.target.id
      );
      ticketList.splice(index, 1);
      localStorage.setItem("ticketList", JSON.stringify(ticketList));
    });
  });
};

const deletedTicketsFilter = () => {
  const button = document.querySelector("#deletedTickets");
  button.addEventListener("click", () => {
    let ticketList = JSON.parse(localStorage.getItem("deletedTickets"));
    render(ticketList);
  });
};

export {
  render,
  search,
  viewOpenTicketsEvent,
  viewCloseTicketsEvent,
  viewAll,
  closeTicket,
  deleteTicketEvent,
  deletedTicketsFilter,
};
