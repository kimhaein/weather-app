import React , {Component} from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Weather from './component/Weather.js'

export default class App extends Component {
  state = {
    isLoaded:false,
    error:null
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(  // 위치정보 확인
      positon => {
        this.setState({
          isLoaded: true
        })
      },
      error => {
        this.setState({
          error: error
        })
      }
    )

  }
  render() {
    const { isLoaded,error } = this.state
    return (
      <View style={styles.container}>
      <StatusBar hidden={true}/>
        {isLoaded ? (<Weather/>)
        : (<View style={styles.loading}>
            <Text style={styles.loadingText}>날씨 정보를 가져오는 중입니다...</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
           </View>)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    marginBottom: 40
  },
  loading : {
    flex:1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText : {
    fontSize: 25,
    marginBottom: 24
  }
});
