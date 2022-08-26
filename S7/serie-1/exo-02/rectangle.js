class Rectangle
{
    largeur;
    longueur;
    constructor(longeur, largeur)
    {
        this.largeur=largeur;
        this.longueur = longeur;
    }
    calculerSurface()
    {
        return this.largeur*this.longueur;
    }
    calculerPerimetre()
    {
        return 2*(this.largeur+this.longueur);
    }
}