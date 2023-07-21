import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta-feira, 21 de Julho de  2023</Text>
      <TextInput style={styles.input} placeholder="Digite seu nome" />
      <StatusBar style="auto" />
    </View>
  );
}