export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },
  loggedinUser(state) {
    return state.auth.user;
  }
};

// export const state = () => ({
//   myState: "Hello"
// });
