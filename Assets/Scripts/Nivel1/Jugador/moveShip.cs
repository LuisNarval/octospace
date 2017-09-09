using UnityEngine;
using System.Collections;

public class moveShip : MonoBehaviour {
	public float speed;


	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {

			float x = Input.GetAxisRaw ("Horizontal");
			float y = Input.GetAxisRaw ("Vertical");

			Vector2 direction = new Vector2 (x, y).normalized;

			Move (direction);
		
	}
	void Move (Vector2 direction){
		Vector2 min = Camera.main.ViewportToWorldPoint (new Vector2 (0, 0));
		Vector2 max = Camera.main.ViewportToWorldPoint (new Vector2 (1, 1));

		max.x = max.x - .8f;
		min.x = min.x + 1.2f;

		max.y = max.y - .4f;
		min.y = min.y + .5f;

		Vector2 pos = transform.position;

		pos += direction * speed * Time.deltaTime;

		pos.x = Mathf.Clamp (pos.x, min.x, max.x);
		pos.y = Mathf.Clamp (pos.y, min.y, max.y);

		transform.position = pos;


	}



}





























