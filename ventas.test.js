

const localPc = require ('./ventas'),
    agregarVenta = localPc.agregarVenta,
    ventas = localPc.ventas,
    obtenerIdVenta = localPc.obtenerIdVenta;
    

beforeEach(() => {
    localPc.ventas = [];
    
});
afterEach(() => {
    localPc.ventas = [];
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
        agregarVenta(15,12,2018,"Grace", "Caballito", 'Monitor GPRS 3000');
        expect (ventas [0]).toStrictEqual([
                obtenerIdVenta(),
                15,
                12,
                2018,
                "Grace",
                "Caballito",
                ['Monitor GPRS 3000']
        ]);
    }); 
});

test ('obtengo un ID de venta random', () => {
    expect (obtenerIdVenta()).toBeGreaterThanOrEqual(100000000);
    expect (obtenerIdVenta()).toBeLessThanOrEqual(999999999);

});

test ('chequear que todos los parametros esten completos', () => {
    agregarVenta("","","", "ada", "caballito","" );
    expect (()=>{agregarVenta()}).toThrow("Error - Completar todos los datos de la venta.")
});

test ('chequear que todos los parametros esten completos - version 2', () => {
    agregarVenta(3,2,2017, "ada", "caballito","" );
    expect (()=>{agregarVenta()}).toThrow("Error - Completar todos los datos de la venta.")
});

test ('escribir nombre de vendedora en mayusculas y que se agregue venta igual', () => {
    agregarVenta(15,12,2018,"GRACE", "Caballito", ['Monitor GPRS 3000']);
    expect (ventas[0][4]).toBe("Grace");
});

test ('escribir sucursal que no coincida con una existente, y tire error', () =>{
    expect (()=>{agregarVenta(15,12,2018,"ada", "Flores", ['Monitor GPRS 3000'])})
        .toThrow("Sucursal no encontrada.")
});

test('chequear que el parametro nombre coincida con una vendedora, sino tire error', () => {
    expect (() =>{agregarVenta(15,12,2018,"Antonella", "Caballito", ['Monitor GPRS 3000'])})
        .toThrow('Vendedor no registrado.')
});






test.todo ('chequear que la fecha no superea al dia de hoy');

test.todo('chequear que el push permita subir varios productos en una misma venta');

test.todo('chequear que el parametro componente coincida con una en el stock, sino tire error');

