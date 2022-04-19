import React from "react"

export default function ClassCardHome(props){
return(
    <React.Fragment>
        <div className="mx-auto md:w-2/6 w-4/6 border border-solid border-white rounded-2xl bg-indigo-500">
        <div className="mx-auto flex flex-row justify-center">
            <h2>{props.name} @ {props.time}</h2>
        </div>
        <div className="mx-auto flex flex-row justify-center">
            <h3>{props.building} - {props.room}</h3>
        </div>
        </div>
    </React.Fragment>
    )
}