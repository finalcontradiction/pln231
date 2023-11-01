$(document).ready(function() {  
    $('form').on('submit', function(event) { 
        event.preventDefault(); 
    // get the CSRF token from the cookie 
    var csrftoken = Cookies.get('csrftoken'); 
      
    // set the CSRF token in the AJAX headers 
    $.ajaxSetup({ 
        headers: { 'X-CSRFToken': csrftoken } 
    });
        var tiporeceita = $("input[type='radio'][name='tiporeceita']:checked").val();
        var tempomedio = $('#tempo-medio-receita').val();
        var ingredientes = $('#ingredientes-receita').val();
        var estacao = $("input[type='radio'][name='estacao']:checked").val(); // Nova variável estacao
        var regiao = $("input[type='radio'][name='regiao']:checked").val(); // Nova variável regiao
        var instrIngr = $("input[type='radio'][name='ingredientes']:checked").val();
        // Clear
        $('#rec_title').html('');
        $('#rec_desc').html('');
        $('#rec_prep_time').html('');
        $('#rec_cook_time').html('');
        $('#rec_ingr').html('');
        $('#rec_direc').html('');
        $('.btn').prop('disabled', true);
        $.ajax({ 
            url: '/pln231/', 
            type: 'POST', 
            data: {tipo: tiporeceita, tempo: tempomedio, ingr: ingredientes, estacao: estacao, regiao: regiao, instrIngr: instrIngr}, 
            dataType: 'json', 
            success: function(data) {
                $('.btn').prop('disabled', false);
                $(".btn .spinner-border").hide();
                $(".btn .btn-text").html("Gerar receita");
                $('#rec_title').append(data.title);
                $('#rec_desc').append(data.description);
                $('#rec_prep_time').append('<i>Tempo de preparo:</i> ' + data.prep_time);
                $('#rec_cook_time').append('<i>Tempo de cozimento:</i> ' + data.prep_time);
                $('#rec_ingr').append('<b>Ingredientes:</b>\
                                <br>');
                $('#rec_direc').append('<b>Modo de preparo:</b>\
                                <br>');
                renderList('rec_ingr', data.ingredients);
                renderList('rec_direc', data.directions);
            },

            error: function() {
                $("#error").html("");
                $("#error").show();
                $("#error").html("Houve um erro. Tente novamente.");
                setTimeout(function () {
                    $("#error").fadeOut(400);
                }, 2000);
                $('.btn').prop('disabled', false);
                $(".btn .btn-text").html("Gerar receita");
                $(".btn .spinner-border").hide();
            },

            timeout: 29000
        }); 
    }); 
});
function renderList(divId, jsonObj){
    var features = document.getElementById(divId);
                var ul = document.createElement('ul');
                for (var i = 0; i < jsonObj.length; ++i) {
                    var li = document.createElement('li');
                    ul.appendChild(li);
                    li.innerHTML = jsonObj[i];
                }
                features.appendChild(ul);
}
function loading() {
        $(".btn .spinner-border").show();
        $(".btn .btn-text").html("Gerando...");
    }