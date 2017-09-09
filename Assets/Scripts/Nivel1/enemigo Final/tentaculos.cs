using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class tentaculos : MonoBehaviour {


	public Animator animacion;
	public float tiempo;

	// Use this for initialization
	void Start () {
		animacion=this.gameObject.GetComponent<Animator>();
		animacion.Play("idle_tentaculo",0, tiempo);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
