using UnityEngine;
using System.Collections;

public class Scroll : MonoBehaviour {

	public float speed_scroll = 0;
	

	void Update () {

		GetComponent<Renderer>().material.mainTextureOffset = new Vector2 (Time.time * speed_scroll*-1, 0f);

	}
}
