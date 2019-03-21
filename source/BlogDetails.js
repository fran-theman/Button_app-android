import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class BlogDetails extends React.Component {
	static navigationOptions = {
		title: 'DETAILS',
		headerTintColor: '#f6f6f6',
		headerStyle: {
      	   backgroundColor: '#a53284',
      	},
	};

	render () {

		return (
			<View style={styles.mainContainer}>
				<ScrollView contentContainerStyle={styles.scrollStyle}>
					<Text style={styles.titleStyle}>
						{blogPost.blogHead}
					</Text>
					<View style={styles.imageViewStyle}>
						<Image 
							source={blogPost.blogImg}
							resizeMode={'contain'}
							style={{
								width: '100%',
								height: '100%',
							}}
						/>
					</View>
					<Text style={styles.textBodyStyle}> 
						{blogPost.blogTextBody}
					</Text>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'lightgrey',				//change to #f6f6f6 on final version
	},

	scrollStyle: {
		backgroundColor: '#f6f6f6',
		alignItems: 'center',
	},

	imageViewStyle: {
		width: '100%', 
		aspectRatio: 1.5,
		//backgroundColor: 'dodgerblue',				//test color
	},

	titleStyle: {
		color: '#a53284',
		fontSize: 28,
		fontWeight: 'bold',
		marginTop: '5%',
		marginBottom: '10%',
		//backgroundColor: 'dodgerblue',				//test color
	},
	textBodyStyle: {
		fontWeight: 'bold',
		fontSize: 17,
		marginTop: '10%',
		marginBottom: '10%',
		marginRight: '6%',
		marginLeft: '6%',
		//backgroundColor: 'dodgerblue',				//test color
	},
})

const blogPost = {
	blogHead: 'A Virada da Maturidade',
	blogImg: require('./blog_img_0.png'),
	blogTextBody: 'Em sua 4a edição, o evento se consolida como o primeiro e maior festival que promove o protagonismo dos idosos, com experiencias e atividades gratuitas, celebrando uma vida socialmente mais ativa, com qualidade, independencia, conforto e segurança.\n\nPremiada com o "Selo Municipal de Direitos Humanos e Diversidade" 2018-2019 na categoria "pessoa idosa" promovido pela Secretaria de Direitos Humanos e Cidadania da Prefeitura de São Paulo, recebeu reconhecimento público como organização engajada na inclusão social e na valorização da diversidade no município de São Paulo. \n\nEm sua 4a edição, o evento se consolida como o primeiro e maior festival que promove o protagonismo dos idosos, com experiencias e atividades gratuitas, celebrando uma vida socialmente mais ativa, com qualidade, independencia, conforto e segurança.\n\nPremiada com o "Selo Municipal de Direitos Humanos e Diversidade" 2018-2019 na categoria "pessoa idosa" promovido pela Secretaria de Direitos Humanos e Cidadania da Prefeitura de São Paulo, recebeu reconhecimento público como organização engajada na inclusão social e na valorização da diversidade no município de São Paulo. ',
}

export default BlogDetails;

//dentro do render da tela de noticia padrao
//const newsData = this.props.navigation.getParam('newsData');

