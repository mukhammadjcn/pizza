import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import Vue3Lottie from "vue3-lottie";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "vue3-lottie/dist/style.css";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiwwhNIbZoDLr57dClkN-QaLSyko8ARD4",
  authDomain: "phone-number-verificatio-2caee.firebaseapp.com",
  projectId: "phone-number-verificatio-2caee",
  storageBucket: "phone-number-verificatio-2caee.appspot.com",
  messagingSenderId: "419045396925",
  appId: "1:419045396925:web:6f3b5609882383564942d4",
  measurementId: "G-DWW7QN849E",
};

// Vue toast configuarion
const options = {
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .use(Vue3Lottie)
  .use(Toast, options)
  .use(router)
  .mount("#app");
