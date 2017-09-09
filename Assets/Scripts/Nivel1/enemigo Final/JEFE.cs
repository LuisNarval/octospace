using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class JEFE : MonoBehaviour {


	bool iniciando=false;
	bool cambiandoMusica=true;

	public float velocidad=3.0f;



	public AudioSource musica;
	public AudioClip cancionJefe;

	public Slider vidaJefe;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		if(iniciando)
			avanzar();
		if(cambiandoMusica){
			cambiarMusica();
		}

	}



	void avanzar(){
		this.transform.Translate(Vector3.left*velocidad*Time.deltaTime);




		if(this.transform.position.x<=0){
			iniciando=false;


			vidaJefe.gameObject.SetActive(true);
		}
	}



	void cambiarMusica(){
		musica.volume-=0.2f*Time.deltaTime;
		if(musica.volume<=0){
			musica.Stop();
			musica.clip=cancionJefe;
			musica.volume=1.0f;
			cambiandoMusica=false;
			iniciando=true;
			musica.Play();
		}
	}



}
