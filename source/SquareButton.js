import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import {createStackNavigator, withNavigation, createAppContainer} from 'react-navigation';

class SquareButton extends React.Component {
	onPress = () => {
		console.log('Square Button', this.props.text),
		console.log('destination', this.props.navDestination),
		this.props.navigation.navigate(this.props.navDestination)
	}

	render() {
		return (
			<TouchableOpacity onPress={this.onPress} style={[styles.container, this.props.backgroundContainer]} >
				<Image 
					source={this.props.img}
					style={{
						width: 64, 
						height: 64,
					}} 
					resizeMode={'contain'}
				/>
				<Text style={[styles.textStyle, this.props.specialText]} >
					{this.props.text}
				</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	marginLeft: 5,
  	marginRight: 5,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '60%',
    height: '94%',
    borderRadius: 20,
  },
  
  textStyle: {
  	color: 'white',
  	fontWeight: '900',
  	fontSize: 12,
  	paddingTop: 10,
  },

})

export default withNavigation(SquareButton);