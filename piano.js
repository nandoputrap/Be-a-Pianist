let tuts = document.querySelectorAll(".tuts");

for(let i = 0;i<8;i++){
    tuts[i].addEventListener("click", () =>{
        if(i === 0){
            audio = new Audio("sounds/1 do.wav");
            tuts[0].classList.add("clicked");
            setTimeout(function(){ 
                tuts[0].classList.remove("clicked");
            }, 100);
            // audio.addEventListener("ended", () => {
            //     tuts[0].classList.remove("clicked");
            // }); end ketika suara berhenti
        }else if(i === 1){
            audio = new Audio("sounds/2 re.wav");
            tuts[1].classList.add("clicked");
            setTimeout(function(){ 
                tuts[1].classList.remove("clicked");
            }, 100);
        }else if(i === 2){
            audio = new Audio("sounds/3 mi.wav");
            tuts[2].classList.add("clicked");
            setTimeout(function(){ 
                tuts[2].classList.remove("clicked");
            }, 100);
        }else if(i === 3){
            audio = new Audio("sounds/4 fa.wav");
            tuts[3].classList.add("clicked");
            setTimeout(function(){ 
                tuts[3].classList.remove("clicked");
            }, 100);
        }else if(i === 4){
            audio = new Audio("sounds/5 sol.wav");
            tuts[4].classList.add("clicked");
            setTimeout(function(){ 
                tuts[4].classList.remove("clicked");
            }, 100);
        }else if(i === 5){
            audio = new Audio("sounds/6 la.wav");
            tuts[5].classList.add("clicked");
            setTimeout(function(){ 
                tuts[5].classList.remove("clicked");
            }, 100);
        }else if(i === 6){
            audio = new Audio("sounds/7 si.m4a");
            tuts[6].classList.add("clicked");
            setTimeout(function(){ 
                tuts[6].classList.remove("clicked");
            }, 100);
        }else{
            audio = new Audio("sounds/8 do.wav");
            tuts[7].classList.add("clicked");
            setTimeout(function(){ 
                tuts[7].classList.remove("clicked");
            }, 100);
        }
        audio.play();
    });
}

document.addEventListener("keydown", e =>{
    if(e.key === "1"){
        audio = new Audio("sounds/1 do.wav");
        tuts[0].classList.add("clicked");
        setTimeout(function(){ 
            tuts[0].classList.remove("clicked");
        }, 100);
    }else if(e.key === "2"){
        audio = new Audio("sounds/2 re.wav");
        tuts[1].classList.add("clicked");
        setTimeout(function(){ 
            tuts[1].classList.remove("clicked");
        }, 100);
    }else if(e.key === "3"){
        audio = new Audio("sounds/3 mi.wav");
        tuts[2].classList.add("clicked");
        setTimeout(function(){ 
            tuts[2].classList.remove("clicked");
        }, 100);
    }else if(e.key === "4"){
        audio = new Audio("sounds/4 fa.wav");
        tuts[3].classList.add("clicked");
        setTimeout(function(){ 
            tuts[3].classList.remove("clicked");
        }, 100);
    }else if(e.key === "5"){
        audio = new Audio("sounds/5 sol.wav");
        tuts[4].classList.add("clicked");
        setTimeout(function(){ 
            tuts[4].classList.remove("clicked");
        }, 100);
    }else if(e.key === "6"){
        audio = new Audio("sounds/6 la.wav");
        tuts[5].classList.add("clicked");
        setTimeout(function(){ 
            tuts[5].classList.remove("clicked");
        }, 100);
    }else if(e.key === "7"){
        audio = new Audio("sounds/7 si.m4a");
        tuts[6].classList.add("clicked");
        setTimeout(function(){ 
            tuts[6].classList.remove("clicked");
        }, 100);
    }else if(e.key === "8"){
        audio = new Audio("sounds/8 do.wav");
        tuts[7].classList.add("clicked");
        setTimeout(function(){ 
            tuts[7].classList.remove("clicked");
        }, 100);
    }
    audio.play();
});