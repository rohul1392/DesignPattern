const { VehicleFactory } = require("./designPattern");
const { isObject } = require("util");
const vehicleFactory = new VehicleFactory();

test("Create Car Object", () => {
  expect(vehicleFactory.create(4, 10, true, 1)).toEqual({
    num_of_wheels: 4,
    num_of_passengers: 10,
    has_gas: true,
    type: "Car",
  });
});

test("Create Plane Object", () => {
  expect(vehicleFactory.create(5, 20, true, 2)).toEqual({
    num_of_wheels: 5,
    num_of_passengers: 20,
    has_gas: true,
    type: "Plane",
  });
});

test("Create Object Properly", () => {
  expect(typeof vehicleFactory.create(4, 10, true, 1)).toEqual("object");
});
