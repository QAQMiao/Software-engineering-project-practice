function exit(){
  var url = "";
  $.ajax({
    type: "POST",
    data: {
      exit: "true"
    },
    url: url,
    success: function(){
        alert('200 ')
      },
      dataType: 'html',
      async: false
  });
}
