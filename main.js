//Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
//Rendiamo il tutto gradevole alla vista.

$(document).ready(function(){
  $('#aggiungi').click(function(){
    var inserisciQualcosa = $('#inserisciQualcosa').val();
    $('#InserisciQualcosa').val('');
    var template = $('#todo li').clone();
    template.children('span.testo').text(inserisciQualcosa);
    template.children('span.fatto').click(function(){
      $(this).parent().remove();
    });
    template.children('span.modifica').click(function(){
      var titleDOM = $(this).siblings('span.testo');
      var testo = titleDOM.text();
      titleDOM.hide();

      $(this).siblings('input').val(testo).show();
    });
    template.children('input').keyup(function(e){
      if (e.which == 13) {
        var testo = $(this).val();
        $(this).hide();
        $(this).siblings('span.testo').text(testo).show();
      }
    });
    $('#lista').append(template)
  });
});
