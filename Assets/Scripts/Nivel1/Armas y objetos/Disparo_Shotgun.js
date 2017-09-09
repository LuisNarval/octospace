#pragma strict
var velocidad:int=10;
var Controlador:GameObject;
var explosion:GameObject;
var codigoControlador:Controlador1;

var puntos:int=0;
var angulo:int;

function Start () {
	Controlador=GameObject.Find("Canvas");
	codigoControlador=Controlador.GetComponent.<Controlador1>();
}

function Update () {

	if(GameObject.Find("Administrador").GetComponent.<administrador>().pausa==false){

		//movimiento
		this.transform.position.x+=velocidad*Time.deltaTime;
		this.transform.position.y+=angulo*Time.deltaTime;

		if(this.transform.localPosition.x>=18)
			Destroy(this.gameObject);
	
	}	
}

function OnCollisionEnter(invasor:Collision){
	
	if(invasor.gameObject.tag=="Zona1"||invasor.gameObject.tag=="Zona2"||invasor.gameObject.tag=="Zona3"||invasor.gameObject.tag=="Zona4"||
	   invasor.gameObject.tag=="Zona5"||invasor.gameObject.tag=="Zona6"||invasor.gameObject.tag=="Zona7"||invasor.gameObject.tag=="Zona8"||invasor.gameObject.tag=="Zona9"){
		

		invasor.gameObject.GetComponent.<Respawn>().vida-=1;
		invasor.gameObject.GetComponent.<Respawn>().sufrirDanio();
		
		if(invasor.gameObject.GetComponent.<Respawn>().vida<=0){
			invasor.gameObject.GetComponent.<Respawn>().dropear();
			invasor.gameObject.GetComponent.<Respawn>().respawn();

			var dummy:GameObject=Instantiate(explosion, this.transform.position,this.transform.rotation);
			Destroy(dummy,2f);

			codigoControlador.puntos+=invasor.gameObject.GetComponent.<Respawn>().puntos;
			codigoControlador.reescribirPuntaje();
		}
		Destroy(this.gameObject);
	}

	else if(invasor.gameObject.tag=="tentaculo"||invasor.gameObject.tag=="colmillo"||invasor.gameObject.tag=="cuerpoJefeFinal"){


		this.transform.position.y=300;
		Destroy(this.gameObject,3);
	}

	else if(invasor.gameObject.tag=="ojoJefeFinal"){
		var dummy2:GameObject=Instantiate(explosion, this.transform.position,this.transform.rotation);
		Destroy(dummy2,2f);

		this.transform.position.y=300;
		Destroy(this.gameObject,3);
	}
}




/*Este codigo va en Disparo.js
Es la forma con la que se discaran los 3 al mismo tiempo

	if(Input.GetKey(KeyCode.N)){
		
		if(timer==0){
			var dummy1:GameObject=Instantiate(Shotguns,this.transform.position,this.transform.rotation);
			dummy1.gameObject.GetComponent.<Disparo_Shotgun>().angulo=0;
			var dummy2:GameObject=Instantiate(Shotguns,this.transform.position,this.transform.rotation);
			dummy2.gameObject.GetComponent.<Disparo_Shotgun>().angulo=-7;
			var dummy3:GameObject=Instantiate(Shotguns,this.transform.position,this.transform.rotation);
			dummy3.gameObject.GetComponent.<Disparo_Shotgun>().angulo=7;
			}

		timer+=2*Time.deltaTime;

		if(timer>=1)
			timer=0;
	}
			if(Input.GetKeyUp(KeyCode.N)){
			timer=0;


*/