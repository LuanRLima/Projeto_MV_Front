$(function () {
    var scntDiv = $('#dynamicDiv');
    $(document).on('click', '#addInput', function () {
         for (var i = 0; i < 5; i++){
           $('<p>'+
           '<input type="text" id="inputeste" size="20" value="" placeholder="" /> '+
           '<a class="btn btn-danger" href="javascript:void(0)" id="remInput">'+
           '<span class="glyphicon glyphicon-minus" aria-hidden="true"></span> '+
           '</a>'+
           '</p>').appendTo(scntDiv);
          }
                       return false;
     });
     $(document).on('click', '#remInput', function () {
           $(this).parents('p').remove();
           return false;
      });
});