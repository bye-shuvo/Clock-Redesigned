let hands = document.getElementsByClassName("hand");
let boxes = document.getElementsByClassName("box");
let Hindex, Mindex, Sindex;
let color;
setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let Hhand = ((30 * hour) + (minute / 2) + (second / 120));
    let Mhand = ((6 * minute) + (second / 10));
    let Shand = (6 * second);

    hands[0].style.transform = `rotate(${Hhand}deg)`;
    hands[1].style.transform = `rotate(${Mhand}deg)`;
    hands[2].style.transform = `rotate(${Shand}deg)`;

    Hindex = hour;
    if(hour > 12){
        Hindex -= 13;
        boxes[Hindex].style.color = "aqua";
    }
    else{
        boxes[Hindex].style.color = "aqua";
    }

    Mindex = minute;

    switch(Mindex){
        case 5:{
            boxes[0].style.color = "lime";
            color = 0;
            break;
        }
        case 10:{
            boxes[1].style.color = "lime";
            color = 1;
            break;
        }
        case 15:{
            boxes[2].style.color = "lime";
            color = 2;
            break;
        }
        case 20:{
            boxes[3].style.color = "lime";
            color = 3;
            break;
        }
        case 25:{
            boxes[4].style.color = "lime";
            color = 4;
            break;
        }
        case 30:{
            boxes[5].style.color = "orange";
            color = 5;
            break;
        }
        case 35:{
            boxes[6].style.color = "lime";
            color = 6;
            break;
        }
        case 40:{
            boxes[7].style.color = "lime";
            color = 7;
            break;
        }
        case 45:{
            boxes[8].style.color = "lime";
            color = 8;
            break;
        }
        case 50:{
            boxes[9].style.color = "lime";
            color = 9;
            break;
        }
        case 55:{
            boxes[10].style.color = "lime";
            color = 10;
            break;
        }
        case 0:{
            boxes[11].style.color = "lime";
            color = 11;
            break;
        }
    }

    setTimeout(()=>{
        boxes[color].style.color = "White";
        boxes[color].style.transform = "scale(1)";
    },2000)
    
    Sindex = second;

    switch(Sindex){
        case 5:{
            boxes[0].style.color = "orange";
            boxes[0].style.transform = "scale(1.2)";
            color = 0;
            break;
        }
        case 10:{
            boxes[1].style.color = "orange";
            boxes[1].style.transform = "scale(1.2)";
            color = 1;
            break;
        }
        case 15:{
            boxes[2].style.color = "orange";
            boxes[2].style.transform = "scale(1.2)";
            color = 2;
            break;
        }
        case 20:{
            boxes[3].style.color = "orange";
            boxes[3].style.transform = "scale(1.2)";
            color = 3;
            break;
        }
        case 25:{
            boxes[4].style.color = "orange";
            boxes[4].style.transform = "scale(1.2)";
            color = 4;
            break;
        }
        case 30:{
            boxes[5].style.color = "orange";
            boxes[5].style.transform = "scale(1.2)";
            color = 5;
            break;
        }
        case 35:{
            boxes[6].style.color = "orange";
            boxes[6].style.transform = "scale(1.2)";
            color = 6;
            break;
        }
        case 40:{
            boxes[7].style.color = "orange";
            boxes[7].style.transform = "scale(1.2)";
            color = 7;
            break;
        }
        case 45:{
            boxes[8].style.color = "orange";
            boxes[8].style.transform = "scale(1.2)";
            color = 8;
            break;
        }
        case 50:{
            boxes[9].style.color = "orange";
            boxes[9].style.transform = "scale(1.2)";
            color = 9;
            break;
        }
        case 55:{
            boxes[10].style.color = "orange";
            boxes[10].style.transform = "scale(1.2)";
            color = 10;
            break;
        }
        case 0:{
            boxes[11].style.color = "orange";
            boxes[11].style.transform = "scale(1.2)";
            color = 11;
            break;
        }
    }

    setTimeout(()=>{
        boxes[color].style.color = "White";
        boxes[color].style.transform = "scale(1)";
    },2000)

}, 1000)