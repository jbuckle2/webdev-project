import {
    html
} from "https://unpkg.com/htm/preact/standalone.module.js";

// individual card to display a single event
export default function Card({event}) {
    return html`
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${event.title}</div>
            <div class="card-body">
                <p class="card-text">${event.description}</p>
                <p class="card-text">Date: ${event.date}</p>
                <p class="card-text">Neighborhood: ${event.neighborhood}</p>
            </div>
        </div>
    `;
}