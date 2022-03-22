import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiwwhNIbZoDLr57dClkN-QaLSyko8ARD4",
  authDomain: "phone-number-verificatio-2caee.firebaseapp.com",
  projectId: "phone-number-verificatio-2caee",
  storageBucket: "phone-number-verificatio-2caee.appspot.com",
  messagingSenderId: "419045396925",
  appId: "1:419045396925:web:6f3b5609882383564942d4",
  measurementId: "G-DWW7QN849E",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
