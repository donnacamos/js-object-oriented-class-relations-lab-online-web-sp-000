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

class Driver {
  static get counter(){
    Driver._counter = (Driver._counter || 0) + 1;
    return Driver._counter;
  }

  constructor(name){
    this.name = name;
    this._id = Driver.counter;
    this.tripsArr = [];
    Store.store.drivers.push(this);
  }

  get id(){
    return this._id;
  }

  addTrip(trip){
    this.tripsArr.push(trip);
  }

  trips(){
    return Store.store.trips.filter((trip) => trip.driver === this)
  }
}
