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
		            backgroundContainer={{backgroundColor: '#C76C8E'}}
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
		            navDestination={'InfoScreen'}
		          />
		        </View>
	      
		        <View style={styles.container} >

		          <SquareButton 
		            backgroundContainer={{backgroundColor: '#DE5930'}}
		            text={'PROGRAMAÇÃO'}
		            img={require('./img_04.png')}
		            navDestination={'CalendarScreen'}
		          />

		          
		          <SquareButton 
		            backgroundContainer={{backgroundColor: '#86BC01'}}
		            text={'MINHA AGENDA'}
		            img={require('./img_05.png')}
		            navDestination={'AgendaScreen'}
		          />
		        
		          <SquareButton 
		            backgroundContainer={{backgroundColor: '#1CB5AC'}}
		            text={'CONTATOS'}
		            img={require('./img_06.png')}
		            navDestination={'ContactsScreen'}
		          />
		        </View>

		        <View style={styles.container} >
		        
		          <SquareButton 
		            backgroundContainer={{backgroundColor: '#C434C4'}}
		            text={'MURAL'}
		            img={require('./img_07.png')}
		            navDestination={'WallScreen'}
		          />

		          <SquareButton 
		            backgroundContainer={{backgroundColor: '#64BB22'}}
		            text={'AVALIAR EVENTOS'}
		            img={require('./img_08.png')}
		            navDestination={'ScoreScreen'}
		          />

		          <SquareButton 
		            specialText={{fontSize: 11}}
		            backgroundContainer={{backgroundColor: '#138C84'}}
		            text={'PATROCINADORES'}
		            img={require('./img_09.png')}
		            navDestination={'PatronScreen'}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',		 //change to f6f6f6
    marginTop: 3,
    marginLeft: 5,
    marginRight: 5,
    width: '100%',
    aspectRatio: 3,
  },
})

export default HomeButtons;