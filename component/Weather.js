import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo';
import {Ionicons} from '@expo/vector-icons/';

export default class Weather extends Component {
    render(){
        return (
            <LinearGradient 
            colors={['#00C6Fb','#005BEA']} 
            style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons
                        color='#FFFFFF'
                        size={144}
                        name='ios-rainy'
                    />
                    <Text style={styles.temp}>35도</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>비온다</Text>
                    <Text style={styles.subTitle}>우산챙기쇼</Text>
                </View>
            </LinearGradient>
        )
    }

}

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
