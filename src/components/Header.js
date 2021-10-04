import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export default function Header() {
    return html`
    <!--Site image/title heading-->
        <div class="heading">
            <img src="../../images/pawprints.png" alt="pawprints" title="Pawprints of the Wildcats!"/>
            <h1>Ryan Hall</h1>
            <h2>Where the Wild Things Are!</h2>
        </div>
        <!--End of site image/title heading-->

        <!--Site navbar-->
        <ul class="navbar">
            <li><a href="../home/home.html">Home</a></li>
            <li><a href="../announcements/announcements.html"> Announcements</a></li>
            <li><a href="../chat/chat.html"> Chat</a></li>
            <li><a href="../events/events.html"> Events</a></li>
            <li><b><a href="../../index.html"> Log Out</a></b></li>
        </ul>
        <!--End of site navbar-->

        <!--This would be connected to the backend and have actual dorm events-->
        <!--The list feature would be good to update/add scroll-->
    `
}