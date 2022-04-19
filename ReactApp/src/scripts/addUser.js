import { getDatabase, ref, set } from "firebase/database";
import selectDataUser from "./selectDataUser";
import getUser from "./getUser";

export default function addNewUser() {
    class User {
      constructor(ID,  Classes) {
        this.id = ID;
        this.classes = Classes;
      }
    }
  
    getUser().then(function (user) {
      selectDataUser(user.uid).then(function (usr){
        var obj;
        if (usr === null){
          obj = new User(
            user.uid,
            [""]
          );
          set(ref(getDatabase(), "Users/" + obj.id.toString()), obj);
        }
    });
  })
  }