import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from "expo-linear-gradient";
export default class CardComment extends Component {
    render() {
        return (
            <LinearGradient
                colors={["#7e00e9", "red"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.cardContainer}
            >
                <View style={[styles.setection, { justifyContent: "space-between" }]}>
                    <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: this.props.avatar }}
                        />
                        <Text style={styles.user} > {this.props.user}</Text>
                    </View>
                    <Icon style={styles.icon} name="options" size={20} color="white" />
                </View>
                <View style={[styles.setection,]} >
                    <Text style={styles.comment}>
                        {this.props.comment}
                    </Text>
                </View>
                <View style={[styles.setection]}>
                    <View style={[styles.setection]}>
                        <FontAwesome name="thumbs-up" size={30} color="white" />
                        <Text style={styles.textIcon} >3.000 Likes</Text>
                    </View>
                    <View style={[styles.setection]}>
                        <FontAwesome name="comment" size={30} color="white" />
                        <Text style={styles.textIcon} >3.000 Comments </Text>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({

    cardContainer: {
        width: 300,
        height: 200,
        elevation: 10,
        borderRadius: 15,
        padding: 20,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 5
    },
    user: {
        fontWeight: 'bold',
        color: "white",
        fontSize: 16
    },
    comment: {
        color: 'white',
        fontSize: 13,
        fontStyle: 'italic'
    },
    textIcon: {
        color: "white",
        marginLeft: 5,
    },
    setection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

});
