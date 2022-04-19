import React from "react"
import deleteClasses from "../scripts/deleteClass";
import {getAuth} from 'firebase/auth';

export default function ClassCard(props){
return(
    <React.Fragment>
        <div className="mx-auto md:w-2/6 w-4/6 border border-solid border-white rounded-2xl bg-indigo-500 text-white p-2">
            <div className="mx-auto flex flex-row justify-center text-3xl font-bold">
                <h1>{props.name}</h1>
            </div>
            <div className="mx-auto flex flex-row justify-center text-xl">
                <h1>{props.deptCode + " " + props.number}</h1>
            </div>
            <div className="mx-auto flex flex-row justify-center text-xl">
                <h1>{"Section: " + props.section}</h1>
            </div>
            <div className="mx-auto flex flex-row justify-center text-xl">
                <h1>{props.building + " " + props.room}</h1>
            </div>
            <div className="mx-auto flex flex-row justify-center text-xl">
                {
                    props.days.map((day) => 
                        <h1 className="px-1">{day}</h1>
                    )
                }
            </div>
            <div className="mx-auto flex flex-row justify-center text-xl">
                <h1>Start Time: {props.time}</h1>
            </div>
            <button onClick={() => {
                getAuth().onAuthStateChanged((user) => {
                    deleteClasses(user.uid, props.id);
                });
            }}
            className="flex justify-center mx-auto px-2 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Delete Class</button>
        </div>
    </React.Fragment>
    )
}