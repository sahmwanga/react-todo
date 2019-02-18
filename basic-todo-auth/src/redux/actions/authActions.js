import c from '../constants'

const signIn = (credentials) => {

  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase.auth().signInWithEmailAndPassword(
      credentials.email, credentials.password
    )
      .then((data) => {
        console.log(data)
        dispatch({ type: c.LOGIN_SUCCESS })
      })
      .catch(err => {
        dispatch({ type: c.LOGIN_ERROR, err })
      })
  }

}

const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase.auth().signOut()
      .then(() => {
        console.log('Signout successful')
        dispatch({ type: c.LOGOUT_SUCCESS })
      })
      .catch(err => console.log(err))
  }
}

const register = (userInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase()

    firebase.auth().createUserWithEmailAndPassword(
      userInfo.email,
      userInfo.password
    ).then((resp) => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        initials: userInfo.firstName[0] + userInfo.lastName[0]
      })
    }).then(() => {
      dispatch({ type: c.REGISTER_SUCCESS })
    }).catch((err) => {
      dispatch({ type: c.REGISTER_ERROR, err })
    })
  }

}

export default { signIn, signOut, register }