console.log("button" + 5);

for (let i = 1; i <= 9; i++) {
    let dupa = "button" + i;
    document.getElementById(dupa).addEventListener("click", function(){
        document.getElementById(dupa).style.backgroundColor = 'red';
    })
}