import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
} from 'react-native';
import {StackNavigator, Header} from 'react-navigation';

class Agenda extends React.Component {
	static navigationOptions = {
	  title: 'adjenda',
      headerTintColor: '#f6f6f6',
      headerStyle: {
      	backgroundColor: '#a53284',
      },
	};

	render () {
		return (
			<View style={{flex: 1, backgroundColor: 'dodgerblue'}}>
				<Text style={styles.textStyle}>
					1, 2, 3, testing, testing
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20,
	},
})

export default Agenda;