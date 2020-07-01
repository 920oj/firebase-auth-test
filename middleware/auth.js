export default async function ({ app, route, store, redirect }) {
  console.log(app)
  await app.$fireAuth.onAuthStateChanged(user => {
    if (user) {
      console.log('ログイン済みです')
    } else {
      if (route.name !== 'login' || route.name !== '') redirect('/login')
    }
  })
}