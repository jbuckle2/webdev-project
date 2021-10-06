import {
    html,
    render,
    useState,
    useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getEvents, createEvent } from "./services/EventService.js";
import Header from "/src/components/Header.js";

import CardDeck from "./components/Deck/CardDeck.js";
import SubmitEvent from "./components/SubmitEvent.js"

function Events() {
    // get data to pass down
    const [events, setEvents] = useState([]);

    useEffect(() => {
        return getEvents().then((data) => {
            setEvents(data);
        });
    });

    // function makeNewEvent() {
    //     const lastEventId = events[events.length - 1].id;
    //     const newEventId = lastEventId + 1;
    //     const eventTitle = document.getElementById("event-title").value;
    //     const eventDesc = document.getElementById("event-desc").value;
    //     const eventDate = document.getElementById("event-date").value;
    //     const eventNeigh = document.getElementById("event-neigh").value;
    //     console.log(eventDate);
    //     createEvent(newEventId, eventTitle, eventDate, eventNeigh, eventDesc);
    //     window.location.reload;
    // }

    return html`
        <!-- Generic Header -->
        <${Header} />

        <!-- Card Deck for events -->
        <${CardDeck} events="${events}" />

        <!-- Form to submit events -->
        <${SubmitEvent} />
    `;
}

render(html` <${Events} />`, document.getElementById("events"));