using UnityEngine;
using System.Collections;

public class generadorColmillos : MonoBehaviour {

	public Animator animacion;
	public float tiempo;

	public GameObject proyectil;




	// Use this for initialization
	void Start () {
		animacion=this.gameObject.GetComponent<Animator>();
		animacion.Play("colmilloIdle",0, tiempo);
	}
	
	// Update is called once per frame
	void Update () {}


	void dispararColmillo(){
		Instantiate(proyectil,this.transform.position,this.transform.rotation);
	}

}
