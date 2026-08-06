

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(image, title, url){
        this.image = image;
        this.title = title;
        this.url = url;

    }
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        
        let carroAgora = carouselArr[Carousel._sequence];

        let divCarousel = document.getElementById("carousel");
        
        divCarousel.innerHTML = `<img src="img/${carroAgora.image}" alt="${carroAgora.title}">`;

        let divcarouselTitle = document.getElementById("carousel-title");

        divcarouselTitle.innerHTML = `<a href="${carroAgora.url}">${carroAgora.title}</a>`;

        Carousel._sequence++;

        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }

    }

    static voltar(){

        Carousel._sequence -= 2;

        if (Carousel._sequence < 0) {
            Carousel._sequence += Carousel._size;
        }

        Carousel.Next();        
    }
};

function passar(){
    Carousel.Next();
}

function voltar(){
    Carousel.voltar();
}


