#pragma strict

var explosion:GameObject;
var line:LineRenderer;

var seguroLaser:boolean=true;
var balas:int=0;

var codigoDisparo:Disparo;

//var Controlador:GameObject;
var codigoControlador:Controlador1;

function Start () {
	line = gameObject.GetComponent.<LineRenderer>();
	line.enabled = false;

	codigoDisparo=GetComponentInParent.<Disparo>();
	//Controlador=GameObject.Find("Canvas");
	codigoControlador=GameObject.Find("Canvas").GetComponent.<Controlador1>();

}



function Update () {
	
	/*if (Input.GetKeyDown(KeyCode.M)) {
			StopCoroutine ("FireLaser");
			StartCoroutine ("FireLaser");
		}*/
	
	if(!seguroLaser){
		
		if(Input.GetKey(KeyCode.Mouse0)||Input.GetKey(KeyCode.Space)){
			dispararLaser();
		}

		if(Input.GetKeyDown(KeyCode.Mouse0)||Input.GetKeyDown(KeyCode.Space)){
			this.gameObject.GetComponent.<AudioSource>().Play();
		}

		if(Input.GetKeyUp(KeyCode.Mouse0)||Input.GetKeyUp(KeyCode.Space)){
			line.enabled = false;
			this.gameObject.GetComponent.<AudioSource>().Stop();
		}

	}
	


	
}

function apagarLaser(){
	codigoDisparo.cambiarArma(1);
	this.GetComponent.<AudioSource>().Stop();
}

function apagarSonido(){
	this.GetComponent.<AudioSource>().Stop();
}

function dispararLaser(){
	line.enabled = true;	
		//line.renderer = new Vector2 (0, Time.time);

		var ray:Ray= new Ray (transform.position, transform.right);
		var hit:RaycastHit;

		line.SetPosition (0, ray.origin);
		balas-=100*Time.deltaTime;
		codigoControlador.actualizarBalas(balas);

		if(balas<0){
			apagarLaser();
		}


		if(Physics.Raycast(ray, hit, 20)){
			line.SetPosition(1, hit.point);
			
			/*if ((hit.rigidbody.tag!="Tanque"&&hit.rigidbody.tag!="item"&&hit.rigidbody.tag!="bala"&&hit.rigidbody.tag!="tiempo45"&&hit.rigidbody.tag!="tiempo120"&&
				hit.rigidbody.tag!="tentaculo"&&hit.rigidbody.tag!="colmillo"&&hit.rigidbody.tag!="cuerpoJefeFinal")&&hit.point.x<16) {
				
				//hit.rigidbody.AddForceAtPosition (transform.forward * 5, hit.point);
				hit.rigidbody.gameObject.GetComponent.<Respawn>().vida-=20*Time.deltaTime;

				if(hit.rigidbody.gameObject.GetComponent.<Respawn>().vida<=0){
					hit.rigidbody.gameObject.GetComponent.<Respawn>().dropear();
					hit.rigidbody.gameObject.GetComponent.<Respawn>().respawn();
					var dummy:GameObject=Instantiate(explosion, hit.point,this.transform.rotation);
					Destroy(dummy,2f);
					codigoControlador.puntos+=hit.rigidbody.gameObject.GetComponent.<Respawn>().puntos;
					codigoControlador.reescribirPuntaje();
				}

				//print("golepamos a: "+hit.rigidbody.name);
			}*/
			if(hit.rigidbody.tag=="cuerpoJefeFinal"){
				//print("hola");
			}else if ((hit.rigidbody.tag=="Zona1"||hit.rigidbody.tag=="Zona2"||hit.rigidbody.tag=="Zona3"||hit.rigidbody.tag=="Zona4"||hit.rigidbody.tag=="Zona5"||
			     hit.rigidbody.tag=="Zona6"||hit.rigidbody.tag=="Zona7"||hit.rigidbody.tag=="Zona8"||hit.rigidbody.tag=="Zona9")&&hit.point.x<16) {
				
				//hit.rigidbody.AddForceAtPosition (transform.forward * 5, hit.point);
				hit.rigidbody.gameObject.GetComponent.<Respawn>().vida-=20*Time.deltaTime;

				if(hit.rigidbody.gameObject.GetComponent.<Respawn>().vida<=0){
					hit.rigidbody.gameObject.GetComponent.<Respawn>().dropear();
					hit.rigidbody.gameObject.GetComponent.<Respawn>().respawn();
					var dummy:GameObject=Instantiate(explosion, hit.point,this.transform.rotation);
					Destroy(dummy,2f);
					codigoControlador.puntos+=hit.rigidbody.gameObject.GetComponent.<Respawn>().puntos;
					codigoControlador.reescribirPuntaje();
				}

				//print("golepamos a: "+hit.rigidbody.name);
			}




			if(hit.rigidbody.tag=="tentaculo"){
				hit.rigidbody.gameObject.GetComponent.<tentaculos>().vida--;
				hit.rigidbody.gameObject.GetComponent.<tentaculos>().sufrirDanioLaser();
			}

			if(hit.rigidbody.tag=="ojoJefeFinal"){
				hit.rigidbody.gameObject.GetComponent.<ojoJefe>().vida--;
				hit.rigidbody.gameObject.GetComponent.<ojoJefe>().sufrirDanioLaser();
			}



			if(hit.rigidbody.tag=="colmillo"){
				Destroy(hit.rigidbody.gameObject);
				var dummy2:GameObject=Instantiate(explosion, hit.point,this.transform.rotation);
				Destroy(dummy2,2f);
			}
		}

		else
			line.SetPosition(1, ray.GetPoint(20));
}


/*IEnumerator FireLaser(){
	line.enabled = true;

	while (Input.GetKey(KeyCode.M)) {
			
		//line.renderer = new Vector2 (0, Time.time);

		var ray:Ray= new Ray (transform.position, transform.right);
		var hit:RaycastHit;

		line.SetPosition (0, ray.origin);

		if(Physics.Raycast(ray, ohit, 50)){
			line.SetPosition(1, hit.point);
			if (hit.rigidbody) {
				hit.rigidbody.AddForceAtPosition (transform.forward * 5, hit.point);
				print("golepamos a: "+hit.rigidbody.name);
			}
		}

		else
			line.SetPosition(1, ray.GetPoint(50));
			


		//yield return null;
	
	}

	line.enabled = false;
	
}
*/
