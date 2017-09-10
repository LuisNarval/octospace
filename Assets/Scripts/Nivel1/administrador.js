#pragma strict
import UnityEngine.SceneManagement;


var pausa:boolean=false;

var controladorFisico:GameObject; //Canvas (controlador fisico del puntaje)
private var cP:Controlador1; //copia del codigo del controlador del Puntaje
private var tiempo:int;


var cortinilla:GameObject;
var ventana:GameObject;
var instruccionesMov:GameObject;
var instruccionesDisp:GameObject;

var MeteoritoPequenio:GameObject;
var MeteoritoMediano:GameObject;
var Retrete:GameObject;
var Satelite1:GameObject;
var NavePequenia:GameObject;
var NaveMediana:GameObject;
var NaveGrande:GameObject;
var PulpoPequenio:GameObject;
var PulpoMediano:GameObject;
var PulpoGrande:GameObject;
var Mecha:GameObject;

var JefeFinal:GameObject;

private var speedRacer:GameObject;

var animCortinilla:Animator;

var codigoInterfaz:Controlador1;

var estadoCortinilla:boolean=true;
var estadoInstrucciones:boolean=false;
private var subEstadoInstrucciones1:boolean=false;
private var subEstadoInstrucciones2:boolean=false;
public var estado:String=null;
public var destino:String;

private var banderaInstanciar:boolean=true;


private var separacion=7;
public var irAMenu:boolean=false;
public var irAReinicio:boolean=false;

function Start () {
	cortinilla.gameObject.SetActive (true);
	ventana.gameObject.SetActive (true);
	cP=controladorFisico.GetComponent.<Controlador1>();
}

function Update () {
		
	if(!pausa){

		if(estadoCortinilla)
			moverCortinilla();
		
		if(estadoInstrucciones)
			instrucciones();
			
			
		if(estado=="Zona1"){
			if(cP.enemigosDerrotados<60)
				zona1();	
			else{
				estado="Zona2";
				banderaInstanciar=true;
			}

			if(Input.GetKey(KeyCode.J)){
				estado="Zona9";
				banderaInstanciar=true;
			}
		}	
		
		if(estado=="Zona2"){
		    if(cP.enemigosDerrotados<120)
				zona2();	
			else{
				estado="Zona3";
				banderaInstanciar=true;
			}
		}	
			
		if(estado=="Zona3"){
		    if(cP.enemigosDerrotados<180)
				zona3();	
			else{
				estado="Zona4";
				banderaInstanciar=true;
			}
		}		
		
		if(estado=="Zona4"){
		    if(cP.enemigosDerrotados<240)
				zona4();	
			else{
				estado="Zona5";
				banderaInstanciar=true;
			}
		}
			
		if(estado=="Zona5"){
		    if(cP.enemigosDerrotados<300)
				zona5();	
			else{	
				estado="Zona6";
				banderaInstanciar=true;
			}
		}
		if(estado=="Zona6"){
		    if(cP.enemigosDerrotados<360)
				zona6();	
			else{
				estado="Zona7";
				banderaInstanciar=true;
			}
		}	
			
		if(estado=="Zona7"){
		    if(cP.enemigosDerrotados<420)
				zona7();	
			else{
				estado="Zona8";
				banderaInstanciar=true;
			}
		}	
			
		if(estado=="Zona8"){
		    if(cP.enemigosDerrotados<480)
				zona8();	
			else{
				estado="Zona9";
				banderaInstanciar=true;
			}
		}

		if(estado=="Zona9"){
				zona9();
		}
								
	}	
	
	if(estado=="Salir")
		salir();	
}


function zona1(){
	if(banderaInstanciar==true){
		var Z:String="Zona1";
		for(var i:int=0;i<8;i++)
			a(Z);
		for(i=0;i<5;i++)
			c(Z);
		for(i=0;i<4;i++)
			d(Z);
		banderaInstanciar=false;
		codigoInterfaz.zona=1;
		codigoInterfaz.reescribirZona();
	}	
}

function zona2(){
	if(banderaInstanciar==true){
		var Z:String="Zona2";
		for(var i:int=0;i<6;i++)
			a(Z);
		for(i=0;i<3;i++)
			c(Z);
		for(i=0;i<3;i++)
			d(Z);
		for(i=0;i<4;i++)
			b(Z);
		for(i=0;i<3;i++)
			e(Z);
		banderaInstanciar=false;

		codigoInterfaz.zona=2;
		codigoInterfaz.reescribirZona();
	}		
}

function zona3(){
	if(banderaInstanciar==true){
		var Z:String="Zona3";
		for(var i:int=0;i<3;i++)
			d(Z);
		for(i=0;i<5;i++)
			b(Z);
		for(i=0;i<4;i++)
			e(Z);
		for(i=0;i<3;i++)
			f(Z);
		banderaInstanciar=false;

		codigoInterfaz.zona=3;
		codigoInterfaz.reescribirZona();
	}	
}

function zona4(){
	if(banderaInstanciar==true){
		var Z:String="Zona4";
		for(var i:int=0;i<1;i++)
			h(Z);
		for(i=0;i<5;i++)
			a(Z);
		for(i=0;i<4;i++)
			e(Z);	
		for(i=0;i<3;i++)
			f(Z);	
		for(i=0;i<2;i++)
			g(Z);
		banderaInstanciar=false;

		codigoInterfaz.zona=4;
		codigoInterfaz.reescribirZona();
	}	
}

function zona5(){
	if(banderaInstanciar==true){	
		var Z:String="Zona5";
		for(var i:int=0;i<3;i++)
			h(Z);
		for(i=0;i<2;i++)
			i(Z);
		for(i=0;i<4;i++)
			f(Z);
		for(i=0;i<3;i++)
			g(Z);
		for(i=0;i<4;i++)
			a(Z);
		for(i=0;i<3;i++)
			b(Z);
		banderaInstanciar=false;

		codigoInterfaz.zona=5;
		codigoInterfaz.reescribirZona();
	}
}

function zona6(){
	if(banderaInstanciar==true){
		var Z:String="Zona6";	
		for(var i:int=0;i<5;i++)
			a(Z);		
		for(i=0;i<3;i++)
			d(Z);
		for(i=0;i<4;i++)
			g(Z);
		for(i=0;i<4;i++)
			h(Z);
		for(i=0;i<3;i++)
			i(Z);
		for(i=0;i<2;i++)
			k(Z);	
		banderaInstanciar=false;

		codigoInterfaz.zona=6;
		codigoInterfaz.reescribirZona();
	}
}

function zona7(){
	if(banderaInstanciar==true){
		var Z:String="Zona7";	
		for(var i:int=0;i<4;i++)
			e(Z);
		for(i=0;i<3;i++)
			g(Z);		
		for(i=0;i<3;i++)
			i(Z);
		for(i=0;i<3;i++)
			j(Z);
		for(i=0;i<3;i++)
			k(Z);	
		banderaInstanciar=false;

		codigoInterfaz.zona=7;
		codigoInterfaz.reescribirZona();
	}
}

function zona8(){
	if(banderaInstanciar==true){	
		var Z:String="Zona8";
		for(var i:int=0;i<2;i++)
			a(Z);
		for(i=0;i<2;i++)
			b(Z);		
		for(i=0;i<2;i++)
			c(Z);
		for(i=0;i<2;i++)
			d(Z);
		for(i=0;i<2;i++)
			e(Z);	
		for(i=0;i<2;i++)
			f(Z);		
		for(i=0;i<2;i++)
			g(Z);
		for(i=0;i<2;i++)
			h(Z);
		for(i=0;i<2;i++)
			i(Z);
		for(i=0;i<2;i++)
			j(Z);
		for(i=0;i<2;i++)
			k(Z);
		banderaInstanciar=false;

		codigoInterfaz.zona=8;
		codigoInterfaz.reescribirZona();
	}
}



function zona9(){
	if(banderaInstanciar==true){	
		var Z:String="Zona9";

		banderaInstanciar=false;


		JefeFinal.SetActive(true);

		codigoInterfaz.zona=9;
		codigoInterfaz.reescribirZona();
	}
}


//Funciones para instanciar cada Enemigo:

//a)Meteoro pequeño
function a(zona:String){
		speedRacer=Instantiate(MeteoritoPequenio,new Vector3(Random.Range(10+separacion,40+separacion),Random.Range(3,7),0),Quaternion.Euler(0f,0f,Random.Range(0,360)));
		speedRacer.gameObject.GetComponent.<granada>().angulo=Random.Range(0,360);
		speedRacer.gameObject.tag=zona;
}
//b)Meteoro mediano
function b(zona:String){
		speedRacer=Instantiate(MeteoritoMediano,new Vector3(Random.Range(10+separacion,30+separacion),Random.Range(3,7),0),Quaternion.Euler(0f,0f,Random.Range(0,360)));
		speedRacer.gameObject.GetComponent.<granada>().angulo=Random.Range(0,360);
		speedRacer.gameObject.tag=zona;
}
//c)Retrete
function c(zona:String){
		speedRacer=Instantiate(Retrete,new Vector3(Random.Range(10+separacion,30+separacion),Random.Range(3,7),0),Quaternion.Euler(0f,0f,Random.Range(0,360)));
		speedRacer.gameObject.GetComponent.<granada>().angulo=Random.Range(0,360);
		speedRacer.gameObject.tag=zona;
}
//d)Satelite
function d(zona:String){
		speedRacer=Instantiate(Satelite1,new Vector3(Random.Range(10+separacion,30+separacion),Random.Range(3,7),0),Quaternion.Euler(0f,0f,Random.Range(0,360)));
		speedRacer.gameObject.GetComponent.<granada>().angulo=Random.Range(0,360);
		speedRacer.gameObject.tag=zona;
}
//e)Nave 1
function e(zona:String){
		speedRacer=Instantiate(NavePequenia,new Vector3(Random.Range(10+separacion,30+separacion),Random.Range(3,7),0),Quaternion.Euler(0f,0f,0f));	
		speedRacer.gameObject.tag=zona;
}
//f)Nave 2
function f(zona:String){
		speedRacer=Instantiate(NaveMediana,new Vector3(Random.Range(10+separacion,30+separacion),Random.Range(3,7),0),Quaternion.Euler(0f,0f,0f));
		speedRacer.gameObject.tag=zona;
}
//g)Nave 3 
function g(zona:String){
		speedRacer=Instantiate(NaveGrande,new Vector3(Random.Range(10+separacion,30+separacion),Random.Range(3,7),0),Quaternion.Euler(0f,0f,0f));
		speedRacer.gameObject.tag=zona;
}
//h)Pulpo pequeño
function h(zona:String){
		speedRacer=Instantiate(PulpoPequenio,new Vector3(Random.Range(10+separacion,30+separacion),Random.Range(3,7),0),Quaternion.Euler(0f,0f,0f));
		speedRacer.gameObject.GetComponent.<granada>().angulo=Random.Range(0,360);
		speedRacer.gameObject.tag=zona;
}
//i)Pulpo mediano
function i(zona:String){
		speedRacer=Instantiate(PulpoMediano,new Vector3(Random.Range(10+separacion,30+separacion),Random.Range(3,7),0),Quaternion.Euler(0f,0f,0f));
		speedRacer.gameObject.tag=zona;		
}
//j)Pulpo grande
function j(zona:String){
		speedRacer=Instantiate(PulpoGrande,new Vector3(Random.Range(10+separacion,30+separacion),Random.Range(3,7),0),Quaternion.Euler(0f,0f,0f));
		speedRacer.gameObject.GetComponent.<granada>().angulo=Random.Range(0,360);
		speedRacer.gameObject.tag=zona;
}
//k)Robot Macross
function k(zona:String){
		speedRacer=Instantiate(Mecha,new Vector3(Random.Range(10+separacion,30+separacion),Random.Range(3,7),0),Quaternion.Euler(0f,0f,0f));
		speedRacer.gameObject.GetComponent.<granada>().angulo=Random.Range(0,360);
		speedRacer.gameObject.tag=zona;
}



function instrucciones(){	
	if(subEstadoInstrucciones1){
		animCortinilla.SetBool("agrandarse",true);		
		if(Time.time-tiempo>=2){
			if(Input.GetAxisRaw ("Horizontal")||Input.GetAxisRaw ("Vertical")){
				ventana.gameObject.GetComponent.<SpriteRenderer>().color=Color.green;	
				tiempo=Time.time;
				subEstadoInstrucciones1=false;
				subEstadoInstrucciones2=true;	
				GetComponent.<AudioSource>().Play();
			}
		}
	}
	if(subEstadoInstrucciones2){
		if(Time.time-tiempo>=1){
			animCortinilla.SetBool("agrandarse",false);
			animCortinilla.SetBool("encogerse",true);	
		}		
		if(Time.time-tiempo>=3){
			ventana.gameObject.GetComponent.<SpriteRenderer>().color=Color.white;	
			instruccionesMov.SetActive(false);
			instruccionesDisp.SetActive(true);
			animCortinilla.SetBool("encogerse",false);
			animCortinilla.SetBool("agrandarse",true);			
		}
		if(Time.time-tiempo>=3){
			var valor=0;

			if(Input.GetKey(KeyCode.Space)||Input.GetKey(KeyCode.Mouse0)||Input.GetKeyDown(KeyCode.Joystick1Button0)){	
				/*
					GameObject.Find("Disparo").GetComponent.<UnityEngine.UI.Text>().color=Color.green;
					GameObject.Find("espacio").GetComponent.<SpriteRenderer>().color=Color.green;
					GameObject.Find("clickDer").GetComponent.<SpriteRenderer>().color=Color.green;
					GameObject.Find("Or1").GetComponent.<UnityEngine.UI.Text>().color=Color.green;
					GetComponent.<AudioSource>().Play();
				*/

				ventana.gameObject.GetComponent.<SpriteRenderer>().color=Color.green;
				subEstadoInstrucciones2=false;
				tiempo=Time.time;
				GetComponent.<AudioSource>().Play();
			}

			if(Input.GetKey(KeyCode.LeftControl)||Input.GetKey(KeyCode.RightControl)||Input.GetKey(KeyCode.Mouse1)||Input.GetKeyDown(KeyCode.Joystick1Button1)){
				/*	
					GameObject.Find("Bomba").GetComponent.<UnityEngine.UI.Text>().color=Color.green;
					GameObject.Find("ctrl").GetComponent.<SpriteRenderer>().color=Color.green;
					GameObject.Find("clickIzq").GetComponent.<SpriteRenderer>().color=Color.green;
					GameObject.Find("Or").GetComponent.<UnityEngine.UI.Text>().color=Color.green;
					GetComponent.<AudioSource>().Play();
				*/

				ventana.gameObject.GetComponent.<SpriteRenderer>().color=Color.green;
				subEstadoInstrucciones2=false;
				tiempo=Time.time;
				GetComponent.<AudioSource>().Play();
			}

			if(Input.GetKey(KeyCode.Escape)||Input.GetKeyDown(KeyCode.Joystick1Button7)||Input.GetKeyDown(KeyCode.Joystick1Button6)){
				/*	
					GameObject.Find("tuto_pausa").GetComponent.<UnityEngine.UI.Text>().color=Color.green;
					GameObject.Find("esc").GetComponent.<SpriteRenderer>().color=Color.green;
					GetComponent.<AudioSource>().Play();
				*/

				ventana.gameObject.GetComponent.<SpriteRenderer>().color=Color.green;
				subEstadoInstrucciones2=false;
				tiempo=Time.time;
				GetComponent.<AudioSource>().Play();
			}

		}
	}
	if(!subEstadoInstrucciones1&&!subEstadoInstrucciones2){
		if(Time.time-tiempo>=1){
			animCortinilla.SetBool("agrandarse",false);
			animCortinilla.SetBool("encogerse",true);	
		}
		if(Time.time-tiempo>=3){
			ventana.gameObject.GetComponent.<SpriteRenderer>().color=Color.white;	
			instruccionesMov.SetActive(true);
			instruccionesDisp.SetActive(false);
			ventana.SetActive(false);
			estadoInstrucciones=false;
			estado="Zona1";
			codigoInterfaz.tp=Time.time;
			codigoInterfaz.cuentaRegresiva=true;
		}
	}	
}

function moverCortinilla(){
	if(cortinilla.transform.localPosition.x<2800){
		cortinilla.gameObject.transform.localPosition.x+=2000*Time.deltaTime;
	}
	if(cortinilla.transform.localPosition.x>=2800){
		cortinilla.gameObject.SetActive (false);
		estadoCortinilla=false;
		estadoInstrucciones=true;
		subEstadoInstrucciones1=true;
		tiempo=Time.time;
	}
}



function salir(){
	cortinilla.SetActive(true);
	if(cortinilla.transform.localPosition.x>-1846){
		cortinilla.gameObject.transform.localPosition.x-=2000*Time.deltaTime;
	}
	if(cortinilla.transform.localPosition.x<=-1846){
	//	Application.LoadLevel(destino);

		if(irAReinicio)
			SceneManager.LoadScene("nivel1");

		if(irAMenu)
			SceneManager.LoadScene("Menu");

	}
}