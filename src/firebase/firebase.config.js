// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCglIieZRla5Cy1PhEp-hvCHs1ijXsGl-4",
    authDomain: "photo-serve-59058.firebaseapp.com",
    projectId: "photo-serve-59058",
    storageBucket: "photo-serve-59058.appspot.com",
    messagingSenderId: "967223437303",
    appId: "1:967223437303:web:cc510053f39d91bc7a70f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;