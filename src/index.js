const selectBase = document.querySelector('#selectBase')
const listaMonedas = document.querySelector('#lista-monedas')
const listaValores = document.querySelector('#lista-valores')
const fecha = document.querySelector('#fecha')


selectBase.addEventListener('change', ()=>{
    listaMonedas.innerHTML = ''
    listaValores.innerHTML = ''
    const base = selectBase.value
    inicializar(base)
})


function rellenarSelectMonedas(moneda){
    const option = document.createElement('option')
    option.textContent = moneda
    selectBase.appendChild(option)
}

function rellenarListaMonedas(moneda){
    const li = document.createElement('li')
    li.textContent = moneda
    listaMonedas.appendChild(li)
}

function rellenarListaValores(valor){
    const li = document.createElement('li')
    li.textContent = valor
    listaValores.appendChild(li)

}

function obtenerDatosDelDia(direccionURL){
    return fetch(direccionURL)
    .then((respuesta) => respuesta.json())    
}

function inicializar(moneda){
    const api = 'https://v6.exchangerate-api.com/v6/5158d3be4114aac346b4939a/latest/'
    const URL = `${api}${moneda}`
    obtenerDatosDelDia(URL).then((datos) => {
        Object.keys(datos.conversion_rates).forEach((moneda)=>{
            rellenarSelectMonedas(moneda)
            rellenarListaMonedas(moneda)
            
        })
        Object.values(datos.conversion_rates).forEach((valor)=>{
            rellenarListaValores(valor)
        })
    })
    
    
}

inicializar('USD')

