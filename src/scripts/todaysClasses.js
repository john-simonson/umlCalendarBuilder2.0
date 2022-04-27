export default function todaysClasses(classes, calendar, Date){
    //console.log(calendar);
    var tmpTxt;
    let date = Date
    let testString = date.toLocaleDateString('en', { weekday: 'long' });
    for(var i=0; i < calendar.length; i++){
        if(calendar[i][0] === date.toLocaleString('default', {month:'long'}) + " " + date.getDate()){
            tmpTxt = calendar[i][1];
            tmpTxt = tmpTxt.replace(/\\n/g," ");
            //console.log(tmpTxt);
            if(calendar[i][2] === true){
                testString = "Made Up Day";
            }
            if(calendar[i][3] === true){
                testString = "Monday";
            }
        }
    }
    return [testString, tmpTxt];
}