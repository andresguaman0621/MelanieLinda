// Muestra una alerta inicial
alert('MELAAAAAA 🥹');
alert('De mi parte, siento mucho si te hice desanimar o te hice sentir mal, no hay excusas😞');
alert('Pero, si te digo que estas brava, no es por joderte. Solo que no me gusta verte así, siento que algo malo te pasó 🤧');
alert('Igual se que uno no siempre puede estar bien, y si algún día ocupas algo. YO ESTOY 25/8🫡 porque me importas');
alert('Como decía, eres de las pocas personas que quisiera tener siempre presente. A mis ojos eres una chica que no cualquiera se merece tu amistad🫶🏻');
alert('En la vida, he tenido esa confianza y timing para conversar de cualquier huevada con una personita 🐝');
alert('Te considero mi mejor amistad (il mio migliore amico)🤌🏻');


// Pregunta
var pregunta = document.createElement('div');
pregunta.id = 'pregunta';
pregunta.textContent = 'LO SIENTO ¿PODEMOS ESTAR BIEN?';
document.body.appendChild(pregunta);

// Botón NO
var botonNo = document.createElement('button');
botonNo.id = 'botonNo';
botonNo.textContent = 'SI ANDRESITO BELLO';
botonNo.addEventListener('click', function() {
    // Muestra una alerta al hacer clic en NO
    alert('Muy linda tu respuesta jeje, que tengas un lindo día mi doctora favorita 🦷');
});
document.body.appendChild(botonNo);

// Botón SI
var botonSi = document.createElement('button');
botonSi.id = 'botonSi';
botonSi.textContent = 'NO CHAO';
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
