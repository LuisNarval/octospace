#pragma strict

var menuPausa:GameObject;
var enEjecucion:boolean=false;


var posicionY:int=130;

var textura : Texture2D;
var muestra : boolean;

var direccion:boolean=true;


function Start () {}

function Update () {
    if (Input.GetKeyDown (KeyCode.Escape)&&!enEjecucion&&GameObject.Find("Administrador").GetComponent.<administrador>().estadoCortinilla==false&&GameObject.Find("Administrador").GetComponent.<administrador>().estadoInstrucciones==false) {
       triggerPausa();
       ponerMenuPausa();
       enEjecucion=true;
    }
}

function triggerPausa(){
	  Time.timeScale = 1.0-Time.timeScale;
    Time.fixedDeltaTime = 0.02 * Time.timeScale;
    GameObject.Find("Administrador").GetComponent.<administrador>().pausa=!muestra;
     // neoMenu.transform.set_parent(GameObject.Find("Canvas").transform);
     // menuPausa.SetActive(!muestra);	
     muestra=!muestra;
     // salir=true;
}

function ponerMenuPausa(){
      var neoMenu=Instantiate(menuPausa,new Vector3(0,0,0),this.transform.rotation);
      neoMenu.transform.parent=GameObject.Find("Canvas").transform;
      neoMenu.transform.localScale=new Vector3(180,165,0);
      neoMenu.transform.localPosition=new Vector3(0,0,-50);
}