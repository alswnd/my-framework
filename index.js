import Home from "./View/Home.js";
import Page1 from "./View/Page1.js";

const routes = [
	{ path: "/", component: Home },
	{ path: "/page1", component: Page1 },
];

const parseLocation = () => {
	return history.state?.pathname || "/";
};

const findComponentByPath = (path, routes) => {
	return routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, "gm"))) || undefined;
};

const router = () => {
	const path = parseLocation();
	const { component } = findComponentByPath(path, routes) || {};
	document.getElementById("app").innerHTML = component.render();
};

window.onpopstate = function (event) {
	console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

document.getElementById("btn1").addEventListener("click", () => {
	history.pushState({ pathname: "/" }, "home", "/");

	router();
});

document.getElementById("btn2").addEventListener("click", () => {
	history.pushState({ pathname: "/page1" }, "page1", "/page1");

	router();
});

router();
