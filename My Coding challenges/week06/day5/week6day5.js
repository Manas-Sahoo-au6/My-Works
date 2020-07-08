var i = 1;
var attendencePercent;
while (i <= 2) {
    attendancePercent.push(
        window.prompt("please enter the attendence percentage of the student :-  ")
    );

    i = i + 1;
}
var stipend = [5000, 3500, 2000, 500];
if (attendencePercent < 100) {
    if (attendencePercent <= 100 && attendencePercent > 80) {
        console.log(
            " attendendece " +
            " : " +
            attendencePercent +
            " , " +
            "stipende : " +
            stipend[0]
        );
    } else if (attendencePercent <= 80 && attendencePercent > 60) {
        console.log(
            " attendendece " +
            " : " +
            attendencePercent +
            " , " +
            "stipende : " +
            stipend[1]
        );
    } else if (attendencePercent <= 60 && attendencePercent > 40) {
        console.log(
            " attendendece " +
            " : " +
            attendencePercent +
            " , " +
            "stipende : " +
            stipend[2]
        );
    } else if (attendencePercent <= 40) {
        console.log(
            " attendendece " +
            " : " +
            attendencePercent +
            " , " +
            "stipende : " +
            stipend[3]
        );
    }
} else {
    alert("invalid");
}
