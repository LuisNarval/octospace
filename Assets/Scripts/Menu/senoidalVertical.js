#pragma strict

var velocidad:float=5;
var amplitud:float=1;

var posicionInicialY:float;
private var angulo:float=0;

function Start () {
	posicionInicialY=this.transform.localPosition.y;
}

function FixedUpdate(){
	movimientoSenoidal();
}

function Update () {}


function movimientoSenoidal(){
	if(angulo>=360)
		angulo=0;
	
	angulo+=velocidad*Time.deltaTime;
	this.transform.localPosition.y=posicionInicialY+amplitud*Mathf.Sin(angulo*((2*Mathf.PI)/360));
}

function irAPosicionInicial(){
	this.transform.position.y=posicionInicialY;
	angulo=0;
}

function actualizarPosicionInicial(nuevaPosicion:float){
	posicionInicialY=nuevaPosicion;
}

function apagarRayos(){
	this.gameObject.GetComponentInChildren(SpriteRenderer).enabled=false;
}

function prenderRayos(){
	this.gameObject.GetComponentInChildren(SpriteRenderer).enabled=true;
}