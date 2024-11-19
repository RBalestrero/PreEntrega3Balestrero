import {
  newTicket,
  searchByID,
  searchByMail,
  searchByContact,
  viewOpenTickets,
  viewCloseTickets,
  editTicketState,
} from "./funciones.js";

const render = (list) => {
  
  // const ticket = document.querySelector(".ticketContainer");
  // ticket.innerHTML = "";

  // for (let i = 0; i < list.length; i++) {
  //   ticket.insertAdjacentHTML(
  //     "beforeend",
  //     `
  //     <div class="ticket">
  //         <div class="infoTicket">
  //           <div class="infoContent">${list[i].idTicket}</div>
  //           <div class="infoContent">${list[i].nombre}</div>
  //           <div class="infoContent">${list[i].email}</div>
  //           <div class="infoContent">${list[i].estado}</div>
  //           <div class="infoContent" id="description">${list[i].asunto}</div>
  //         </div>
  //         <div class="buttonsTicket">
  //           <button type="button" class="btn btn-outline-success">Resuelto</button>
  //           <button type="button" class="btn btn-outline-danger">Eliminar</button>
  //         </div>
  //       </div>`
  //   );
  // }

  const container = document.querySelector(".ticketContainer");
  container.innerHTML = "";
  for(let i = 0; i<list.length; i++){
    const ticket = document.createElement("div");
    ticket.classList.add("ticket");
    ticket.innerHTML =`
      <div class="infoTicket">
        <div class="infoContent">${list[i].idTicket}</div>
        <div class="infoContent">${list[i].nombre}</div>
        <div class="infoContent">${list[i].email}</div>
        <div class="infoContent">${list[i].estado}</div>
        <div class="infoContent" id="description">${list[i].asunto}</div>
      </div>
      <div class="buttonsTicket">
        <button type="button" id="${list[i].idTicket}" class="btn btn-outline-success">Resuelto</button>
        <button type="button" id="${list[i].idTicket}" class="btn btn-outline-danger">Eliminar</button>
      </div>
      `;
  
      
      container.append(ticket);
    }

    closeTicket(list);
    
};

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
