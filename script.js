const monthNameEl = document.getElementById("mont-name");
const dayNameEl = document.getElementById("day-name");
const daynumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");
const horas = document.getElementById("tempo-hr");
const minutos = document.getElementById("tempo-min");
const segundos = document.getElementById("tempo-sec");

const date = new Date()

// Pegando o nome do Mês
monthNameEl.innerHTML = date.toLocaleString("pt-br", {
    month: "long"
})

// Pegando o Nome da semana
dayNameEl.innerHTML = date.toLocaleString("pt-br", {
    weekday: "long"
})

// Pegando o dia do mês
daynumberEl.innerHTML = date.toLocaleDateString("pt-br", {
    day: "numeric"
})

// Pegando o Ano
yearEl.innerHTML = date.getFullYear()

// Pegando o Horário Atual
const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = `0${hr}`
    if (min < 10) min = `0${min}`
    if (sec < 10) sec = `0${sec}`

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
});