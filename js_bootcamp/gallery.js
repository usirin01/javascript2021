/**
 * 
 */

 const mainContainer = document.querySelector("#carouselExampleControls");

 let images = [
    "https://images.unsplash.com/photo-1638091990389-7f4d9bbe8d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",   
    "https://images.unsplash.com/photo-1638369321326-6af6b7a5cdf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",   
    "https://images.unsplash.com/photo-1637978472664-579db27c8b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",   
    "https://images.unsplash.com/photo-1637582177422-2405387d370f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",   
    "https://images.unsplash.com/photo-1638160292949-2bbaec1bf98e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=395&q=80"  
    ];
 
 
 let html = "";
 for(let index = 0; index < images.length; index++)
 {
 
    let row = ""

    if(index == 0){
        row = `
        <div class="carousel-item active">
           <img class="d-block w-100" src="${images[index]}" alt="First slide">
           <p>dali</p>
        </div>
        `;
    }else{
        row = `
        <div class="carousel-item">
           <img class="d-block w-100" src="${images[index]}" alt="First slide">
           <p>dali</p>
        </div>
        `;
    }


     html += row;
 }
 
 
 mainContainer.innerHTML = `
        <div class="carousel-inner">
            ${html}
        </div>`;


 