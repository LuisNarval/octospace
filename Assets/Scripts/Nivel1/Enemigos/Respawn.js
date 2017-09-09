#pragma strict

var anfitrion:GameObject;

var respawnMinimaX:float=1;
var respawnMaximaX:float=20;

var respawnMinimaY:float=3;
var respawnMaximaY:float=6;



var cantidadDeVida:float=3;
var puntos:int=2;


var serOscilatorio:boolean=true;


var drop:GameObject;

var lastimado=false;
var marcadoPorMisil=false;

var vida:float;
private var posicionInicialY:float;
private var estadoNivel:String;



public var producto1:GameObject;
public var producto2:GameObject;
public var producto3:GameObject;
public var producto4:GameObject;
public var producto5:GameObject;
public var producto6:GameObject;
public var producto7:GameObject;
public var producto8:GameObject;

function Start () {
	vida=cantidadDeVida;
	//respawn();
}

function Update () {

	if(this.transform.position.x<-10)
		respawn();
	
	if(lastimado){
		desangrarse();
	}
}

public var aleatorio1:float=-2.0f;
public var aleatorio2:float=4.0f;

function dropear(){
	var aleatorio:int=0;
	
	aleatorio=Random.Range(aleatorio1, aleatorio2);


		if(aleatorio==2){
	
			aleatorio=Random.Range(1.0f, 9.0f);

			switch(aleatorio){

			case 1:
				Instantiate(producto1,this.transform.position,this.transform.rotation);
				break;
			
			case 2:
				Instantiate(producto2,this.transform.position,this.transform.rotation);
				break;

			case 3:
				Instantiate(producto3,this.transform.position,this.transform.rotation);
				break;

			case 4:
				Instantiate(producto4,this.transform.position,this.transform.rotation);
				break;

			case 5:
				Instantiate(producto5,this.transform.position,this.transform.rotation);
				break;

			case 6:
				Instantiate(producto6,this.transform.position,this.transform.rotation);
				break;

			case 7:
				Instantiate(producto7,this.transform.position,this.transform.rotation);
				break;

			case 8:
				Instantiate(producto8,this.transform.position,this.transform.rotation);
				break;

			case 9:
				Instantiate(producto8,this.transform.position,this.transform.rotation);
				break;

			default:
				print("Algo raro paso, valor actual: "+ aleatorio);
				break;
			}

		}










}


function respawn(){	
		estadoNivel=GameObject.Find("Administrador").GetComponent.<administrador>().estado;
		
		if(this.tag==estadoNivel){
			this.transform.position.x=18+Random.Range(-respawnMinimaX,respawnMaximaX);
			this.transform.position.y=Random.Range(respawnMinimaY, respawnMaximaY);
			vida=cantidadDeVida;
			marcadoPorMisil=false;

			if(serOscilatorio){
				anfitrion.gameObject.GetComponent.<granada>().posicionInicialY=this.transform.position.y;
				anfitrion.gameObject.GetComponent.<granada>().angulo=Random.Range(0,360);
				anfitrion.gameObject.GetComponent.<granada>().velocidad=Random.Range(0.5f,2.0f);
				anfitrion.gameObject.GetComponent.<granada>().amplitud=Random.Range(0.7f,1.3f);		
			}
		}
		else
			Destroy(gameObject);
}


function sufrirDanio(){
	lastimado=true;
	this.GetComponent.<SpriteRenderer>().color=new Vector4(1,1,1,1);
	gradiente=1;
	this.gameObject.GetComponent.<AudioSource>().Play();
}


private var gradiente:float=1;
private var rapidez:float=4;

function desangrarse(){

	this.GetComponent.<SpriteRenderer>().color=new Vector4(1,gradiente,gradiente,1);

	 gradiente-=(Time.deltaTime)*rapidez;
	

	 if(gradiente<=0){
	 	rapidez=-4;
	 }

	 else if(gradiente>=1.2){
	 	lastimado=false;
	 	gradiente=1;
	 	rapidez=3;
	 }

}