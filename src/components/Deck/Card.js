import {
    html
} from "https://unpkg.com/htm/preact/standalone.module.js";

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

/* <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">Friday</div>
                <div class="card-body">
                  <h5 class="card-title">West Quad Cookout</h5>
                  <p class="card-text">Come to the West-Quad-wide cookout this Friday. There will be Spikeball, ice cream, and a DJ!</p>
                </div>
            </div> */