/*
1)Sayfadaki "Ekle" butonuna basildiginda, input alaninda olan bilgi javascript e (memory) e alinir.
2)Alinan bu bilgi "ul" tagina "li" elemani olarak eklenecek. 

/*Bilgi girdisini alabilecegimi elemana DOM vasitasi ile ulasiyorum. */

let inputAlani = document.querySelector("#todo-entry");
let buttonDugmesi = document.querySelector("#todo-add-trigger");

buttonDugmesi.addEventListener("click",function(){
    let todoList = document.querySelector("#todo-list")

    let node = document.createElement("li");
    let textnode = document.createTextNode(inputAlani.value);
    node.appendChild(textnode);
    todoList.appendChild(node);


    /*Girdi Alanini Temizle */
    inputAlani.value="";

});

/* 
-Programlama
-JS Syntax
-DOM Programlama
*/

