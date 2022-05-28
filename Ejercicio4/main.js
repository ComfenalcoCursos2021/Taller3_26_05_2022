// Realizar un programa de procesos en el que se almacenen 
// 3 números en 3 variables A, B y C. El diagrama debe decidir 
// cual es el mayor y cual es el menor

let lista = [
    { name: 'A', value: 5 },
    { name: 'B', value: 5 },
    { name: 'C', value: 4 }
];
let bM = true, bm= true;
lista.sort((a, b)=>{
    console.log(a);
    console.log(b);
    if (a.value > b.value) {
        
        return 1;
    }
    if (a.value < b.value) {
        return -1;
    }
    return 0;
});

if(lista[lista.length-1].value == lista[lista.length-2].value){
    console.log("Iguales Mayor", lista[lista.length-1].name, lista[lista.length-2].name);
    bM = false;
}else if(lista[0].value == lista[1].value){
    console.log("Iguales Menores", lista[0].name, lista[1].name);
    bm = false;
}
if(bM){
    console.log("Mayor ",lista[lista.length-1].name);
}
if(bm){
    console.log("Menor ",lista[0].name);
}



// let A=3, B=1, C=3;

// let lista = [];
// lista.push(A, B, C);

// alert(Math.max(...lista));
// alert(Math.min(...lista));

// lista = lista.sort((P,S) => P - S);
// if(lista[lista.length-1] == lista[lista.length-2]){
//     console.log(lista[lista.length-1], lista[lista.length-2]);
// }else{
//     console.log(lista[lista.length-1]);
// }
// console.log(lista[0]);


// if(A>=B && A>=C){
//     if(A==B){
//         alert("A B");
//     }else if(A==C){
//         alert("A C");
//     }else{
//         alert("A");
//     }
// }else if(B>=A && B>=C){
//     if(B==A){
//         alert("B A");
//     }else if(B==C){
//         alert("B C");
//     }else{
//         alert("B");
//     }
// }else{
//     if(C==A){
//         alert("C A");
//     }else if(C==B){
//         alert("C B");
//     }else{
//         alert("C");
//     }
// }


// if(A<=B && A<=C){
//     if(A==B){
//         alert("A B");
//     }else if(A==C){
//         alert("A C");
//     }else{
//         alert("A");
//     }
// }else if(B<=A && B<=C){
//     if(B==A){
//         alert("B A");
//     }else if(B==C){
//         alert("B C");
//     }else{
//         alert("B");
//     }
// }else{
//     if(C==A){
//         alert("C A");
//     }else if(C==B){
//         alert("C B");
//     }else{
//         alert("C");
//     }
// }