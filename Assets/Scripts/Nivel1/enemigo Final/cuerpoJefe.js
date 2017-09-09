#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(invasor:Collision){
	if(invasor.gameObject.tag=="bala"){
		Destroy(invasor.gameObject);
		this.gameObject.GetComponent.<AudioSource>().Play();
	}
}