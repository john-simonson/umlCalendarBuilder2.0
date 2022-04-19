import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
    apiKey: "AIzaSyAGZWQIB326-QNrHemn5Nkohxy93ysZPOc",
    authDomain: "uml-calendar-maker.firebaseapp.com",
    projectId: "uml-calendar-maker",
    storageBucket: "uml-calendar-maker.appspot.com",
    messagingSenderId: "183877516914",
    appId: "1:183877516914:web:2b66b0894107a1ab9a4ceb",
    measurementId: "G-VB40KTM5B6"
  };

export const app = initializeApp(firebaseConfig)
export const authentication = getAuth(app)
export const db = getDatabase(app)