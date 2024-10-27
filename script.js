const key = "d7fada754c16de9a0e284af4deec08cc";

function colocardados(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".Temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".txt-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".txt-umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
};

async function buscarcidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    colocardados(dados);
};

function clica() {
    const cidade = document.querySelector(".input-cidade").value
    buscarcidade(cidade);
};

const botao = document.getElementById('buscar');

botao.addEventListener('mouseover', function() {
    botao.style.backgroundColor = 'white';
});

botao.addEventListener('mouseout', function() {
    botao.style.backgroundColor = '';
});