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

const ventas = [];

const obtenerIdVenta = () => {
    let IdVenta = Math.floor(Math.random() * (1000000000 - 100000000) + 100000000);
    return IdVenta;
};

const requerido = (detalle) => {
    if ((detalle == undefined) ||(detalle =="")) {
        throw `Error - Completar todos los datos de la venta.`;
    }
    return detalle;
};

const letraCapital = (nombre) => {
    let palabra = nombre.toLowerCase();
    palabra = palabra[0].toUpperCase() + palabra.slice(1);
    return palabra;
}

const controlVendedora = (vendedor) => {
    requerido(vendedor);
    let vendedoraCapital = letraCapital(vendedor);
    let index = vendedoras.indexOf(vendedoraCapital);
    if (index > -1) {
        return vendedoraCapital;
    };
    throw "Vendedor no registrado.";
}

const controlSucursal = (sucursal) => {
    requerido(sucursal);
    let sucursalCapital = letraCapital(sucursal);
    for (let index of sucursales) {
        if (index == sucursalCapital) {
            return sucursalCapital;
        };

    }
    throw "Sucursal no encontrada.";

};

const verificarExistenciaComponente = (componente) => {
    const existeArticulo = precios.findIndex((articulo) => {
        return articulo[0] == componente
    })
    if (existeArticulo >= 0) {
        return true
    }
    return false
}

const controlComponente = (componente) => {
    if(componente[0] != null){
        for (let i = 0; i < componente.length; i++) {
            verificarExistenciaComponente(componente[i])
            if (!verificarExistenciaComponente(componente[i])) {
                ;
                throw "Articulo no Existe";
            }

        }
        return componente;
    }
    throw "Error en carga de producto, debe completar los componetes vendidos."
}

const agregarVenta = (dia, mes, anio, vendedora, sucursal, ...componentes) => {
        let diaAgregar = requerido(dia);
        let mesAgregar = requerido(mes);
        let anioAgregar = requerido(anio);
        let vendedoraAgregar = controlVendedora(vendedora);
        let sucursalAgregar = controlSucursal(sucursal);
        let componenteAgregar = controlComponente(componentes);
        //controlFecha(dia, mes, anio);
        return ventas.push([
            obtenerIdVenta(),
            diaAgregar,
            mesAgregar,
            anioAgregar,
            vendedoraAgregar,
            sucursalAgregar,
            componenteAgregar
        ]);
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

/*componentes (un array Strings con el nombre de cada componente vendido)*/




module.exports = {
    ventas,
    vendedoras,
    precios,
    sucursales,
    obtenerIdVenta,
    agregarVenta,
};