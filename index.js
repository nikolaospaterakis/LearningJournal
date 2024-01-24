
const bodyEl = document.querySelector("body")

bodyEl.addEventListener("click", function(e){
    if(e.target.id === "more"){
        document.getElementById("item-4").classList.remove("hidden")
        document.getElementById("item-5").classList.remove("hidden")
        document.getElementById("item-6").classList.remove("hidden")
        document.getElementById("more").classList.add("hidden")
    }
})