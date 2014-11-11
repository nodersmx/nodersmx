#¿Que necesito llevar al primer Meetup de Nooders MX?#

Debido a que algunos interesados tienen dudas respecto a que necesitan llevar al primer meetup que organiza esta comunidad, te pedimos que tomes en cuenta lo siguiente:

 1. Lleva tu laptop, de preferencia con Linux o Mac OS instalado, no es que odiemos Windows, simplemente nos parece un pésimo sistema operativo. :D

 2. Instala Node JS.

##Instalación de Node JS##

###Linux (Ubuntu)###
 1. Abre la Terminal
 2. Instala las siguientes dependencias:

    $ sudo apt-get install build-essential libssl-dev ibssl1.0.0

 3. Clonar Node

    $ git clone git://github.com/joyent/node

 4. Ingresar al directorio "node"

    $ cd node

 5. Cambiar a Node Js 0.10.32

    $ git checkout v0.10.32-release

 6. Compilar e instalar Node Js

    $ ./configure
    
    $ make
    
    $ sudo make install

 7. Revisar versión instalada

    $ node -v


###Mac OS###
 1. Ir a [http://nodejs.org/download/][1]
 2. Descargar el paquete correspondiente a Mac OS X.
 3. Ejecutar el paquete descargado y seguir el proceso de instalación.
 4. Abrir la Terminal.
 5. Comprobar la instalación y versión de Node Js (v0.10.32).

    $ node -v


###Windows###
 1. Ir a [http://nodejs.org/download/][1]
 2. Descargar el paquete correspondiente a Windows.
 3. Ejecutar el paquete descargado y seguir el proceso de instalación.
 4. Ir al menu de Programas y abrir: Node.js Command Prompt.
 5. Teclar lo siguiente para comprobar la instalación y versión de Node Js (v0.10.32).

    > node -v


Por el momento es todo lo que necesitas hacer, nos vemos hoy en punto de las 19:00 horas en San Luis Potosí # 211, Piso 8, CP 06760, Colonia Roma.

Gracias por todo el apoyo.


[1]: http://nodejs.org/download/