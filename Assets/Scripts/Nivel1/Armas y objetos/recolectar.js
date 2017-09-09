#pragma strict

var estado=0;

function Start () {}
function Update () {}

function OnCollisionEnter(invasor:Collision){
	
	if(invasor.gameObject.name=="Jugador"){
		
		if(estado==0){
			if(GameObject.Find("Canvas").GetComponent.<Controlador1>().bombas<5){
				GameObject.Find("Canvas").GetComponent.<Controlador1>().bombas++;
				GameObject.Find("Canvas").GetComponent.<Controlador1>().reescribirPuntaje();
			}
			GameObject.Find("Canvas").GetComponent.<Controlador1>().puntos+=25;
			GameObject.Find("Canvas").GetComponent.<Controlador1>().reescribirPuntaje();
			GameObject.Find("Bombas").GetComponent.<AudioSource>().Play();	

		}else{
			activarArma(estado);
		}


		
		Destroy(this.gameObject);
	}

}


function activarArma(arma:int){

	GameObject.Find("Jugador").GetComponent.<Disparo>().cambiarArma(arma);
	
	/*GameObject.Find("Jugador").GetComponent.<Disparo>().estado=arma;
	GameObject.Find("Puntuacion").GetComponent.<AudioSource>().Play();

	if(arma==4){
		GameObject.Find("Jugador").GetComponentInChildren.<laser>().seguroLaser=false;
	}else{
		GameObject.Find("Jugador").GetComponentInChildren.<laser>().seguroLaser=true;
		GameObject.Find("Jugador").GetComponentInChildren.<laser>().line.enabled = false;
	}*/

}