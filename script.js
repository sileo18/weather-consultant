//371a4f6b13f536664db98aae6dcd7441

let h = document.querySelector('#horas')
let m = document.querySelector('#minutos')
let s = document.querySelector('#segundos')


let dataHora = new Date()

function moveRelogio() {
    let dataAtual = new Date()

    let hora = dataAtual.getHours()
    let minuto = dataAtual.getMinutes()
    let segundos = dataAtual.getSeconds()

    let strHora = hora.toString()
    let strMinuto = minuto.toString()
    let strSegundos = segundos.toString()

    if (strHora.length == 1) {
        strHora = '0' + strHora
    }

    if (strMinuto.length == 1) {
        strMinuto = '0' + strMinuto
    }

    if (strSegundos.length == 1) {
        strSegundos = '0' + strSegundos
    }

    h.innerHTML = strHora
    m.innerHTML = strMinuto
    s.innerHTML = strSegundos

    setTimeout(moveRelogio, 1000)
}



function takeData() {

    let diaSemana = dataHora.getDay()
    let diaEscrito = document.querySelector('#dia-escrito')
    let data = document.querySelector('#data-')
    let dia = dataHora.getDate()     
    let ano = dataHora.getFullYear()
    let mes = dataHora.getMonth() + 1

    let strDia = dia.toString()
    let strMes = mes.toString()

    if (strDia.length == 1) {
        strDia = '0' + strDia
        
    }

    if (strMes.length == 1) {
        strMes = '0' + strMes
    }

    data.innerHTML = `${strDia}/${strMes}/${ano}`

    setTimeout(takeData, 60000)

    switch (diaSemana) {
        case 0:
            diaEscrito.innerHTML = "DOM"
            break;

        case 1:
            diaEscrito.innerHTML = "SEG"
            break;

        case 2:
            diaEscrito.innerHTML = "TER"
            break;

        case 3:
            diaEscrito.innerHTML = "QUA"
            break;

        case 4:
            diaEscrito.innerHTML = "QUI"
            break;

        case 5:
            diaEscrito.innerHTML = "SEX"
            break;

        case 6:
            diaEscrito.innerHTML = "SAB"
            break;

        default:
            return 0
    }

}

moveRelogio()
takeData()



const apiKey = "371a4f6b13f536664db98aae6dcd7441"

let city;
var umidityShow = document.querySelector('.umidity')
var resultsContainer = document.querySelector('#loc')
var tempShow = document.querySelector('.temp')

function renderWeather(weather) {
    umidityShow.classList.remove("hide")
    tempShow.classList.remove("hide")
    resultsContainer.classList.remove("hide")
    
    resultsContainer.innerHTML = weather.name

    var humidity = weather.main.humidity

    
    umidityShow.innerHTML = `${humidity}%`

    var tempK = weather.main.temp
    var tempCelsius = tempK - 273.15
    
    tempShow.innerHTML = `${tempCelsius.toFixed(2)} C°`
}

function updateWeather() {
    if (!city) {
        return;
    }

    fetchWeather(city);
    
}


let butInput = document.querySelector('#butInput')
let cityInput = document.querySelector('#input')

butInput.addEventListener('click', (e) => {
    e.preventDefault()

    city = cityInput.value
    console.log(city)


    fetchWeather(city)
})


async function fetchWeather() {
    
    var url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=371a4f6b13f536664db98aae6dcd7441`

    fetch(url)
        .then((response) => response.json())
        .then((data) => renderWeather(data)
        

        );



}
updateWeather();

setInterval(updateWeather, 1800000)







