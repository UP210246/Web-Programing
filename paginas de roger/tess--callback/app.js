console.log("This is working!!!");

function sum(a , b ){
    return a + b ;
}

function suma2numeros(callback){
    const resultadoSuma = sum(1,2);
    callback(resultadoSuma);

}

suma2numeros(function(valor){
    console.log(valor);
});


const button = document.getElementById('btn');
const container = document.getElementById('container'); 

button.addEventListener('click', function(){
    getUsers()
        .then(function(json){
            const ul = document.createElement('ul');
            console.log(json.usuarios);

            for (let i = 0; info < json.usuarios.length; i++) {
                const li = document.createElement('li');
                li
              li.innerText = json.usuarios[i].name;
              ul.appendChild(li);
            }

            container.appendChild(ul);
            console.log(json.usuarios);
        });
});


function getUsers(){
    fetch("http://127.0.0.1:5500/info.json")
    .then(function(response){
        return response.arrayBuffer;
    })
    .then(function(text){
        console.log("");
    });
}

button.addEventListener('click', function (){
    getUsers();
});

