#pragma strict

var respawnMinimaX:float=1;
var respawnMaximaX:float=20;

var posicionInicialY:float;

var anfitrion:GameObject;



function Start () {}

function Update () {
	if(this.transform.position.x<-10)
		respawn();	
}

function respawn(){	
	this.transform.position.x=10+Random.Range(-respawnMinimaX,respawnMaximaX);
	this.transform.position.y=Random.Range(-2.0F, 4.0F);
	anfitrion.gameObject.GetComponent.<granada>().posicionInicialY=this.transform.position.y;
}