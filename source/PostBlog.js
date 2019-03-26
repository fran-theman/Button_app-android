import React from 'react';
import {
	View,
	Image,
	Text,
	StyleSheet
} from 'react-native';
import StackNavigator from 'react-native';
import LongButton from './LongButton';

class PostBlog extends React.Component{
	render () {
		console.log('Props', this.props);
		return (
			<View style={this.props.postContainer}>
				<Text style={styles.titleStyle}>
					{this.props.postContent.blogHead}
				</Text>
				<View style={{height: '40%', aspectRatio: 4/1, maxWidth: '94%', /*backgroundColor: 'dodgerblue'*/}}>
					<Image 
						source={this.props.postContent.blogImg}
						resizeMode={'contain'}
						style={{
							width: '100%',
							height: '100%',
						}}
					/>
				</View>
				<Text style={styles.textBodyStyle}> 
					{this.props.postContent.blogTextBody}
				</Text>
				<View
					style={styles.buttonViewStyle}
				>
					<LongButton
						navDestination={'BlogDetailScreen'}
						text={'Leia Mais'}
						specialText={{color:'#f6f6f6'}}
					/>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	titleStyle: {
		flex: 0,
		color: '#a53284',
		fontSize: 26,
		fontWeight: 'bold',
		marginTop: '2%',
		marginBottom: '2%',
		//backgroundColor: 'dodgerblue',				//test color
	},
	textBodyStyle: {
		flex: 1,
		fontWeight: 'bold',
		fontSize: 17,
		marginTop: '2%',
		marginBottom: '2%',
		width: '88%',
		//backgroundColor: 'dodgerblue',				//test color
	},
	buttonViewStyle: {
		//flex: 1,
		width: '55%',
		aspectRatio: 4,
		//marginBottom: '5%',
		//backgroundColor: 'dodgerblue',				//test color
	},
})

export default PostBlog;

/*	Props (this.props.example)
postContainer -> style for the main view of this post

postContent -> displayed content
	blogHead -> Blog title
	blogImg -> image address (for now local)
	blogTextBody -> the main text body to display

onPress={() => {
    this.props.navigation.navigate('NewsScreen', {
      newsData: this.props.data
  	})
}}
*/