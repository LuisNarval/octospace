using UnityEngine;
using System.Collections;

public class proyectilColmillo : MonoBehaviour {

	public float velocidad=5;

	public float x;
	public float y;

	public int vida=4;

	GameObject objetivo;
	public GameObject explosion;
	// Use this for initialization




	void Start () {
		


		objetivo=GameObject.Find("Jugador");


		x=vectorUnitario(obtenerRx());
		y=vectorUnitario(obtenerRy());
		

		velocidad=Random.Range(1.5f,3.5f);

		this.transform.rotation=Quaternion.Euler(0,0,obtenerAngulo()+180.0f);
	
	/*	if(objetivo!=null)
			this.transform.LookAt(objetivo.transform);
		else
			Destroy(this.gameObject);
	*/
	}
	
	// Update is called once per frame
	void Update () {
		avanzar();

		if(this.transform.position.x>17||this.transform.position.x<-4){
			Destroy(this.gameObject,2);
		}


		if(lastimado){
			desangrarse();
		}

	}


	void avanzar(){
		//this.transform.Translate(new Vector3(x,y,0)*velocidad*2*Time.deltaTime);
	
		this.transform.Translate(Vector3.left*velocidad*2*Time.deltaTime);
	}




	float vectorUnitario(float R){	
		return R/Mathf.Sqrt(  Mathf.Pow(obtenerRx(),2)+Mathf.Pow(obtenerRy(),2)  );
	}

	float obtenerRx(){

		if(objetivo!=null){
			return objetivo.transform.position.x-this.transform.position.x;
		}else{
			Destroy(this.gameObject);
			return 0.0f;
		}
	}

	float obtenerRy(){
		if(objetivo!=null){
			return objetivo.transform.position.y-this.transform.position.y;
		}else{
			Destroy(this.gameObject);
			return 0.0f;
		}
	}


	float obtenerAngulo(){
		float Rx=obtenerRx();
		float Ry=obtenerRy();
		float angulo=0;

		if(Rx==0){
			if(Ry>=0)
				angulo=90;
			else if(Ry<0)
				angulo=-90;
		}else{
			angulo=Mathf.Rad2Deg*Mathf.Atan(Ry/Rx);
		}

		if(Rx<0)
			angulo+=180;

		return angulo;
	}


	void OnCollisionEnter(Collision invasor){
		if(invasor.gameObject.tag=="bala"){
			Destroy(invasor.gameObject);
			recibirDanio(invasor.gameObject.name);

		}
	}

	void recibirDanio(string invasor){
		sufrirDanio();

		if(invasor=="bala(Clone)")
			vida--;
		if(invasor=="balaShotgun(Clone)")
			vida-=2;
		if(invasor=="Misil(Clone)")
			vida-=4;

	
		

		if(vida<=0){
			GameObject dummyExplosion=Instantiate(explosion,this.transform.position,this.transform.rotation) as GameObject;
			Destroy(dummyExplosion,3.0f);
			Destroy(this.gameObject);
		}
	}


	private bool lastimado=false;
	private float gradiente=1;
	private float rapidez=4;





	void sufrirDanio(){
		lastimado=true;
		this.GetComponent<SpriteRenderer>().color=new Vector4(1,1,1,1);
		gradiente=1;
		this.gameObject.GetComponent<AudioSource>().Play();
	}

	void desangrarse(){

		this.GetComponent<SpriteRenderer>().color=new Vector4(1,gradiente,gradiente,1);

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


}
