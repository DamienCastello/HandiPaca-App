import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default class aboutus extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={{ fontFamily: 'Comfortaa', textAlign: 'center', marginTop: 40, fontSize: 40 }}>A propos</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image style={{ resizeMode: 'contain', height: 100, width: 100, marginTop: 55 }} source={require('../../assets/Ping.png')} />
                    </View>
                    <Text style={{ fontFamily: 'Comfortaa', textAlign: 'center', marginTop: 40, fontSize: 20, paddingHorizontal: 25 }}>
                        Réalisée lors du hackaton de la DataWeek 2019, l’application mobile HandiPaca a pour objectif de faciliter l’accessibilité des milieux urbains de la région Paca, nouvellement appelée Région Sud, aux personnes à mobilité réduite (handicaps moteurs, difficultés liées à l’âge, mais également les difficultés liées à la grossesse ou à l’utilisation de poussettes…).
                    {"\n"}
                        Nous avons la chance que l’État mette à notre disposition différentes données en libre accès, malheureusement ce dispositif est encore récent et ce socle de données mériterait d’être amélioré et d’être nourrit.
                    {"\n"}
                        L’un des enjeux de cet hackathon était l’utilisation de données numériques mises à disposition sur la plateforme DATASUD. Nous avons donc utilisé les données de la ville de Nice qui répertorient l’ensemble des places de stationnement handicapées afin de les afficher sur une carte de la France.
                    {"\n"}

                        Avec HandiPaca, chaque citoyen est en mesure de nourrir cette base de données nationale, en ajoutant à la carte les places de stationnements handicapées qu’il rencontre, mais également en spécifiant quels restaurants, magasins ou hôtels sont accessibles aux personnes à mobilité réduite.
                    {"\n"}
                        Plus que cela, chaque citoyen peut également s’impliquer dans l’amélioration du quotidien en prévenant les autorités concernées lorsqu’il rencontre un manque d’aménagement urbain. Des pavés abîmés ? Un trottoir sans rampe pour descendre ? Il lui suffit de remplir un formulaire pour que sa région soit prévenue !
                    {"\n"}
                        Voilà le second avantage qu’offre HandiPaca, une communication directe entre le citoyen et l’administration publique, un véritable suivi des demandes, et donc une amélioration des infrastructures, fidèle aux besoins des usagers et aux moyens de la région.
                </Text>
                </View>
            </ScrollView>
        )
    }
}