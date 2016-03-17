$("#submit").on('click', function () {
  var url = '/mcstudysystem/login/';
  $.ajax({
    type: 'POST',
    data:{
      username: $("#username").val(),
      password: $("#password").val(),
      checkbox: $("#remember_me").attr("checked"),
      submit: $("#submit").val()
    },
    url: url,
    dataType: 'html',
    async: false
  });
});
