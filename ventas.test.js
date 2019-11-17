

const localPc = require ('./ventas'),
    obtenerIdVenta = localPc.obtenerIdVenta,
    agregarVenta = localPc.agregarVenta,
    ventas = localPc.ventas;

const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.5;
    localPc.obtenerIdVenta = mockMath;

/*


agregarVenta(dia, mes, anio, vendedora, sucursal, componentes): 
recibe por parámetro todos los datos de una venta, y los agrega en el array de ventas. 
Al igual que las ventas que ya están previamente creadas, 
además de estos datos necesitamos agregar el primer dato que es un 
dentificador de la venta. Para agregar este dato, tenemos que usar
la función desarrollada en el punto anterior obtenerIdVenta*/
beforeEach(() => {
    localPc.ventas = [];
    
});


test ('obtengo un ID de venta random', ()=>{
    expect (obtenerIdVenta()).toBeGreaterThanOrEqual(100000000);
    expect (obtenerIdVenta()).toBeLessThanOrEqual(999999999);

});

test ('agrego una venta revisando el array 0 completo', () =>{
    agregarVenta(15,12,2018,"Ana", "Caballito", 'Monitor GPRS 3000');
    expect (ventas [0]).toStrictEqual([
        localPc.obtenerIdVenta(),
            15,
            12,
            2018,
            "Ana",
            "Caballito",
            ['Monitor GPRS 3000']
    ]);
});

test ('agrego una venta', () =>{
    agregarVenta(15,12,2018,"Ana", "Caballito", 'Monitor GPRS 3000');
    expect (ventas [0][1]).toBe(15);
    expect (ventas [0][2]).toBe(12);
    expect (ventas [0][3]).toBe(2018);
    expect (ventas [0][4]).toBe("Ana");
    expect (ventas [0][5]).toBe("Caballito");
    expect (ventas [0][6]).toStrictEqual(['Monitor GPRS 3000']);
});


