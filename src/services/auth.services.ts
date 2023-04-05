import auth from '@react-native-firebase/auth';

async function createUserWithFirebase(email: string, password: string) {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      console.log('User account created & signed in!');
      console.log('Sign up successfull! ', response);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
}
async function loginWithFirebase(email: string, password: string) {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      console.log('User account created & signed in!');
      console.log('Sign in successfull! ', response);
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is not valid!');
      }

      if (error.code === 'auth/user-disabled') {
        console.log('That email address is disable!');
      }
      if (error.code === 'auth/user-not-found') {
        console.log('User not found!');
      }
      if (error.code === 'auth/wrong-password') {
        console.log('That password is incorrect!');
      }

      console.error(error);
    });
}


export const authServices = {
  createUserWithFirebase,
  loginWithFirebase,
};
