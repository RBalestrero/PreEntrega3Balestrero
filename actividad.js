import {
    render
  } from "./card.js";
import { 
    search,
    viewOpenTicketsEvent,
    viewCloseTicketsEvent,
    viewAll,
    closeTicket,
    deletedTicketsFilter
} from './eventos.js';
import { storeTickets } from './funciones.js';

import { ticketList } from './data.js';

localStorage.getItem("ticketList") ? storeTickets(JSON.parse(localStorage.getItem("ticketList"))) : storeTickets(ticketList);

render(JSON.parse(localStorage.getItem("ticketList")));

search(ticketList);

viewOpenTicketsEvent();

viewCloseTicketsEvent();

viewAll();

deletedTicketsFilter();




