import {
    html,
    render
} from "https://unpkg.com/htm/preact/standalone.module.js";

function Login() {
    return html`
        <div class="login-welcome">
            <div class="header-img">
                <img src="../src/images/nd_students.jpeg" alt="Notre Dame students walking to class" title="Notre Dame students are just as social as they are academic!"/>
            </div>
            <h1>Log In</h1>
            <h2>Please log in using your Notre Dame email.</h2>
        </div>
        <!--This form submission will automatically take you to the home page-->
        <!--TODO: When backend is connected can add full login/student authentication-->
        <form action="../dorm/events/events.html">
            <div class="login-form">
                <label for="email"><b>Email:   </b></label>
                <input
                    type="text"
                    placeholder="domer@nd.edu"
                    name="email"
                    id="email"
                    required
                />
                <br />
                <label for="psw"><b>Password:  </b></label>
                <input
                    type="password"
                    placeholder="********"
                    name="psw"
                    id="psw"
                    required
                />
                <hr />
                <a class="btn btn-primary" href="./events.html" role="button">Log In</a>
            </div>
        </form>
        <!--This is the only navigation for this page because the user has not logged in yet-->
        <a class="btn btn-primary" href="index.html" role="button">Go Back</a>
    `
}

render(html` <${Login} />`, document.getElementById("login"));