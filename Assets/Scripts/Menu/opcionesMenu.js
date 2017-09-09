#pragma strict
import UnityEngine.SceneManagement;
 //using UnityEngine.SceneManagement;


var sound_IrAlJuego:AudioSource;
var sound_Entrada:AudioSource;
var sound_Salida:AudioSource;


var imagen:UnityEngine.Sprite;
var estado:int=0;
var menuAnim:Animator;
var menuVentanaAzul:GameObject;
var opcionTitulo:GameObject;
var txt_puntuaciones:GameObject;
var txt_creditos:GameObject;

var estadoMenu:boolean=true;
var estadoPuntuaciones:boolean=false;
var estadoCreditos:boolean=false; 
var estadoEntrandoAlJuego:boolean=false;

var op_Iniciar:GameObject;
var op_puntuaciones:GameObject;
var op_creditos:GameObject;
var op_salir:GameObject;

var nave:GameObject;
var animNave:Animator;

var cortinilla:GameObject;

var codigoOpciones:naveMenuDemo;


function Start () {
	codigoOpciones=op_Iniciar.gameObject.GetComponent.<naveMenuDemo>();
	menuVentanaAzul.SetActive(true);
}

function Update () {

if(estadoMenu)
	menu();

if(estadoPuntuaciones)
	puntuaciones();

if(estadoCreditos)
	creditos();

if(estadoEntrandoAlJuego)	
	entrandoAlJuego();		
	
	//if(this.transform.localPosition.y==-20)
	//	this.gameObject.GetComponent.<SpriteRenderer>().sprite=imagen;	
}

function estado1(){
	if(!estadoEntrandoAlJuego){
		estado=0;
		acomodarPuntero();
		this.GetComponent.<AudioSource>().Play();
	}
}
function estado2(){
	if(!estadoEntrandoAlJuego){
		estado=-1;
		acomodarPuntero();
		this.GetComponent.<AudioSource>().Play();
	}
}
function estado3(){
	if(!estadoEntrandoAlJuego){
		estado=-2;
		acomodarPuntero();
		this.GetComponent.<AudioSource>().Play();
	}
}
function estado4(){
	if(!estadoEntrandoAlJuego){
		estado=-3;
		acomodarPuntero();
		this.GetComponent.<AudioSource>().Play();
	}
}

function menu(){
	
	if(opcionTitulo.transform.localPosition.x<-350)
		opcionTitulo.transform.localPosition.x+=500*Time.deltaTime;
	
	if(opcionTitulo.transform.localPosition.x>=-350){
			
			
			//movimiento del cursor
			if(Input.GetKeyDown(KeyCode.W)||Input.GetKeyDown(KeyCode.UpArrow)){
				estado++;
				if(estado>=1)
					estado=-3;
				
				acomodarPuntero();
				this.GetComponent.<AudioSource>().Play();
			}
			
			if(Input.GetKeyDown(KeyCode.S)||Input.GetKeyDown(KeyCode.DownArrow)){
				estado--;
				if(estado<=-4)
					estado=0;
				
				acomodarPuntero();
				this.GetComponent.<AudioSource>().Play();
			}
	
			//Acciones de cada opcion
			if(estado==0&&(Input.GetKeyDown(KeyCode.Space)||Input.GetKeyDown(KeyCode.Return)||Input.GetKeyDown(KeyCode.Mouse0))){
				sound_IrAlJuego.Play();

				estadoMenu=false;
				estadoEntrandoAlJuego=true;
				codigoOpciones=nave.gameObject.GetComponent.<naveMenuDemo>();
				codigoOpciones.enabled=false;
				animNave.applyRootMotion=false;
				animNave.SetBool("irAJuego",true);
				
			}
				
			
			if(estado==-1&&(Input.GetKeyDown(KeyCode.Space)||Input.GetKeyDown(KeyCode.Return)||Input.GetKeyDown(KeyCode.Mouse0))){
				
				sound_Entrada.Play();
				ponerMenu();
				estadoMenu=false;
				estadoPuntuaciones=true;
			}
			
			if(estado==-2&&(Input.GetKeyDown(KeyCode.Space)||Input.GetKeyDown(KeyCode.Return)||Input.GetKeyDown(KeyCode.Mouse0))){
				
				sound_Entrada.Play();
				ponerMenu();
				estadoMenu=false;
				estadoCreditos=true;
			}
				
			if(estado==-3&&(Input.GetKeyDown(KeyCode.Space)||Input.GetKeyDown(KeyCode.Return)||Input.GetKeyDown(KeyCode.Mouse0)))
				Application.Quit();
	}
}


function puntuaciones(){
	if(opcionTitulo.transform.localPosition.x>-1150)
		opcionTitulo.transform.localPosition.x-=500*Time.deltaTime;
		
	if(opcionTitulo.transform.localPosition.x<=-1150){
		txt_puntuaciones.gameObject.SetActive(true);
		if(Input.anyKey){
			quitarMenu();
			sound_Salida.Play();
			txt_puntuaciones.gameObject.SetActive(false);
			estadoPuntuaciones=false;
			estadoMenu=true;
		}
	}
}



function creditos(){
	if(opcionTitulo.transform.localPosition.x>-1150)
		opcionTitulo.transform.localPosition.x-=500*Time.deltaTime;
		
	if(opcionTitulo.transform.localPosition.x<=-1150){
		
		txt_creditos.gameObject.SetActive(true);
		
		if(Input.anyKey){
			quitarMenu();
			sound_Salida.Play();
			txt_creditos.gameObject.SetActive(false);
			estadoCreditos=false;
			estadoMenu=true;
		}
	}
}


function entrandoAlJuego(){

	if(nave.transform.localPosition.x>=600){
			

			animNave.SetBool("irAJuego",false);
			animNave.applyRootMotion=true;
			
			cortinilla.gameObject.SetActive (true);
			
			if(cortinilla.gameObject.transform.localPosition.x<2750)
				cortinilla.gameObject.transform.localPosition.x+=2000*Time.deltaTime;
			
			if(cortinilla.gameObject.transform.localPosition.x>=2750){
					//Application.LoadLevel("nivel1");
					SceneManager.LoadScene("nivel1");
			}	
	}
		
}



function ponerMenu(){
	menuAnim.SetBool("desaparecer", false);
	menuAnim.SetBool("aparecer", true);
}

function quitarMenu(){
	menuAnim.SetBool("aparecer", false);
	menuAnim.SetBool("desaparecer", true);
}



function acomodarPuntero(){
	if(estado==0){
		codigoOpciones.irAPosicionInicial();
		codigoOpciones.apagarRayos();
		codigoOpciones.enabled=false;
		
		codigoOpciones=op_Iniciar.gameObject.GetComponent.<naveMenuDemo>();
		codigoOpciones.enabled=true;
		codigoOpciones.prenderRayos();
	}
	
	if(estado==-1){
		codigoOpciones.irAPosicionInicial();
		codigoOpciones.apagarRayos();
		codigoOpciones.enabled=false;
		
		codigoOpciones=op_puntuaciones.gameObject.GetComponent.<naveMenuDemo>();
		codigoOpciones.enabled=true;
		codigoOpciones.prenderRayos();
	}
	
	if(estado==-2){
		codigoOpciones.irAPosicionInicial();
		codigoOpciones.apagarRayos();
		codigoOpciones.enabled=false;
		
		codigoOpciones=op_creditos.gameObject.GetComponent.<naveMenuDemo>();
		codigoOpciones.enabled=true;
		codigoOpciones.prenderRayos();
	}
	
	if(estado==-3){
		codigoOpciones.irAPosicionInicial();
		codigoOpciones.apagarRayos();
		codigoOpciones.enabled=false;
		
		codigoOpciones=op_salir.gameObject.GetComponent.<naveMenuDemo>();
		codigoOpciones.enabled=true;
		codigoOpciones.prenderRayos();
	}
}