import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import PostBlog from './PostBlog';

class BlogPreview extends React.Component {
	static navigationOptions = {
		title: 'PREVIEW',
		headerTintColor: '#F6F6F6',
		headerStyle: {
      	   backgroundColor: '#A53284',
      },
	};

	render () {

		return (
			<View style={styles.mainContainer}>
				<ScrollView contentContainerStyle={styles.scrollStyle}>
					<PostBlog 
						postContainer={styles.postContainer}
						postContent={blogPost_0}
					/>
					<PostBlog 
						postContainer={styles.postContainer}
						postContent={blogPost_1}
					/>
					<PostBlog
						postContainer={styles.postContainer}
						postContent={blogPost_2}
					/>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'crimson',			//change to #f6f6f6 on final version
		//width: '60%',						//delete on final
		//height: '60%',					//idem
	},
	scrollStyle: {
		//flex: 1,
		alignItems: 'center',
		backgroundColor: 'lightgrey',		//change to f6f6f6
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

const blogPost_0 = {
	blogHead: 'A Virada da Maturidade',
	blogImg: require('./blog_img_0.png'),
	blogTextBody: 'Em sua 4a edição, o evento se consolida como o primeiro e maior festival que promove o protagonismo dos idosos, com experiencias e atividades gratuitas, celebrando uma vida socialmente mais ativa, com qualidade, independencia, conforto e segurança.\n\nPremiada com o "Selo Municipal de Direitos Humanos e Diversidade" 2018-2019 na categoria "pessoa idosa" promovido pela Secretaria de Direitos Humanos e Cidadania da Prefeitura de São Paulo, recebeu reconhecimento público como organização engajada na inclusão social e na valorização da diversidade no município de São Paulo. \n\nEm sua 4a edição, o evento se consolida como o primeiro e maior festival que promove o protagonismo dos idosos, com experiencias e atividades gratuitas, celebrando uma vida socialmente mais ativa, com qualidade, independencia, conforto e segurança.\n\nPremiada com o "Selo Municipal de Direitos Humanos e Diversidade" 2018-2019 na categoria "pessoa idosa" promovido pela Secretaria de Direitos Humanos e Cidadania da Prefeitura de São Paulo, recebeu reconhecimento público como organização engajada na inclusão social e na valorização da diversidade no município de São Paulo. ',
}

const blogPost_1 = {
	blogHead: 'Lorem ipsum dolor sit amet',
	blogImg: require('./blog_img_1.png'),
	blogTextBody: 'Suspendisse quis pharetra tortor, sit amet tincidunt odio. In id mi enim. Pellentesque aliquet viverra nisl, vel pulvinar mi congue ullamcorper. Aliquam pellentesque justo sed metus vulputate rhoncus. Etiam et est eu eros mollis finibus eget sed ligula. Donec sit amet nisi nunc. Duis et nibh vitae justo sollicitudin aliquam sed tempor metus. Phasellus tempus lorem vel ante faucibus, sit amet sagittis lorem ornare. Quisque sodales venenatis velit, nec sagittis nulla viverra et. Duis at nibh vehicula, auctor sapien vitae, lobortis nulla. Cras ultricies commodo consectetur. Nullam nisl lorem, faucibus vitae pharetra vel, imperdiet id nisi. Cras faucibus venenatis auctor. Vivamus finibus, quam vel mollis auctor, ipsum odio fermentum mi, nec porta justo odio et odio.',
}

const blogPost_2 = {
	blogHead: 'Nemo me impune lacessit',
	blogImg: require('./blog_img_2.png'),
	blogTextBody: 'Morbi posuere eros vitae maximus luctus. Ut efficitur ligula in purus mattis efficitur ut ut metus. Aliquam erat volutpat. Aliquam suscipit est at mi vulputate, in dictum justo lobortis. Aenean et leo eget neque condimentum porta at sed eros. Praesent massa enim, viverra ut nisi sit amet, malesuada rutrum enim. Vestibulum dapibus feugiat metus, vitae porttitor nunc pretium mattis. Curabitur scelerisque hendrerit tellus, quis commodo nulla ultrices sit amet.\n\nMaecenas quis consectetur nisi. Phasellus suscipit quis eros in mattis. Morbi aliquet ligula in odio laoreet dapibus. Cras hendrerit neque in pretium fermentum. Donec sit amet semper dui. Suspendisse lacinia eleifend sem, id tempor tortor rutrum in. Maecenas egestas enim quis neque commodo luctus. Sed lacinia efficitur malesuada. Sed eu suscipit ligula.'
}

export default BlogPreview;