#pragma strict

var reiniciar:GameObject;
var salir:GameObject;

var colorOriginal:Color;
var estado:int=0;

var elegirOpcion=false;

function Start () {
	colorOriginal=reiniciar.gameObject.GetComponent.<UnityEngine.UI.Image>().color;
	cambiarColor();
}

function Update () {

	if(elegirOpcion){
			
			if(Input.GetKeyDown(KeyCode.W)||Input.GetKeyDown(KeyCode.UpArrow)){
				estado++;
				
				if(estado==1)
					estado=-1;
					
				cambiarColor();
				this.GetComponent.<AudioSource>().Play();
			}
			

			if(Input.GetKeyDown(KeyCode.S)||Input.GetKeyDown(KeyCode.DownArrow)){
				estado--;
				
				if(estado==-2)
					estado=0;
					
				cambiarColor();
				GetComponent.<AudioSource>().Play();
			}
		
			if(Input.GetKeyDown(KeyCode.Space)||Input.GetKeyDown (KeyCode.Return)||Input.GetKeyDown (KeyCode.Mouse0))
				ejecutarOpcion();
	}


}


function gameOver_Estado1(){
	estado=0;
	cambiarColor();
	GetComponent.<AudioSource>().Play();
}

function gameOver_Estado2(){
	estado=-1;
	cambiarColor();
	GetComponent.<AudioSource>().Play();
}

function ejecutarOpcion(){
	
	//GameObject.Find("Administrador").GetComponent.<pausa>().triggerPausa();
	
	if(estado==0){
		GameObject.Find("Administrador").GetComponent.<administrador>().irAReinicio=true;
		destruirMenu("nivel1");	
		reiniciar.GetComponent.<AudioSource>().Play();
	}

	if(estado==-1){
		GameObject.Find("Administrador").GetComponent.<administrador>().irAMenu=true;
		destruirMenu("Menu");
		salir.GetComponent.<AudioSource>().Play();
	}

	this.GetComponent.<Animator>().SetTrigger("irse");
}


function destruirMenu(destino:String){
	GameObject.Find("Administrador").GetComponent.<administrador>().estado="Salir";
	GameObject.Find("Administrador").GetComponent.<administrador>().destino=destino;
}

	 


function cambiarColor(){
	if(estado==0){	
		reiniciar.gameObject.GetComponent.<UnityEngine.UI.Image>().color=Color.green;
		salir.gameObject.GetComponent.<UnityEngine.UI.Image>().color=colorOriginal;
	}
	if(estado==-1){	
		reiniciar.gameObject.GetComponent.<UnityEngine.UI.Image>().color=colorOriginal;
		salir.gameObject.GetComponent.<UnityEngine.UI.Image>().color=Color.green;
	}
}