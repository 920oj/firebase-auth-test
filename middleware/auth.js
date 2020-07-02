export default function ({ app, route, store, redirect }) {
  console.log(app)
  if (store.getters.isLoggedIn) {
    console.log('ストアにログイン状態があります')
    console.log(route.path)
    if (route.path === '/login' || route.path === '/signup') {
      console.log('ログイン状態中に見えてはいけないページです')
      return redirect('/main')
    }

  } else {
    app.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        store.commit('setUser', user);
        console.log('ログインしています');
        if (route.path === '/login' || route.path === '/signup') {
          return redirect('/main')
        }
      } else {
        if (route.path !== '/' && route.path !== '/login' && route.path !== '/signup') {
          return redirect('/login')
        }
      }
    })
  }
}