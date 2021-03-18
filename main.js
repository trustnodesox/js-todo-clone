//Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
//Rendiamo il tutto gradevole alla vista.

$(document).ready(function(){

    //faccio sì che al click sul bottone venga aggiunto ciò che l'utente digita
  $('#aggiungi').click(function(){
    var inserisciQualcosa = $('#inserisciQualcosa').val();
    $('#InserisciQualcosa').val('');
    //uso il clone in modo tale da clonare il template che è in display none
    var template = $('#todo li').clone();
    template.children('span.testo').text(inserisciQualcosa);
    //al click sull'icon checked l'li aggiunto padre di span viene eliminato
    template.children('span.fatto').click(function(){
      $(this).parent().remove();
    });

    //al click sullo span .modifica permetto all'utente di modificare ciò che ha scritto in precedenza
    template.children('span.modifica').click(function(){
      var testoDOM = $(this).siblings('span.testo');
      var testo = testoDOM.text();
      testoDOM.hide();
      $(this).siblings('input').val(testo).show();
    });
    //alla pressione del tasto invio il testo dell'utente viene inserito
    template.children('input').keyup(function(e){
      if (e.which == 13) {
        var testo = $(this).val();
        $(this).hide();
        $(this).siblings('span.testo').text(testo).show();
      }
    });
    //concateno il template alla lista
    $('#lista').append(template)
  });
});
