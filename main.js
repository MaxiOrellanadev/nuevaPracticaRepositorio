function cuentaComas(texto) 
{

    let cantidadDeComas = 0;

    for (let index = 0; index < texto.length; index++)
     {
         if(texto[index] === ",")
         {

            cantidadDeComas +=1;
         }       
    }
       
    console.log(cantidadDeComas);

}
  cuentaComas("hola,funcion la concha de tu vieja")