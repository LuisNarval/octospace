using UnityEngine;
using System.Collections;

public class laser : MonoBehaviour {

	public GameObject explosion;

	LineRenderer line;
	// Use this for initialization
	void Start () {
		line = gameObject.GetComponent<LineRenderer> ();
		line.enabled = false;

	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown(KeyCode.M)) {
			StopCoroutine ("FireLaser");
			StartCoroutine ("FireLaser");
		}
	}

	IEnumerator FireLaser()
	{
		line.enabled = true;

		while (Input.GetKey(KeyCode.M)) {
			//line.renderer = new Vector2 (0, Time.time);


			Ray ray = new Ray (transform.position, transform.right);
			RaycastHit hit;

			line.SetPosition (0, ray.origin);

			if(Physics.Raycast(ray, out hit, 50)){
				line.SetPosition(1, hit.point);
				if (hit.rigidbody) {
					hit.rigidbody.AddForceAtPosition (transform.forward * 5, hit.point);
					print("golepamos a: "+hit.rigidbody.name);
					
					
				}
			}
			else
				line.SetPosition(1, ray.GetPoint(50));
			



			yield return null;
		}

		line.enabled = false;
	}
}
