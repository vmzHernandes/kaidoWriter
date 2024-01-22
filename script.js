//Fonte
document.body.style.fontFamily = "Montserrat, sans-serif"

// Upload da imagem
let imgUpload = document.getElementById("imagemUpload");
let canvas = document.getElementById("canvas");
let imgContexto = canvas.getContext("2d");
let img = new Image()
let imgOriginalURL = "";

imgUpload.addEventListener("change", function(e) {
    img.src = URL.createObjectURL(e.target.files[0]);
    imgOriginalURL = URL.createObjectURL(e.target.files[0]);
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        imgContexto.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
})

//Adicionar texto
let botaoAdicionaTexto = document.getElementById("adicionaTexto");
botaoAdicionaTexto.addEventListener("click", function() {
    let texto = document.getElementById("texto").value;
    if (texto) {
        imgContexto.font = "64px Montserrat";
        imgContexto.fillStyle = "black";
        imgContexto.fillText(texto, 100, 100);
    }
})

//Apagar texto
let botaoApagaTexto = document.getElementById("apagaTexto");
botaoApagaTexto.addEventListener("click", function() { 
    imgContexto.clearRect(0, 0, canvas.width, canvas.height);
    let imgOriginal = new Image();
    imgOriginal.src = imgOriginalURL;
    imgOriginal.onload = function() {
        imgContexto.drawImage(imgOriginal, 0, 0, canvas.width, canvas.height);
    };
})

//Download da imagem
let botaoDownload = document.getElementById("botaoDownload");
botaoDownload.addEventListener("click", function() {
    let link = document.createElement("a");
    link.download = "imagem-editada.png";
    link.href = canvas.toDataURL("imagem/png");
    link.click();
})