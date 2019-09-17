class Store{
  constructor(){
    this.drivers = [];
    this.passengers = [];
    this.trips = [];
    this.driverId = 1;
    this.passengerId = 1;
    this.tripId = 1;
  }

  static get store(){
    Store.singleton = Store.singleton || new Store(); 
    return Store.singleton;
  }
}