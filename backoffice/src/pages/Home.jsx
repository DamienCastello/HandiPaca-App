import React, { Component } from 'react';
import '../App.scss';
import NavPanel from '../components/navpanel';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import {Fieldset} from 'primereact/fieldset';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const header = (
      <img alt="Card" src='showcase/resources/demo/images/usercard.png'/>
  );
  const footer = (
      <span>
          <Button label="Save" icon="pi pi-check"/>
          <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
      </span>
  );
    return (

      <React.Fragment>
 <NavPanel />




 <Fieldset legend="INFOS : Charte nationale d’accessibilité dans les transports publics routiers">
 Élisabeth Borne et Sophie Cluzel s’engagent avec les acteurs des transports pour améliorer concrètement l’accessibilité dans les transports de voyageurs.
Élisabeth Borne, Ministre chargée des Transports, et Sophie Cluzel, Secrétaire d’État chargée des Personnes handicapées, annoncent avoir signé aujourd’hui avec les représentants des autorités organisatrices de transport (GART, Régions de France) et des entreprises de transport (UTP, FNTV), la charte nationale pour la qualité d’usage de l’accessibilité dans les transports routiers de voyageurs.

Le Gouvernement a fait de l’amélioration des conditions de déplacement des personnes handicapées une priorité de son action pour donner à tous l’accès à la mobilité. Cela repose notamment sur des aménagements lourds en matière d’infrastructures ou de renouvellement des moyens de transports. Cela peut aussi passer par des actions plus rapides pour améliorer concrètement et rapidement l’accessibilité et les conditions d’accueil au quotidien.

C’est le sens de cette charte signée aujourd’hui, qui a pour objectif d’inciter l’ensemble des acteurs – collectivités territoriales, autorités organisatrices,

http://www.mdph37.fr/images/actualites/2018/Handicap%20Ecole_101118.jpg

</Fieldset>


<Fieldset legend="INFOS : SNCF : 100 euros, amende salée pour un malvoyant">
Militant dans l'âme, Lucien refuse de payer. « Je lui ai expliqué que si j'étais allé manifester à Dole, c'était précisément pour que la SNCF me donne les moyens de m'octroyer un titre de transport », explique-t-il à l'Est Républicain. Pas convaincu, le contrôleur double sa note. Au final, l'ancien prêtre s'en tire pour 100 euros, lui qui ne paye habituellement que 3,5 euros pour ce trajet de 18 km. Le comble, c'est que, s'il n'était pas allé lui-même à la rencontre du contrôleur, il n'aurait pas été verbalisé puisqu'aucune vérification n'était prévue. Mais pas question de se laisser abattre. Celui que l'on surnomme Lulu multiplie les démarches. Il écrit à l'autorité organisatrice de la mobilité, au directeur de SNCF Mobilités à Dijon, au président de la SNCF, Guillaume Pépy, aux syndicats de cheminots et même au Défenseur des droits. « Je ne témoigne pas pour mon cas personnel mais dans un esprit collectif pour qu'une solution pérenne soit trouvée, poursuit-il. Au-delà des personnes âgées, handicapées ou malvoyantes, je pense à toutes celles qui ne savent ni lire ni écrire et qui ont besoin d'un contact humain pour effectuer cette formalité d'achat et d'aide à la préparation d'un voyage », confie-t-il à nos confrères.

Pas facile le tout tactile
Quelques semaines plus tard, Lucien obtient gain de cause. « L'erreur a été corrigée, Monsieur Converset a été intégralement remboursé », affirme la SNCF. Mais ce n'est que la face cachée de l'iceberg… Outre les bornes automatiques, dont il ne peut pas lire l'écran, c'est la dématérialisation des services publics (article en lien ci-dessous) et le développement du « tout tactile » que Lucien remet en cause. Sans ordinateur, il lui est impossible de réserver son billet sur Internet. Sans parler du smartphone… « Devrais-je rester confiné chez moi et me priver de ma liberté de me déplacer ? », s'agace-t-il. La suppression des guichets, et plus largement des caisses dans les supermarchés ou les cinémas, pénalise fortement les personnes handicapées, a fortiori celles avec une déficience visuelle. La course à la modernité ? Elles en payent le prix. Pour elles, les écrans lisses et tactiles ne sont pas le comble du design mais juste une galère de plus (article en lien ci-dessous). Pour y remédier, tout comme pour les appareils électroménagers, des commandes vocales ne devraient-elles pas être installées sur chaque borne en 
</Fieldset>

<Fieldset legend="LOIS : Arrêté du 20 avril 2017 relatif à l'accessibilité aux personnes handicapées">

Publics concernés : maîtres d'ouvrage et promoteurs, architectes, maîtres d'œuvre, constructeurs. 
Objet : accessibilité des établissements recevant du public (ERP) lors de leur construction et des installations ouvertes au public (IOP) lors de leur aménagement. 
Entrée en vigueur : les dispositions du présent arrêté sont applicables à compter du 1er juillet 2017 . 
Notice : le présent arrêté détaille les dispositions prévues aux articles R.* 111-19 à R.* 111-19-4 du code de la construction et de l'habitation. 
Il définit les règles techniques d'accessibilité aux personnes handicapées applicables aux établissements recevant du public lors de leur construction et aux installations ouvertes au public lors de leur aménagement. 
Références : le présent arrêté peut être consulté sur le site Legifrance (www.legifrance.gouv.fr).

</Fieldset>




 
         </React.Fragment>

    );
  }
}