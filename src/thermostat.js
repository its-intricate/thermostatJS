'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.power_save = true;
    this.maximum_temperature = 25;
  };

  temp_up(degrees) {
    this.temperature += degrees;
    if (this.temperature > this.maximum_temperature){
      this.temperature = this.maximum_temperature;
      alert(`Temperature is at maximum ${this.maximum_temperature} degrees.`);
    };
    return this.temperature;
  };

  temp_down(degrees) {
    this.temperature -= degrees;
    if (this.temperature < this.MINIMUM_TEMPERATURE){
      this.temperature = this.MINIMUM_TEMPERATURE;
      alert('Temperature is at minimum 10 degrees.');
    };
    return this.temperature;
  };

  power_save_switch(){
    if (this.power_save === false){
      this.power_save = true;
      this.maximum_temperature = 25;
      if (this.temperature > this.maximum_temperature){
        this.temperature = this.maximum_temperature;
        alert('Temperature was above maximum for power save. Temperature is now at 25 degrees.');
      };
    } else {
      this.power_save = false;
      this.maximum_temperature = 32;
    };
  };

  reset(){
    this.temperature = 20;
    this.power_save = true;
    this.maximum_temperature = 25;
  };

  energy_usage_band(){
    if (this.temperature < 18){
      return 'low';
    } else if (this.temperature <= 25) {
      return 'medium';
    } else {
      return 'high';
    };
  };

};
