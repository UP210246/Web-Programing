const btn = document.getElementById('btn');
const container = document.getElementById('container-users');

btn.addEventListener('click', () => {
    container.innerHTML = " ";

    getUsers((users) =>{
        const ul = document.createElement('ul');

        for(let i = 0; i < users.length; i++){
            const li = document.createElement('li');
            const btnli = document.createElement('button');

            btnli.innerText = "Get user info";
            li.innerText = users[i].name;
            li.appendChild(btnli);
            ul.appendChild (li);


            btnli.addEventListener('click',() =>{
                const id = users[i].id;
                console.log(id)

                getinfo (id,(info) =>{
                    console.log(info)
                    const ol = document.createElement('ol');
                    ol.innerHTML = `
                    <li> ${info.fullname} </li>
                    <li> ${info.birthday} </li>
                    `;

                    li.appendChild(ol);
                });
            });
        }
        container.appendChild(ul);
    });
});

function getUsers(callback){
    const time = (Math.floor(Math.random() * 5)+ 1)*1000;
    setTimeout(() => {
        const users = [
            {id: 1, name : "Rogelio", year : 22},
            {id: 2, name : "Saul", year : 30}
        ];

    callback(users);
    },time);
}

function getinfo(id, callback){
    const time = (Math.floor(Math.random() * 5)+ 1)*1000;

    setTimeout(() => {
        const usersinfo = [
            {id:1, iduser:2, fullname: "Saul Perez", birthday: "1997-02-10"},
            {id:2, iduser:1, fullname: "Rogelio Trejo", birthday: "2001-03-24"}
        ];


    const userfindinfo = usersinfo.find(user => {
        return user.iduser === id
    });

    callback(userfindinfo);
    },time);
}




