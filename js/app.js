// Date Picker
$("#datepicker").datepicker({
    uiLibrary: "bootstrap4"
});

// Time Picker
var options = {
    twentyFour: true, //Display 24 hour format, defaults to false
};

$('.timepicker').wickedpicker(options);

$('.clockpicker').clockpicker({
    placement: 'top',
    align: 'left',
    donetext: 'Done'
});