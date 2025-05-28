let index = 1;
const navigationNexts = document.querySelectorAll(".navigation .next");
const navigationPreviouses = document.querySelectorAll(".navigation .previous");

navigationNexts.forEach((navigationNext)=>{
    navigationNext.addEventListener("click", ()=>{
        document.querySelectorAll(".steps span")[index++].classList.add("checked");
    })
});
navigationPreviouses.forEach((navigationPrevious)=>{
    navigationPrevious.addEventListener("click", ()=>{
        document.querySelectorAll(".steps span")[--index].classList.remove("checked");
    })
});