/*
1)Butonuna basildiginda olay halledicisi cagrilir
2)Verilen sayi kadar daire body e  otomatik larak eklenir
2.1)Balonlarin yaricaplari rasgele secilir
2.2)Balonlarin renkleri rasgele secilir.
2.3)Balonlarin pozisyonlari rasgele secilir.
*/

//dom agacinda hali hazirda olusturulmus olan BUTTON nesnesine ulas
const button = document.querySelector("trigger-animation");
const toplamBalonSayisi = 10; 
const body = document.body;

//butona dinleyici ekle
button.addEventListener("click", function(){

for(let i=0; i<10; i++){

    document.createElement("div");
    constyariCap = Math.floor(Math.random() * 100 + 30);
    const randomClor = '#'+Math.floor(Math.random()*16777215).toString(16);
    const topPozisyon = Math.floor(Math.random()*600);
    const leftPozisyon = Math.floor(Math.random()*600);

    div.style.left = leftPozisyon + "px";
    div.style.top = topPozisyon + "px";
    div.style.backroundColor = randomColor;
    div.syle.borderRadius = (cap/2) + "px";
    div.style.width = cap + "px";
    div.style.height = cap + "px";

}
 

})