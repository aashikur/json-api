fetch('https://raw.githubusercontent.com/aashikur/json-api/refs/heads/main/hridoy/cards.json')
.then(res=> res.json())
.then(data => myfunction(data.cards));

function myfunction(data){
    console.log(data);
}



