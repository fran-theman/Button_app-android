import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation, createStackNavigator, createAppContainer} from 'react-navigation';

class LongButton extends React.Component{
	onPress = () => {
		console.log('Long Button', this.props.navDestination)
		this.props.navigation.navigate(this.props.navDestination)
	}
	render() {
		return (
			<TouchableOpacity onPress={this.onPress} style={[styles.container, this.props.backgroundContainer]}>
				<Text style={[styles.textStyle, this.props.specialText]}> {this.props.text} </Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		borderRadius: 30,
		backgroundColor: '#a53284',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textStyle: {
		fontSize: 20,
		fontWeight: '900',
		color: 'gold'
	}
})

export default withNavigation(LongButton);

/* Props

navDestination --> scren name this directs to
backgroundContainer --> a style for touchable opacity
specialText --> a style for special text
text --> the displayed text

*/