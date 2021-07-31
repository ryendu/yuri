import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBGzgZ-bDKcE82IM-AyoI5FoddwO7c56QA",
authDomain: "yuri-5e461.firebaseapp.com",
projectId: "yuri-5e461",
storageBucket: "yuri-5e461.appspot.com",
messagingSenderId: "81758732913",
appId: "1:81758732913:web:04809d11e81e69b0ff11d0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
