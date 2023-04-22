"use strict";

class Huonekalu{
    constructor(tyyppi,koord,koko,vari,koriste){
        this.tyyppi=tyyppi;
        this.koord=koord;
        this.vari=vari;
        this.koko=koko;
        this.koriste=koriste;
    }
    piirra(){
        k.save();
        if(this.koriste){
            //asettaa huonekalun läpikuljettavaksi
        }
        k.beginPath();
        k.fillStyle = this.vari;

        switch(this.tyyppi){

            case "poyta":
                k.arc(this.koord.x, this.koord.y, 50, 0, 2 * Math.PI);
            break;
        
            case "kaappi":
                    k.fillRect(this.koord.x, this.koord.y, this.koko.leveys, this.koko.korkeus);
            break;
        }
        k.closePath();



    }
}

