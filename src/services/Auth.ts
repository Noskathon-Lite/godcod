// Function to fetch authentication data from firebase and return it

// export const fetchAuthData = async () => {
//   const auth = firebase.auth();
//   return auth.currentUser;
// };

// Helper functions for authentication
import auth from '@react-native-firebase/auth';

// Sign up a user with email verification
export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    await userCredential.user.sendEmailVerification(); // Send verification email
    return userCredential;
  } catch (error) {
    console.error('Error during sign-up:', error);
    throw error;
  }
};

// Log in a user only if the email is verified
export const logIn = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );

    if (!userCredential.user.emailVerified) {
      throw new Error(
        'Email not verified. Please verify your email before logging in.',
      );
    }

    return userCredential;
  } catch (error) {
    console.error('Error during log-in:', error);
    throw error;
  }
};

// Forgot password: Send password reset email
export const forgotPassword = async (email: string) => {
  try {
    await auth().sendPasswordResetEmail(email);
    return 'Password reset email sent!';
  } catch (error) {
    console.error('Error during password reset:', error);
    throw error;
  }
};
