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


////////////////////////////////// OBTENER ID DE VENTA ////////////////////////////////////////
const obtenerIdVenta = () => {
    let IdVenta = Math.floor(Math.random() * (1000000000 - 100000000) + 100000000);
    return IdVenta;
};

////////////////////////////////// AGREGAR VENTA Y SUS VERIFICACIONES ///////////////////////////////

const requerido = (detalle) => {
    if ((detalle == undefined) || (detalle == "")) {
        throw `Error - Completar todos los datos de la venta.`;
    }
    return detalle;
};

const letraCapital = (nombre) => {
    let palabra = nombre.toLowerCase();
    palabra = palabra[0].toUpperCase() + palabra.slice(1);
    return palabra;
};

const controlVendedora = (vendedor) => {
    requerido(vendedor);
    let vendedoraCapital = letraCapital(vendedor);
    let index = vendedoras.indexOf(vendedoraCapital);
    if (index > -1) {
        return vendedoraCapital;
    };
    throw "Vendedor no registrado.";
};

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
};


const controlComponente = (componente) => {
    if (componente[0] != null) {
        for (let i = 0; i < componente.length; i++) {
            verificarExistenciaComponente(componente[i])
            if (!verificarExistenciaComponente(componente[i])) {
                throw "Articulo no Existe";
            }

        }
        return componente;
    }
    throw "Error en carga de producto, debe completar los componetes vendidos."
};


const controlFecha = (dia, mes, anio) => {
    requerido(dia);
    requerido(mes);
    requerido(anio);
    let hoy = new Date();
    let fechaVenta = new Date(anio, mes - 1, dia);
    if (hoy < fechaVenta) {
        throw "Error - la fecha ingresada es mayor al día actual."
    }
};



const agregarVenta = (dia, mes, anio, vendedora, sucursal, ...componentes) => {
    controlFecha(dia,mes,anio);
    let vendedoraAgregar = controlVendedora(vendedora);
    let sucursalAgregar = controlSucursal(sucursal);
    let componenteAgregar = controlComponente(componentes);
    return ventas.push([
        obtenerIdVenta(),
        dia,
        mes,
        anio,
        vendedoraAgregar,
        sucursalAgregar,
        componenteAgregar
    ]);
};

//////////////////////////////////  PROMEDIO DE VENTAS //////////////////////////////////

const totalVentas =() =>{
    let suma=0;
    for (let venta of ventas){
        for(let i=0;i<venta[6].length;i++) for(let k=0;k<precios.length;k++){
            if(venta[6][i] == precios[k][0]){
                suma+=precios[k][1]}}}
    return suma;
}

const ventaPromedio = ()=>{
    let suma = totalVentas();
    return Math.floor(suma/ventas.length);};


module.exports = {
    ventas,
    vendedoras,
    precios,
    sucursales,
    obtenerIdVenta,
    agregarVenta,
    ventaPromedio,
};