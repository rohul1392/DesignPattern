# Design Pattern

##  Problem
Explain the design pattern used in following:
```
interface Vehicle {
int set_num_of_wheels()
int set_num_of_passengers()
boolean has_gas()
}
```

## Explain how can you use the pattern to create car and plane class?


This example illustrates the structure of the Adapter design pattern. when we create car and plane class by inheriting Vehicle interface we must implement all the functions in Vehicle  interface.

```
public interface IVehicle {
int set_num_of_wheels()
int set_num_of_passengers()
boolean has_gas()
}
```
```
 class Car : IVehicle
    {
        public int set_num_of_wheels()
        {
            return 4;
        }
        public int set_num_of_passengers()
        {
            return 20;
        }
          public boolean has_gas()
        {
            return true;
        }
    }
```
```
 class Plane : IVehicle
    {
        public int set_num_of_wheels()
        {
            return 5;
        }
        public int set_num_of_passengers()
        {
            return 25;
        }
          public boolean has_gas()
        {
            return true;
        }
    }
```

## Use a different design pattern for this solution.

I solve this problem by using Factory Design Patterns.It allows all of the object creation in a centralized location.
