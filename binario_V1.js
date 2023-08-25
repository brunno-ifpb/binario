
const converterBtn = document.getElementById("codficar");
const desconverterBtn = document.getElementById("decodficar");
const input_text = document.getElementById("pesquisa1");
const input_binary = document.getElementById("pesquisa2");
const tecla_pres = document.addEventListener("keydown", teclaPressionada);

converterBtn.addEventListener("click", () => {
    const input_text = document.getElementById("pesquisa1").value;
    console.log(textToBinary(input_text));

    const text = document.getElementById("pesquisa1");
    text.value = "";
})


input_text.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        const input_text = document.getElementById("pesquisa1").value;
        console.log(textToBinary(input_text));
    
        const text = document.getElementById("pesquisa1");
        text.value = "";
    
    }
});

input_binary.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        const input_binario = document.getElementById("pesquisa2").value.split(" ").join("");
        console.log(binaryToText(input_binario));

        const binario = document.getElementById("pesquisa2");
        
        binario.value = "";


    } else {
        window.alert("O valor inserido não é um binário \nTente novamente");
    }
});


desconverterBtn.addEventListener("click", () => {
    const input_binario = document.getElementById("pesquisa2").value.split(" ").join("");

    if (analise_binario(input_binario)) {
        console.log(binaryToText(input_binario));

        const binario = document.getElementById("pesquisa2");
        binario.value = "";

    } else {
        window.alert("O valor inserido não é um binário \nTente novamente");
    }
})

function analise_binario(str) {
    return /^[01]+$/.test(str);
}

function binaryToText(binary) {
    let text = "";
    for (let i = 0; i < binary.length; i += 8) {
        const byte = binary.substr(i, 8);
        const decimalValue = parseInt(byte, 2);
        const char = String.fromCharCode(decimalValue);
        text += char;
    }
    input_text.value = text;
    return text;
}

function textToBinary(text) {
    let binary = "";
    for (let i = 0; i < text.length; i++) {
        const bin = text[i].charCodeAt(0).toString(2);
        binary += Array(8 - bin.length + 1).join("0") + bin;
        binary += " ";
        // Adiciona um espaço a cada conjunto de 8 dígitos
    }
    input_binary.value = binary;
    return binary;
}

function teclaPressionada(event) {
    if (event.key === "q" || event.key === "Q") {
        executarConversao();
    }
}
