import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
		padding: 24,
	},
	eventName: {
		color: '#FFFFFF',
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 48,
	},
	eventDate: {
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: 'normal',
		marginTop: 8,
	},
	input: {
		flex: 1,
		height: 56,
		backgroundColor: '#1F1E25',
		borderRadius: 5,
		color: '#FFF',
		padding: 16,
		fontSize: 16,
		marginTop: 16,
		marginRight: 12,
	},
	button: {
		height: 56,
		backgroundColor: '#31CF67',
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 16,
		width: 56,
	},
	buttonText: {
		color: '#FFF',
		fontSize: 32,
		fontWeight: 'bold',
	},
	form: {
		flexDirection: 'row',
		marginTop: 36,
		marginBottom: 42,
	},
	emptyList: {
		color: '#FFFFFF',
		fontSize: 16,
		textAlign: 'center',
	},
});
