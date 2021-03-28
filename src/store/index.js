import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      isAuth: false,
      authUser: {},
      isOpen: false,
    };
  },
  mutations: {
    setIsAuth(state, payload) {
      state.isAuth = payload;
    },
    setAuthUser(state, payload) {
      state.authUser = payload;
    },
    setLoginModal(state, payload) {
      state.isOpen = payload;
    },
  },
});
