

/*alert("merhaba")
const container = document.querySelector("#container")*/

/*
1)varolan html yapisindan "container" adli TAG elemanina ulas
2)Bu elemani bir gecici alana koy
3)BU elemana tiklama esnasinda karsilik verebilmesini sagla
4)Tiklama yapildiginda elemanin style bilgisine ulas
5)Elemanin rengini degitir
6)Elemanin soldan pozisyonunu degistir */

container.addEventListener("click", function(){
    container.style.left= "600px";
    container.style.backroundColor="red";
    })