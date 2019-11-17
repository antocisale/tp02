

const localPc = require ('./ventas'),
    agregarVenta = localPc.agregarVenta,
    ventas = localPc.ventas,
    obtenerIdVenta = localPc.obtenerIdVenta;
    

beforeEach(() => {
    localPc.ventas = [];
    
});


test ('obtengo un ID de venta random', ()=>{
    expect (obtenerIdVenta()).toBeGreaterThanOrEqual(100000000);
    expect (obtenerIdVenta()).toBeLessThanOrEqual(999999999);

});

describe ('pruebas en agregar venta sin numero random', ()=>{
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
    });
    
    afterEach(() => {
        global.Math.random.mockRestore();
    });
    test ('agrego una venta revisando el array 0 completo', () =>{
        agregarVenta(15,12,2018,"Ana", "Caballito", 'Monitor GPRS 3000');
        expect (ventas [0]).toStrictEqual([
                obtenerIdVenta(),
                15,
                12,
                2018,
                "Ana",
                "Caballito",
                ['Monitor GPRS 3000']
        ]);
    }); 
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



