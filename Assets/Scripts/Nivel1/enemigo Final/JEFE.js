#pragma strict


var iniciando:boolean=true;

var velocidad:float=3.0f;


var generadorColmillos1:GameObject;
var generadorColmillos2:GameObject;
var generadorColmillos3:GameObject;
var generadorColmillos4:GameObject;
var generadorColmillos5:GameObject;
var generadorColmillos6:GameObject;

var colmillos;
function Start () {
	colmillos=[generadorColmillos1,generadorColmillos2,generadorColmillos3,generadorColmillos4,generadorColmillos5,generadorColmillos6];
}

function Update () {
	if(iniciando)
		avanzar();

}


function avanzar(){
	this.transform.Translate(Vector3.left*velocidad*Time.deltaTime);

	if(this.transform.position.x<=0){
		iniciando=false;

		for(var i=0; i<6;i++){
			//colmillos[i].gameObject.GetComponent.<generadorColmillos>().enPosicion();
		}

	}
}