import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
} from 'react-native';
import StackNavigator from 'react-navigation';

class Perfil extends React.Component {
	static navigationOptions = {
		title: 'PERFIL',
		headerTintColor: '#f6f6f6',
		headerStyle: {
			backgroundColor: '#a53284'
		},
	};

	render () {
		return (
			<View style={styles.mainContainer}>
				<Image 
					source={require('./Screen_1_perfil.png')}
					style={{
						width: '120%',
						height: '100%',
						top: -50,
						right: -25,
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#f6f6f6',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},

	textStyle: {
		color: 'white',
		backgroundColor: 'seagreen', //What?
		width: '40%',
		height: '15%',
	},
})

export default Perfil;