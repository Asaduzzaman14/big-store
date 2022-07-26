// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEHn_XRe6N39pdzO7v8_emhHsCWE7EB_g",
    authDomain: "big-store-57981.firebaseapp.com",
    projectId: "big-store-57981",
    storageBucket: "big-store-57981.appspot.com",
    messagingSenderId: "444579729579",
    appId: "1:444579729579:web:2a168b06000017152b67ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth 