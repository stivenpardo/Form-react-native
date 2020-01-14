import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import CardComment from './CardComment'
export default class Form extends Component {
    state = {
        name: '',
        comentario: '',
    }
    hadleName = (e) => {
        this.setState({
            name: e.nativeEvent.text
        })
    }
    render() {
        return (
            <View style={styles.formContainer}>
                <TextInput onChange={this.hadleName} style={styles.input} placeholder="name" />
                <TextInput
                    style={styles.input}
                    placeholder="comentario"
                    onChangeText={(comentario) => {
                        this.setState({ comentario })
                    }}
                />
                <Button
                    title="guardar"
                    onPress={() => {
                        alert("Touched")
                    }}
                />
                <CardComment img="https://lh3.googleusercontent.com/s2OEr1nJDNvVxavdkmOn9HUc8MlFWNpS882-S_4TXaVVJ-jdyLteSuetKPPRdwpx5Srze5tnILthSua8ANbknTVvBErVkkicLWBJiFy1TZbhXDAB8wPZBk9V7vWRGKnJyo55FVl3ajWAk8bwriU_Fbb-C41HJTAtNpM2eX34kOi3fwBBUVt4z4KmmvNDEpp3s9fxzkqHOpqfZNjgWA2PbmY4EWdJL7IF7lkHSHfR2L_8MU-eD8_pc-I7vTaKz7J29BbI4iPHILh3_9bjxJYbZ5hTv4jObLzDCMR2qSPRlAGG7r2KDG5xvWyEJKIhM1QB8Ap8KabhkWRP9J83IoooDS1qgMkawJTlRN7e-8ibhDWV8kPfd6usIdW4_14Smiokh2_FBQvYGsa7I_PhkjCbI6E4YDp-a9mpcPCzvhPLefYRTgl5Yrh7Kj8x8OYt1y71jQc9362XX9enkrLzB9WkY7SkvJKVdep9dd8xhNVgFQ0GuB8T8p_6K1-S9M-xxJoyM2dk65moGE0c_ssS4mt7LUX_xI1ALAsJtyCCSAmbaCpH1Yvy-1Uk9HywU6ch2yfKqM2pv37mCZpFFQBDN6VK1HJjtbLmhd4JNFj_M7P05J6lJ4CxthAE6NOj_MMyE17gzRGLVGaEqEOfTGFNKoY7DVILpILvK_NpCdnzVlkKRnTA3u-3iI8r1Q=w913-h686-no" 
                user={this.state.name} 
                comment={this.state.comentario} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    formContainer: {
        width:'100%',
        // backgroundColor:'red',
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width:'100%',
        backgroundColor: '#aaa',
        borderRadius: 20,
        height: 40,
        paddingHorizontal: 10,
        marginVertical: 10
    },

})