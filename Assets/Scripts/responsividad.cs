using UnityEngine;
using System.Collections;

public class responsividad : MonoBehaviour {

	public GameObject Contenedor;
	public bool Continua_responsividad=false;
	Camera camara;

	void Awake(){
		camara= GetComponent<Camera>();
		hacerResponsivo();
	}

	// Use this for initialization
	void Start () {}
	
	// Update is called once per frame
	void Update () {
		if(Continua_responsividad)
			hacerResponsivo();
	}

	void hacerResponsivo(){
		float x=camara.aspect; //Obtiene el aspecto actual de la camara

		float resolucion=1.6f;
		float nuevoTamano=x/resolucion;

		Contenedor.transform.localScale= new Vector3(nuevoTamano,1,1);

		//this.transform.position=new Vector3((x*10)/2,this.transform.y,this.transform.z);
		this.transform.position=new Vector3((x*10)/2,this.transform.position.y,this.transform.position.z);
	}
		
}

