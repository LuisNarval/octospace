using UnityEngine;
using System.Collections;

public class respawn : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		Vector2 min = Camera.main.ViewportToWorldPoint (new Vector2 (0, 0));
		Vector2 max = Camera.main.ViewportToWorldPoint (new Vector2 (1, 1));
		
		//enemigo fuera de la pantalla se destruye
		if (transform.position.x < min.x){
			max.x = max.x - 0.225f;
			min.x = min.x + 0.225f;
			
			max.y = max.y - 0.285f;
			min.y = min.y + 0.285f;
			
			//float nuevaX=Random.Range(min.x, max.x);
			float nuevaY=Random.Range(min.y, max.y);
			//this.transform.position.x=nuevaX;
			//this.transform.position.y=Random.Range(-2.0F, 4.0F);
			this.transform.position = new Vector2(max.x, nuevaY);
		}
	}
}
