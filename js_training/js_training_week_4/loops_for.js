/**
 * begin
 * condition
 * body
 * step
 */

for(let i=0; i<=10 ; i++){
    document.write("<li style='color:red'>" +i);
    document.getElementById("id").innerHTML= i;
    console.log(i);
}

u=0;
for(u=0; u<=10 ; u++){
    document.write("<li style='color:red'>" +u);
    document.getElementById("id").innerHTML= u;
    console.log(u);
}

//1 ile 200 arasindaki 3 e 5 e tam bölunebilen sayilari liste halinde gösteriniz

for(let i=1; i<200; i++){
    if(i%3 == 0 && i %5 == 0){
        document.write("<li>" + i);
    }
}

for(let i=1; i<200; i++){
    if(i%3 == 0 || i %5 == 0){
        document.write("<li>" + i);
    }
}



