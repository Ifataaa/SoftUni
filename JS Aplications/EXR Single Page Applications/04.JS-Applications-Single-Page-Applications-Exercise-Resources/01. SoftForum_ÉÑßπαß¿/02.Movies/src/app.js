function hideAllSections() {
    document.querySelectorAll("section").forEach(section => section.style.display = "none");
}
hideAllSections();

document.querySelector("nav").addEventListener("click", onNavigate);
const registerURL = "http://localhost:3030/users/register";
const loginURL = "http://localhost:3030/users/login";
const logoutURL = "http://localhost:3030/users/logout"

const endpoints = {
    create: "http://localhost:3030/data/movies",
    update: "http://localhost:3030/data/movies/",
    delete: "http://localhost:3030/data/movies/"
}

function updateNav() {
    let userNav = document.querySelectorAll("li.user");
    let guestNav = document.querySelectorAll("li.guest");

    let userData = sessionStorage.getItem("userData");

    if (userData) {
        userNav.forEach(li => {
            li.style.display = "block";
        });
        guestNav.forEach(li => {
            li.style.display = "none";
        });
    } else {
        guestNav.forEach(li => {
            li.style.display = "block"
        });
        userNav.forEach(li => {
            li.style.display = "none";
        });
    }
}
updateNav();

async function onNavigate(ev) {
    ev.preventDefault();

    const pathName = ev.target.pathname;

    if (pathName == "/register") {
        await onRegister();
    } else if (pathName == "/login") {
        await onLogin();
    } else if (pathName == "/logout") {
        await onLogout();
    } else if (pathName == "/movies") {
        await onMovies();
    }
}

function onRegister() {
    hideAllSections();
    document.getElementById("form-sign-up").style.display = "block";
    document.getElementById("register-form").addEventListener("submit", onRegisterSubmit);
}

async function onRegisterSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("repeatPassword");

    if (!email || !password || !rePass || password.length < 6 || password !== rePass) {
        return;
    }
    try {
        const req = await fetch(registerURL, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, password })
        })

        if (!req.ok) {
            const err = await req.json()
            throw new Error(err)
        }

        let response = await req.json();
        sessionStorage.setItem("userData", JSON.stringify(response));
        document.getElementById("form-sign-up").style.display = "none";
        document.getElementById("welcome-msg").textContent = `Welcome, ${email}`;

        updateNav();

    } catch (error) {
        alert(error.message)
    }

}

function onLogin() {
    hideAllSections();
    document.getElementById("form-login").style.display = "block"
    document.getElementById("login-form").addEventListener("submit", onLoginSubmit);
}

async function onLoginSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        return alert("All fields are required!")
    }


    try {
        const options = {
            method: "POST",
        }

        const headers = {
            "Content-type": "application/json"
        }

        const userData = JSON.parse(sessionStorage.getItem("userData"));

        if (userData) {
            headers["X-Authorization"] = userData.accessToken
        }

        options[headers] = headers;
        options.body = JSON.stringify({ email, password })


        const req = await fetch(loginURL, options);

        if (!req.ok) {
            const err = await req.json();
            throw new Error(err);
        }

        const data = await req.json();
        debugger

        document.getElementById("form-login").style.display = "none";
        document.getElementById("home-page").style.display = "block";
        sessionStorage.setItem("userData", JSON.stringify(data));
        updateNav();

    } catch (error) {
        alert(error.message)
    }
}

async function onLogout() {
    try {
        const userData = JSON.parse(sessionStorage.getItem("userData"));
        const req = await fetch(logoutURL, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "X-Authorization": userData.accessToken
            }
        });

        if (!req.ok) {
            const err = await req.json();
            throw new Error(err)
        }

        sessionStorage.clear();
        updateNav();
        await onLogin();

    } catch (error) {
        alert(error.message);
    }
}

function onMovies() {
    updateNav();
    document.getElementById("home-page").style.display = "block";
    document.getElementById("movie").style.display = "block";
    
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    
    if (userData) {
        document.getElementById("add-movie-button").style.display = "block";
    }
    document.querySelector("section#add-movie-button a").addEventListener("click", onAddMovie);
}

function onAddMovie(ev) {
    ev.preventDefault();
    hideAllSections();
    document.getElementById("add-movie").style.display = "block";
    document.getElementById("add-movie-form").addEventListener("submit", onAddMovieSubmit);
}

async function onAddMovieSubmit(ev) {
    ev.preventDefault();

    const userData = JSON.parse(sessionStorage.getItem("userData"))
    const formData = new FormData(ev.target);

    const title = formData.get("title");
    const description = formData.get("description");
    const imageUrl = formData.get("img");
    debugger
    if (!title || !description || !imageUrl) {
        return alert("All fields are required!");
    }


    try {
        const req = await fetch(endpoints.create, {
            method: "POST",
            headers: { "Content-type": "application/json", "X-Authorization": userData.accesstoken},
            body: JSON.stringify({ title, description, imageUrl })
        });

        if (!req.ok) {
            const err = await req.json();
            throw new Error(err);
        }

        const ul = docuemnt.getElementById("movies-list");
        let li = document.createElement("li");
        li.innerHTML = `
        <li class="card mb-4">
                  <img class="card-img-top"  src="${imageUrl}" alt="Card image cap" width="400"/>
                  <div class="card-body">
                    <h4 class="card-title">${title}</h4>
                    <a href="#">
                    </a>
                  </div>
                  <div class="card-footer">
                  <button type="button" class="btn btn-info">Details</button>
                  </div>
                </li>
        `;
        ul.appendChild(li);



    } catch (error) {
        alert(error.message);
    }

}



