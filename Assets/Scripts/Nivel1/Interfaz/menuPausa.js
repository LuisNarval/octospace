#pragma strict

var continuar:GameObject;
var reiniciar:GameObject;
var salir:GameObject;
var pausa:GameObject;

var colorOriginal:Color;

var estado:int=0;

var joystickCentro:boolean=true;

function Start () {
	colorOriginal=continuar.gameObject.GetComponent.<SpriteRenderer>().color;
	cambiarColor();
}

function Update () {
    if(Input.GetAxis("Vertical")==0)
        joystickCentro=true;
    
    if(Input.GetKeyDown(KeyCode.W)||Input.GetKeyDown(KeyCode.UpArrow)||Input.GetAxis("Vertical")>0){
	
        if(joystickCentro){
            joystickCentro=false;
            estado++;
            if(estado==1)
                estado=-2;
            cambiarColor();
            continuar.GetComponent.<AudioSource>().Play();
        
        }
    
    }
		
    if(Input.GetKeyDown(KeyCode.S)||Input.GetKeyDown(KeyCode.DownArrow)||Input.GetAxis("Vertical")<0){
		
        if(joystickCentro){
            joystickCentro=false;
            estado--;
            if(estado==-3)
                estado=0;
            cambiarColor();
            continuar.GetComponent.<AudioSource>().Play();
        }
	}
	
    if(Input.GetKeyDown(KeyCode.Space)||Input.GetKeyDown (KeyCode.Return)||Input.GetKeyDown (KeyCode.Mouse0)||Input.GetKeyDown(KeyCode.Joystick1Button0))
		ejecutarOpcion();

	if(Input.GetKeyDown(KeyCode.Escape)||Input.GetKeyDown(KeyCode.Joystick1Button6)||Input.GetKeyDown(KeyCode.Joystick1Button7)){
		GameObject.Find("Administrador").GetComponent.<pausa>().triggerPausa();
		GameObject.Find("Administrador").GetComponent.<pausa>().enEjecucion=false;
		
		pausa.GetComponent.<AudioSource>().Play();
		this.transform.position.y=3000;
		Destroy(this.gameObject,2);	
		this.gameObject.GetComponent.<menuPausa>().enabled=false;
	}
}

function pausa_estado1(){
	estado=0;
	cambiarColor();
	continuar.GetComponent.<AudioSource>().Play();
}

function pausa_estado2(){
	estado=-1;
	cambiarColor();
	continuar.GetComponent.<AudioSource>().Play();
}

function pausa_estado3(){
	estado=-2;
	cambiarColor();
	continuar.GetComponent.<AudioSource>().Play();
}

function ejecutarOpcion(){
	
	GameObject.Find("Administrador").GetComponent.<pausa>().triggerPausa();
	
	if(estado==0){
		GameObject.Find("Administrador").GetComponent.<pausa>().enEjecucion=false;
		pausa.GetComponent.<AudioSource>().Play();
	}

	if(estado==-1){
		GameObject.Find("Administrador").GetComponent.<administrador>().irAReinicio=true;
		GameObject.Find("Canvas").GetComponent.<Controlador1>().cuentaRegresiva=false;
		destruirMenu("nivel1");	
		reiniciar.GetComponent.<AudioSource>().Play();
	}

	if(estado==-2){
		GameObject.Find("Administrador").GetComponent.<administrador>().irAMenu=true;
		GameObject.Find("Canvas").GetComponent.<Controlador1>().cuentaRegresiva=false;
		destruirMenu("Menu");
		salir.GetComponent.<AudioSource>().Play();
	}

	this.transform.position.y=3000;
	Destroy(this.gameObject,2);	
	this.gameObject.GetComponent.<menuPausa>().enabled=false;
}


function destruirMenu(destino:String){
	GameObject.Find("Administrador").GetComponent.<administrador>().estado="Salir";
	GameObject.Find("Administrador").GetComponent.<administrador>().destino=destino;
}

	 


function cambiarColor(){
	if(estado==0){	
		continuar.gameObject.GetComponent.<UnityEngine.UI.Image>().color=Color.red;
		reiniciar.gameObject.GetComponent.<UnityEngine.UI.Image>().color=colorOriginal;
		salir.gameObject.GetComponent.<UnityEngine.UI.Image>().color=colorOriginal;
	}
	if(estado==-1){	
		reiniciar.gameObject.GetComponent.<UnityEngine.UI.Image>().color=Color.red;
		continuar.gameObject.GetComponent.<UnityEngine.UI.Image>().color=colorOriginal;
		salir.gameObject.GetComponent.<UnityEngine.UI.Image>().color=colorOriginal;
	}
	if(estado==-2){	
		salir.gameObject.GetComponent.<UnityEngine.UI.Image>().color=Color.red;
		reiniciar.gameObject.GetComponent.<UnityEngine.UI.Image>().color=colorOriginal;
		continuar.gameObject.GetComponent.<UnityEngine.UI.Image>().color=colorOriginal;
	}
}