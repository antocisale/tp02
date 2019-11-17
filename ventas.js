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

const agregarVenta = (dia, mes, anio, vendedora, sucursal, componentes) => {
    return ventas.push([
        obtenerIdVenta(),
        dia,
        mes,
        anio,
        vendedora,
        sucursal,
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