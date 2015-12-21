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
      success: function(){
        alert('200 ')
      },
      dataType: 'html',
      async: false
    });
});
