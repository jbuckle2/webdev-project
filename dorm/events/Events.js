import {
    html,
    render,
    useState,
    useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getEvents } from "/src/services/EventService.js";
import Header from "/src/components/Header.js";
import CardDeck from "../../src/components/Deck/CardDeck.js";

function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        return getEvents().then((data) => {
            setEvents(data);
        });
    });


    return html`
        <${Header} />
        <${CardDeck} events="${events}" />
    `;
}

render(html` <${Events} />`, document.getElementById("events"));