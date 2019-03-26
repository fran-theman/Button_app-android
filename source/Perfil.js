import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	FlatList,
} from 'react-native';
import StackNavigator from 'react-navigation';
import PostBlog from './PostBlog';

class Perfil extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null,
		};
	}

	componentDidMount() {
		fetch('https://dpvymqg5lb.execute-api.sa-east-1.amazonaws.com/prod/news')
			.then(response => response.json())
			.then(data => {
				this.setState({data: data})
				console.log('Loading')
			});
	}

	static navigationOptions = {
		title: 'PERFIL',
		headerTintColor: '#F6F6F6',
		headerStyle: {
			backgroundColor: '#A53284'
		},
	};

	render () {
		let { data } = this.state;

		//indicates when loading is done
		if (data === null) {
			return (
				<View style={{ backgroundColor: 'red', flex: 1}}>
				</View>)
		}


		console.log(data.Items);

		//Flat List 
		return (
			<View style={{ flex: 1, backgroundColor: 'blue'}}>
				<FlatList
					data={data.Items}
					renderItem={({item}) => {
						console.log(item);
						let dataStream = {
							blogHead: item.Tittle,
							blogImg: require('./blog_img_1.png'),
							blogTextBody: item.ShortDescription,
						}
						return (
							<View style={{flex: 1, backgroundColor: 'lightgrey'}}>
								<PostBlog 
									postContainer={styles.postContainer}
									postContent={dataStream}
								/>
							</View>
						)
					}}
				/>
			</View>

			)
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#F6F6F6',
		justifyContent: 'center',
		alignItems: 'center',
	},

	textStyle: {
		color: 'black',
		backgroundColor: '#F6F6F6',
	},
	postContainer: {
		flex:1,
		backgroundColor: '#F6F6F6',			// change to f6f6f6
		width: '100%',
		aspectRatio: 0.9,
		//height: 300,
		alignItems: 'center',
		marginBottom: '1%',
		//borderWidth: 3,					//test border
		//borderColor: 'crimson',			//test border color
	},
})

export default Perfil;
