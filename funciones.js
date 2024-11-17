import { ticketList } from "./data.js";

const newTicket = () => {
  let ticket = {};
  ticket.nombre = prompt("Ingrese el nombre y apellido");
  ticket.idTicket = prompt("Ingrese el ID");
  ticket.email = prompt("Ingrese el email de contacto");
  ticket.asunto = prompt("Ingese el asunto del caso");
  ticket.estado = "abierto";
  ticket.resultado = "no resuelto";
  ticketList.push(ticket);
};

const searchTicketByID = () => {
  let id = prompt("Ingese el ID del ticket que desea buscar");
  let ticket = ticketList.find((ticket) => ticket.idTicket === id);
  if (ticket) print(ticket);
  else alert("El ID buscado no se ha encontrado");
};

const viewOpenTickets = () => {
  let openTickets = ticketList.filter((ticket) => ticket.estado === "abierto");
  let ticketListString = [];
  openTickets.forEach((ticket) =>
    ticketListString.push(`${ticket.idTicket} -- ${ticket.nombre}`)
  );
  alert(`Tickets abiertos:
${ticketListString.join("\n")}`);
};

const viewCloseTickets = () => {
  let closeTickets = ticketList.filter((ticket) => ticket.estado === "cerrado");
  let ticketListString = [];
  closeTickets.forEach((ticket) =>
    ticketListString.push(`${ticket.idTicket} -- ${ticket.nombre}`)
  );
  alert(`Tickets cerrados:
${ticketListString.join("\n")}`);
};

const editTicketState = () => {
  let id = prompt("Ingese el ID del ticket que desea editar");
  let index = ticketList.findIndex((ticket) => ticket.idTicket === id);
  let selec =
    prompt(`El estado del ticket es ${ticketList[index].estado}, desea cambiarlo?
    1- Si
    2- No`);
  if (selec === "1") {
    if (ticketList[index].estado === "abierto")
      ticketList[index].estado = "cerrado";
    else ticketList[index].estado = "abierto";
    alert('El estado del ticket se ha cambiado con éxito.')
  }
};

const print = (ticket) => {
  alert(`Ticket solicitado:
        Nombre: ${ticket.nombre}
        ID: ${ticket.idTicket}
        Email: ${ticket.email}
        Asunto: ${ticket.asunto}
        Estado: ${ticket.estado}
        Resultado: ${ticket.resultado}`);
};

export {
  newTicket,
  searchTicketByID,
  viewOpenTickets,
  viewCloseTickets,
  editTicketState,
};
