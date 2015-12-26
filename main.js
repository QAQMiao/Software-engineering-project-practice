$("#submit").on('click', function () {
  var url = '/mcstudysystem/main/';
  $.ajax({
    type: 'POST',
    data:{
	  type:"1",
      pname: $("#pname").val(),
      totalTime: $("#totalTime").val(),
      year: $("#year").val(),
      month: $("#month").val(),
	  day: $("#day").val()
    },
    url: url,
    dataType: 'html',
    async: false
  });
});
