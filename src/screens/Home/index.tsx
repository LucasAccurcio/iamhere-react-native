import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { Participant } from './components/Participant';
import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participant, setParticipant] = useState('');
  // const participants = [
  //   'Lucas Accurcio',
  //   'Felippe Accurcio',
  //   'Tiago Accurcio',
  //   'Anna Smith',
  //   'John Doe',
  //   'Jane Doe',
  //   'John Smith',
  //   'Jane Smith',
  //   'John Wayne',
  //   'Jane Wayne'
  // ]

  function handleParticipantAdd(): void {
    if (participants.includes(participant)) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome');
    }
    setParticipants(prevState => [...prevState, participant]);
    setParticipant('');
  }

  function handleParticipantRemove(name: string): void {
    Alert.alert('Remover', `Você deseja excluir o participante ${name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado', 'Participante excluído com sucesso'),
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta-feira, 21 de Julho de  2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={'#808080'}
          onChangeText={setParticipant}
          value={participant}
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
            onRemove={() => handleParticipantRemove(item)}
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