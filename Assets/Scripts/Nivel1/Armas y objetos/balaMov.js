#pragma strict
var velocidad:int=10;
var Controlador:GameObject;
var explosion:GameObject;
var codigoControlador:Controlador1;

var puntos:int=0;

var angulo:float=0;

function Start () {
	Controlador=GameObject.Find("Canvas");
	codigoControlador=Controlador.GetComponent.<Controlador1>();
}

function Update () {
	if(GameObject.Find("Administrador").GetComponent.<administrador>().pausa==false){
		angulo+=velocidad*-1000*Time.deltaTime;
	
		if(angulo>=360)
			angulo=0;
		
		this.transform.position.x+=velocidad*Time.deltaTime;
		this.transform.Rotate(Vector3.forward*angulo*Time.deltaTime);
		
		if(this.transform.localPosition.x>=18)
			Destroy(this.gameObject,2);
	
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
		
		this.transform.position.y=300;
		Destroy(this.gameObject,3);
	}

	else if(invasor.gameObject.tag=="tentaculo"||invasor.gameObject.tag=="cuerpoJefeFinal"){


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