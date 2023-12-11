import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import MultasContainer from '../components/MultasContainer';
import MultaFormContainer from '../components/MultaFormContainer';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Multas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Multas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MultasContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
