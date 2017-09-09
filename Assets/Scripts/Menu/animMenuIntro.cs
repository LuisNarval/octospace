using UnityEngine;
using System.Collections;

public class animMenuIntro : MonoBehaviour {

	public GameObject Canvas;
	public bool encenderCanvas=false;
	public bool apagarEsto=false;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
		if(encenderCanvas){
			Canvas.SetActive(true);
		}

		if(apagarEsto){
			this.gameObject.SetActive(false);
		}
	}
}
