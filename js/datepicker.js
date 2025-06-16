$(document).ready(function () {
  $('#promo-datepicker1').datetimepicker({
    format: 'MM/DD/YYYY',
  });

  $('#promo-datepicker1').on('dp.change', function (e) {
    console.log(e.date.format('MM, DD, YYYY'));
    const month = e.date.format('MM');
    const date = e.date.format('DD');
    const year = e.date.format('YYYY');
    $('#promo-datepicker1 #month').text(month);
    $('#promo-datepicker1 #date').text(date);
    $('#promo-datepicker1 #year').text(year);
  });

  $('#promo-datepicker2').datetimepicker({
    format: 'MM/DD/YYYY',
  });

  $('#promo-datepicker2').on('dp.change', function (e) {
    console.log(e.date.format('MM, DD, YYYY'));
    const month = e.date.format('MM');
    const date = e.date.format('DD');
    const year = e.date.format('YYYY');
    $('#promo-datepicker2 #month').text(month);
    $('#promo-datepicker2 #date').text(date);
    $('#promo-datepicker2 #year').text(year);
  });
});
