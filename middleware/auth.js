export default function ({ store, redirect, route }) {
  store.state.auth?.user != null && route.name == "login" ? redirect("/") : "";
  store.state.auth?.user == null && isAdminRoute(route)
    ? redirect("/login")
    : "";
}

function isAdminRoute(route) {
  if (route.matched.some((record) => record.path == "/admin")) {
    return true;
  }
}

