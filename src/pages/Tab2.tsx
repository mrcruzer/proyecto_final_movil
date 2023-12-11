import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import TarifarioMultasContainer from '../components/TarifarioMultasContainer';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tarifario Multas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tarifario Multas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TarifarioMultasContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
