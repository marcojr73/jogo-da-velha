let player = Math.floor(Math.random() * 10);
let bobby = [1, 2, 3];
let kaspa = [];

function inserirImage(house, number){
    if(player % 2 == 0){
    let image = "bobby.jpeg";
    house.innerHTML = `<img src='./assets/${image}' class = 'img'></img>`;
    player++;
    // bobby.push(number);
    }else{
    let image = "kaspa.jpg";
    house.innerHTML = `<img src='./assets/${image}' class = 'img'></img>`;
    player++;
    kaspa.push(number);
    }
}

// function verificarVencedor(){
//     // for (let i = 0; i < 3; i++){
//         if(bobby == [1, 2, 3]){
//             alert(sett);
//         }
//     // }
// }