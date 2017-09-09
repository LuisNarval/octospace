using UnityEngine;
using System.Collections;

public class esporas : MonoBehaviour {


	public float velocidad=1;
	public float amplitud=1;



	public float velocidadAngular=1;



	public float angulo=0;

	public float posicionInicialY=0;
	public float anguloGiro=0;




	public GameObject explosion;

	public GameObject vida;
	public GameObject tiempo;
	public GameObject tiempo2;

	public GameObject bala1;
	public GameObject bala2;
	public GameObject bala3;

	void Start () {
		reiniciar();
	}



	void FixedUpdate(){
		movimientoSenoidal();
		rotacion();
	}
		
	void Update () {
		if(angulo>=360)
			angulo=0;



		if(this.transform.position.x<-10){
			reiniciar();
		}
	}
		
	void rotacion(){
		anguloGiro=velocidadAngular*Time.deltaTime;
		this.transform.Rotate(Vector3.forward*anguloGiro);
	}

	void movimientoSenoidal(){
		this.transform.position-=new Vector3(velocidad*Time.deltaTime,0,0);
		angulo+=60*velocidad*Time.deltaTime;
		this.transform.position=new Vector3(this.transform.position.x,posicionInicialY+amplitud*Mathf.Sin(angulo*((2*Mathf.PI)/360)),this.transform.position.z );
	}


	void reiniciar(){
		this.transform.position=new Vector3(Random.Range(5.0f,30.0f),Random.Range(0.7f,8.7f),this.transform.position.z);
		posicionInicialY=this.transform.position.y;
		angulo=Random.Range(0,360);
		velocidad=Random.Range(0.5f,2.0f);
	}





}
