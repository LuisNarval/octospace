using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class final : MonoBehaviour {

	GameObject[] enemigos;
	GameObject[] colmillos;

	public GameObject colmillo1;
	public GameObject colmillo2;
	public GameObject colmillo3;
	public GameObject colmillo4;
	public GameObject colmillo5;
	public GameObject colmillo6;

	public AudioSource musica;
	public Color imagen;

    Animator animadorEnTurno;

	bool irse=false;
	// Use this for initialization
	void Start () {
		enemigos=GameObject.FindGameObjectsWithTag("Zona9");
		foreach(GameObject i in enemigos){
			Destroy(i);
		}
			
		colmillos=new GameObject[]{colmillo1,colmillo2,colmillo3,colmillo4,colmillo5,colmillo6};
		foreach(GameObject j in colmillos){
			animadorEnTurno=j.GetComponent<Animator>();

            //Antes aquí se usaba un .Stop();
            animadorEnTurno.StopPlayback();

		}

		imagen=this.GetComponent<Image>().color;
	}
	
	// Update is called once per frame
	void Update () {
		if(!irse){
			esperar();
		}else if(irse)
			atenuar();
		
	}


	void atenuar(){
		imagen.a+=0.3f*Time.deltaTime;
		GetComponent<Image>().color=imagen;
		print(imagen.a);
		if(imagen.a>=1.0f){
			irse=false;
		}
	}


	float tiempoTranscurrido=0;

	void esperar(){


		musica.volume-=0.2f*Time.deltaTime;

		tiempoTranscurrido+=Time.deltaTime;

		if(tiempoTranscurrido>=8){
			irse=true;
		}

		if(tiempoTranscurrido>=10){
			SceneManager.LoadScene("final");
		}
	}





}
