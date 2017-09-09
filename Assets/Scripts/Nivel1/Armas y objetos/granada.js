#pragma strict

var velocidad:float=1;
var amplitud:float=1;

//var respawnMinimaX:float=1;
//var respawnMaximaX:float=20;

var velocidadAngular:float=90;



var angulo:float;

var posicionInicialY:float;
private var anguloGiro:float=0;


function Start () {
	posicionInicialY=this.transform.position.y;
}



function FixedUpdate(){
	
	
		movimientoSenoidal();
		rotacion();
	
}


function Update () {
	/*if(this.transform.position.x<=-15)
		respawn();*/
	
	if(angulo>=360)
		angulo=0;
}




function rotacion(){
	anguloGiro=velocidadAngular*Time.deltaTime;
	this.transform.Rotate(Vector3.forward*anguloGiro);
}

function movimientoSenoidal(){
	this.transform.position.x-=velocidad*Time.deltaTime;
	angulo+=60*velocidad*Time.deltaTime;
	this.transform.position.y=posicionInicialY+amplitud*Mathf.Sin(angulo*((2*Mathf.PI)/360));
}






/*
function respawn(){	
		this.transform.position.x=9+Random.Range(-respawnMinimaX,respawnMaximaX);
		this.transform.position.y=Random.Range(-2.0F, 4.0F);
		posicionInicialY=this.transform.position.y;
}*/