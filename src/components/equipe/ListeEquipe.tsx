// src/components/MyList.tsx
import React, { useState, useEffect } from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonRouterLink } from '@ionic/react';
import axios from 'axios';


const Liste: React.FC = () => {
  const [teams, setTeams] = useState([
    { "name": "Lakers", "city": "Ville 1" },
    { "name": "Warriors", "city": "Ville 2" },
    { "name": "Équipe 3", "city": "Ville 3" },
    // Ajoutez d'autres équipes au besoin
  ]);

  useEffect(() => {
    // Aucun appel API nécessaire car les données sont déjà incluses
  }, []);

  // useEffect(() => {
  //   const fetchTeams = async () => {
  //     try {
  //       const response = await axios.get('https://api.example.com/nba-teams');
  //       setTeams(response.data.teams);
  //     } catch (error) {
  //       console.error('Erreur lors de la récupération des équipes', error);
  //     }
  //   };

  //   fetchTeams();
  // }, []);

  return (
    <IonContent>
      <IonList>
        {teams.map((team, index) => (
          <IonItem key={index} button>
            {/* Utilisation d'IonRouterLink pour créer un lien vers la page d'équipe avec le nom de l'équipe dans la route */}
            <IonRouterLink routerLink={`/players/${team.name}`}>
              <IonLabel>{team.name} - {team.city}</IonLabel>
            </IonRouterLink>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
};

export default Liste;
