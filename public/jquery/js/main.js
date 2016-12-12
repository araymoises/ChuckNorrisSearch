var data_scroll;
$(document).ready(function(){
	$('#search').on('submit', function(e){
		e.preventDefault();                                                                      //Hecho por Moisés Aray.
		e.stopPropagation();
		var html = '';
		var max  = 0;
		$('#wait').show();	//Mostrando el círculo de carga.
		var valor = $('#valor').val();
		$.ajax({
            url: "https://api.chucknorris.io/jokes/search?query="+valor,
            type: "GET",
            success: function(data){
				if(data.total != 0){//Si la búsqueda obtuvo resultado, se hace lo siguiente:
					data_scroll = data;
					$('#first').animate({//Se desvanece la vista de búsqueda.
							opacity: 0
						},
						300,
						function(){
							$('#wait').hide();
							$('#first').hide();
							$('#last').show();
							$('#last').animate({//Apareve la vista de resultados.
									opacity: 1
								},
								300,
								function(){
								//A primera instancia, sólo se mostrarán 10 resultados. pero, a medida que va bajando con el scroll, 			   //aparecen más resultados automáticamente.
									if(data.result.length < 10)
										max = data.result.length;
									else
										max = 10;
									for(i = 0; i < max; i++){//Con este loop, se cargan los resultados.
										html += "<div class="+"row"+">";
										html += "<h3><a href=\""+data.result[i].url+"\">"+data.result[i].id+"</a></h3>";
										html += "<p id=\"url\">"+data.result[i].url+"</p>";
										html += "<h5>\""+data.result[i].value+"\"</h5>";
										html += "</div><hr>";
									}
									$('#found').html(html);//Se visualizan los primeros resultados.
								}
							);
						}
					);
				}
				else{// Si la búqueda no obtuvo resultado, se notifica y se resetea el input.
					alert("No se han encontrado resultados.");
					$('#wait').hide();
					$('#valor').val('');
				}
				
            },
            error: function(xhr, status, err){//En caso de algún error imprevisto, se notifica y se resetea el input.
                alert("Error.");
				$('#wait').hide();
				$('#valor').val('');
                console.log(err);
            }
        });
	});
});
var floor       = 300;
var html_scroll = '';
var i           = 10;
$(function(){ // Esta función es para realizar el scroll infinito. Sirve para búsquedas que devuelves muchos resultados.
	$(window).scroll(function(){
		if($(this).scrollTop() > floor){
			html_scroll += "<div class="+"row"+">";
			html_scroll += "<h3><a href=\""+data_scroll.result[i].url+"\">"+data_scroll.result[i].id+"</a></h3>";
			html_scroll += "<p id=\"url\">"+data_scroll.result[i].url+"</p>";
			html_scroll += "<h5>\""+data_scroll.result[i].value+"\"</h5>";
			html_scroll += "</div><hr>";
			$('#found').append(html_scroll);//Se añaden resultados.
			html_scroll = '';
			floor += 150;//Si el usuario baja más, se vuelve a ejecutar la función.
			i++;
		}
	});
});