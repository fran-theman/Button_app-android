import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import {StackNavigator, Header} from 'react-navigation';
import SquareButton from './SquareButton';

class HomeButtons extends React.Component {
	static navigationOptions = {
	  title: 'Home Page',
      headerTintColor: '#f6f6f6',
      tabBarLabel: 'Buttons!',
      headerStyle: {
      	backgroundColor: '#a53284',
      },
	};

	render () {
		return (
			<View style={styles.mainContainer} >
        
		        <View style={styles.container} >

		          <SquareButton
		            backgroundContainer={{backgroundColor: '#c76c8e'}}
		            text={'BLOG'}
		            img={require('./img_01.png')}
		            navDestination={'BlogScreen'}
		          />
		          
		          <SquareButton 
		            backgroundContainer={{backgroundColor: '#A96CC7'}}
		            text={'MEU PERFIL'}
		            img={require('./img_02.png')}
		            navDestination={'PerfilScreen'}
		          />
		          
		          <SquareButton 
		            backgroundContainer={{backgroundColor: '#1CAADD'}}
		            text={'INFORMAÇÕES'}
		            img={require('./img_03v1.png')}
		          />
		        </View>
	      
		        <View style={styles.container} >

		          <SquareButton 
		            backgroundContainer={{backgroundColor: '#de5930'}}
		            text={'PROGRAMAÇÃO'}
		            img={require('./img_04.png')}
		          />
		          
		          <SquareButton 
		            backgroundContainer={{backgroundColor: '#86bc01'}}
		            text={'MINHA AGENDA'}
		            img={require('./img_05.png')}
		          />
		        
		          <SquareButton 
		            backgroundContainer={{backgroundColor: '#1CB5AC'}}
		            text={'CONTATOS'}
		            img={require('./img_06.png')}
		          />
		        </View>

		        <View style={styles.container} >
		        
		          <SquareButton 
		            backgroundContainer={{backgroundColor: '#C434C4'}}
		            text={'MURAL'}
		            img={require('./img_07.png')}
		          />

		          <SquareButton 
		            backgroundContainer={{backgroundColor: '#64BB22'}}
		            text={'AVALIAR EVENTOS'}
		            img={require('./img_08.png')}
		          />

		          <SquareButton 
		            specialText={{fontSize: 11}}
		            backgroundContainer={{backgroundColor: '#138C84'}}
		            text={'PATROCINADORES'}
		            img={require('./img_09.png')}
		          />
		        </View>
		    </View>
		);
	}
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    marginTop: 3,
    marginLeft: 5,
    marginRight: 5,
    height: '17%',
    width: '100%',
  },
})

export default HomeButtons;