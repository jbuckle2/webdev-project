import {
    html
} from "https://unpkg.com/htm/preact/standalone.module.js";

export default function SubmitEvent() {
    return html`
        <div class="event-submit">
            <form>
                <div class="container">
                    <p>Submit your own event to be posted</p>
                    <div class="event-text">
                        <textarea name="event" cols="50" rows="10">Tell us about your event...</textarea>
                    </div>
                    <br />
                    <p>Attach a file (optional)</p>
                    <input type="file" name="eventfile" />
                    <br />
                    <a href="#" class="btn btn-primary">Submit</a>
                </div>
            </form>
        </div>
    `
}