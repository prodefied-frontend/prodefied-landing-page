// src/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBk_E8BL5G-SFvxq3eJ6m2jCNHoFzKhL9M",
  authDomain: "prodefied-865fd.firebaseapp.com",
  projectId: "prodefied-865fd",
  storageBucket: "prodefied-865fd.appspot.com",
  messagingSenderId: "129757777313",
  appId: "1:129757777313:web:699dc6011b1bcd02604fe0",
  measurementId: "G-1S5JFFBMBL",
};

// ✅ Prevent re-initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;




// // /* eslint-disable @typescript-eslint/no-unused-vars */
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBk_E8BL5G-SFvxq3eJ6m2jCNHoFzKhL9M",
//   authDomain: "prodefied-865fd.firebaseapp.com",
//   projectId: "prodefied-865fd",
//   storageBucket: "prodefied-865fd.firebasestorage.app",
//   messagingSenderId: "129757777313",
//   appId: "1:129757777313:web:699dc6011b1bcd02604fe0",
//   measurementId: "G-1S5JFFBMBL",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
