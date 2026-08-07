
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;  
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            if(carArr.length >= 2){
                alert("So é permitido marcar apenas 2 veiculos!")
                el.checked = false;
                return

            } else {
                if(GetCarArrPosition(carArr , carClass) === -1){
                    carArr.push(carClass);
                } 
            }
            
        } else {

            let apagaCarro = GetCarArrPosition(carArr , carClass);
            if (apagaCarro !== -1){
                carArr.splice(apagaCarro , 1)
            }         
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    let carro1 = carArr[0];
    let carro2 = carArr[1];

    let image = document.getElementById("compare_image_0")
    image.innerHTML = `<img src="${carro1.image}" alt="${carro1.nome}" width="80%">`
    let image2 = document.getElementById("compare_image_1")
    image2.innerHTML = `<img src="${carro2.image}" alt="${carro2.nome}" width="80%">`

    let nome = document.getElementById("compare_modelo_0")
    nome.innerHTML = `<p>${carro1.nome}</p>`
    let nome2 = document.getElementById("compare_modelo_1")
    nome2.innerHTML = `<p>${carro2.nome}</p>`

    let alturaCacamba = document.getElementById("compare_alturacacamba_0")
    alturaCacamba.innerHTML = `<p>${carro1.alturaCacamba} mm</p>`
    let alturaCacamba2 = document.getElementById("compare_alturacacamba_1")
    alturaCacamba2.innerHTML = `<p>${carro2.alturaCacamba} mm</p>`

    let alturaVeiculo = document.getElementById("compare_alturaveiculo_0")
    alturaVeiculo.innerHTML = `<p>${carro1.alturaVeiculo} mm</p>`
    let alturaVeiculo2 = document.getElementById("compare_alturaveiculo_1")
    alturaVeiculo2.innerHTML = `<p>${carro2.alturaVeiculo} mm</p>`

    let alturaSolo = document.getElementById("compare_alturasolo_0")
    alturaSolo.innerHTML = `<p>${carro1.alturaSolo} mm</p>`
    let alturaSolo2 = document.getElementById("compare_alturasolo_1")
    alturaSolo2.innerHTML = `<p>${carro2.alturaSolo} mm</p>`

    let capacidadeCarga = document.getElementById("compare_capacidadecarga_0")
    capacidadeCarga.innerHTML = `<p>${carro1.capacidadeCarga} Kg</p>`
    let capacidadeCarga2 = document.getElementById("compare_capacidadecarga_1")
    capacidadeCarga2.innerHTML = `<p>${carro2.capacidadeCarga} Kg</p>`

    let motor = document.getElementById("compare_motor_0")
    motor.innerHTML = `<p>${carro1.motor} L</p>`
    let motor2 = document.getElementById("compare_motor_1")
    motor2.innerHTML = `<p>${carro2.motor} L</p>`

    let potencia = document.getElementById("compare_potencia_0")
    potencia.innerHTML = `<p>${carro1.potencia} cv</p>`
    let potencia2 = document.getElementById("compare_potencia_1")
    potencia2.innerHTML = `<p>${carro2.potencia} cv</p>`

    let volumeCacamba = document.getElementById("compare_volumecacamba_0")
    volumeCacamba.innerHTML = `<p>${carro1.volumeCacamba} L</p>`
    let volumeCacamba2 = document.getElementById("compare_volumecacamba_1")
    volumeCacamba2.innerHTML = `<p>${carro2.volumeCacamba} L</p>`

    let roda = document.getElementById("compare_roda_0")
    roda.innerHTML = `<p>${carro1.roda}</p>`
    let roda2 = document.getElementById("compare_roda_1")
    roda2.innerHTML = `<p>${carro2.roda}</p>`

    let preco = document.getElementById("compare_preco_0")
    preco.innerHTML = `<p>R$ ${carro1.preco}</p>`
    let preco2 = document.getElementById("compare_preco_1")
    preco2.innerHTML = `<p>R$ ${carro2.preco}</p>`

    

}
