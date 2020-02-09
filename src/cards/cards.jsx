import React, {Component} from 'react'

import Card from "./cardsUI";

import img1 from "../assets/backlog.jpg"
import img2 from "../assets/Sprint.png"
import img3 from "../assets/schedule.jpg"

class Cards extends Component{
       render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                    <h1>Sprint Planning</h1>
                        <Card imgsrc={img1} title="Product Backlog"/>
                        <p>
                        1.- Programar Control de Reservas<br></br>
                        <p id="detalle">Como empleado requiero un programa que</p>
                        <p id="detalle">me permita llevar un control de las reservas</p>   
                        <p id="detalle">de los clientes, para administrar mejor los</p>
                        <p id="detalle">productos y servicios.</p>
                        <p id="detalle">-Dado que todo el tiempo hay clientes realizando</p>
                        <p id="detalle">movimientos de entradas y salidas.</p>
                        <p id="detalle">-Cuando yo tenga control sobre las reservaciones</p>
                        <p id="detalle">-Entonces se tendrá una administración mas eficiente de los recursos</p>
                        <p id="detalle">*El empleado tendrá control por medio de una aplicacion web</p>
                        <p id="detalle">*Se logra completar tareas en pocos pasos.</p>
                        <p id="detalle">*Se facilita la transición con el nuevo programa.</p>
2.- Modificar reservaciones - web (empleado)<br></br>
<p id="detalle">Como empleado requiero que el sistema sea intuitivo</p>
<p id="detalle">para realizar mi tarea en pocos pasos</p>
<p id="detalle">-Dado que el sistema que usamos no es eficiente</p>
<p id="detalle">-Cuando tenga una mejor herramienta para realizar mi labor</p>
<p id="detalle">-Entonces me facilitará satisfacer las necesidades del cliente</p>
<p id="detalle">*El empleado realiza mas rápido su trabajo gracias a la app.</p>
<p id="detalle">*El cliente queda conforme con el servicio.</p>
3.- Mejora en el manejo de reservaciones<br></br>
<p id="detalle">Como gerente quiero que los empleados resuelvan problemas</p>
<p id="detalle">Para mejorar la calidad de los servicios</p>
<p id="detalle">-Dado que los clientes necesitan soluciones inmediatas</p>
<p id="detalle">-Cuando tenga acceso a un sistema eficiente</p>
<p id="detalle">-Entonces la velocidad de respuesta a los clientes se acelera.</p>
4.- Administrar productos y servicios <br></br>
<p id="detalle">Como empleado requiero conocer los recursos disponibles</p>
<p id="detalle">Para poder ofrecerlos a los clientes.</p>
<p id="detalle">-Dado que hay clientes reservando todo el tiempo</p>
<p id="detalle">-Cuando utilice el sistema actualizado</p>
<p id="detalle">-Entonces tendré más opciones que ofrecer al cliente.</p>
<p id="detalle">*Se conoce el estado de los recursos disponibles</p>
<p id="detalle">*El empleado cuenta con mas opciones</p>

5.- Acelerar atención al huésped<br></br>
<p id="detalle">Como cliente quiero una atención eficiente</p>
<p id="detalle">Para decidirme por los servicios que ofrecen</p>
<p id="detalle">-Dado que puedo buscar opciones por internet</p>
<p id="detalle">-Cuando planee mis vacaciones</p>
<p id="detalle">-Entonces recordaré ésta aplicación web</p>
<p id="detalle">*Se ofrecen los productos actuales, así como sus costos</p>
<p id="detalle">*La aplicación web es intuitiva</p>
<p id="detalle">*Se enfoca en la eficiencia</p>
6.- Calendarizar entradas y salidas
<p id="detalle">Como empleado quiero que el sistema se actualice constantemente</p>
<p id="detalle">Para saber si algun producto ya ha sido reservado</p>
<p id="detalle">-Dado que puede haber otro cliente reservando al mismo tiempo</p>
<p id="detalle">-Cuando yo revise que productos están disponibles</p>
<p id="detalle">-Entonces el sistema me indicará al momento si alguno ya no está libre.</p>
<p id="detalle">*El sistema se actualiza en tiempo real.</p>
<p id="detalle">*El empleado o cliente sabe cuando un producto no está disponible</p>
                        </p>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img2} title="Tareas Sprint"/>
                    <p>
                    <strong>Programar Control de Reservas  #1</strong><br></br>
Análisis de necesidades <br></br>
<p id="detalle">Se reune la información necesaria en conjunto con el cliente para entender sus necesidades </p>
Diseño del sistema<br></br>
<p id="detalle">El sistema requiere un diseño que ademas de agradable facilite encontrar las herramientas y puedan realizarse las tareas en pocos pasos.</p>
Bases de datos (Mysql)<br></br>
<p id="detalle">Para tener un mejor control sobre los recursos disponibles e información de los clientes, es indispensable contar con una base de datos rápida y confiable.</p>
Programación (python, php)<br></br>
<p id="detalle">Se utilizan lenguajes de programación cuya funcionalidad está comprobada. De esta forma se garantiza rapidez y eficiencia.</p>
Pruebas<br></br>
<p id="detalle">Las pruebas generales se programan para el final del sprint.</p>
<br></br>
<br></br>
<strong>Modificar reservaciones - web (empleado) #2</strong><br></br>
Análisis<br></br>
<p id="detalle">Los empleados deben ser capaces de manejar el programa, por lo que es necesario establecer comunicación con los empleados lo que permitirá desarrollar las herramientas que les sean mas útiles en su labor del día a día.</p>
Aplicación web<br></br>
<p id="detalle">Permitir que los empleados a cargo de las reservaciones puedan tener acceso desde cualquier computadora con acceso a internet para hacer mas flexible su labor.</p>
Login<br></br>
<p id="detalle">Generar una base de datos con los empleados dedicados a la modificación de las reservaciones.</p>
Diseño <br></br>
<p id="detalle">La aplicación web debe tener como objetivo facilitar la labor del empleado y completar sus tareas con pocos pasos.</p>
Pruebas<br></br>
<p id="detalle">Las pruebas generales se programan para el final del sprint.</p>
<br></br><br></br>
<strong>Mejora en el manejo de reservaciones  #3</strong><br></br>
Detección y corrección de errores<br></br>
<p id="detalle">En la actualidad los empleados usan un sistema que presenta una variedad de errores, se busca hacer un sistema nuevo que evite esas fallas y los errores de los empleados.</p>
Alternativa a su sistema actual<br></br>
<p id="detalle">En un principio el sistema será muy similar al que utilizan en la actualidad para hacer mas sencilla la transición al nuevo sistema.</p>
Capacitación<br></br>
<p id="detalle">Se debe organizar una capacitación para mostrar las nuevas características que tendrán disponibles, además se les dará una calendarización de los cambios visuales.</p>
<br></br><br></br><strong>Administrar productos y servicios  #4</strong><br></br>
Inventario<br></br>
<p id="detalle">Realizar un inventario de los productos y servicios disponibles, con sus respectivos costos, así como los margenes de ganancia.</p>
Productos y servicios disponibles<br></br>
<p id="detalle">Desplegar un listado de productos y servicios, pueden categorizarse e incluso utilizar filtros para que tanto empleados como clientes puedan encontrar mas rapidamente lo que necesitan.</p>
Diseño<br></br>
<p id="detalle">El diseño se realiza en conjunto con empleados y clientes reales que permitan establecer las prioridades en cuanto a usabilidad y eficiencia.</p>
Pruebas<br></br>
<p id="detalle">Se programan las pruebas generales para el final del sprint</p><br></br><br></br>
<strong>Acelerar atención al huésped  #5</strong><br></br>
Chat en línea <br></br>
<p id="detalle">Se incluye un chat en la aplicación web, en donde el cliente pueda solicitar información.

El chat se establece por medio servicios como whatsapp o telegram.</p>
Robot chat <br></br>
<p id="detalle">En horarios de mucha carga de trabajo, se puede activar un programa robot que responda a las preguntas mas comunes realizadas que podrían tener los usuarios que utilicen el chat.</p>
Pruebas<br></br>
<p id="detalle">Pruebas generales se programan al final del sprint.</p><br></br><br></br>
<strong>Calendarizar entradas y salidas  #6</strong><br></br>
Lanzamiento previo<br></br>
<p id="detalle">Se realiza un lanzamiento previo para medir la eficiencia del programa e interactuar con clientes reales. Se ofrece la opción de volver al sistema anterior en caso de que el cliente resienta el cambio.</p>
Promociones <br></br>
<p id="detalle">Puede ofrecerse un descuento especial por referenciar la aplicación web (previo acuerdo con los prestadores de servicio)</p>
Datos estadísticos <br></br>
<p id="detalle">Se mide el tiempo promedio que le toma a los clientes realizar una reservación.</p>
Encuestas<br></br>
<p id="detalle">Escuchar a los clientes para incluir un mayor número de servicios</p>
                    </p>
                    </div>
                    <div className="col-md-4">
                    <Card imgsrc={img3} title="Sprint Schedule"/>
                    <p>
                        <strong>ToDo</strong><br></br>
                        #1 Programación (python, php)<br></br>
                        <p id="detalle">Se utilizan lenguajes de programación cuya funcionalidad está comprobada. De esta forma se garantiza rapidez y eficiencia.</p>
                        #1 Diseño del sistema<br></br>
                        <p id="detalle">El sistema requiere un diseño que ademas de agradable facilite encontrar las herramientas y puedan realizarse las tareas en pocos pasos.</p>
                        #1 Bases de datos (Mysql)<br></br>
                        <p id="detalle">Para tener un mejor control sobre los recursos disponibles e información de los clientes, es indispensable contar con una base de datos rápida y confiable.</p>
                        #1 Pruebas<br></br>
                        <p id="detalle">Las pruebas generales se programan para el final del sprint.</p>
                        #2 Aplicación web<br></br>
                        <p id="detalle">Permitir que los empleados a cargo de las reservaciones puedan tener acceso desde cualquier computadora con acceso a internet para hacer mas flexible su labor.</p>
                        #2 Login<br></br>
                        <p id="detalle">Generar una base de datos con los empleados dedicados a la modificación de las reservaciones.</p>
                        #2 Diseño<br></br>
                        <p id="detalle">La aplicación web debe tener como objetivo facilitar la labor del empleado y completar sus tareas con pocos pasos.</p>
                        #2 Pruebas<br></br>
                        <p id="detalle">Las pruebas generales se programan para el final del sprint.</p>
                        #3 Alternativa a su sistema actual<br></br>
                        <p id="detalle">En un principio el sistema será muy similar al que utilizan en la actualidad para hacer mas sencilla la transición al nuevo sistema.</p>
                        #3 Capacitación<br></br>
                        <p id="detalle">Se debe organizar una capacitación para mostrar las nuevas características que tendrán disponibles, además se les dará una calendarización de los cambios visuales.</p>
                        #4 Productos y servicios disponibles<br></br>
                        <p id="detalle">Desplegar un listado de productos y servicios, pueden categorizarse e incluso utilizar filtros para que tanto empleados como clientes puedan encontrar mas rapidamente lo que necesitan.</p>
                        #4 Diseño<br></br>
                        <p id="detalle">El diseño se realiza en conjunto con empleados y clientes reales que permitan establecer las prioridades en cuanto a usabilidad y eficiencia.</p>
                        #5 Chat en línea<br></br>
                        <p id="detalle">Se incluye un chat en la aplicación web, en donde el cliente pueda solicitar información.

El chat se establece por medio servicios como whatsapp o telegram.</p>
                        #5 Robot chat<br></br>
                        <p id="detalle">En horarios de mucha carga de trabajo, se puede activar un programa robot que responda a las preguntas mas comunes realizadas que podrían tener los usuarios que utilicen el chat.</p>
                        #5 Pruebas<br></br>
                        <p id="detalle">Pruebas generales se programan al final del sprint.</p>
                        #6 Lanzamiento previo<br></br>
                        <p id="detalle">Se realiza un lanzamiento previo para medir la eficiencia del programa e interactuar con clientes reales. Se ofrece la opción de volver al sistema anterior en caso de que el cliente resienta el cambio.</p>
                        #6 Promociones<br></br>
                        <p id="detalle"></p><br></br>
                        <strong>Doing</strong><br></br>
                        #3 Detección y corrección de errores<br></br>
                        <p id="detalle">En la actualidad los empleados usan un sistema que presenta una variedad de errores, se busca hacer un sistema nuevo que evite esas fallas y los errores de los empleados.</p>
                        #6 Datos estadísticos<br></br>
                        <p id="detalle">Se mide el tiempo promedio que le toma a los clientes realizar una reservación.</p>
                        #4 Inventario<br></br>
                        <p id="detalle">Realizar un inventario de los productos y servicios disponibles, con sus respectivos costos, así como los margenes de ganancia.</p>
                        <br></br>
                        <strong>Done</strong><br></br>
                        #1 analisis de necesidades<br></br>
                        <p id="detalle">Como Scrum Master
Puedo analizar las necesidades que se requieren
Para diseñar un sistema eficiente que permita hacer mas sencillo para los clientes el realizar sus reservaciones</p>
                        #2 Análisis<br></br>
                        <p id="detalle">Los empleados deben ser capaces de manejar el programa, por lo que es necesario establecer comunicación con los empleados lo que permitirá desarrollar las herramientas que les sean mas útiles en su labor del día a día.</p>
                        #6 Encuestas<br></br>
                        <p id="detalle">Escuchar a los clientes para incluir un mayor número de servicios</p>
                        <br></br>
                        

                    </p>
                    </div>
                    
                </div>
            </div>
        );
    }

}

export default Cards;