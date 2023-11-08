var imgList =				[
							    '../img/bgBismuth.jpg',
							    '../img/bgRed.jpg',
								'../img/screenBoton1.jpg',
								'../img/screenBoton2.jpg',
								'../img/screenBoton3.jpg',
								'../img/bgMotores1.jpg',
								'../img/bgMotores2.jpg'
							];
							
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:

function startAnimationHere( whereAnimate ) {	
	$animados =				$( '#' + whereAnimate ).find( '.animado' );
console.log(whereAnimate + ' seccion');

	$animados.css({
		'animationPlayState': 				'running',
		'-webkit-animation-play-state': 	'running',
		'-moz-animation-play-state': 		'running'
	});
} //start animation on this layer

//open this section please -------------------
function openThisSection( thisSection ) {
	//$( '#' + thisSection ).fadeIn( );
	$( '#' + thisSection ).addClass('activeSection');
	console.log('addingClas #' + thisSection);
}
//END open this section please -------------------

//closeThis section please -------------------
function closeThisSection( thisSection ) {
	console.log( thisSection);
	//$( '#' + thisSection ).fadeOut( 600 );
	$( '#' + thisSection ).removeClass('activeSection');
}
//END closeThis section please -------------------

//changeButtonFullLink
function changeButtonFullLink( whatButton ) {
	console.log(whatButton + "boton Full Link");
	$( '#fullLinkSection').removeClass( 'boton1 boton2 boton3 boton4' ).addClass( whatButton );
	$( '#fullLinkSection' ).addClass( whatButton );
	
	$( '.selectButton' ).removeClass( 'active' );
	$( '#' + whatButton ).addClass( 'active' );

} 
//END changeButtonFullLink---------------------------

//change bg, button color active  and text on ColorPack
function changeColorPackThings( whatColor ) {
	
	$( '.colorButton' ).removeClass( 'active' );
	$( '#' + whatColor ).addClass( 'active' );
	
	$( '#colorPackSection').removeClass( 'color1 color2 color3' ).addClass( whatColor );
	
} 
//END changeColorPackThings---------------------------
$( document ).ready(function() {
    console.log('doc ready');
    startAnimationHere( 'homeSection' ); //lanzamos la primera animacion
	//startAnimationHere( 'fullLinkSection' ); //lanzamos la primera animacion
	preload(); //hacer carga de las imagenes pesadas de las otras secciones para evitar parpadeos
	
	$( '.backButton' ).on( 'click',function(){
		var $this = 							$( this ),
			thisId =							$this.attr( 'id' ).replace('From', '');
		closeThisSection( thisId );
	});
	
	$( '.homeMenu' ).on( 'click',function(){
		var $this = 							$( this ),
			thisId =							$this.attr( 'id' );
			
		openThisSection( $this.attr( 'id' ) + 'Section' );
		startAnimationHere( $this.attr( 'id' ) + 'Section' ); //MOSTRAMOS CAPA Y LANZAMOS ANIMACION
	});
	
	$( '.selectButton' ).on( 'click',function(){
		var $this = 							$( this ),
			thisId =							$this.attr( 'id' );
		changeButtonFullLink( thisId );
	});
	
	$( '.colorButton' ).on( 'click',function(){
		var $this = 							$( this ),
			thisId =							$this.attr( 'id' );
		changeColorPackThings( thisId );
	});
	
    
});// ready