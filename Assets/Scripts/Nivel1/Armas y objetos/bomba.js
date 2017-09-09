#pragma strict

var velocidad:int=5;
var Controlador:GameObject;
var explosion:GameObject;
var codigoControlador:Controlador1;
//var ima_explosion:Sprite;

var puntos:int=0;

var angulo:float=0;

private var tiempo:float;

function Start () {
	Controlador=GameObject.Find("Canvas");
	codigoControlador=Controlador.GetComponent.<Controlador1>();
	tiempo=Time.time;
}

function Update () {
	if(GameObject.Find("Administrador").GetComponent.<administrador>().pausa==false){
		
		if(angulo>=360)
			angulo=0;
		
		this.transform.Rotate(Vector3.forward*angulo*Time.deltaTime);
		
		
		if(Time.time-tiempo>=1.5){
		
			//this.gameObject.GetComponent.<SpriteRenderer>().sprite=ima_explosion;
			//this.gameObject.GetComponent.<SpriteRenderer>().color=Color.yellow;	
			
			this.transform.localScale+=new Vector3(1,1,1)*100*Time.deltaTime;
			
			angulo+=velocidad*-100*Time.deltaTime;
		}else{
			this.transform.position.x+=velocidad*Time.deltaTime;
			angulo+=velocidad*-1000*Time.deltaTime;	
		}				
					
		if(this.transform.localScale.x>=80)
			Destroy(gameObject);
	}	
}


function OnCollisionEnter(invasor:Collision){
	
	if(invasor.gameObject.tag=="Zona1"||invasor.gameObject.tag=="Zona2"||invasor.gameObject.tag=="Zona3"||invasor.gameObject.tag=="Zona4"||
	   invasor.gameObject.tag=="Zona5"||invasor.gameObject.tag=="Zona6"||invasor.gameObject.tag=="Zona7"||invasor.gameObject.tag=="Zona8"||invasor.gameObject.tag=="Zona9"){

	   if(invasor.transform.position.x<16&&invasor.transform.position.x>0){

			var dummy:GameObject=Instantiate(explosion, invasor.transform.position, invasor.transform.rotation);
			Destroy(dummy,2f);
			codigoControlador.puntos+=invasor.gameObject.GetComponent.<Respawn>().puntos;
			codigoControlador.reescribirPuntaje();
			
			invasor.gameObject.GetComponent.<Respawn>().vida-=10;
			invasor.gameObject.transform.position.x+=40;
		}

	}


	if(invasor.gameObject.tag=="colmillo"){

	   if(invasor.transform.position.x<16&&invasor.transform.position.x>0){

			var dummy2:GameObject=Instantiate(explosion, invasor.transform.position, invasor.transform.rotation);
			Destroy(dummy2,2f);
			codigoControlador.puntos+=30;
			codigoControlador.reescribirPuntaje();
			Destroy(invasor.gameObject);
		}

	}


	if(invasor.gameObject.tag=="tentaculo"){
	   if(invasor.transform.position.x<16&&invasor.transform.position.x>0){

			invasor.gameObject.GetComponent.<tentaculos>().vida-=10;
			invasor.gameObject.GetComponent.<tentaculos>().sufrirDanioLaser();	
		}
	}


	if(invasor.gameObject.tag=="ojoJefeFinal"){
	   if(invasor.transform.position.x<16&&invasor.transform.position.x>0){

			invasor.gameObject.GetComponent.<ojoJefe>().vida-=10;
			invasor.gameObject.GetComponent.<ojoJefe>().sufrirDanioLaser();	
		}
	}


}