import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
} from 'react-native';
import {StackNavigator, Header} from 'react-navigation';

class Wall extends React.Component {
	static navigationOptions = {
	  title: 'just a brick',
      headerTintColor: '#f6f6f6',
      headerStyle: {
      	backgroundColor: '#a53284',
      },
	};

	render () {
		return (
			<View style={styles.mainContainer}>
				<Text style={styles.textStyle}>
					1, 2, 3, testing, testing
				</Text>
				<View style={styles.imgContainer}>
					<Image source={{uri: 'https://s3-sa-east-1.amazonaws.com/i9acao-jpr-publico/noticias/news-image-82.jpeg'}}
						   style={{height: 225, width: 400}}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#F6F6F6',
		alignItems: 'center',
		justifyContent: 'center',
	},
	imgContainer: {
		flex: 1,
		height: '30%',
		aspectRatio: 1,
		backgroundColor: 'dodgerblue',
	},
	textStyle: {
		fontSize: 26,
		fontWeight: 'bold'
	},
})

export default Wall;