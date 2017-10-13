// eslint-disable-next-line
export default function(Vue) {

  return {
    state: {
      message: '',
    },
    getters: {
      message2: state => {
        return state.message + '!';
      },
    },
    mutations: {
      setMessage(state, message) {
        state.message = message;
      },
    },
    actions: {
      setMessage({ commit }, self) {
        // eslint-disable-next-line
        return new Promise((resovle, reject) => {
          commit('setMessage', self.$text(self.$config.message, 'zhennann'));
          resovle();
        });
      },
    },
  };

}
