/**
 * ilk asamada kullanicidan 3 adet sayi girilmesi isteniyor,
 * ikinci asamada kullanicinin girisini yaptigi sayilarin matematiksel degerlerine ulasiyoruz, 
 * ücüncü olark girilen bu sayilarin matematiksel degerlerinin karsilastirilmasi yapiliyor,
 * Karsilastirilmasi yapilan sayilardan en büyügü en solda olacak sekilde, sayilar büyükten kücüge siralaniyor,
 * son olarak sayfaya ve console ekranina cikan siralama yazdiriliyor**/

//function structure was created

function PushButton()
{

var a = document.getElementById("number-1").value;
var b = document.getElementById("number-2").value;
var c = document.getElementById("number-3").value;

var dizi = new Array(a, b, c);
document.write(dizi.sort(function(a,b){return b-a}));
console.log(dizi);

}
