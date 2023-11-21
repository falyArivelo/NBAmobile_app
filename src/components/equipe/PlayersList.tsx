// src/pages/PlayersList.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonList, IonItem, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import './equipe.css'
interface PlayersListProps extends RouteComponentProps<{ teamName: string }> { }

interface Player {
  name: string;
  position: string;
}

const PlayersList: React.FC<PlayersListProps> = ({ match }) => {
  const teamName = match.params.teamName;

  // Simulez la récupération des joueurs en fonction de l'équipe (remplacez cela par une requête API réelle)
  const players: Player[] = [
    { "name": "Lebron J.", "position": "Attaquant" },
    { "name": "Joueur 2", "position": "Milieu de terrain" },
    { "name": "Joueur 3", "position": "Défenseur" },
    // Ajoutez d'autres joueurs au besoin
  ];

  return (
    <IonPage className='myPage'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/Liste`} />
          </IonButtons>
          <IonTitle>Liste des Joueurs - {teamName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='myContent'>
          {/* <IonLabel>{player.name} - {player.position}</IonLabel> */}
          < table border={1} className='playerList'>
            <thead>
              <tr>
                <th>Joueur</th>
                <th>M</th>
                <th>MJ</th>
                <th>PPM</th>
                <th>RPM</th>
                <th>PDPM</th>
                <th>MPM</th>
                <th>EFF</th>
                <th>FG%</th>
                <th>3P%</th>
                <th>%LF</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (

                // <IonItem key={index}>
                  <tr>
                    <td>{player.name}</td>
                    <td>Row 1</td>
                    <td>Row 1</td>
                    <td>Row 1</td>
                    <td>Row 1</td>
                    <td>Row 1</td>
                    <td>Row 1</td>
                    <td>Row 1</td>
                    <td>Row 1</td>
                    <td>Row 1</td>
                    <td>Row 1</td>
                  </tr>
                // </IonItem>
              ))}

              {/* Ajoutez autant de lignes que nécessaire */}
            </tbody>
          </table>

      </IonContent>
    </IonPage >
  );
};

export default PlayersList;
