// navegando no DOM(html)
var content = $('.content'); // selecionando um elemento que tenha uma class='content'
var section = $('<section>'); // criando uma section
var div = $('<div style="width:50px;height:50px;background-color:#09f;"></div>'); // crianod uma div com atributos css
var button = $('<button class="btn btn-primary">Clique aqui!</button>'); // criando um botão
var text = $('.text');

// animate
var left = $('#left');
var right = $('#right');
var cube = $('.cube');

// anexar o button no .content
content.append(section);
content.append(button);
content.append(div);

button.click(()=>{
  // atributo css, valor do atributo
  div.css('background-color', '#888888');
});

// eventos(quando o usuário teclar, passar o mouse por cima de um text, clicar em um botão, eventos de navegador)
// listener .on('nome do evento', funçãoCallback);
// hover(function, function);
function mouseOn() {
  $(this).css({
    'background-color':'yellow'
  });
}

function mouseOut() {
  $(this).css({
    'background-color':'transparent'
  });
}
text.hover(mouseOn, mouseOut);



right.click(function() {
  cube.animate({'left':'+=50px'}, "slow");
});

left.click(function() {
  cube.animate({'left':'-=50px'}, "slow");
});
