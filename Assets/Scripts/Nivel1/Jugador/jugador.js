#pragma strict

var codigoGranada:Respawn;
var textoBombas:UnityEngine.UI.Text;
var bombas:int=0;
var controlador:Controlador1;
var inmunidad=false;

function Start () {
	controlador=GameObject.Find("Canvas").GetComponent.<Controlador1>();
}

function Update () {


}


function OnCollisionEnter(invasor:Collision){
	/*
	if(invasor.gameObject.name=="Granada"){
		codigoGranada=invasor.gameObject.GetComponent.<Respawn>();
		codigoGranada.respawn();
		bombas++;
		textoBombas.text="BOMBAS: "+bombas;
		invasor.gameObject.GetComponent.<AudioSource>().Play();
	}*/
	
	if((invasor.gameObject.tag=="Zona1"||invasor.gameObject.tag=="Zona2"||invasor.gameObject.tag=="Zona3"||invasor.gameObject.tag=="Zona4"||
	   invasor.gameObject.tag=="Zona5"||invasor.gameObject.tag=="Zona6"||invasor.gameObject.tag=="Zona7"||invasor.gameObject.tag=="Zona8"||invasor.gameObject.tag=="Zona9"||
	   invasor.gameObject.tag=="tentaculo"||invasor.gameObject.tag=="ojoJefeFinal"||invasor.gameObject.tag=="colmillo"||invasor.gameObject.tag=="laserJefe")&&!inmunidad){
	   controlador.muerteJugador();	
	}

	
	if(invasor.gameObject.tag=="Tanque"){
	   
	   if(controlador.vida<5){
		  controlador.vida++;
		  controlador.actualizarVida();
	   }

	   controlador.puntos+=50;
	   controlador.reescribirPuntaje();
	   Destroy(invasor.gameObject);
	   this.gameObject.GetComponent.<AudioSource>().Play();
	}


	if(invasor.gameObject.tag=="tiempo45"){
		Destroy(invasor.gameObject);
		controlador.tiempoExtra(45);
		this.gameObject.GetComponent.<AudioSource>().Play();
	}

	if(invasor.gameObject.tag=="tiempo120"){
		Destroy(invasor.gameObject);
		controlador.tiempoExtra(120);
		this.gameObject.GetComponent.<AudioSource>().Play();
	}
}