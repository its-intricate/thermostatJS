describe('Thermostat',function(){
  describe('temperature control',function(){
    var thermostat;
    beforeEach(function(){
      thermostat = new Thermostat();
    });
    it('has an initial temperature of 20 degrees',function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('increases the temperature',function(){
      thermostat.temp_up(1);
      expect(thermostat.temperature).toEqual(21);
    });

    it('decreases the temperature',function(){
      thermostat.temp_down(10);
      expect(thermostat.temperature).toEqual(10);
    });

    it('has a minimum temperature of 10 degrees',function(){
      thermostat.temp_down(15);
      expect(thermostat.temperature).toEqual(10);
    });

    it('resets to 20 degrees and turns on power save',function(){
      thermostat.temp_down(5);
      thermostat.power_save_switch();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
      expect(thermostat.power_save).toBeTruthy();
    });
  });

  describe('power save',function(){
    var thermostat;
    beforeEach(function(){
      thermostat = new Thermostat();
    });
    it('initially power save is on and maximum temperature is 25 degrees',function(){
      expect(thermostat.power_save).toBeTruthy();
      expect(thermostat.maximum_temperature).toEqual(25);
    });
    it('when off maximum temperature is 32 degrees',function(){
      thermostat.power_save_switch();
      expect(thermostat.maximum_temperature).toEqual(32);
    });
    it('has a maximum temperature of 25 degrees',function(){
      thermostat.temp_up(15);
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe('energy saver usage band',function(){
    var thermostat;
    beforeEach(function(){
      thermostat = new Thermostat();
    });
    it('returns low energy when temperature is less than 18 degrees',function(){
      thermostat.temp_down(5);
      expect(thermostat.energy_usage_band()).toEqual('low');
    });
    it('returns medium energy when temperature is between 18 and 25 degrees inclusive',function(){
      expect(thermostat.energy_usage_band()).toEqual('medium');
    });
    it('returns high energy when temperature is more than 25 degrees',function(){
      thermostat.power_save_switch();
      thermostat.temp_up(10);
      expect(thermostat.energy_usage_band()).toEqual('high');
    });
  });

});
