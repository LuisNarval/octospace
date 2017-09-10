#pragma strict

var textoPuntos:UnityEngine.UI.Text;
var textoBombas:UnityEngine.UI.Text;
var textoZona:UnityEngine.UI.Text;
var textoArmas:UnityEngine.UI.Text;

var textoReloj:UnityEngine.UI.Text;
var colorReloj:Color;

var menuGameOver:GameObject;

var cajaBala:GameObject;
var cajaEscopeta:GameObject;
var cajaMisil:GameObject;
var cajaLaser:GameObject;


var tiempo:int;
var Vida:GameObject;
var posicionVidas:Transform;

var explosion:GameObject;
var jugador:GameObject;

var puntos:int=0;
var bombas:int=0;
var vida:int=3;
var zona:int=0;

var enemigosDerrotados:int=0;

var muerto:boolean=false;

var tp:int;
var tiempoInicial=120;
private var reloj:int;
private var tiempoReloj:int;
private var rout:boolean=false;
var cuentaRegresiva:boolean=false;


var textoNivel1:Text;
var textoNivel2:Text;
var textoNivel3:Text;
var textoNivel4:Text;
var textoNivel5:Text;
var textoNivel6:Text;
var textoNivel7:Text;
var textoNivel8:Text;
var textoNivel9:Text;

var CEDN1=0;
var CEDN2=0;
var CEDN3=0;
var CEDN4=0;
var CEDN5=0;
var CEDN6=0;
var CEDN7=0;
var CEDN8=0;
var CEDN9=0;


var textoTiempoNivel1:Text;
var textoTiempoNivel2:Text;
var textoTiempoNivel3:Text;
var textoTiempoNivel4:Text;
var textoTiempoNivel5:Text;
var textoTiempoNivel6:Text;
var textoTiempoNivel7:Text;
var textoTiempoNivel8:Text;
var textoTiempoNivel9:Text;


var tiempo1:float=0.0;
var tiempo2:float=0.0;
var tiempo3:float=0.0;
var tiempo4:float=0.0;
var tiempo5:float=0.0;
var tiempo6:float=0.0;
var tiempo7:float=0.0;
var tiempo8:float=0.0;
var tiempo9:float=0.0;









function Start () {
	actualizarVida();
	tp=Time.time;
	reloj=tiempoInicial;
	tiempoReloj=tiempoInicial;
	textoReloj.text=""+reloj;
	actualizarConteoPorNivel();
}

function Update () {
	if(muerto){
		if(vida>=1)
			reaparecer();
		else
			GameOver();
	}

	if(cuentaRegresiva)
		clock();


	tiempoTest();
}


function tiempoTest(){

    switch(zona){
    
        case 0:
            textoTiempoNivel1.text="0.00";
            textoTiempoNivel2.text="0.00";
            textoTiempoNivel3.text="0.00";
            textoTiempoNivel4.text="0.00";
            textoTiempoNivel5.text="0.00";
            textoTiempoNivel6.text="0.00";
            textoTiempoNivel7.text="0.00";
            textoTiempoNivel8.text="0.00";
            textoTiempoNivel9.text="0.00";
            break;
    
        case 1:
            tiempo1+=Time.deltaTime;
            textoTiempoNivel1.text=tiempo1.ToString();
            break;
    
        case 2:
            tiempo2+=Time.deltaTime;
            textoTiempoNivel2.text=tiempo2.ToString();
            break;
            
        case 3:
            tiempo3+=Time.deltaTime;
            textoTiempoNivel3.text=tiempo3.ToString();
            break;

        case 4:
            tiempo4+=Time.deltaTime;
            textoTiempoNivel4.text=tiempo4.ToString();
            break;

        case 5:
            tiempo5+=Time.deltaTime;
            textoTiempoNivel5.text=tiempo5.ToString();
            break;

        case 6:
            tiempo6+=Time.deltaTime;
            textoTiempoNivel6.text=tiempo6.ToString();
            break;

        case 7:
            tiempo7+=Time.deltaTime;
            textoTiempoNivel7.text=tiempo7.ToString();
            break;

        case 8:
            tiempo8+=Time.deltaTime;
            textoTiempoNivel8.text=tiempo8.ToString();
            break;

        case 9:
            tiempo9+=Time.deltaTime;
            textoTiempoNivel9.text=tiempo9.ToString();
            break;

        default:
            print("Algo salio terriblemente mal, la zona acutal es : "+zona);
            break;
    }

}


function clock(){
	
	reloj=(tp-Time.time)+tiempoReloj;

	textoReloj.text=""+reloj;

	if(reloj<20){
		if(!rout)
			seTerminaElTiempo();

		if(reloj<=0){
			vida=0;
			muerteJugador();
			GameObject.Find("Reloj").GetComponent.<AudioSource>().Stop();
		}
	}
}

function seTerminaElTiempo(){
	textoReloj.color=Color.red;
	GameObject.Find("Reloj").GetComponent.<AudioSource>().Play();
	rout=true;
}

function tiempoExtra(extra:int){
	tp=Time.time;
	tiempoReloj=reloj+extra;
	textoReloj.color=Color.white;
	rout=false;
	GameObject.Find("Reloj").GetComponent.<AudioSource>().Stop();
}


function reescribirPuntaje(){
    enemigosDerrotados++;
    textoPuntos.text="PUNTOS: "+ puntos;
    
    actualizarConteoPorNivel();
	
}


function actualizarConteoPorNivel(){
 
    switch(zona){
    
        case 0:
            textoNivel1.text="0";
            textoNivel2.text="0";
            textoNivel3.text="0";
            textoNivel4.text="0";
            textoNivel5.text="0";
            textoNivel6.text="0";
            textoNivel7.text="0";
            textoNivel8.text="0";
            textoNivel9.text="0";
        break;
    
        case 1:
            CEDN1++;
            textoNivel1.text=CEDN1.ToString();
        break;
    
        case 2:
            CEDN2++;
            textoNivel2.text=CEDN2.ToString();
        break;
            
        case 3:
            CEDN3++;
            textoNivel3.text=CEDN3.ToString();
        break;

        case 4:
            CEDN4++;
            textoNivel4.text=CEDN4.ToString();
        break;

        case 5:
            CEDN5++;
            textoNivel5.text=CEDN5.ToString();
        break;

        case 6:
            CEDN6++;
            textoNivel6.text=CEDN6.ToString();
        break;

        case 7:
            CEDN7++;
            textoNivel7.text=CEDN7.ToString();
        break;

        case 8:
            CEDN8++;
            textoNivel8.text=CEDN8.ToString();
        break;

        case 9:
            CEDN9++;
            textoNivel9.text=CEDN9.ToString();
        break;

        default:
            print("Algo salio terriblemente mal, la zona acutal es : "+zona);
        break;
    
    }



}

















function reescribirZona(){
    textoZona.text="Zona: "+zona+"/9";
}

function reescribirCantidadBombas(){
    textoBombas.text="x "+ bombas;
}

function actualizarVida(){
var vidas:GameObject[];
vidas=GameObject.FindGameObjectsWithTag("Vidas");
for each (destructor in vidas){
	Destroy(destructor);
}
	var avance:float=0;
	for(var i=0;i<vida;i++){
		Instantiate(Vida, new Vector3(posicionVidas.position.x+avance+.4,posicionVidas.position.y,-6),Vida.transform.rotation);
		avance+=0.6;
	}
}

function muerteJugador(){
  vida--;	
  actualizarVida();
  Instantiate(explosion,GameObject.Find("Jugador").transform.position, this.transform.rotation);
  Destroy(GameObject.Find("Jugador").gameObject);	
  acomodarInterfazArmas(1,0);
  tiempo=Time.time;
  muerto=true;
}

function reaparecer(){
	if(Time.time-tiempo>2){
		var dummy:GameObject=Instantiate(jugador, new Vector3(2,5,0),this.transform.rotation);
		dummy.name="Jugador";
		muerto=false;
	}
}

function GameOver(){
	cuentaRegresiva=false;
	menuGameOver.SetActive(true);
    GameObject.Find("Administrador").GetComponent.<pausa>().enEjecucion=true;
    muerto=false;
}

function actualizarBalas(b:int){
	textoArmas.text="x "+b; 
}

function acomodarInterfazArmas(a:int,b:int){
	if(a==1){
		cajaBala.SetActive(true);
		cajaEscopeta.SetActive(false);
 		cajaMisil.SetActive(false);
 		cajaLaser.SetActive(false);
 		textoArmas.text="x"; 
	}else 

	if(a==2){
		cajaBala.SetActive(false);
		cajaEscopeta.SetActive(true);
 		cajaMisil.SetActive(false);
 		cajaLaser.SetActive(false);
 		textoArmas.text="x "+b; 
	}else

	if(a==3){
		cajaBala.SetActive(false);
		cajaEscopeta.SetActive(false);
 		cajaMisil.SetActive(true);
 		cajaLaser.SetActive(false);
 		textoArmas.text="x "+b; 
	}else 

	if(a==4){
		cajaBala.SetActive(false);
		cajaEscopeta.SetActive(false);
 		cajaMisil.SetActive(false);
 		cajaLaser.SetActive(true);
 		textoArmas.text="x "+b; 
	}
}


    