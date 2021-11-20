//Console kisminda mantiksal islem

//yas 13'ten kücük mü? o zaman bu sahis cocuktur
//Eger yas 13 ile 21 arasinda ise, bu sahis genctir.
//eger yas 21 ile 35 arasinda ise bu sahis yetiskindir.
//Eger yas 60 üstü ise bu sahis ihtiyardir.

let age = 40;
if(age<0){
    console.log("Lütfen pozitif sayi giriniz");
}else
{

    if(age<13){
        console.log("COCUK");
    }    
    else
    if(age >= 13 && age < 35){
        console.log("GENC");
    }    

    else
    if(age >= 35 && age < 60){
        console.log("ORTA YASLI");
    } 

    else
    if(age >= 60){
        console.log("YASLI");
    }
}








