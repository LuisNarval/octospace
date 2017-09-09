#pragma strict

var velocidad:float=50;
var amplitud:float=20;
var direccion:float=1;


private var posicionInicialY:float;
private var angulo:float=0;

function Start () {
	posicionInicialY=this.transform.position.y;
}

function FixedUpdate(){
	rotar();
}

function Update () {}


function rotar(){
	if(angulo>=360)
		angulo=0;
	
	angulo+=velocidad*Time.deltaTime;
	//this.transform.position.y=posicionInicialY+amplitud*Mathf.Sin(angulo*((2*Mathf.PI)/360));

	this.transform.Rotate(Vector3.forward*amplitud*Time.deltaTime*Mathf.Sin(angulo*(  (2*Mathf.PI)/360)   )) ;
}


