#pragma strict

var jugadorInmune:boolean=true;
var codigoJugador:jugador;

var gradiente:float=0;
var rapidez:float=3;
var conteo:float=0;
var tiempo:float=3;

function Start () {
	codigoJugador=this.GetComponent.<jugador>();
	codigoJugador.inmunidad=true;
}

function Update () {
	if(jugadorInmune){
		parpadear();
	}else{
		this.GetComponent.<SpriteRenderer>().color=new Vector4(1,1,1,1);
		codigoJugador.inmunidad=false;
		this.GetComponent.<inmunidad>().enabled=false;
	}
}

function parpadear(){
	 this.GetComponent.<SpriteRenderer>().color=new Vector4(0,1,0,gradiente);

	 gradiente+=(Time.deltaTime)*rapidez;
	 conteo+=Time.deltaTime;

	 if(gradiente<=0){
	 	rapidez=3;
	 }else if(gradiente>=1){
	 	rapidez=-3;
	 }


	 if(conteo>=tiempo){
	 	conteo=0;
	 	gradiente=1;
	 	rapidez=3;
	 	jugadorInmune=false;
	 }
}