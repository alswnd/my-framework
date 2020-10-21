import Home from "./View/Home.js";

const routes = [{ path: "/", component: new Home() }];

const parseLocation = () => {
	return history.state?.pathname || "/";
};

const findComponentByPath = (path, routes) => {
	return routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, "gm"))) || undefined;
};

const router = () => {
	const path = parseLocation();
	const { component } = findComponentByPath(path, routes) || {};

	console.log(typeof component);

	component.render();
};

window.onpopstate = function (event) {
	console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

document.getElementById("btn1").addEventListener("click", () => {
	history.pushState({ pathname: "/" }, "home", "/");

	router();
});
router();
