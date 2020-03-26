/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { BasicItem } from "./basicItem";

var radio_props = [
  { label: "Muito maior", value: 5 },
  { label: "Maior", value: 4 },
  { label: "A mesma", value: 3 },
  { label: "Menor", value: 2 },
  { label: "Muito menor", value: 1 }
];

var radio_props1 = [
  { label: "Homem", value: 0 },
  { label: "Mulher", value: 1 }
];

var radio_props2 = [
  { label: "Muito Frequentemente", value: 5 },
  { label: "Frequentemente", value: 4 },
  { label: "Algumas vezes", value: 3 },
  { label: "Raramente", value: 2 },
  { label: "Nunca", value: 1 }
];

var radio_props3 = [
  { label: "Sim, todos os dias", value: 5 },
  { label: "Sim, mais de 4 dias por semana", value: 4 },
  { label: "sim de 2 a 4 dias por semana", value: 3 },
  { label: "Sim, menos de 2 dias por semana", value: 2 },
  { label: "Não pratico atividade física", value: 1 }
];

var radio_props4 = [
  { label: "Analfabeto/Fundamental I Incompleto", value: 0 },
  { label: "Fundamental I Completo/Fundamental II Incompleto", value: 0 },
  { label: "Fundamental I Completo/Ensino Médio Incompleto", value: 0 },
  { label: "Ensino Médio Completo/Superior Incompleto", value: 0 },
  { label: "Superior Completo", value: 0 },
  { label: "Pós-graduação/Mestrado/Doutorado", value: 0 }
];

var radio_props5 = [
  { label: "Trabalho atualmente como empregado", value: 1 },
  { label: "Trabalho atualmente por conta própria", value: 2 },
  { label: "Desempregado", value: 3 },
  { label: "Trabalhos da casa", value: 4 },
  { label: "Aposentado/Pensionista", value: 5 }
];

var radio_props6 = [
  { label: "Diariamente", value: 1 },
  { label: "Socialmente (fins de semana)", value: 2 },
  { label: "Raramente", value: 3 },
  { label: "Não bebe ", value: 4 }
];

var radio_props7 = [
  { label: "Menos que 1 mês", value: 5 },
  { label: "De 1 a 3 meses", value: 4 },
  { label: "De 4 a 6 meses", value: 3 },
  { label: "De 7 a 9 meses", value: 2 },
  { label: "Mais que 9 meses", value: 1 }
];

var radio_props8 = [
  { label: "Até 40 anos", value: 1 },
  { label: "40 a 60 anos", value: 2 },
  { label: "60 a 69 anos", value: 3 },
  { label: "70 a 79 anos", value: 4 },
  { label: "Acima de 80 anos", value: 5 }
];

var radio_props9 = [
  { label: "Solteiro(a)", value: 1 },
  { label: "Casado(a) ou vivendo em casal", value: 2 },
  { label: "Separado ou divorciado", value: 3 },
  { label: "Viúvo", value: 4 }
];

var radio_props10 = [
  { label: "Sim", value: 1 },
  { label: "Não", value: 0 }
];

var radio_props11 = [
  { label: "Excelente", value: 5 },
  { label: "Muito boa", value: 4 },
  { label: "Boa", value: 3 },
  { label: "Regular", value: 2 },
  { label: "Ruim", value: 1 }
];

var radio_props12 = [
  { label: "Doenças Cardiovasculares (Doenças do coração)", value: 0 },
  { label: "Hipertensão (Pressão Alta)", value: 0 },
  { label: "AVE (Derrame)", value: 0 },
  { label: "Diabetes", value: 0 },
  { label: "Câncer", value: 0 },
  { label: "Doença Pulmonar Obstrutiva Crônica (DPOC)", value: 0 },
  {
    label: "Doenças músculo-esqueléticas (como artrite e osteoporose)",
    value: 0
  },
  { label: "Doenças mentais (como demência e depressão)", value: 0 },
  { label: "Osteoporose", value: 0 },
  { label: "Cegueira ou diminuição da visão ", value: 0 },
  { label: "Nenhum", value: 1 }
];

var radio_props13 = [
  { label: "Tomar banho", value: 1 },
  { label: "Vestir-se", value: 1 },
  { label: "Comer", value: 1 },
  { label: "Deitar, sentar ou levantar-se", value: 1 },
  { label: "Ir ao banheiro", value: 1 },
  {
    label: "Controle completo de suas eliminações (urinar e evacuar)",
    value: 1
  },
  {
    label: "Nenhum destes",
    value: 0
  }
];

var radio_props14 = [
  { label: "Preparar suas refeições sem ajuda", value: 1 },
  { label: "Fazer compras sozinho", value: 1 },
  { label: "Fazer tarefas domésticas leves", value: 1 },
  { label: "Fazer tarefas domésticas pesadas", value: 1 },
  {
    label:
      "Cuidar do seu dinheiro (pagamento de contas, acompanhamento das despesas, depósitos e saques em bancos)",
    value: 1
  },
  {
    label:
      "Fazer uso de medicamentos sem lembretes ou assistência de outra pessoa",
    value: 1
  },
  {
    label: "Recebe e faz ligações telefônicas sem assistência",
    value: 1
  },
  { label: "Realiza viagens sozinho, se quisesse", value: 1 },

  { label: "Nenhum destes", value: 0 }
];

var radio_props15 = [
  { label: "Assistir TV ou escutar rádio", value: 1 },
  { label: "Ler jornal, revista ou livros", value: 1 },
  { label: "Praticar jogos de salão (bingo, baralho, dominó, etc)", value: 1 },
  { label: "Cuidar de netos ou auxiliar parentes", value: 1 },
  {
    label: "Praticar jardinagem",
    value: 1
  },
  {
    label: "Fazer trabalho voluntário",
    value: 1
  },
  {
    label: "Fazer trabalhos manuais (costurar, crochê, ou tricô, bordado, etc)",
    value: 1
  },
  { label: "Ir ao cinema ou ao teatro", value: 1 },

  { label: "Nenhum destes", value: 0 }
];

const quest = [
  { title: "1. Você é:", alternatives: radio_props1 },
  { title: "2. Qual a sua idade?", alternatives: radio_props8 },
  { title: "3. Qual o seu nível de escolaridade?", alternatives: radio_props4 },
  { title: "4. Qual o seu estado civil", alternatives: radio_props9 },
  {
    title: "5. Por favor, indique sua situação profissional:",
    alternatives: radio_props5
  }
];

const quest1 = [
  {
    title:
      "1. O que você consegue realizar sem ajuda? (Pode ser mais de uma opção)",
    alternatives: radio_props13
  },
  {
    title: "2. Você consegue? (Pode ser mais de uma opção)",
    alternatives: radio_props14
  }
];

const quest2 = [
  {
    title: "1.	Possui algum plano de saúde ou seguro-saúde privado?",
    alternatives: radio_props10
  },
  {
    title: "2.	Como você avalia a sua saúde de modo geral:",
    alternatives: radio_props11
  },
  {
    title:
      "3.	Como você avalia a sua saúde comparada a outras pessoas da mesma idade:",
    alternatives: radio_props11
  },
  {
    title: "4.	Como você avalia a sua saúde comparada a 12 meses atrás:",
    alternatives: radio_props11
  },
  {
    title: "5. Você tem no momento... (Pode ser mais de uma opção)",
    alternatives: radio_props12
  },
  {
    title: "6. Quando adoece, costuma procurar atendimento médico?",
    alternatives: radio_props2
  }
];

const quest3 = [
  { title: "1. Fuma ou já fumou?", alternatives: radio_props10 },
  { title: "2. Ingere bebida alcoólica?", alternatives: radio_props6 },
  {
    title: "3. Você pratica esporte/exercício físico:",
    alternatives: radio_props3
  },
  { title: "4. Quantos meses por ano?", alternatives: radio_props7 },
  {
    title:
      "5. Em comparação com outras pessoas da minha idade eu penso que minha atividade física é:",
    alternatives: radio_props
  },
  {
    title:
      "6. Você adere a uma alimentação saudável, com refeições variadas, incluindo frutas e verduras e evita alimentos gordurosos?",
    alternatives: radio_props2
  },
  {
    title:
      "7. Participa de algum clube, associação, sindicato ou grupo de convivência?",
    alternatives: radio_props2
  },
  {
    title: "8. Você costuma... (Pode ser mais de uma opção)",
    alternatives: radio_props15
  }
];

const data = [
  { title: "I. Aspectos Sociodemográficos ", questions: quest },
  { title: "II. Saúde Percebida", questions: quest2 },
  {
    title: "III. Atividades Básicas e Instrumentais da Vida Diária",
    questions: quest1
  },
  { title: "IV. Atividades Sociais", questions: quest3 }
];

export default class Basic extends Component {
  static navigationOptions = {
    title: "Envelhecimento Ativo"
  };

  renderItem = ({ item }) => <BasicItem item={item} />;
  //<BasicItem/>
  render() {
    return (
      <ScrollView>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(_, index) => index + ""}
          scrollEnabled={true}
        />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              this.props.navigation.navigate("SignOut");
            }}
          >
            <Text style={styles.saveButtonText}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
    //backgroundColor: "#fafafa",
  },

  saveButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#ef5350",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },

  saveButtonText: {
    fontSize: 16,
    color: "#ef5350",
    fontWeight: "bold"
  }
});
