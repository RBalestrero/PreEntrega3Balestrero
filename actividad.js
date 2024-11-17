import { 
    render,
    searchByIdEvent,
    viewOpenTicketsEvent,
    viewCloseTicketsEvent,
    viewAll
} from './eventos.js';

import { ticketList } from './data.js';

render(ticketList);

searchByIdEvent(ticketList);

viewOpenTicketsEvent(ticketList);

viewCloseTicketsEvent(ticketList);

viewAll(ticketList);


