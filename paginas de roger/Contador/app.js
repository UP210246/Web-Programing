let containerclicks = document.getElementById('container-clicks');
let btnIncrement = document.querySelector('.btn-primary');
let btnDecrement = document.querySelector('.btn-secondary');
let btnReset = document.querySelector('.btn-reset');
let count = 0 ;

document.addEventListener('DomContentLoaded'), ()=>
{
    containerclicks.innerText = count;
    
btnIncrement,addEventListener("click",function(){
    count++;
    containerclicks.innerText = count;
});

btnDecrement.onclick = function(){
    if(count > 0)
    {
    count--;
    containerclicks.innerText = count;
    }
    else {
        alert("El contador es 0");
    }
};

btnReset.addEventListener("click", function () {
    count = 0;
    containerclicks.innerText = count;
});
    
}




;

console.log(btnIncrement);

//document.getElementById('container-clicks').style.backgroundColor="#000"
//containerclicks.style.color = "#fff";
//containerclicks.style.backgroundColor="#000"

//DOMContentloaded