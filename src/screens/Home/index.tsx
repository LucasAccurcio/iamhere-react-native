import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from './components/Participant';

export function Home() {

  function handleParticipantAdd(): void {
    console.log("Adicionando participante");
  }

  function handleParticipantRemove(): void {
    console.log("Excluindo participante");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta-feira, 21 de Julho de  2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor={'#808080'}
        />
        <StatusBar style="auto" />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant name="Lucas Accurcio" onRemove={handleParticipantRemove} />
      <Participant name="Felippe Accurcio" onRemove={handleParticipantRemove} />
      <Participant name="Tiago Accurcio" onRemove={handleParticipantRemove} />
    </View>
  );
}