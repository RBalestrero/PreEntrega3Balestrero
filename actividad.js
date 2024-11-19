import { 
    render,
    search,
    viewOpenTicketsEvent,
    viewCloseTicketsEvent,
    viewAll,
    buttonResuelto
} from './eventos.js';

import { ticketList } from './data.js';

render(ticketList);

search(ticketList);

viewOpenTicketsEvent(ticketList);

viewCloseTicketsEvent(ticketList);

viewAll(ticketList);

buttonResuelto(ticketList);
