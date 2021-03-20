//html에서 각각의 함수의 매개변수에 고유 숫자를 넣어 해당 버튼이 클릭되면 해당 고유번호가 전달되고 그것을 통해 고유번호에 맞는 행위를 할 수 있게 됬다.


function div_hide(i) {
    //title = document.getElementById("detail1-1").title
    if (i == 1) {
        document.getElementById("detail1-1").style.display = "none";
    }
    else if(i == 2){
        document.getElementById("detail1-2").style.display = "none";
    }
    else if(i == 3){
        document.getElementById("detail2-1").style.display = "none";
    }
    else if(i == 4){
        document.getElementById("detail2-2").style.display = "none";
    }
    else if(i == 5){
        document.getElementById("detail3-1").style.display = "none";
    }
    else if(i == 6){
        document.getElementById("detail3-2").style.display = "none";
    }
    else if(i == 7){
        document.getElementById("detail4-1").style.display = "none";
    }
    else if(i == 8){
        document.getElementById("detail4-2").style.display = "none";
    }
    }
    

function div_show(i) {
    //title = document.getElementById("detail1-1").title
    if (i == 1) {
        document.getElementById("detail1-1").style.display = "block";
    }
    else if(i == 2){
        document.getElementById("detail1-2").style.display = "block";
    }
    else if(i == 3){
        document.getElementById("detail2-1").style.display = "block";
    }
    else if(i == 4){
        document.getElementById("detail2-2").style.display = "block";
    }
    else if(i == 5){
        document.getElementById("detail3-1").style.display = "block";
    }
    else if(i == 6){
        document.getElementById("detail3-2").style.display = "block";
    }
    else if(i == 7){
        document.getElementById("detail4-1").style.display = "block";
    }
    else if(i == 8){
        document.getElementById("detail4-2").style.display = "block";
    }
    else if(i == 9){
        document.getElementById("video1").style.display = "block";
    }
    }
    
// function div_admin() {
//     if (condition) {
//         document.getElementById("sd").style.display = "block";
//     }
    
//     }