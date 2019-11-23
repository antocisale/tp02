const localPc = require('./ventas'),
    agregarVenta = localPc.agregarVenta,
    ventas = localPc.ventas,
    obtenerIdVenta = localPc.obtenerIdVenta;

   

describe('pruebas en agregar venta sin numero random', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
        localPc.ventas.splice(0);
    });

    afterEach(() => {
        global.Math.random.mockRestore();
    });
    test('agrego una venta revisando el array 0 completo', () => {
        agregarVenta(15, 12, 2018, "Ada", "Caballito", 'Monitor GPRS 3000');
        expect(ventas[0]).toStrictEqual([
            obtenerIdVenta(),
            15,
            12,
            2018,
            "Ada",
            "Caballito",
            ['Monitor GPRS 3000']
        ]);
    });
});

test('obtengo un ID de venta random', () => {
    expect(obtenerIdVenta()).toBeGreaterThanOrEqual(100000000);
    expect(obtenerIdVenta()).toBeLessThanOrEqual(999999999);

});

test('chequear que todos los parametros esten completos', () => {
    expect(() => {
        agregarVenta("", "", "", "ada", "caballito", 'Monitor GPRS 3000');
    }).toThrow("Error - Completar todos los datos de la venta.")
});

test('chequear que todos los parametros esten completos - version 2', () => {
    expect(() => {
        agregarVenta(3, 2, 2017, "ada", "caballito");
    }).toThrow("Error en carga de producto, debe completar los componetes vendidos.")
});

test('escribir sucursal que no coincida con una existente, y tire error', () => {
    expect(() => {
        agregarVenta(15, 12, 2018, "ada", "Flores", 'Monitor GPRS 3000')
        })
        .toThrow("Sucursal no encontrada.")
});

test('chequear que el parametro nombre coincida con una vendedora, sino tire error', () => {
    expect(() => {
        agregarVenta(15, 12, 2018, "Antonella", "Caballito", 'Monitor GPRS 3000')
        })
        .toThrow('Vendedor no registrado.')
});

test('escribir nombre de vendedora en mayusculas y que se agregue venta igual', () => {
    agregarVenta(15, 12, 2018, "GRACE", "Caballito", "Monitor GPRS 3000");
    expect(ventas[0][4]).toBe("Grace");
});


test('chequear que el parametro componente coincida con una en el stock', () =>{
    agregarVenta(22, 2, 2019, "Hedy", "Centro", 'RAM Quinston');
    expect(ventas[0][6]).toStrictEqual(["RAM Quinston"]);
});

test('chequear que el parametro componente coincida con una en el stock', () =>{
expect(()=>{agregarVenta(23, 2, 2018, "Ada", "Caballito", 'RAM PRUEBA')}).toThrow("Articulo no Existe")
});

test('chequear que el push permita subir varios productos en una misma venta', () =>{
    agregarVenta(22, 2, 2019, "Hedy", "Centro", 'RAM Quinston', "Monitor GPRS 3000" );
    expect(ventas[0][6]).toStrictEqual(["RAM Quinston", "Monitor GPRS 3000"]);
});


beforeEach(() => {
    localPc.ventas.splice(0);

});




test.todo('chequear que la fecha no superea al dia de hoy');
