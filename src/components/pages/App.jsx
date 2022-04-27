import Nav from "../Nav"
import React from 'react'
import ClassForm from "../ClassForm";
import ProgressButton from "../ProgressButton";
import {getAuth} from 'firebase/auth'
import selectDataUser from "../../scripts/selectDataUser";
import ClassCardHome from "../ClassCardHome";
import selectDataCalendar from "../../scripts/selectDataCalendar";
import parseCalendar from "../../scripts/parseCalendar";
import todaysClasses from "../../scripts/todaysClasses";

export default function App() {
  const [showForm, setShowForm] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [classes, setClasses] = React.useState([""]);
  const [calendar, setCalendar] = React.useState([]);
  const [message, setMessage] = React.useState(null);
  const [calError, setCalError] = React.useState(true);
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    if(window.navigator.onLine){
    getAuth().onAuthStateChanged((user) => {
      if (user != null) {
        //console.log("User Logged in.");
        setIsLoggedIn(true)
      }
      else {
        //console.log("User not logged in.");
        setIsLoggedIn(false)
      }
      selectDataUser(user.uid).then(function (usr){
        localStorage.setItem("User Classes", JSON.stringify(usr.classes));
        setTimeout(() => {
          const [tmpDays, tmpMsg] = todaysClasses(usr.classes, calendar, date);
          var tmpArr = [];
          tmpArr.push("");
          //console.log(tmpDays);
          //console.log(usr.classes[1]);
          for(var i = 1; i < usr.classes.length; i++){
            //console.log(usr.classes[i].days.includes(tmpDays))
            if(usr.classes[i].days.includes(tmpDays)){
              //console.log("at push")
              tmpArr.push(usr.classes[i])
            }
          }
          //console.log(tmpArr);
          setClasses(tmpArr);
          //console.log(tmpMsg);
          setMessage(tmpMsg);
        }, 100);
      })
    });
  }
  else{
    var localClasses = JSON.parse(localStorage.getItem("User Classes"));
    //setCalendar(JSON.parse(localStorage.getItem("calendarKey")));
    const [tmpDays, tmpMsg] = todaysClasses(localClasses, calendar);
          var tmpArr = [];
          tmpArr.push("");
          //console.log(tmpDays);
          //console.log(usr.classes[1]);
          for(var i = 1; i < localClasses.length; i++){
            //console.log(usr.classes[i].days.includes(tmpDays))
            if(localClasses[i].days.includes(tmpDays)){
              //console.log("at push")
              tmpArr.push(localClasses[i])
            }
          }
          //console.log(tmpArr);
          setClasses(tmpArr);
          //console.log(tmpMsg);
          setMessage(tmpMsg);
        }
  }, [calendar, date]);

  React.useEffect(() => {
    if(window.navigator.onLine){
    selectDataCalendar().then(function (calURL){
      //console.log(calURL);
      parseCalendar(calURL).then(function (cal){
        setCalendar(cal);
      })
    })
  }
  else {
    console.log(localStorage.getItem("calendarKey"))
    if(localStorage.getItem("calendarKey") !== null){
      setCalendar(JSON.parse(localStorage.getItem("calendarKey")));
    }
    else{
      alert("Error! No calendar found. Please return after connecting to internet.");
      setCalError(false);
    }
  }
  }, []);

  const minusWeek = () => {
      var tmp = {date}.date;
      tmp.setDate(tmp.getDate() - 7);
      setDate(tmp);
  }

  const minusDay = () => {
    var tmp = {date}.date;
    tmp.setDate(tmp.getDate() - 1);
    setDate(tmp);
  }

  const plusDay = () => {
    var tmp = {date}.date;
    tmp.setDate(tmp.getDate() + 1);
    setDate(tmp);
  }

  const plusWeek = () => {
    var tmp = {date}.date;
    tmp.setDate(tmp.getDate() + 7);
    setDate(tmp);
  }

  const update = () => {
    if(window.navigator.onLine){
      getAuth().onAuthStateChanged((user) => {
        if (user != null) {
          //console.log("User Logged in.");
          setIsLoggedIn(true)
        }
        else {
          //console.log("User not logged in.");
          setIsLoggedIn(false)
        }
        selectDataUser(user.uid).then(function (usr){
          localStorage.setItem("User Classes", JSON.stringify(usr.classes));
          setTimeout(() => {
            const [tmpDays, tmpMsg] = todaysClasses(usr.classes, calendar, date);
            var tmpArr = [];
            tmpArr.push("");
            //console.log(tmpDays);
            //console.log(usr.classes[1]);
            for(var i = 1; i < usr.classes.length; i++){
              //console.log(usr.classes[i].days.includes(tmpDays))
              if(usr.classes[i].days.includes(tmpDays)){
                //console.log("at push")
                tmpArr.push(usr.classes[i])
              }
            }
            //console.log(tmpArr);
            setClasses(tmpArr);
            //console.log(tmpMsg);
            setMessage(tmpMsg);
          }, 100);
        })
      });
    }
    else{
      var localClasses = JSON.parse(localStorage.getItem("User Classes"));
      //setCalendar(JSON.parse(localStorage.getItem("calendarKey")));
      const [tmpDays, tmpMsg] = todaysClasses(localClasses, calendar);
            var tmpArr = [];
            tmpArr.push("");
            //console.log(tmpDays);
            //console.log(usr.classes[1]);
            for(var i = 1; i < localClasses.length; i++){
              //console.log(usr.classes[i].days.includes(tmpDays))
              if(localClasses[i].days.includes(tmpDays)){
                //console.log("at push")
                tmpArr.push(localClasses[i])
              }
            }
            //console.log(tmpArr);
            setClasses(tmpArr);
            //console.log(tmpMsg);
            setMessage(tmpMsg);
          }
  }

  return (
    <React.Fragment>
      <Nav
          navItems={[
            { name: "Home", to: "/" },  
            { name: "My Classes", to: "/my-classes"},
          ]}
        />
        {calError && (<div>
    <div className="App">
      <div className="flex justify-center pt-10 rounded-md overflow-y-auto">
        <div className="bg-indigo-400 text-white w-4/6 border border-solid border-white rounded-2xl">
          <div className="flex justify-center px-4 py-2">
            <div className="px-2">
            <button className="text-xl border border-solid border-white rounded-md py-1 px-3 hover:bg-indigo-600 bg-indigo-500" onClick={() => {
            minusWeek();
            console.log(date);
            update();
          }}> -7 Days </button>
          </div>
          <div className="px-2">
          <button className="text-xl border border-solid border-white rounded-md py-1 px-3 hover:bg-indigo-600 bg-indigo-500" onClick={() => {
            minusDay();
            console.log(date);
            update();
          }}> -1 Days </button>
          </div>
          <div className="px-2">
          <button className="text-xl border border-solid border-white rounded-md py-1 px-3 hover:bg-indigo-600 bg-indigo-500" onClick={() => {
            plusDay();
            console.log(date);
            update();
          }}> +1 Days </button>
          </div>
          <div className="px-2">
          <button className="text-xl border border-solid border-white rounded-md py-1 px-3 hover:bg-indigo-600 bg-indigo-500" onClick={() => {
            plusWeek();
            console.log(date);
            update();
          }}> +7 Days </button>
          </div>
          </div>
            <div className="border-t border-solid border-white">
            {(message !== null && message !== undefined) && (
              <div>
              <h1 className="flex justify-center text-2xl font-bold py-2 border-b"> Important Information </h1>
              <h3 className="flex justify-center text-md font-bold p-3 border-b text-center"> {message} </h3>
              </div>
            )}
            <h1 className="flex justify-center text-2xl font-bold pt-2">Today's Classes</h1>
            <h3 className="flex justify-center text-xl font-bold pb-2 border-b">{({date}.date.getMonth()+1) + '/' + {date}.date.getDate() + '/' + {date}.date.getFullYear()}</h3>
                {classes.slice(1).map((course) => 
                <div className="py-1">
                  <ClassCardHome name={course.name} time={course.time} building={course.building} room={course.room}/>
                </div>
                )}
            </div>
        </div>
    </div>
    </div>
    <div className="flex justify-center py-5">
    <ProgressButton
      onClick={() => {
         setShowForm(!showForm)               
      }}
      enabled={isLoggedIn}
      to={``}
      text="Add a Class"
    />
    </div>
    { showForm && (<ClassForm></ClassForm>) }
    <div id="txt"></div>
    </div>)}
    </React.Fragment>
  );
}