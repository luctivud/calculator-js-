var x;
x = document.querySelector(".screen1");
var y="";
var q;
var s;
var a =0;
var b=0;
var t;

function fromKey(event, t) {
    q = event.key;
    t=t;
    if(q==="Backspace" || t=="Backspace"){
        deletee();
    }
    else if(q=="1" || q=="2" || q=="3" || q=="4" || q=="5" || q=="6" || q=="7" || q=="8" || q=="9" || q=="0"){

        number(q);
    }
    else if(q=="+" || q=="/" || q=="*" || q=="-"){
        s=String(q);
        number(s);
    }
    else if(q=="=" || q=="Enter"){
        result();
    }
    else if(q==undefined){
        number(t);
    }
    else{

    }
};

function number(val){
    y = y + String(val);
    textchanger(y);
};

function result(){
    a=eval(y);
    console.log(a);
    y=String(a);
    textchanger();
    

};

function textchanger(){
    x.textContent = y;
    if(a){
        y="";
        a=0;
    }
};

function deletee(){
    y = y.slice(0,(y.length-1));
    textchanger();
};

function ac(){
    y="";
    textchanger();
};



   