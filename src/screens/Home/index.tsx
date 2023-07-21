import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from './components/Participant';

export function Home() {
  const participants = [
    'Lucas Accurcio',
    'Felippe Accurcio',
    'Tiago Accurcio',
    'Anna Smith',
    'John Doe',
    'Jane Doe',
    'John Smith',
    'Jane Smith',
    'John Wayne',
    'Jane Wayne',
    'Anna Smith',
    'John Doe',
    'Jane Doe',
    'John Smith',
    'Jane Smith',
    'John Wayne',
    'Jane Wayne',
  ]

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

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Nenhum participante adicionado
          </Text>
        )}
      />
    </View>
  );
}