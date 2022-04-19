import $ from "jquery";

export default function parseCalendar(url){
    return new Promise(function (resolve, reject) {
    //console.log(url);
    //var url = "https://www.uml.edu/registrar/calendars/2021-fall-undergrad.aspx";
    $.get('https://api.allorigins.win/get?url=' + encodeURIComponent(url) + '&callback=?', function(data){
        var tmp = document.getElementById("txt").innerHTML;
        document.getElementById("txt").innerHTML += "inserting" + data;
        var stack = [];

        $("table > tbody > tr").each(function () {
            stack.push([$(this).find('th').eq(0).text(), $(this).find('td').eq(0).text(), closedFlag($(this).find('td').eq(0).text()), mondayFlag($(this).find('td').eq(0).text())]);

        });
        document.getElementById("txt").innerHTML = tmp;
        //console.log(stack);
        localStorage.setItem("calendarKey", JSON.stringify(stack))
        //console.log(stack)
        resolve(stack);
    });
    });
}

function closedFlag(theString){
    if (theString.includes("university closed")) {
        return true
    }
    return false
}

function mondayFlag(theString){
    if (theString.includes("Monday Class Schedule") || theString.includes("Monday class schedule")){
        return true
    }
    return false
}