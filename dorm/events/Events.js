import {
    html,
    render,
    useState,
    useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getEvents, createEvent } from "/src/services/EventService.js";
import Header from "/src/components/Header.js";
import CardDeck from "../../src/components/Deck/CardDeck.js";
import SubmitEvent from "../../src/components/SubmitEvent.js";

function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        return getEvents().then((data) => {
            setEvents(data);
        });
    });

    function makeNewEvent() {
        const lastEventId = events[events.length - 1].id;
        const newEventId = lastEventId + 1;
        const eventTitle = document.getElementById("event-title").value;
        const eventDesc = document.getElementById("event-desc").value;
        const eventDate = document.getElementById("event-date").value;
        const eventNeigh = document.getElementById("event-neigh").value;
        console.log(eventDate);
        createEvent(newEventId, eventTitle, eventDate, eventNeigh, eventDesc);
    }

    return html`
        <${Header} />
        <${CardDeck} events="${events}" />
        <${SubmitEvent} onSubmit="${makeNewEvent}"/>
    `;
}

render(html` <${Events} />`, document.getElementById("events"));