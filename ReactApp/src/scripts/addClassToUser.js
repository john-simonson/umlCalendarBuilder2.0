import { getDatabase, ref, set } from "firebase/database";
import selectDataUser from "./selectDataUser";
import getUser from "./getUser";

export default function addClassToUser(paramClass) {
    class User {
      constructor(ID,  Classes) {
        this.id = ID;
        this.classes = Classes;
      }
    }

    getUser().then(function (user) {
      selectDataUser(user.uid).then(function (usr){
        var obj;
        usr.classes.push(paramClass);
        if (usr !== null){
          obj = new User(
            user.uid,
            usr.classes
          );
          set(ref(getDatabase(), "Users/" + obj.id.toString()), obj);
        }
    });
  })
  }