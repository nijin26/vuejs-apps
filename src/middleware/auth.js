export default function(next, store) {
  if (!store.state.isAuth) {
    next("/");
    store.commit("setLoginModal", true);
  } else next();
}
