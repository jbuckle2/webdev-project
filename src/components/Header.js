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
            <li><a href="../announcements/announcements.html"> Announcements</a></li>
            <li><a href="../events/events.html"> Events</a></li>
            <li><b><a href="../../index.html"> Log Out</a></b></li>
        </ul>
        <!--End of site navbar-->

        <!--This would be connected to the backend and have actual dorm events-->
        <!--The list feature would be good to update/add scroll-->
    `
}