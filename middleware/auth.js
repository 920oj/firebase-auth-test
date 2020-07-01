export default function ({ app, route, store, redirect }) {
  console.log(app)
  app.$fireAuth.onAuthStateChanged(user => {
    if (user) {
      store.commit('setUser', user);
      console.log('ログインしています');
      if (route.path === '/login' || route.path === '/signup') {
        return redirect('/')
      }
    } else {
      if (route.path !== '/' && route.path !== '/login' && route.path !== '/signup') {
        return redirect('/login')
      }
    }
  })
}