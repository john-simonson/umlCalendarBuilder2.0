import React from "react"
import ProgressButton from "./ProgressButton"
import addClassToUser from "../scripts/addClassToUser";
import genClassID from "../scripts/genClassID";

class newClass {
    constructor(paramID, paramClassName, paramClassNumber, paramDeptCode, paramSectionNumber, paramStartTime, paramDaysArr, paramBuilding, paramRoom) {
        this.id = paramID;
        this.name = paramClassName;
        this.number = paramClassNumber;
        this.departmentCode = paramDeptCode;
        this.sectionNumber = paramSectionNumber;
        this.time = paramStartTime;
        this.days = paramDaysArr;
        this.building = paramBuilding;
        this.room = paramRoom;
    }
}

export default function ClassForm(){
const [deptCode, setDeptCode] = React.useState("");
const [className, setClassName] = React.useState("");
const [classNumber, setClassNumber] = React.useState("");
const [sectionNumber, setSectionNumber] = React.useState("");
const [startTime, setStartTime] = React.useState("");
const [classDaysMon, setClassDaysMon] = React.useState(false);
const [classDaysTues, setClassDaysTues] = React.useState(false);
const [classDaysWed, setClassDaysWed] = React.useState(false);
const [classDaysThurs, setClassDaysThurs] = React.useState(false);
const [classDaysFri, setClassDaysFri] = React.useState(false);
const [classDaysSat, setClassDaysSat] = React.useState(false);
const [classBuilding, setClassBuilding] = React.useState("");
const [classRoom, setClassRoom] = React.useState("");

const selectChangeHandler = e =>{
    setDeptCode(e.target.value);
}

const selectChangeHandler2 = e =>{
    setClassBuilding(e.target.value);
}

return(
    <React.Fragment>
  <div className="flex flex-col justify-between mx-auto">
    <div className="flex justify-center pt-5 pb-3 rounded-md">
      <div className="md:w-4/6 mx-auto bg-indigo-400 text-white border border-solid border-white rounded-2xl py-10">
          <label className="flex justify-center text-xl font-bold pb-1">Class Name</label>
          <input className="flex justify-center mx-auto bg-indigo-400 text-white border border-solid border-white rounded-2xl p-2 text-center" value={className} onChange={e => {setClassName(e.target.value)}} required></input><br/>
          <label className="flex justify-center text-xl font-bold pb-1">Department Code</label>
          <select onChange={selectChangeHandler} className='flex justify-center mx-auto bg-indigo-400 text-white border border-solid border-white rounded-2xl p-2 text-center' required>
                    <option>Please Select</option>
                    <option>ACCT</option>
                    <option>AERO</option>
                    <option>AEST</option>
                    <option>AMST</option>
                    <option>ARHI</option>
                    <option>ARTS</option>
                    <option>ASAM</option>
                    <option>ATMO</option>
                    <option>BIOL</option>
                    <option>BMBT</option>
                    <option>BMEN</option>
                    <option>BUSI</option>
                    <option>CHEM</option>
                    <option>CHEN</option>
                    <option>CIVE</option>
                    <option>COMP</option>
                    <option>CONT</option>
                    <option>CRIM</option>
                    <option>DGMD</option>
                    <option>DPTH</option>
                    <option>ECON</option>
                    <option>EDUC</option>
                    <option>EECE</option>
                    <option>ENGL</option>
                    <option>ENGN</option>
                    <option>ENGY</option>
                    <option>ENTR</option>
                    <option>ENVE</option>
                    <option>ENVI</option>
                    <option>ENVS</option>
                    <option>ETEC</option>
                    <option>EXER</option>
                    <option>FAHS</option>
                    <option>FINA</option>
                    <option>GEOL</option>
                    <option>GLST</option>
                    <option>GNDR</option>
                    <option>GRFX</option>
                    <option>HIST</option>
                    <option>HONR</option>
                    <option>HSCI</option>
                    <option>INFO</option>
                    <option>LABR</option>
                    <option>LGST</option>
                    <option>LIFE</option>
                    <option>MARI</option>
                    <option>MATH</option>
                    <option>MECH</option>
                    <option>MGMT</option>
                    <option>MIST</option>
                    <option>MKTG</option>
                    <option>MLSC</option>
                    <option>MSIT</option>
                    <option>MTEC</option>
                    <option>MUAP</option>
                    <option>MUBU</option>
                    <option>MUED</option>
                    <option>MUEN</option>
                    <option>MUHI</option>
                    <option>MUPF</option>
                    <option>MUSR</option>
                    <option>MUTH</option>
                    <option>NONC</option>
                    <option>NURS</option>
                    <option>NUTR</option>
                    <option>PCST</option>
                    <option>PHIL</option>
                    <option>PHRM</option>
                    <option>PHYS</option>
                    <option>PLAS</option>
                    <option>POLI</option>
                    <option>POLY</option>
                    <option>POMS</option>
                    <option>PSMA</option>
                    <option>PSYC</option>
                    <option>PTEC</option>
                    <option>PUBH</option>
                    <option>PUBH</option>
                    <option>PUBH</option>
                    <option>RADI</option>
                    <option>ROTC</option>
                    <option>SCIE</option>
                    <option>SOCI</option>
                    <option>THEA</option>
                    <option>UTCH</option>
                    <option>WLAN</option>
                    <option>WLAR</option>
                    <option>WLCH</option>
                    <option>WLFR</option>
                    <option>WLGE</option>
                    <option>WLIT</option>
                    <option>WLKH</option>
                    <option>WLLA</option>
                    <option>WLPO</option>
                    <option>WLSP</option>
                </select><br/>
                <label className="flex justify-center text-xl font-bold pb-1">Class Number</label>
                <input className='flex justify-center mx-auto bg-indigo-400 text-white border border-solid border-white rounded-2xl p-2 text-center' value={classNumber} onChange={e => {setClassNumber(e.target.value)}} type="number" required></input><br/>
                <label className="flex justify-center text-xl font-bold pb-1">Section Number</label>
                <input className='flex justify-center mx-auto bg-indigo-400 text-white border border-solid border-white rounded-2xl p-2 text-center'  value={sectionNumber} onChange={e => {setSectionNumber(e.target.value)}} type="number" required></input><br/>
                <label className="flex justify-center text-xl font-bold pb-1">Start Time</label>
                <input className='flex justify-center mx-auto bg-indigo-400 text-white border border-solid border-white rounded-2xl p-2 text-center'  value={startTime} onChange={e => {setStartTime(e.target.value)}} type="time" required></input><br />
                    <label className="flex justify-center text-xl font-bold pb-1">Class Days:</label>
                <div className="mx-auto bg-indigo-400 text-white border border-solid border-white w-3/6 rounded-2xl p-2 text-center" required>
                    <label className="text-xl font-bold pb-1 px-2">Monday</label>
                    <input id='classDaysMon' name='classDaysMon' type='checkbox' onChange={e => {setClassDaysMon(!classDaysMon)}} /><br/>
                    <label className="text-xl font-bold pb-1 px-2">Tuesday</label>
                    <input id='classDaysTues' name='classDaysTues' type='checkbox' onChange={e => {setClassDaysTues(!classDaysTues)}} /><br/>
                    <label className="text-xl font-bold pb-1 px-2">Wednesday</label>
                    <input id='classDaysWed' name='classDaysWed' type='checkbox' onChange={e => {setClassDaysWed(!classDaysWed)}} /><br />
                    <label className="text-xl font-bold pb-1 px-2">Thursday</label>
                    <input id='classDaysThurs' name='classDaysThurs' type='checkbox' onChange={e => {setClassDaysThurs(!classDaysThurs)}} /><br />
                    <label className="text-xl font-bold pb-1 px-2">Friday</label>
                    <input id='classDaysFri' name='classDaysFri' type='checkbox' onChange={e => {setClassDaysFri(!classDaysFri)}} /><br />
                    <label className="text-xl font-bold pb-1 px-2">Saturday</label>
                    <input id='classDaysSat' name='classDaysSat' type='checkbox' onChange={e => {setClassDaysSat(!classDaysSat)}} />
                </div><br />
                <label className="flex justify-center text-xl font-bold pb-1">Building</label>
                <select onChange={selectChangeHandler2} className='flex justify-center mx-auto bg-indigo-400 text-white border border-solid border-white rounded-2xl p-2 text-center' required>
                    <option>Please Select</option>
                    <option>Ball Hall</option>
                    <option>Coburn Hall</option>
                    <option>Cumnock Hall</option>
                    <option>Dandeneau Hall</option>
                    <option>Dugan Hall</option>
                    <option>Durgin Hall</option>
                    <option>Falmouth Hall</option>
                    <option>Health and Social Sciences Building</option>
                    <option>Lydon Library</option>
                    <option>Mahoney Hall</option>
                    <option>McGauvran Center</option>
                    <option>O'Leary Library</option>
                    <option>Olney Hall</option>
                    <option>Olsen Hall</option>
                    <option>Perry Hall</option>
                    <option>Pinanski Hall</option>
                    <option>Pulichino Tong Buisiness Center</option>
                    <option>Rverview Suites</option>
                    <option>Shah Hall</option>
                    <option>Southwick Hall</option>
                    <option>Wannalancit Mills</option>
                    <option>Weed Hall</option>
                </select><br/>
                <label className="flex justify-center text-xl font-bold pb-1">Room Number</label>
                <input className='flex justify-center mx-auto bg-indigo-400 text-white border border-solid border-white rounded-2xl p-2 text-center' value={classRoom} onChange={e => {setClassRoom(e.target.value)}} type="number" required></input><br/>
                <div className="flex justify-center mx-auto">
                <ProgressButton
                    onClick={() => {
                        var days = [];
                        if (classDaysMon){
                            days.push('Monday')
                        }
                        if (classDaysTues){
                            days.push('Tuesday')
                        }
                        if (classDaysWed){
                            days.push('Wednesday')
                        }
                        if (classDaysThurs){
                            days.push('Thursday')
                        }
                        if (classDaysFri){
                            days.push('Friday')
                        }
                        if (classDaysSat){
                            days.push('Saturday')
                        }
                        let obj = new newClass(genClassID(), className, classNumber, deptCode, sectionNumber, startTime, days, classBuilding, classRoom);
                        addClassToUser(obj)
                        //window.location.reload();
                        React.forceUpdate();
                    }}
                    enabled={className && classNumber && deptCode && sectionNumber && startTime && (classDaysMon || classDaysTues || classDaysWed || classDaysThurs || classDaysFri || classDaysSat)}
                    to={``}
                    text="Add Class"
                />
                </div>
      </div>
  </div>
  </div>
  </React.Fragment>
    )
}