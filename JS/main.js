//armar carrito
const habitaciones = [
    {
        id: 1,
        nombre: "habitacion simple",
        precio: 100000
    },

    {
        id: 2,
        nombre: "habitacion doble",
        precio: 180000
    },

    {
        id: 3,
        nombre: "habitacion triple",
        precio: 260000
    },

    {
        id: 4,
        nombre: "habitacion cuadruple",
        precio: 340000
    },

    {
        id: 5,
        nombre: "habitacion quintuple",
        precio: 420000
    },

    {
        id: 6,
        nombre: "habitacion sextuple",
        precio: 500000
    },
]

const cartHabitaciones = []
let reservas = document.getElementById("Reservas")

function renderHabitaciones(habitacionesArray) {
    habitacionesArray.forEach(habitacion => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>$(habitacion.nombre)</h3>
                          <p>$(habitacion.precio)</p>
                          <button class="habitacionAgregar" id="$(habitacion.id)">Agregar</button>`
        habitacionesContainer.appendChild(card)                  
    });
    agegarAlCarrito(habitaciones)
}

renderHabitaciones(habitaciones)

function agegarAlCarrito (habitacionesArray) {
    const addButton = document.querySelectorAll(".reservaAgregar")
    addButton.forEach(Button => {
        Button.onclick = (e) => {
            const habitacionID = e.currentTarget.id
            const selectedHabitacion = habitacionesArray.find(producto => habitacion.id == habitacionID)
            cartHabitaciones.push(selectedHabitacion)
            console.log(cartHabitaciones)

            localStorage.setItem("cartHabitaciones", JSON.stringify(cartHabitaciones))
        }
    })

}

let restar = document.getElementById("minus-button")
let sumar = document.getElementById("plus-button")
let counter = document.getElementById("counter")
let contador = 0

sumar.onclick = () => {
    contador++
    counter.innerHTML = contador
    restar.disabled = false
}

restar.onclick = () => {
    if(contador === 0) {
        restar.disabled = true
    } else{
    contador--
    counter.innerHTML = contador
    }
}

let input = document.getElementById("search")
input.onkeyup = () => {
    console.log("Apretaste una tecla")
}

const habitacion = ["simple", "doble", "triple", "cuadruple", "quintuple", "sextuple"]
input.onchange = () => {
    const element = habitacion.find(habitacion => habitacion === input.value)
    console.log("Elegiste la habitación " + element)
}

let calcular = document.getElementById("calcular")
let precio = document.getElementById("precio")
let cuotas = document.getElementById("cuotas")

calcular.onclick = () => {
    let precioFinal = precio.value/cuotas.value
    
    let print = document.createElement("h3")
    print.innerHTML = `son ${cuotas.value} cuotas de ${precioFinal}`
    document.body.append(print)
}