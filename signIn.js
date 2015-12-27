$("#submit").on('click', function () {
  var url = '/mcstudysystem/login/';
  $.ajax({
    type: 'POST',
    data:{
      username: $("#username").val(),
      password: $("#password").val(),
      checkbox: $("#remember_me").val(),
      submit: $("#submit").attr("checked")
    },
    url: url,
    dataType: 'html',
    async: false
  });
});
