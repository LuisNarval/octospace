using UnityEngine;
using System.Collections;

public class Nave3 : MonoBehaviour {

	float speedx, speedy;
	bool abajo;
	
	public float minRanX=.5f;
	public float maxRanX=4f;

	public float minRanY=1.5f;
	public float maxRanY=7.5f;

	// Use this for initialization
	
	void Start () {
		
		//speedx = 2f;
		//speedy = 5f;

		speedx=Random.Range(minRanX,maxRanX);
		speedy=Random.Range(minRanY,maxRanY);
	}
	
	// Update is called once per frame
	void Update () {
		//donde se encuentra en enemigo
		Vector2 position = transform.position;

		if (transform.position.y > 10) {

			abajo = true;

		} else if (transform.position.y < 0){

			abajo = false;
		
		}

		if (abajo == true) {
			//nueva posicion del enemigo 
			position = new Vector2 (position.x - speedx * Time.deltaTime, position.y - speedy * Time.deltaTime);
			
			//actualiza la posicion del enemigo
			transform.position = position;
		}else{
			//nueva posicion del enemigo 
			position = new Vector2 (position.x - speedx * Time.deltaTime, position.y + speedy * Time.deltaTime);
			
			//actualiza la posicion del enemigo
			transform.position = position;
			
		}

	}
}