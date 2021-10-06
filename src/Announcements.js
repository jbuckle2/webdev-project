import {
    html,
    render
} from "https://unpkg.com/htm/preact/standalone.module.js";
// will be used to get announcements in the future
// import { getEvents, createEvent } from "/src/services/EventService.js";
import Header from "/src/components/Header.js";
// will be used with get announcements in the future
//import CardDeck from "../../src/components/Deck/CardDeck.js";

function Announcements() {
    return html`
        <${Header} />
    `
}

render(html` <${Announcements} />`, document.getElementById("announcements"));