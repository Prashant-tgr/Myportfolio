function addcomment(){
    var com = document.getElementById("user-comment").value;

    if(com == ""){
        alert("Please enter a recommendation")
        return;
    }
    
    let newcomment = document.createElement("div")
    newcomment.classList.add("comment");
    newcomment.textContent = com;
    document.getElementById("commentlist").appendChild(newcomment);

    alert("Thank you for your recommendation");


}
