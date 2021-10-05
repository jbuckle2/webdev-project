import {
    html
} from "https://unpkg.com/htm/preact/standalone.module.js";
import Card from "./Card.js";

// deck to align cards
export default function CardDeck({events}) {
    return html`
        <div class="card-deck">
        ${events.map(
            (event) =>
                html`
                        <${Card} event="${event}" />
                `
        )}
        </div>
    `;
}