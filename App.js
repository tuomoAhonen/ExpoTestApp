import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default App = () => {
	//export default function App() {
	const [message, setMessage] = useState('');

	const showAlert = () => {
		Alert.alert('Hello', `Greetings, this is your text input: ${message}`);
	};

	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<Text>Testi expo app</Text>
			<TextInput placeholder='input pls' style={styles.textInput} onChangeText={(e) => setMessage(e)} />
			<Button title='Press me' onPress={showAlert} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textInput: {
		margin: 5,
		paddingLeft: 5,
		paddingRight: 5,
		borderWidth: 1,
		borderColor: '#000000',
	},
});

