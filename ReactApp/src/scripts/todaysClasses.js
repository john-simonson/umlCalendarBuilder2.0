export default function todaysClasses(classes, calendar){
    //console.log(calendar);
    var tmpTxt;
    let date = new Date();
    let testString = date.toLocaleDateString('en', { weekday: 'long' });
    for(var i=0; i < calendar.length; i++){
        if(calendar[i][0] === date.toLocaleString('default', {month:'long'}) + " " + date.getDate()){
            tmpTxt = calendar[i][1];
            tmpTxt = tmpTxt.replace(/\\n/g," ");
            //console.log(tmpTxt);
            if(calendar === true){
                testString = "Made Up Day";
            }
            if(calendar === true){
                testString = "Monday";
            }
        }
    }
    return [testString, tmpTxt];
}