/*
1)Butonun bir olay dinleyici dinlenilmesi gerceklestirilir.
2)Butonun dinleyicisine olay halledicisi ekliyorum.
2.1)main elemanina animation klasinin eklenmesini/cikarilmasini geceklestir.
*/

//dom agacinda hali hazirda olusturulmus olan BUTTON nesnesine ulas
const button = document.querySelector("trigger-animation");

//butona dinleyici ekle
button.addEventListener("click", function(){

    //dom daki main elemanina ulas
    const main = document.querySelector("#container");

    //main tagina "animation" klasini ekle
    main.classList.toggle("animation");

    const randomnumberContainer = document.querySelector("#random-number");
    const randomnumber = Math.random();
    randomnumberContainer.innerHTML = randomNumber;

})