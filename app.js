let input = document.querySelector('.input_search');
let search = document.querySelector('.searchButton'); 


let toggler = false;


function searchForItem() { 
    if(!toggler) {   
        search.innerHTML = '<i class="fas fa-times"></i>'
        input.style.transform = "translateY(0%)"
        search.style.backgroundColor="#333" 
        toggler = !toggler; 
     }else { 
        search.innerHTML = '<i class="fas fa-search"></i>' 
        input.style.transform = "translateY(150%)"
        search.style.backgroundColor="#f2f2f2" 
        toggler = !toggler;
     } 
}