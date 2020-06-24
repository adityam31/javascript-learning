const para = document.querySelector('p');
const buttons = document.querySelectorAll('button');

para.addEventListener('click', updateName);

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', addPara);
}

function updateName(){
    let name = prompt("Enter Name - ");
    para.textContent = "Player Name : "+name;
}

function addPara(){
    let strVal = para.textContent;
    let arrSplit = strVal.split(" ");
    let name = arrSplit[3];

    document.body.append(document.createElement('br'));
    document.body.append("Hello "+ name + "!");
    //Another way - 
    
    // let newSpan = document.createElement('span');    //span or para whatever
    // newSpan.textContent = "Hello "+ name + "!";

    // document.body.appendChild(document.createElement('br'));
    // document.body.appendChild(newSpan);
}