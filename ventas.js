const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"],
    precios = [
        ['Monitor GPRS 3000', 200],
        ['Motherboard ASUS 1500', 120],
        ['Monitor ASC 543', 250],
        ['Motherboard ASUS 1200', 100],
        ['Motherboard MZI', 30],
        ['HDD Toyiva', 90],
        ['HDD Wezter Dishital', 75],
        ['RAM Quinston', 110],
        ['RAM Quinston Fury', 230]
    ],
    sucursales = ['Centro', 'Caballito'];

let ventas = [];

const obtenerIdVenta = () => {
    let IdVenta = Math.floor(Math.random() * (1000000000 - 100000000) + 100000000);
    return IdVenta;
};

const requerido = () => {
    throw `Error - Completar todos los datos de la venta.`;
};

const letraCapital =(nombre) =>{
    let palabra = nombre.toLowerCase();
        palabra = palabra[0].toUpperCase() + palabra.slice(1);
        return palabra;
}

const controlVendedora = (vendedor) => {
    let vendedoraCapital = letraCapital(vendedor);
    for (let index of vendedoras) {
        if (index == vendedoraCapital){
            return vendedoraCapital;
        };
    }
    throw "Vendedor no registrado.";
};

const controlSucursal = (sucursal) => {
    let sucursalCapital = letraCapital(sucursal);
    for (let index of sucursales) {
        if (index == sucursalCapital){
            return sucursalCapital;
        };
        
    }throw "Sucursal no encontrada.";
    
};
/*const controlFecha = (dia, mes, anio) => {
    let hoy = newDate();
    let anioHoy = hoy.getFullYear();
    let mesHoy = hoy.getMonth();
    let diaHoy = hoy.getDay();

    if (anio <= anioHoy){
        return anio;
    }else if ()
    throw "La fecha introducida es mayor a hoy."
};*/

const agregarVenta = (dia = requerido(), mes = requerido(), anio = requerido(), vendedora = requerido(), sucursal = requerido(), componentes = requerido()) => {
    //controlVenta(dia, mes, anio, vendedora, sucursal, componentes);
    let vendedoraAgregar = controlVendedora(vendedora);
    let sucursalAgregar = controlSucursal(sucursal);
    //controlFecha(dia, mes, anio);
    return ventas.push([
        obtenerIdVenta(),
        dia,
        mes,
        anio,
        vendedoraAgregar,
        sucursalAgregar,
        [componentes]
    ])
};


/*componentes (un array Strings con el nombre de cada componente vendido)*/




module.exports = {
    vendedoras,
    precios,
    sucursales,
    ventas,
    obtenerIdVenta,
    agregarVenta, 
};