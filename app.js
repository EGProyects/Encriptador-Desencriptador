/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/



// Funcion de encriptacion
function encryptText(text) {
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    return encryptedText;
}

// Funcion de desencriptacion
function decryptText(text) {
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    return decryptedText;
}

// Funcion para copiar el resultado del display
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    }, () => {
        alert('Error al copiar el texto');
    });
}

// Funcion para poner el resultado en el display
function displayResult(result) {
    const rightSection = document.querySelector('.right-section');
    rightSection.innerHTML = '';  // Limpiar contenido previo

    
    const resultParagraph = document.createElement('p');
    resultParagraph.textContent = result;
    rightSection.appendChild(resultParagraph);

    
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copiar';
    copyButton.addEventListener('click', () => copyToClipboard(result));
    rightSection.appendChild(copyButton);
}

document.querySelector('.encrypt').addEventListener('click', () => {
    const inputText = document.querySelector('.input-textarea').value;
    const encryptedText = encryptText(inputText);
    displayResult(encryptedText);
});

document.querySelector('.decrypt').addEventListener('click', () => {
    const inputText = document.querySelector('.input-textarea').value;
    const decryptedText = decryptText(inputText);
    displayResult(decryptedText);
});