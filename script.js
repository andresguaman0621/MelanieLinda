// Muestra una alerta inicial
alert('A ver MELAAA, tengo algo que decirte');
alert('No me gusta para nada verte todo desanimada, sin ganas de nada, con una actitud triste :( ');
alert('Ya se que quizá no sea nada, pero si algo pasa, espero que todo mejore y sabes que me puedes contar conmigo ❤️');
alert('Mela, Tu eres una chica tan alegre, feliz, extrovertida');
alert('Pero sobre todo eres mi mejor amiga y te quiero un monton Melis');
alert('ENTONCES...');

// Pregunta
var pregunta = document.createElement('div');
pregunta.id = 'pregunta';
pregunta.textContent = '¿YA NO VAS A ESTAR BRAVITA?';
document.body.appendChild(pregunta);

// Botón NO
var botonNo = document.createElement('button');
botonNo.id = 'botonNo';
botonNo.textContent = 'NO, YA ESTOY BIEN';
botonNo.addEventListener('click', function() {
    // Muestra una alerta al hacer clic en NO
    alert('Muy bien, eue estes teniendo un lindo dias MELA, cuidate');
});
document.body.appendChild(botonNo);

// Botón SI
var botonSi = document.createElement('button');
botonSi.id = 'botonSi';
botonSi.textContent = 'SI, ANDO DESANIMADA';
document.body.appendChild(botonSi);

// Función para mover el botón SI
function positionButton() {
    var bodyRect = document.body.getBoundingClientRect();
    var botonSiRect = botonSi.getBoundingClientRect();
    var x = Math.random() * (bodyRect.width - botonSiRect.width);
    var y = Math.random() * (bodyRect.height - botonSiRect.height);

    botonSi.style.left = x + 'px';
    botonSi.style.top = y + 'px';
}

// Añade un evento de movimiento del ratón al botón SI
botonSi.addEventListener('mouseover', function() {
    // Mueve el botón SI cuando el ratón está sobre el botón SI
    positionButton();
});
