// Realizar un programa que lea N números, calcule y 
// escriba la suma de los pares y el producto de los impares.
let form = document.querySelector("#input");
let agregar = ()=>{
    form.insertAdjacentHTML("beforeend", `<input type="number"><br>`);
}
form.onsubmit = (e)=>{
    let input = Array.from(e.target);
    let pares = [], impares = [];
    let suma = 0, producto = 1;
    for(let id of input){
        let num = Number(id.value);
        if(id.type != "submit"){
            if(num%2 == 0){
                pares.push(num);
                suma += num;
            }else{
                impares.push(num);
                producto *= num;
            }
        }
    }
    console.table(pares);
    console.log("Suma: ",suma);
    console.table(impares);
    console.log("Multiplacion: ",producto);
    e.preventDefault();
}