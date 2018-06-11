import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons/';

const weatherCases = {
    Rain: {
        colors:['#00C6FB','#005BEA'],
        title:'비가 옵니다',
        subTitle:'우산을 챙기세요!!',
        icon:'weather-pouring'
    },
    Clear: {
        colors:['#FEF253','#FF7300'],
        title:'날씨 맑음',
        subTitle:'소풍가기 좋은 날',
        icon:'weather-sunny'
    },
    Thunderstorm: {
        colors:['#00ECBC','#007ADF'],
        title:'천둥 번개가 칩니다',
        subTitle:'번개 조심하시요',
        icon:'weather-lightning'
    },
    Clouds: {
        colors:['#D7D2CC','#304352'],
        title:'구름 많음',
        subTitle:'우중충한 날씨다',
        icon:'weather-cloudy'
    },
    Snow: {
        colors:['#7DE2FC','#B9B6ES'],
        title:'하늘에서 눈이 와요~',
        subTitle:'눈사람을 만들어봐요',
        icon:'weather-snowy'
    },
    Drizzle: {
        colors:['#89F7FE','#66A6FF'],
        title:'이슬이슬 이슬비',
        subTitle:'우산을 챙겨야 되나...?',
        icon:'weather-rainy'
    },
    Haze: {
        colors:['#89F7FE','#66A6FF'],
        title:'안개 자욱',
        subTitle:'운전 조심하세요:)',
        icon:'weather-fog'
    },
    Mist: {
        colors:['#89F7FE','#66A6FF'],
        title:'안개 자욱',
        subTitle:'운전 조심하세요:)',
        icon:'weather-fog'
    }
}
function Weather({temp,WeatherName}){
    console.log(WeatherName)
    return (
        <LinearGradient 
        colors={weatherCases[WeatherName].colors}
        style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons
                    color='#FFFFFF'
                    size={144}
                    name={weatherCases[WeatherName].icon}
                />
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[WeatherName].title}</Text>
                <Text style={styles.subTitle}>{weatherCases[WeatherName].subTitle}</Text>
            </View>
        </LinearGradient>
    )
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp: {
        fontSize:48,
        color:'#FFFFFF',
        marginTop:10
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft:25,
    },
    title: {
        fontSize:38,
        color:'#FFFFFF',
        marginBottom:10,
        fontWeight: '300'
    },
    subTitle: {
        fontSize:24,
        color:'#FFFFFF',
        marginBottom:24
    }
    
})
