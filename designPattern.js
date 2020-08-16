function Car(num_of_wheels, num_of_passengers, has_gas) {
  this.num_of_wheels = num_of_wheels;
  this.num_of_passengers = num_of_passengers;
  this.has_gas = has_gas;
  this.type = "Car";
}

function Plane(num_of_wheels, num_of_passengers, has_gas) {
  this.num_of_wheels = num_of_wheels;
  this.num_of_passengers = num_of_passengers;
  this.has_gas = has_gas;
  this.type = "Plane";
}

function VehicleFactory() {
  this.create = (wheels, passengers, gas, type) => {
    switch (type) {
      case 1:
        return new Car(wheels, passengers, gas);
      case 2:
        return new Plane(wheels, passengers, gas);
    }
  };
}

const vehicleFactory = new VehicleFactory();
const vehicles = [];

vehicles.push(vehicleFactory.create(4, 10, true, 1));
vehicles.push(vehicleFactory.create(5, 20, true, 2));

module.exports = { VehicleFactory };
