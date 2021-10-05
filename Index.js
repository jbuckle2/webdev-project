import {
    html,
    render
} from "https://unpkg.com/htm/preact/standalone.module.js";

function Index() {
    document.body.setAttribute("background", "images/ND_HD_Lake_White.jpg")
    return html`
        <div class="d-flex justify-content-center align-items-center h-100">
            <!-- Jumbotron -->
            <div class="p-5 text-center bg-light">
                <h1 class="mb-3">Notre Dame Off-Campus Hub</h1>
                <h4 class="mb-3">A platform for Notre Dame off-campus students to access all off-campus information</h4>
                <a class="btn btn-primary" href="login/login.html" role="button">Log In with ND Email</a>
            </div>
            <!-- Jumbotron -->
        </div>
    `
}

render(html` <${Index} />`, document.getElementById("index"));