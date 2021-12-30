export default async function ({ app, redirect }) {
  // If the user is not authenticated
  const isAuth = await app.$fire.auth.currentUser
  if (!isAuth) {
    return redirect('/login')
  }
}
