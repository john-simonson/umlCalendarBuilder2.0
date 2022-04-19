import { ref, set } from "firebase/database";
import selectDataUser from "./selectDataUser";
import { db } from "./firebaseConfig";

export default function deleteClass(id, classID) {
    if(window.navigator.onLine){
        return new Promise(function (resolve, reject) {
            selectDataUser(id).then(function (user) {
                user.classes.forEach(function (item, index, object) {
                    if (item.id === classID) {
                        object.splice(index, 1);
                        set(ref(db, "Users/" + user.id.toString()), user);
                    }
                });
            });
            try {
                resolve(true);
            } catch (e) {
                reject(e);
            }
        });
    }
    else{
        alert("Sorry Cannot delete class while offline...")
    }
}