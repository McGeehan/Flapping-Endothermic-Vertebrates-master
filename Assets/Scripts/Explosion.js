#pragma strict

function Start () {
	Invoke("KillIt" , 0.5);
}

function KillIt () {
Destroy(gameObject);
}