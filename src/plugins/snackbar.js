const snackbarPlugin = {
  install: (Vue, { store }) => {
    if (!store) {
      throw new Error("Please provide vuex store.");
    }

    Vue.prototype.$snackbar = {
      showMessage: function ({ content = "", variant = "" }) {
        store.commit(
          "snackbar/showMessage",
          { content, variant },
          { root: true }
        );
      },
      dismiss: function () {
        store.commit("snackbar/dismiss", {}, { root: true });
      },
    };
  },
};
export default snackbarPlugin;
