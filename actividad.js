import {
    render
  } from "./card.js";


import { 
    search,
    viewOpenTicketsEvent,
    viewCloseTicketsEvent,
    viewAll,
    closeTicket
} from './eventos.js';

import { ticketList } from './data.js';

render(ticketList);

search(ticketList);

viewOpenTicketsEvent(ticketList);

viewCloseTicketsEvent(ticketList);

viewAll(ticketList);




