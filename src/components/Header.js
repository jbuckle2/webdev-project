import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// default header
export default function Header() {
    return html`
    <!--Site image/title heading-->
        <div class="heading">
            <img src="../src/images/pawprints.png" alt="pawprints" title="Pawprints of the Wildcats!"/>
            <h1>Ryan Hall</h1>
            <h2>Where the Wild Things Are!</h2>
        </div>
        <!--End of site image/title heading-->

        <!--Site navbar-->
        <ul class="navbar">
            <li><a href="./announcements.html"> Announcements</a></li>
            <li><a href="./events.html"> Events</a></li>
            <li><b><a href="./index.html"> Log Out</a></b></li>
        </ul>
        <!--End of site navbar-->    `
}