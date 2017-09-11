using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class audioLetrero : MonoBehaviour {


    public AudioSource sfx_levelUp;
    public AudioSource sfx_intro;
    public AudioSource sfx_salida;
    public AudioSource sfx_alarma;



    public void reproducirLevelUp()
    {
        sfx_levelUp.Play();
    }

    public void reproducirIntro()
    {
        sfx_intro.Play();
    }

    public void reproducirSalida()
    {
        sfx_salida.Play();
    }


    public void reproducirAlarma()
    {
        sfx_alarma.Play();
    }

}
