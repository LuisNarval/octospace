#pragma strict
import UnityEngine.UI;

var vida:int=1000;

public var marcadorVidaJefe:Slider;
public var cuerpoMarcador:GameObject;

public var lastimado:boolean=false;


var tentaculo1:GameObject;
var tentaculo2:GameObject;
var tentaculo3:GameObject;
var tentaculo4:GameObject;
var tentaculo5:GameObject;
var tentaculo6:GameObject;

var laser:GameObject;

var explosiones2:GameObject;
var finalDelJuego:GameObject;

var ultimoGrito:AudioClip;

private var tentaculos:GameObject[];


function Start () {
	marcadorVidaJefe.value=vida;

	tentaculos=[tentaculo1,tentaculo2,tentaculo3,tentaculo4,tentaculo5,tentaculo6];
}

function Update () {
	if(lastimado){
		desangrarse();
	}
}





function OnCollisionEnter(invasor:Collision){
	if(invasor.gameObject.tag=="bala"){
		Destroy(invasor.gameObject);

		if(invasor.gameObject.name=="bala(Clone)")
			vida--;
		if(invasor.gameObject.name=="balaShotgun(Clone)")
			vida-=2;
		if(invasor.gameObject.name=="Misil(Clone)")
			vida-=4;

		sufrirDanio();


	}
}



function sufrirDanio(){
	lastimado=true;
	this.GetComponent.<SpriteRenderer>().color=new Vector4(1,1,1,1);
	gradiente=1;
	this.gameObject.GetComponent.<AudioSource>().Play();
	marcadorVidaJefe.value=vida;
	if(vida<=0){
			morir();
	}
}

function sufrirDanioLaser(){
	lastimado=true;
	this.GetComponent.<SpriteRenderer>().color=new Vector4(1,0,0,1);
	gradiente=0;
	this.gameObject.GetComponent.<AudioSource>().Play();

	marcadorVidaJefe.value=vida;

	if(vida<=0){
			morir();
	}
}




function morir(){
	for(var j=0; j<6;j++){

		this.gameObject.GetComponent.<AudioSource>().clip=ultimoGrito;
		this.gameObject.GetComponent.<AudioSource>().Play();


		GameObject.Find("Jugador").GetComponent.<jugador>().inmunidad=true;

		tentaculos[j].GetComponent.<tentaculos>().vida=0;
		tentaculos[j].GetComponent.<tentaculos>().sufrirDanio();

		cuerpoMarcador.SetActive(false);

		this.GetComponent.<SpriteRenderer>().enabled=false;
		this.GetComponent.<SphereCollider>().enabled=false;
		GameObject.Find("Jefe").GetComponent.<laserJefe>().enabled=false;
		laser.SetActive(false);

		explosiones2.SetActive(true);
		finalDelJuego.SetActive(true);

	}
}



public var gradiente:float=1;
private var rapidez:float=4;

function desangrarse(){

	this.GetComponent.<SpriteRenderer>().color=new Vector4(1,gradiente,gradiente,1);

	 gradiente-=(Time.deltaTime)*rapidez;
	

	 if(gradiente<=0){
	 	rapidez=-4;
	 }

	 else if(gradiente>=1.2){
	 	lastimado=false;
	 	gradiente=1;
	 	rapidez=3;
	 }

}