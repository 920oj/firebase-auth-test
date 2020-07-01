export const state = () => ({
  status: '',
  uid: '',
  mail: ''
})

export const getters = {
  isLoggedIn: state => {
    return state.status;
  },
  mail: state => {
    return state.status ? state.mail : false;
  }
}

export const mutations = {
  setUser(state, user) {
    state.status = true;
    state.mail = user.email;
    state.uid = user.uid;
  },
  logout(state) {
    state.status = false;
    state.email = '';
  }
}