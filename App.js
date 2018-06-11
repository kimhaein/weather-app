import React , {Component} from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Weather from './component/Weather.js'

const API_KEY = '2d6e3515cca55a8bebe690cc2f87731c'

export default class App extends Component {
  state = {
    isLoaded:false,
    error:null,
    temperature:null,
    name:null,
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(  // 위치정보 확인
      position => {
        this._getWeather(position.coords.latitude,position.coords.longitude)
      },
      error => {
        this.setState({
          error: error
        })
      }
    )
  }
  _getWeather = (lat,long) => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
      .then( response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          temperature : json.main.temp,
          name:json.weather[0].main,
          isLoaded:true,
        })
      }

      )
  }
  render() {
    const { isLoaded,error,temperature, name } = this.state
    return (
      <View style={styles.container}>
      <StatusBar hidden={true}/>
        {isLoaded ? (<Weather WeatherName={name} temp={Math.ceil(temperature-273.15)}/>)
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
