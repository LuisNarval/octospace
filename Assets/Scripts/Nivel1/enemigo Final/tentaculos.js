#pragma strict

public var animacion:Animator;
public var tiempo:float ;

var vida:int=100;
private var lastimado:boolean=false;

private var originalX:float;
private var originalY:float;


public var esconderse:boolean=false;
public var salir:boolean=false;
public var esperar:boolean=false;

public var abajo:boolean=false;
public var arriba:boolean=false;
public var diagonal:boolean=false;

public var movX:float;
public var movY:float;

public var velocidad=1.0f;
public var tiempoDeEspera:float=15.0f;
function Start () {
	animacion=this.gameObject.GetComponent.<Animator>();
	animacion.Play("idle_tentaculo",0, tiempo);

	originalX=this.transform.position.x;
	originalY=this.transform.position.y;
}

function Update () {
	if(lastimado){
		desangrarse();
	}

	if(esconderse){
		ocultarTentaculo();
	}

	if(salir){
		aparecerTentaculo();
	}

	if(esperar){
		aguardar();
	}
}



function OnCollisionEnter(invasor:Collision){
	if(invasor.gameObject.tag=="bala"){
		Destroy(invasor.gameObject);

		if(invasor.gameObject.name=="bala(Clone)")
			vida--;
		if(invasor.gameObject.name=="balaShotgun(Clone)")
			vida-=2;
		if(invasor.gameObject.name=="Misil(Clone)")
			vida-=4;

		sufrirDanio();


	}
}

function sufrirDanio(){
	lastimado=true;
	this.GetComponent.<SpriteRenderer>().color=new Vector4(1,1,1,1);
	gradiente=1;
	this.gameObject.GetComponent.<AudioSource>().Play();

	if(vida<=0){
			esconderse=true;
	}
}

function sufrirDanioLaser(){
	lastimado=true;
	this.GetComponent.<SpriteRenderer>().color=new Vector4(1,0,0,1);
	gradiente=0;
	this.gameObject.GetComponent.<AudioSource>().Play();

	if(vida<=0){
			esconderse=true;
	}
}



public var gradiente:float=1;
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











function ocultarTentaculo(){
	this.transform.Translate(new Vector3(-movX,-movY,0)*velocidad*Time.deltaTime);


	if(abajo){
		if(this.transform.position.y<=-3){
			esconderse=false;
			esperar=true;
		}
	}


	else if(arriba){
		if(this.transform.position.y>=13){
			esconderse=false;
			esperar=true;
		}
	}


	else if(diagonal){
		if(this.transform.position.x>=17){
			esconderse=false;
			esperar=true;
		}
	}





		
}



function aparecerTentaculo(){
	this.transform.Translate(new Vector3(movX,movY,0)*velocidad*Time.deltaTime);

	if(abajo){
		if(this.transform.position.y>=originalY){
			salir=false;
		}
	}


	else if(arriba){
		if(this.transform.position.y<originalY){
			salir=false;
		}
	}


	else if(diagonal){
		if(this.transform.position.x<=originalX){
			salir=false;
		}
	}
		
}

var tiempoTranscurrido:float=0;

function aguardar(){
	 tiempoTranscurrido+=Time.deltaTime;

	 if(tiempoTranscurrido>=tiempoDeEspera){
	 	esperar=false;
	 	salir=true;
	 	vida=100;
	 	tiempoTranscurrido=0;
	 }
}