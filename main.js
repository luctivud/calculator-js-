var x;
x = document.querySelector(".screen1");
var y;
y="";
var q;
var s;
var val1;
var val2;
var temp;


function fromKey(event) {
    q = event.key;
    console.log(q);
    if(q==="Backspace"){
        deletee();
    }
    else if(q=="1" || q=="2" || q=="3" || q=="4" || q=="5" || q=="6" || q=="7" || q=="8" || q=="9" || q=="0" || q=="+" || q=="-" || q=="*" || q=="/"){
        keyEntry(q);
    }
    else if(q=="+"){
        add();
    }
    else if(q=="/"){
        divide();
    }
    else if(q=="*"){
        multiply();
    }
    else if(q=="-"){
        subtract();
    }
    else if(q=="="){
        result();
    }
    else{
    }


    

};



function zero(){
    y = y + "0";
    audio();
    textchanger();
    
};

function one(){
    y = y + "1";
    textchanger();
};


function two(){
    y = y + "2";
    textchanger();

};

function three(){
    y = y + "3";
    textchanger();

};

function four(){
    y = y + "4";
    textchanger();

};

function five(){
    y = y + "5";
    textchanger();

};

function six(){
    y = y + "6";
    textchanger();

};

function seven(){
    y = y + "7";
    textchanger();

};

function eight(){
    y = y + "8";
    textchanger();

};

function nine(){
    y = y + "9";
    textchanger();

};

function add(){
    val1 = parseInt(y);
    temp = y.length;
    y = y + " + ";
    textchanger();

};

function subtract(){
    val1 = parseInt(y);
    temp = y.length;
    y = y + " - ";
    textchanger();

};

function multiply(){
    val1 = parseInt(y);
    temp = y.length;
    y = y + " * ";
    textchanger();

};

function divide(){
    val1 = parseInt(y);
    temp = y.length;
    y = y + "  / ";
    textchanger();

};
function result(){
    console.log("val 1   " +val1);

    val2 = parseInt(y.slice((temp+3)));
    console.log( "val 2  "+val2);
    console.log("temp   "+temp);
    y = String((val1 + val2));
    textchanger();

}

function textchanger(){
    x.textContent = y;
};

function keyEntry(s){
    y=y + String(s);
    textchanger();
}

function deletee(){
    y = y.slice(0,(y.length-1));
    textchanger();
};

function ac(){
    y="";
    textchanger();
}

function audio(){
    var audio = new Audio('myau.mp3');
    audio.play();
}