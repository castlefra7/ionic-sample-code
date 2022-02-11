import { DataService } from "../services/data.service";

export class Plat {
    nom: string;
    prix: number;
    quantite: number;
    estCommander: boolean;

    constructor(nom: string, prix: number) {
        this.nom =  nom;
        this.prix = prix;
        this.quantite = 0;
        this.estCommander = false;
    }

    incQte() {
        this.quantite += 1;
    }

    decQte() {
        this.quantite -=1;
        if(this.quantite < 0) this.quantite = 0;
    }

    commander() {
        if(this.quantite > 0) this.estCommander = true;       
    }
}