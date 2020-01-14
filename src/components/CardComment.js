import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {FontAwesome} from '@expo/vector-icons'
export default class CardComment extends Component {
    render() {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.topScreen}>
                    <Image
                        style={styles.img}
                        source={{ uri: this.props.img }}
                    />
                    <Text style={styles.user} > {this.props.user}</Text>       
                    <Icon style={styles.icon} name="options" size={20} color="white" />
                </View>
                <View style={[styles.centerScreen, ]} >
                    <Text style={styles.comment}>
                        {this.props.comment}
                    </Text>
                </View>
                <View style={styles.bottomScreen}>
                    <Icon name="like" size={20} color="white" /> 
                        <Text style={styles.textIcon} >178 Likes</Text>  
                    <FontAwesome name="comment" size={20} color="white" />       
                        <Text style={styles.textIcon} > 67 Comments </Text>               
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    cardContainer: {
        padding:20,
        margin: 10,
        width:300,
        height: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 10,
        backgroundColor: '#8D13F7',
        borderRadius: 15
    },
    img: {
        width: 35,
        height: 35,
        borderRadius: 40,
        
    },
    user: {
        fontWeight: 'bold',
        color: "white",
        marginLeft: -10,
    },
    comment: {
        color: 'white',
        
    },
    textIcon: {
        color: "white",     
    },
    topScreen: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: 'yellow'
    },
    centerScreen: {
        flex: 1,
        justifyContent: "space-around",
        //width: '100%',
        // backgroundColor: 'red'
    },
    bottomScreen: {
        flex: 1,
        //width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: 'pink',
    },

});
