import { initializeApp } from "firebase/app";
//import {getDatabase, ref, set} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js';
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from "./firebaseConfig";

//Opens firebase entry for user at ID
export default function selectDataCalendar() {
  initializeApp(firebaseConfig);
  const dbref = ref(getDatabase(), "Calendar");
  return new Promise(function (resolve, reject) {
    try {
      onValue(dbref, (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      });
    } catch (e) {
      reject(e);
    }
  });
}
