import Nav from "../Nav";
import React from 'react';
import {getAuth} from 'firebase/auth';
import selectDataUser from "../../scripts/selectDataUser";
import ClassCard from "../ClassCard";

export default function MyClasses() { 
    const [classes, setClasses] = React.useState([]);

    React.useEffect(() => {
        if(window.navigator.onLine){
            getAuth().onAuthStateChanged((user) => {
                selectDataUser(user.uid).then(function (usr){
                    setClasses(usr.classes);
                });
            });
        }
        else{
            setClasses(JSON.parse(localStorage.getItem("User Classes")));
        }
    }, [])

  return (
    <React.Fragment>
      <Nav
          navItems={[
            { name: "Home", to: "/" }, 
            { name: "My Classes", to: "/my-classes"},
          ]}
        />
        {classes.slice(1).map((course) => 
                <div className="py-1 flex justify-center">
                  <ClassCard id={course.id} name={course.name} deptCode={course.departmentCode} number={course.number} section={course.sectionNumber} time={course.time} days={course.days} building={course.building} room={course.room}/>
                </div>
        )}
    </React.Fragment>
  );
}