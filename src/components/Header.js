import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// default header
export default function Header() {
    return html`
    <!--Site image/title heading-->
        <div class="heading">
            <h1 style="text-align:left">Notre Dame Off-Campus Hub</h1>
            <h3 style="text-align:left">Bringing the off-campus community together!</h3>
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