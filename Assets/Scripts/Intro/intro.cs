using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class intro : MonoBehaviour {

	public bool siguiente=false;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
		if(siguiente){
			SceneManager.LoadScene("seleccionControl");
		}
	}
}