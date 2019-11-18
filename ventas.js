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

/*le cambio al ventas el let y agregue un const porque esta variadno solo su contenido. Luego hablamos */
const ventas = [
    [100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500']],
    [100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500']],
    [100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva']],
    [100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200']],
    [100000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200']],
    [100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston']]
];


/* Funcion 1*/

/* Funcion 2 */

const verificarExistenciaComponente = (componente) => {
    const existeArticulo = precios.findIndex((articulo) => {
        return articulo[0] == componente
    })
    if (existeArticulo >= 0) {
        return true
    }
    return false
}

const cantidadVentasComponente = (componente) => {
    let cantidad = 0
    if (!verificarExistenciaComponente(componente)) {
        return "Articulo no Existe."
    }
    ventas.forEach(venta => {
        const encuentra = venta[6].filter((articulo) => {
            return articulo == componente
        });
        cantidad = cantidad + encuentra.length;
    })
    return cantidad;
}

/* Funcion 2.1 */

const componenteMasVendido = () => {
    let mayor = 0
    let nombre = " "
    precios.forEach(item => {
        const componenteVendido = cantidadVentasComponente(item[0]);
        if (componenteVendido > mayor) {
            mayor = componenteVendido
            nombre = item[0]
        }
    })
    return nombre
}

/* Funcion 3 */


/*Funcion 7 */
const obtenerIdVenta = () => {
    let IdVenta = Math.floor(Math.random() * (1000000000 - 100000000) + 100000000);
    return IdVenta;
};

/*Funcion  7.1 */
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
    agregarVenta,
    precioMaquina,
    cantidadVentasComponente,
    verificarExistenciaComponente,
    componenteMasVendido
};