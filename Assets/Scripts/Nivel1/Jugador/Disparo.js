#pragma strict

var Bullet:GameObject; 
var Bullet_Shotgun: GameObject;
var Bullet_Misil:GameObject;

var Bomba:GameObject;
var timer:float=0;

var estado:int=1;

var codigoInterfaz:Controlador1;

var balas=200;

var sonido_Negativo:AudioSource;

function Start () {
	codigoInterfaz=GameObject.Find("Canvas").GetComponent.<Controlador1>();
	sonido_Negativo=GameObject.Find("Canvas").GetComponent.<AudioSource>();
}

function Update () {
	if(GameObject.Find("Administrador").GetComponent.<administrador>().pausa==false){
		
		
		//Disparo para los distintos tipos de balas
		if(estado!=4){
		    if(Input.GetKey(KeyCode.Space)||Input.GetKey(KeyCode.Mouse0)||Input.GetKey(KeyCode.Joystick1Button0)){
			
				if(estado==1){							//Disparo normal
					Disparo_balaNormal();				
				}
				else if(estado==2){						//Disparo para la escopeta
					Disparo_Escopeta();					
				}
				else if(estado==3)						//Disparo del misil
					Disparo_Misil();
			
			}
		
			if(Input.GetKeyUp(KeyCode.Space)||Input.GetKeyUp(KeyCode.Mouse0)||Input.GetKeyUp(KeyCode.Joystick1Button0)){
				timer=0;
			}

		}
		
		


		if(Input.GetKey(KeyCode.Alpha1)){
			cambiarArma(1);
		}

		if(Input.GetKey(KeyCode.Alpha2)){
			cambiarArma(2);
		}

		if(Input.GetKey(KeyCode.Alpha3)){
			cambiarArma(3);
		}

		if(Input.GetKey(KeyCode.Alpha4)){
			cambiarArma(4);
		}

		if(Input.GetKey(KeyCode.Alpha5)){
			codigoInterfaz.tiempoExtra(45);
		}

		//Lanzamiento de la bomba
		if(Input.GetKeyDown(KeyCode.LeftControl)||Input.GetKeyDown(KeyCode.RightControl)||Input.GetKeyDown(KeyCode.Mouse1)||Input.GetKeyDown(KeyCode.Joystick1Button1)){
			
			if(codigoInterfaz.bombas>0)
				Disparo_Bomba();
			else
				sonido_Negativo.Play();
		}	
	
		
	}	
}



function cambiarArma(arma:int){

	estado=arma;
	GameObject.Find("Puntuacion").GetComponent.<AudioSource>().Play();

	if(arma==4){
		balas=400;
		this.GetComponentInChildren.<laser>().seguroLaser=false;
		this.GetComponentInChildren.<laser>().balas=balas;
	}else{
		this.GetComponentInChildren.<laser>().seguroLaser=true;
		this.GetComponentInChildren.<laser>().line.enabled = false;
		this.GetComponentInChildren.<laser>().apagarSonido();
		//this.GetComponentInChildren.<AudioSource>().Stop();

		if(arma==2)
			balas=50;
		
		else if(arma==3)
			balas=30;

	}

	

	codigoInterfaz.acomodarInterfazArmas(arma,balas);
}



function Disparo_balaNormal(){
	if(timer==0){
	    Instantiate(Bullet,new Vector3(this.transform.position.x,this.transform.position.y,this.transform.position.z-0.2),this.transform.rotation);
	}	
	timer+=2*Time.deltaTime;
	
	if(timer>=1)
		timer=0;
}

function Disparo_Misil(){
	if(timer==0){
	    Instantiate(Bullet_Misil,new Vector3(this.transform.position.x,this.transform.position.y,this.transform.position.z+0.1),Quaternion.Euler(0,0,180));
		balas--;
		codigoInterfaz.actualizarBalas(balas);
	
		if(balas<=0){
			cambiarArma(1);
		}
	}	
	timer+=2*Time.deltaTime;

	if(timer>=1)
		timer=0;
}

function Disparo_Escopeta(){
	if(timer==0){
		/*var dummy:GameObject=Instantiate(Bullet_Shotgun,this.transform.position,this.transform.rotation);
			dummy.gameObject.GetComponent.<Disparo_Shotgun>().angulo=0;
			
		
		dummy=Instantiate(Bullet_Shotgun,this.transform.position,this.transform.rotation);
			dummy.gameObject.GetComponent.<Disparo_Shotgun>().angulo=-7;
			dummy.gameObject.transform.rotation= Quaternion.Euler(0, 0, -35);
			

		dummy=Instantiate(Bullet_Shotgun,this.transform.position,this.transform.rotation);
			dummy.gameObject.GetComponent.<Disparo_Shotgun>().angulo=7;
			dummy.gameObject.transform.rotation= Quaternion.Euler(0, 0, 35);*/
			
		var dummy:GameObject;
		var valorAngulo:int=-7;
		for(var i=0;i<3;i++){
		    dummy=Instantiate(Bullet_Shotgun,new Vector3(this.transform.position.x,this.transform.position.y,this.transform.position.z+0.1),this.transform.rotation);
			dummy.gameObject.GetComponent.<Disparo_Shotgun>().angulo=valorAngulo;
			dummy.gameObject.transform.rotation=Quaternion.Euler(0, 0, valorAngulo*5);
			valorAngulo+=7;
		}
		balas--;
		codigoInterfaz.actualizarBalas(balas);
		
		if(balas<=0){
			cambiarArma(1);
		}
	}	

	timer+=2*Time.deltaTime;
	
	if(timer>=1)
		timer=0;
}


function Disparo_Bomba(){
    Instantiate(Bomba,new Vector3(this.transform.position.x,this.transform.position.y,this.transform.position.z+0.2),this.transform.rotation);
	codigoInterfaz.bombas--;
	codigoInterfaz.reescribirCantidadBombas();
}