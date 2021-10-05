import {
    html
} from "https://unpkg.com/htm/preact/standalone.module.js";

// form to submit event
export default function SubmitEvent({onSubmit}) {
    return html`
        <div class="event-submit">
            <form>
                <div class="container">
                    <p>Submit your own event to be posted</p>
                    <input type="text" name="event-title" id="event-title" placeholder="Event Title" required />
                    <div class="event-text">
                        <textarea name="event-desc" id="event-desc" cols="50" rows="10" required>Tell us about your event...</textarea>
                    </div>
                    <input type="text" name="event-neigh" id="event-neigh" placeholder="Neighborhood" required />
                    <br />
                    <input type="date" name="event-date" id="event-date" required />
                    <br />
                    <a class="btn btn-primary" onclick="${onSubmit}">Submit</a>
                </div>
            </form>
        </div>
    `;
}