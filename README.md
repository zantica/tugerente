# Prueba tecnica tuGerente

### Lo pedido inicialmente:

Desarrollar usando reactjs un componente de tipo dropdown:
Al desplegarlo consultará al backend por data buscando coincidencias según el texto escrito (o sin filtro, en caso de que no se haya escrito texto)
debe solicitar resultados paginados de 20 en 20, y solo deberá traer la siguiente página cuando se esté scrolleando cerca al final de la lista actual de resultados. <br/>
Debe permitir parametrizar qué atributo del objeto consultado se mostrará al usuario. <br/>
El primer resultado del dropdown debe ser una opción fija que al darle click levante un pequeño pop-up, parte del componente, que permita agregar un nuevo objeto con el texto ya ingresado. <br/>
Para realizar las pruebas, crearse una cuenta en https://auth.implementaconbubo.com/ y obtener la llave de integración desde Ajustes > Integración.
Dicha llave se usará en los headers de las peticiones que se hagan al backend bajo el nombre de APIKEY
El endpoint para obtener resultados de búsqueda es: https://back.implementaconbubo.com/v1/sales/customer/?simple=true
Los filtros se deben mandar en los headers de la petición, bajo el nombre de Data-Operations. <br/>
Al presentar la prueba resuelta, colocar el APIKEY en el readme o en el .env del proyecto, para realizar pruebas del proyecto

Un ejemplo del objeto data-operations para filtrar por texto:

```js
{
"filter":
    {
    "filters":
        [
            {
                "field":"reference_name",
                "operator":"contains",
                "ignoreCase":true,
                "value":""
            },
            {
                "field":"nit",
                "operator":"contains",
                "ignoreCase":true,
                "value":""
            },
            {
                "field":"name",
                "operator":"contains",
                "ignoreCase":true,
                "value":""
            },
            {
                "field":"reference_name",
                "operator":"contains",
                "ignoreCase":true,
                "value":""
            }
        ],
    "logic":"or"
    },
    "skip":0,
    "take":5
}
```

### Lo que se realizo:

Desarrollar usando reactjs un componente de tipo dropdown:
Al desplegarlo consultará al backend por data buscando coincidencias según el texto escrito (o sin filtro, en caso de que no se haya escrito texto)<br/>
Debe permitir ver detalles del atributo objeto consultado se mostrará al usuario. <br/>
Para esta prueba se utilizo una API externa, ya que no supe como integrar el APIKEY(obtenido) a los endpoints.
APIKEY = oSQgwFnvwVigT8OLWciOSfSq3txdxqI8hZ1BfpVA

Para poder probarlo realizar npm install y luego npm start

