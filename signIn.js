if($("#password").val() == $("#password_comfirm").val())
{
  $("#submit").on('click', function () {
    var url = '';
    $.ajax({
      type: 'POST',
      data:{
        username: $("#username").val(),
        password: $("#password").val(),
        nickname: $("#nickname").val(),
        submit: $("#submit").val()
      },
      url: url,
      success: function(){
          alert('200 ')
      },
      dataType: 'html',
      async: false
    });
  });
}
