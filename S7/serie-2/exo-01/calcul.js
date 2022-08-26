class Calcul
{
    nombre1;
    nombre2;
    constructor(nombre1,nombre2)
    {
        this.nombre1 = nombre1;
        this.nombre2 = nombre2;
    }
    add()
    {
        return this.nombre1+this.nombre2;
    }
    multiply()
    {
        return this.nombre1*this.nombre2;
    }
}