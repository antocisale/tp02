

const localPc = require ('./ventas'),
    agregarVenta = localPc.agregarVenta,
    ventas = localPc.ventas,
    obtenerIdVenta = localPc.obtenerIdVenta;
    

beforeEach(() => {
    localPc.ventas = [];
    
});


test ('obtengo un ID de venta random', () => {
    expect (obtenerIdVenta()).toBeGreaterThanOrEqual(100000000);
    expect (obtenerIdVenta()).toBeLessThanOrEqual(999999999);

});

describe ('pruebas en agregar venta sin numero random', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
        localPc.ventas = [];
    });
    
    afterEach(() => {
        global.Math.random.mockRestore();
    });
    test ('agrego una venta revisando el array 0 completo', () => {
        agregarVenta(15,12,2018,"Ada", "Caballito", 'Monitor GPRS 3000');
        expect (ventas [0]).toStrictEqual([
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



test ('agrego una venta', () => {
    agregarVenta(15,12,2018,"Ada", "Caballito", 'Monitor GPRS 3000');
    expect (ventas [0][1]).toBe(15);
    expect (ventas [0][2]).toBe(12);
    expect (ventas [0][3]).toBe(2018);
    expect (ventas [0][4]).toBe("Ada");
    expect (ventas [0][5]).toBe("Caballito");
    expect (ventas [0][6]).toStrictEqual(['Monitor GPRS 3000']);
});

test ('escribir nombre de vendedora o de sucursal en minusculas o mayusculas y que se agregue venta igual', () => {
    agregarVenta(15,12,2018,"ada", "CABALLITO", 'Monitor GPRS 3000');
    expect (ventas [0]).toHaveLength(7);
});


test('chequear que el parametro nombre coincida con una vendedora, sino tire error', () => {
    agregarVenta(15,12,2018,"Antonella", "Caballito", 'Monitor GPRS 3000');
    expect (()=>{agregarVenta()}).toThrow('Vendedor no registrado.')
});

test ('chequear que todos los parametros esten completos', () => {
    agregarVenta("","","", "ada", "caballito","" );
    expect (()=>{agregarVenta()}).toThrow('Deben completarse todos los datos de la venta.')
});



/*test.todo ('chequear que la fecha no superea al dia de hoy', () => {
    agregarVenta(23,12,2020, "Ana", "Caballito", 'Monitor GPRS 3000');
    expect (()=>{agregarVenta()}).toThrow("La fecha introducida es mayor a hoy.")
});*/

test.todo('chequear que el push permita subir varios productos en una misma venta');
test.todo('chequear que el parametro sucursal coincida con una existente, sino tire error');
test.todo('chequear que el parametro componente coincida con una en el stock, sino tire error');

