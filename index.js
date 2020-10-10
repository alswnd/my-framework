import Home from "./View/Home.js";
import Page1 from "./View/Page1.js";

const routes = [
	{ path: "/", component: Home },
	{ path: "/page1", component: Page1 },
];

const parseLocation = () => {
	return location.hash.slice(1).toLowerCase() || "/";
};

const findComponentByPath = (path, routes) => {
	return routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, "gm"))) || undefined;
};

const router = () => {
	const path = parseLocation();
	const { component } = findComponentByPath(path, routes) || {};
	document.getElementById("app").innerHTML = component.render();
};

router();
