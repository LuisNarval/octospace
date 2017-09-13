using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;


public class seleccionControl : MonoBehaviour {

	AsyncOperation ao;

	public Animator animadorInterfaz;
	Animator animadorCortinilla;


	int estado = 0;

	public AudioSource sfx_sobreBoton;
	public AudioSource sfx_seleccion;

	bool joystickCentrado = true;

	string decision = "";

	// Use this for initialization
	void Start () {
		ao = SceneManager.LoadSceneAsync("Menu");
		ao.allowSceneActivation = false;

		animadorCortinilla = this.GetComponent<Animator>();

		seleccionarControl();
	}
	
	// Update is called once per frame
	void Update () {
		capturarBotones();
	}


	void capturarBotones() {

		if (Input.GetKey(KeyCode.Joystick1Button0)||Input.GetKey(KeyCode.Return)||Input.GetKey(KeyCode.Space)){
			sfx_seleccion.Play();
			switch (decision) {

				case "CONTROL":
					irAControl();
					break;

				case "TECLADO":
					irATeclado();
					break;

				default:
					print("Algo salio terriblemente mal, la decisión actual es : "+decision);
					break;
			}
		}

		

		if (joystickCentrado && Input.GetAxis("Horizontal") > 0){
			joystickCentrado = false;
			sfx_sobreBoton.Play();
			seleccionarTeclado();
		}

		if (joystickCentrado && Input.GetAxis("Horizontal") < 0){
			joystickCentrado = false;
			sfx_sobreBoton.Play();
			seleccionarControl();
		}


		if (Input.GetAxis("Horizontal") == 0)
		{
			joystickCentrado = true;
		}
	}



	public void seleccionarControl() {
		animadorInterfaz.SetTrigger("seleccionarControl");
		decision = "CONTROL";
	}


	public void seleccionarTeclado(){
		animadorInterfaz.SetTrigger("seleccionarTeclado");
		decision = "TECLADO";
	}


	public void irAControl(){
		PlayerPrefs.SetString("SELECCIONDECONTROL", "CONTROL");
		animadorInterfaz.SetTrigger("irAControl");
		animadorCortinilla.SetTrigger("cerrar");
	}

	public void irATeclado(){
		PlayerPrefs.SetString("SELECCIONDECONTROL", "TECLADO");
		animadorInterfaz.SetTrigger("irATeclado");
		animadorCortinilla.SetTrigger("cerrar");
	}

	


	public void sigEscena(){
		ao.allowSceneActivation = true;
	}
}