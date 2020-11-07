
var i, j, printme;
for (i = 1; i <= 6; i++){
    for(j = 1; j < i; j++){
        printme = printme + ("*");
    }
    console.log(printme);
    printme = '';
}