using UnityEngine;
using System.Collections;

public class laserJefe : MonoBehaviour {


	public ParticleSystem particulasCarga;
	public ParticleSystem particulasLaser;

	public Animator animacionLaser;
	public GameObject laser;

	public AudioSource sonidoCarga;
	public AudioSource musicaJefe;


	private bool esperando=true;
	private bool cargarEnergia=false;
	private bool disparandoLaser=false;



	private float tiempoDeEspera;
	private float duracionLaser;

	public float menorIntervalo=30.0f;
	public float mayorIntervalo=60.0f;

	// Use this for initialization
	void Start () {
		particulasCarga.Stop();
		tiempoDeEspera=Random.Range(menorIntervalo,mayorIntervalo);
	}

	// Update is called once per frame
	void Update () {
	


		if(esperando){
			tomarTiempo();
		}

		if(cargarEnergia){
			comenzarCarga();
		}

		if(disparandoLaser){
			laserActivo();
		}

	}




	private float tiempoCarga=0;
	private float tiempoActual=0;



	void iniciarLaser(){
		particulasCarga.Play();
		sonidoCarga.Play();
		tiempoCarga=Random.Range(4.5f,8.5f);
		cargarEnergia=true;
	}



	void comenzarCarga(){
		tiempoActual+=Time.deltaTime;

		if(tiempoActual>=tiempoCarga){
			tiempoActual=0;
			duracionLaser=Random.Range(12.0f, 20.0f);
			musicaJefe.volume=0.6f;
			cargarEnergia=false;
			//particulasCarga.Stop();
			sonidoCarga.Stop();
			laser.SetActive(true);
			particulasLaser.Play();
			animacionLaser.Play("crecimientoLaser");

			disparandoLaser=true;
			this.GetComponent<AudioSource>().Play();
		}
	}


	void laserActivo(){
		tiempoActual+=Time.deltaTime;

		if(tiempoActual>=duracionLaser){
			tiempoActual=0;
			esperando=true;
			disparandoLaser=false;
			apagarLaser();
		}
	}

	void apagarLaser(){
		particulasCarga.Stop();
		particulasLaser.Stop();

		animacionLaser.SetTrigger("apagarLaser");
		tiempoActual=0;

		musicaJefe.volume=0.9f;
	}





	void tomarTiempo(){
		tiempoActual+=Time.deltaTime;

		if(tiempoActual>=tiempoDeEspera){
			tiempoActual=0.0f;
			iniciarLaser();
		}
	}



}
