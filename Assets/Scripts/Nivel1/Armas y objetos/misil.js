#pragma strict


private var xObjetivo:float;
private var yObjetivo:float;

private var codigoControlador:Controlador1;
private var objetivo:GameObject;
private var enfocado=false;

var explosion:GameObject;
var velocidad:float=5;



function Start () {
	xObjetivo=50;
	yObjetivo=this.transform.position.y;
	codigoControlador=GameObject.Find("Canvas").GetComponent.<Controlador1>();
}

function Update () {

	seguir();

	if(this.transform.position.x>17||this.transform.position.x<-4){
		Destroy(this.gameObject,2);
	}

	if(xObjetivo>17||xObjetivo<-1){
		Desenfocar();
	}

}



function seguir(){

	if(enfocado){
		if(objetivo!=null){
			xObjetivo=objetivo.transform.position.x;
			yObjetivo=objetivo.transform.position.y;
		}else if(objetivo==null){
			Desenfocar();
		}
	}


	if(enfocado){
		//Sin Vector Unitario:
		//this.transform.Translate(new Vector3(obtenerRx(),obtenerRy(),0)*2*Time.deltaTime);
	
		//Con Vector Unitario:
		this.transform.Translate(new Vector3(vectorUnitario(obtenerRx()),vectorUnitario(obtenerRy()),0)*velocidad*2*Time.deltaTime);
	}else{
		this.transform.Translate(Vector3.right*velocidad*Time.deltaTime);
	}

	this.transform.rotation=Quaternion.Euler(0,0,obtenerAngulo());

}



function vectorUnitario(R:float){	
	return R/Mathf.Sqrt(  Mathf.Pow(obtenerRx(),2)+Mathf.Pow(obtenerRy(),2)  );
}

function obtenerRx(){
	return xObjetivo-this.transform.position.x;
}

function obtenerRy(){
	return yObjetivo-this.transform.position.y;
}


function obtenerAngulo(){
	var Rx:float=obtenerRx();
	var Ry:float=obtenerRy();
	var angulo:float;

	if(Rx==0){
		if(Ry>=0)
			angulo=90;
		else if(Ry<0)
			angulo=-90;
	}else{
		angulo=Mathf.Rad2Deg*Mathf.Atan(Ry/Rx);
	}
	
	if(Rx<0)
		angulo+=180;

	return angulo;
}


function Desenfocar(){
	enfocado=false;
	xObjetivo=50;
	yObjetivo=yObjetivo=this.transform.position.y;
	
	if(objetivo!=null&&objetivo.gameObject.tag!="ojoJefeFinal"){
		objetivo.GetComponent.<Respawn>().marcadoPorMisil=false;
		objetivo=null;
	}

	if(objetivo!=null&&objetivo.gameObject.tag=="ojoJefeFinal"){
		objetivo=null;
	}
}

function Enfocar(target:GameObject){
	enfocado=true;
	objetivo=target;
	objetivo.GetComponent.<Respawn>().marcadoPorMisil=true;

}



function OnTriggerEnter(invasor:Collider){
	if(!enfocado){
		if(invasor.tag=="Zona1"||invasor.tag=="Zona2"||invasor.tag=="Zona3"||invasor.tag=="Zona4"||invasor.tag=="Zona5"||
		   invasor.tag=="Zona6"||invasor.tag=="Zona7"||invasor.tag=="Zona8"||invasor.gameObject.tag=="Zona9"){

		  	
		   	  if(invasor.GetComponent.<Respawn>().marcadoPorMisil==false){
			     Enfocar(invasor.gameObject);
			  }
		

		}else if(invasor.gameObject.tag=="ojoJefeFinal"){
			enfocado=true;
			objetivo=invasor.gameObject;
		}
	}
}


function OnCollisionEnter(invasor:Collision){
	
	if(invasor.gameObject.tag=="Zona1"||invasor.gameObject.tag=="Zona2"||invasor.gameObject.tag=="Zona3"||invasor.gameObject.tag=="Zona4"||
	   invasor.gameObject.tag=="Zona5"||invasor.gameObject.tag=="Zona6"||invasor.gameObject.tag=="Zona7"||invasor.gameObject.tag=="Zona8"||
	   invasor.gameObject.tag=="Zona9"){
		
		invasor.gameObject.GetComponent.<Respawn>().vida-=4;
		invasor.gameObject.GetComponent.<Respawn>().sufrirDanio();
		
		if(objetivo!=null)
			Desenfocar();

		if(invasor.gameObject.GetComponent.<Respawn>().vida<=0){
			invasor.gameObject.GetComponent.<Respawn>().dropear();
			invasor.gameObject.GetComponent.<Respawn>().respawn();
			var dummy:GameObject=Instantiate(explosion, this.transform.position,this.transform.rotation);
			Destroy(dummy,2f);
			codigoControlador.puntos+=invasor.gameObject.GetComponent.<Respawn>().puntos;
			codigoControlador.reescribirPuntaje();
		}
		
		this.transform.position.y=500;
		Destroy(this.gameObject,3);
	}

	else if(invasor.gameObject.tag=="tentaculo"||invasor.gameObject.tag=="colmillo"||invasor.gameObject.tag=="cuerpoJefeFinal"){


		this.transform.position.y=300;
		Destroy(this.gameObject);
	}

	else if(invasor.gameObject.tag=="ojoJefeFinal"){
		var dummy2:GameObject=Instantiate(explosion, this.transform.position,this.transform.rotation);
		Destroy(dummy2,2f);

		this.transform.position.y=300;
		Destroy(this.gameObject);
	}

}