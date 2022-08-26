class Cercle
{
    rayon;
    constructor(rayon)
    {
        this.rayon = rayon;
    }
    calculerSurface()
    {
        return Math.pow(this.rayon,2)*Math.PI;
    }
    calculerPerimetre()
    {
        return 2*Math.PI*this.rayon;
    }
}