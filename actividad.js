import {
  newTicket,
  searchTicketByID,
  viewOpenTickets,
  viewCloseTickets,
  editTicketState,
} from "./funciones.js";

// let selec;
// do {
//   selec = Number(
//     prompt(`Ingrese la opción que desea:
//         1- Crear un nuevo ticket.
//         2- Buscar un ticket por numero de caso.
//         3- Ver tickets abiertos.
//         4- Ver tickets cerrados.
//         5- Editar el estado de un ticket.
//         6. Salir del menú.`)
//   );
//   switch (selec) {
//     case 1:
//       newTicket();
//       break;
//     case 2:
//       searchTicketByID();
//       break;
//     case 3:
//       viewOpenTickets();
//       break;
//     case 4:
//       viewCloseTickets();
//       break;
//     case 5:
//       editTicketState();
//       break;
//     case 6:
//       break;
//     default:
//       alert(
//         "La opcion ingresada no es valida, vuelva a seleccionar una opcion correcta.");
//       break;
//   }
// } while (selec !== 6);
