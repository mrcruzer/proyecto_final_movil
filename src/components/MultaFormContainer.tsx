import './MultaFormContainer.css';
import React, { useState } from "react";
import { IonInput, IonItem, IonList, IonButton } from '@ionic/react';


const MultaFormContainer: React.FC = ({  }) => {

  /*const valoresMulta = { 
    cedula: '',
    name: '',
    descripcion: ''
   };*/

  const [multa, setMulta] = useState({
    cedula: '',
    placa: ''
  });

  /*const enviar(e) {
    e.preventDefault();
    console.log(multa);
  }*/

  function handleChange(evt){
    console.log("hola");
    const value = evt.target.value;
      setMulta({
        ...multa,
      [evt.target.name]: value
  });
  }

  return (
    <IonList class="multa-form">
    <IonItem>
      <IonInput onIonChange={handleChange} value={multa.cedula} type="number" label="Cedula" placeholder="Introduzca su cedula"></IonInput>
    </IonItem>

    <IonItem>
      <IonInput onChange={handleChange} value={multa.placa} type="number" label="Placa Vehiculo" placeholder="Introduzca Placa del Vehiculo"></IonInput>
    </IonItem>

    <IonItem>
      <IonInput type="text" label="Motivo" placeholder="Introduzca motivo de la Multa"></IonInput>
    </IonItem>

    <IonItem>
      <IonInput label="Foto Evidencia" placeholder="Subir Evidencia"></IonInput>
    </IonItem>

    <IonItem>
      <IonInput label="Comentario" placeholder="Introduzca Comentario"></IonInput>
    </IonItem>

    <IonItem>
      <IonInput label="Nota de voz" placeholder="Introduzca nota de voz"></IonInput>
    </IonItem>

    <IonItem>
      <IonInput label="Latitud" placeholder="Latitud"></IonInput>
    </IonItem>

    <IonItem>
      <IonInput label="Longitud" placeholder="Longitud"></IonInput>
    </IonItem>

    <IonItem>
      <IonInput type="date" label="Fecha" placeholder="Introducir fecha"></IonInput>
    </IonItem>

    <IonItem>
      <IonInput label="Hora" placeholder="Introducir hora"></IonInput>
    </IonItem>

    <IonButton type="submit" expand="block">Guardar</IonButton>

  </IonList>


  
  );
};

export default MultaFormContainer;


/*édula (del infractor)
placa del vehículo (si va en un vehículo)
motivo de la multa (va a usar el api para leer los motivos)
foto evidencia: Podrá adjuntar una foto como evidencia.
comentario podrá colocar un comentario sobre la multa.
Nota de voz. El agente podrá registrar una nota de voz con detalles.
latitud
longitud
fecha
hora*/

