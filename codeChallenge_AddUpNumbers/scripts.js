function addUp(number){
    var current = 0;
    var max = 1000;
    var count = 1;

    while (count <= number && current <= max){
        current += count;
        count++;
        if(current > max)
            break;
        console.log(current);
    }
}
addUp(100);
