	#pragma strict
var textoPuntos:UnityEngine.UI.Text;
var textoBombas:UnityEngine.UI.Text;
var textoZona:UnityEngine.UI.Text;
var textoArmas:UnityEngine.UI.Text;

var textoReloj:UnityEngine.UI.Text;
var colorReloj:Color;

var menuGameOver:GameObject;

var cajaBala:GameObject;
var cajaEscopeta:GameObject;
var cajaMisil:GameObject;
var cajaLaser:GameObject;


var tiempo:int;
var Vida:GameObject;
var posicionVidas:Transform;

var explosion:GameObject;
var jugador:GameObject;

var puntos:int=0;
var bombas:int=0;
var vida:int=3;
var zona:int=0;

var muerto:boolean=false;

var tp:int;
var tiempoInicial=120;
private var reloj:int;
private var tiempoReloj:int;
private var rout:boolean=false;
var cuentaRegresiva:boolean=false;


function Start () {
	actualizarVida();
	tp=Time.time;
	reloj=tiempoInicial;
	tiempoReloj=tiempoInicial;
	textoReloj.text=""+reloj;
}

function Update () {
	if(muerto){
		if(vida>=1)
			reaparecer();
		else
			GameOver();
	}

	if(cuentaRegresiva)
		clock();
}


function clock(){
	
	reloj=(tp-Time.time)+tiempoReloj;

	textoReloj.text=""+reloj;

	if(reloj<20){
		if(!rout)
			seTerminaElTiempo();

		if(reloj<=0){
			vida=0;
			muerteJugador();
			GameObject.Find("Reloj").GetComponent.<AudioSource>().Stop();
		}
	}
}

function seTerminaElTiempo(){
	textoReloj.color=Color.red;
	GameObject.Find("Reloj").GetComponent.<AudioSource>().Play();
	rout=true;
}

function tiempoExtra(extra:int){
	tp=Time.time;
	tiempoReloj=reloj+extra;
	textoReloj.color=Color.white;
	rout=false;
	GameObject.Find("Reloj").GetComponent.<AudioSource>().Stop();
}


function reescribirPuntaje(){
	textoPuntos.text="PUNTOS: "+ puntos;
	textoBombas.text="x "+ bombas;
	textoZona.text="Zona: "+zona+"/9";
}


function actualizarVida(){
var vidas:GameObject[];
vidas=GameObject.FindGameObjectsWithTag("Vidas");
for each (destructor in vidas){
	Destroy(destructor);
}
	var avance:float=0;
	for(var i=0;i<vida;i++){
		Instantiate(Vida, new Vector3(posicionVidas.position.x+avance+.4,posicionVidas.position.y,-6),Vida.transform.rotation);
		avance+=0.6;
	}
}

function muerteJugador(){
  vida--;	
  actualizarVida();
  Instantiate(explosion,GameObject.Find("Jugador").transform.position, this.transform.rotation);
  Destroy(GameObject.Find("Jugador").gameObject);	
  acomodarInterfazArmas(1,0);
  tiempo=Time.time;
  muerto=true;
}

function reaparecer(){
	if(Time.time-tiempo>2){
		var dummy:GameObject=Instantiate(jugador, new Vector3(2,5,0),this.transform.rotation);
		dummy.name="Jugador";
		muerto=false;
	}
}

function GameOver(){
	cuentaRegresiva=false;
	menuGameOver.SetActive(true);
    GameObject.Find("Administrador").GetComponent.<pausa>().enEjecucion=true;
    muerto=false;
}

function actualizarBalas(b:int){
	textoArmas.text="x "+b; 
}

function acomodarInterfazArmas(a:int,b:int){
	if(a==1){
		cajaBala.SetActive(true);
		cajaEscopeta.SetActive(false);
 		cajaMisil.SetActive(false);
 		cajaLaser.SetActive(false);
 		textoArmas.text="x"; 
	}else 

	if(a==2){
		cajaBala.SetActive(false);
		cajaEscopeta.SetActive(true);
 		cajaMisil.SetActive(false);
 		cajaLaser.SetActive(false);
 		textoArmas.text="x "+b; 
	}else

	if(a==3){
		cajaBala.SetActive(false);
		cajaEscopeta.SetActive(false);
 		cajaMisil.SetActive(true);
 		cajaLaser.SetActive(false);
 		textoArmas.text="x "+b; 
	}else 

	if(a==4){
		cajaBala.SetActive(false);
		cajaEscopeta.SetActive(false);
 		cajaMisil.SetActive(false);
 		cajaLaser.SetActive(true);
 		textoArmas.text="x "+b; 
	}
}
