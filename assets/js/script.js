let rightBtn = document.getElementById("right-btn");
let leftBtn = document.getElementById("left-btn");

rightBtn.addEventListener("click", function () {
    let activeCard = document.querySelectorAll(".active");
    console.log(activeCard.length);

    if (activeCard.length < 4){
        return;
    }
    if(activeCard.length == 4){
        if(activeCard[3].nextElementSibling != null){
            activeCard[0].classList.remove("active");
            activeCard[3].nextElementSibling.classList.add("active");
        }
        else{
            return;
        }
    }
});

leftBtn.addEventListener("click", function () {
    let activeCard = document.querySelectorAll(".active");
    console.log(activeCard.length);

    if (activeCard.length < 4){
        return;
    }
    if(activeCard.length == 4){
        if(activeCard[0].previousElementSibling != null){
            activeCard[3].classList.remove("active");
            activeCard[0].previousElementSibling.classList.add("active");
        }
        else{
            return;
        }
    }
});

