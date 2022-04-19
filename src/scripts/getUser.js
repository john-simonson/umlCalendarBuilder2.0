import { getAuth } from "firebase/auth"

//returns array with user.uid in user[0] and user.phoneNumber in user[1]
export default function getUser(){
    return new Promise(function (resolve, reject){
        getAuth().onAuthStateChanged((user) => {
            if(user){
                resolve(user)
            }
            else{
                resolve(null)
            }
        });
    });
}