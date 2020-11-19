$(document).ready(function() {
  var thermostat = new Thermostat();
  update_temp();


  $('#temp_up').on('click', function() {
    thermostat.temp_up(1);
    update_temp();
  });

  $('#temp_down').on('click', function() {
    thermostat.temp_down(1);
    update_temp();
  });

  $('#reset').on('click', function() {
    thermostat.reset();
    update_temp();
  });

  $('#power_save_switch').on('click', function() {
    thermostat.power_save_switch();
    update_temp();
  });

  function update_temp(){
    $('#current_temp').text(`${thermostat.temperature} degrees`);
    $('#current_temp').attr('class', thermostat.energy_usage_band());
    $('#power_save_switch').attr('class', thermostat.power_save);
  };
})
