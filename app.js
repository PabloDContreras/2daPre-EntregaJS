//PRE-ENTREGA#2

function saludar(){
    let nombre = prompt("Ingrese su nombre")
    let apellido = prompt("Ingrese su apellido")
    alert(
        "Hola " +  nombre + " " + apellido + " Llegaste a Full Drinks"
    )
}

saludar(); 

class Bebidas {
    constructor(tipo, marca, precio){
        this.tipo = tipo;
        this.marca = marca;
        this.precio = precio;
    }
}
let precios =[
    {marca: "Tanqueray", precio: "5800"},
    {marca: "Absolut", precio: "3200"},
    {marca: "Jose Cuervo", precio: "10900"},
    {marca: "Malaria", precio: "7400"},
    {marca: "Aconcagua", precio: "3000"},
]

function productoEstrella(){
    const caros = precios.filter((beb) => beb.precio > 7400)
    for (const caro of caros){
        alert(`el producto estrella de Full Drinks es ${caro.marca} a un valor de $${caro.precio}`)
    }
}

function cargarProducto(){
    let tipo = prompt("Que bebida deseas tomar?")
    let marca = prompt("Ingrese la marca de la bebida deseada");
    let precio = parseInt(prompt("Ingrese el precio"));
    const nuevaBebida = new Bebidas(tipo, marca, precio)
    Carrito.push(nuevaBebida)
    alert("producto añadido al carrito")
}

function verCarrito(){
    Carrito.forEach((producto) => {
        prompt (`usted eligio la bebida ${producto.tipo} por un precio de $${producto.precio} de la marca ${producto.marca}`)
    });
}

function terminar (){
    const total = Carrito.reduce((acc, subtotal)=> acc + subtotal.precio, 0);
    alert (`gracias por su compra, el total a pagar  es de $${total}`);
}

let Carrito = [];

let opcion = prompt ("ingrese una opcion: \n 1.Cargar productos \n 2.Producto Estrella \n 3.Ver carrito \n 4.Finalizar compra \n 5.Ir al pago");

while (opcion !=="5"){
    if (opcion === "1"){
        cargarProducto(Carrito);
    }
    if (opcion === "2"){
        productoEstrella();
    }
    if (opcion === "3"){
        verCarrito();
    }
    if (opcion === "4"){
        terminar();
    }
    opcion = prompt ("vuelva a ingresar una opcion: \n 1.Seguir comprando \n 2.Producto Estrella \n 3.Ver carrito \n 4.Finalizar compra \n 5.Ir al pago");
}

let pago = prompt(`
    Con que metodo de pago elegis abonar?    
    1. Debito;
    2. Credito;
    3. Transferencia;
`);

let metodo = "Usted esta por pagar con ";

function total(pago){
    switch(pago){
        case "1":
            return metodo + "Debito";
            break;
        case "2":
            return metodo + "Credito";
            break;
        case "3":
            return metodo + "Transferencia";
            break;
    }   
}
alert(total(pago));

total(); 

alert ("gracias por elegir Full Drinks");