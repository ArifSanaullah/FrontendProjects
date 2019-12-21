var grades = [10, 20, 30, 40, 50];
var passGrade = 65;
var passed = Boolean;
for (let i = 0; i < grades.length; i++) {
    if (grades[i]>=passGrade) {
        passed = true;
    }
    else {
        passed = false;
        break;
    }
if (passed = true) {
    console.log("You are passed");
}
else if (passed =  false) {
    console.log("You are failed");
}
}