// /* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBk_E8BL5G-SFvxq3eJ6m2jCNHoFzKhL9M",
  authDomain: "prodefied-865fd.firebaseapp.com",
  projectId: "prodefied-865fd",
  storageBucket: "prodefied-865fd.firebasestorage.app",
  messagingSenderId: "129757777313",
  appId: "1:129757777313:web:699dc6011b1bcd02604fe0",
  measurementId: "G-1S5JFFBMBL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
