#pragma strict


public var animacion:Animator;
public var tiempo:float;
public var proyectil:GameObject;


function Start () {
	animacion=this.gameObject.GetComponent.<Animator>();
	animacion.Play("explosion2_idle",0, tiempo);
}


function Update () {}