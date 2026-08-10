
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

    let i = 0;

    while(i < carArr.length){

        let foto_veiculo = document.getElementById(`compare_image_${i}`);
        foto_veiculo.innerHTML = `<img src="${carArr[i].image}" alt="${carArr[i].nome}">`

        let modelo_veiculo = document.getElementById(`compare_modelo_${i}`);
        modelo_veiculo.innerHTML = `<p>${carArr[i].nome}</p>`

        let alturaCacamba_veiculo = document.getElementById(`compare_alturacacamba_${i}`);
        alturaCacamba_veiculo.innerHTML = `<p>${carArr[i].alturaCacamba} mm</p>`

        let alturaVeiculo_veiculo = document.getElementById(`compare_alturaveiculo_${i}`);
        alturaVeiculo_veiculo.innerHTML = `<p>${carArr[i].alturaVeiculo} mm</p>`

        let alturaSolo_veiculo = document.getElementById(`compare_alturasolo_${i}`);
        alturaSolo_veiculo.innerHTML = `<p>${carArr[i].alturaSolo} mm</p>`

        let capacidadeCarga_veiculo = document.getElementById(`compare_capacidadecarga_${i}`);
        capacidadeCarga_veiculo.innerHTML = `<p>${carArr[i].capacidadeCarga} Kg</p>`

        let motor_veiculo = document.getElementById(`compare_motor_${i}`);
        motor_veiculo.innerHTML = `<p>${carArr[i].motor} L</p>`

        let potencia_veiculo = document.getElementById(`compare_potencia_${i}`);
        potencia_veiculo.innerHTML = `<p>${carArr[i].potencia} cv</p>`

        let volumeCacamba_veiculo = document.getElementById(`compare_volumecacamba_${i}`);
        volumeCacamba_veiculo.innerHTML = `<p>${carArr[i].volumeCacamba} L</p>`

        let roda_veiculo = document.getElementById(`compare_roda_${i}`);
        roda_veiculo.innerHTML = `<p>${carArr[i].roda}</p>`

        let preco_veiculo = document.getElementById(`compare_preco_${i}`);
        preco_veiculo.innerHTML = `<p>R$ ${carArr[i].preco.toLocaleString('pt-BR')}</p>`

        i++;
    }
}
