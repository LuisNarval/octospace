using UnityEngine;
using System.Collections;

public class Nave1 : MonoBehaviour {

	float speed;
	// Use this for initialization

	void Start () {

		//speed = 6f;
		speed=Random.Range(2.0f,8.0f);

	}
	
	// Update is called once per frame
	void Update () {

		//donde se encuentra en enemigo
		Vector2 position = transform.position;
	
		//nueva posicion del enemigo 
		position = new Vector2(position.x  - speed * Time.deltaTime, position.y);

		//actualiza la posicion del enemigo
		transform.position = position;


		/*
		//parte inferior de la pantalla
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
		}*/
	}
}
