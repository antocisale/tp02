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

const controlVenta = (dia, mes, anio, vendedora, sucursal, componentes) => {
    if ((dia == undefined) || (mes == undefined) || (anio == undefined) || 
     (vendedora == undefined) || (sucursal == undefined) || (componentes == undefined)){
        throw "Deben completarse todos los datos de la venta."
    }
};

const controlVendedora = (Vendedora) =>{
    for (let index of vendedoras){
        return index == Vendedora;
    }
        throw "Vendedor no registrado.";

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

const agregarVenta = (dia, mes, anio, vendedora, sucursal, componentes) => {
    controlVenta(dia, mes, anio, vendedora, sucursal, componentes);
    //controlFecha(dia, mes, anio);
    controlVendedora(vendedora);
    let vendedoraCapital = vendedora.charAt(0).toUpperCase() + vendedora.slice(1);
    let sucursalCapital = sucursal.charAt(0).toUpperCase() + sucursal.slice(1);
    return ventas.push([
        obtenerIdVenta(),
        dia,
        mes,
        anio,
        vendedoraCapital,
        sucursalCapital,
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
    agregarVenta
};