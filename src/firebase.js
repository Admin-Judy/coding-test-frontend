import firebase from "firebase/app"; // Firebase 앱을 가져옵니다.
import "firebase/firestore"; // Firestore를 가져옵니다.

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3At4byK7DJdVjfrYsOoGepY304hKOsYM",
  authDomain: "accapp-f9267.firebaseapp.com",
  projectId: "accapp-f9267",
  storageBucket: "accapp-f9267.appspot.com",
  messagingSenderId: "798772351906",
  appId: "1:798772351906:web:c37bb57f9b72a8540e58fb",
  measurementId: "G-D38DZNJ9VJ"
};

const app = firebase.initializeApp(firebaseConfig);

// Firestore 초기화
const firestore = firebase.firestore();

export { firestore }; // Firestore를 내보냅니다.