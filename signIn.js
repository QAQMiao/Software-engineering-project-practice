var result;
alert("asdf");
if(result == 1)
{
  $(".wrong_msg").show();
}
$("#submit").on('click', function () {
  var url = '/mcstudysystem/login/';
  $.ajax({
    type: 'POST',
    data:{
      username: $("#username").val(),
      password: $("#password").val(),
      checkbox: $("#remember_me").val(),
      submit: $("#submit").val()
    },
    url: url,
    dataType: 'html',
    async: false
  });
});
