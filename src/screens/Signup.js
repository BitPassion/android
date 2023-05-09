import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Image, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Logo from "../assets/logo.png";
import {Icon} from 'react-native-elements/';
import {white} from '../helpers/Color';

class Signup extends Component {
    state = {
        email: '',
        password: ''
    };

    signupUser = (navigation) => {
        navigation.navigate('Movies');
    };

    render() {

        const navigation = this.props.navigation;

        return (
            <ScrollView style={styles.container}>
                <View style={styles.logoView}>
                    <Image source={ Logo } />
                </View>
                <View style={styles.introTextView}>
                    <Text style={styles.introTitle}>Welcome to MQX</Text>
                    <Text style={styles.introText}>Enter the below details for sign up</Text>
                </View>
                <View style={styles.signupInputView}>
                    <Icon name={'user'} type='font-awesome' size={20} color={'gray'} style={styles.inputIcon} />
                    <View style={{alignSelf: 'center', flex: 1}}>
                        <TextInput
                            style={styles.signupInput}
                            onChangeText={text => {
                                this.setState({ email: text });
                            }}
                            autoCorrect={false}
                            placeholder={'Email'}
                            placeholderTextColor={'white'}
                        />
                    </View>
                </View>
                <View style={styles.signupInputView}>
                    <Icon name={'lock'} type='font-awesome' size={20} color={'gray'} style={styles.inputIcon} />
                    <View style={{alignSelf: 'center', flex: 1}}>
                        <TextInput
                            style={styles.signupInput}
                            onChangeText={text => {
                                this.setState({ password: text });
                            }}
                            secureTextEntry={true}
                            autoCorrect={false}
                            placeholder={'Passowrd'}
                            placeholderTextColor={'white'}
                        />
                    </View>
                </View>
                <View style={styles.signupInputView}>
                    <Icon name={'lock'} type='font-awesome' size={20} color={'gray'} style={styles.inputIcon} />
                    <View style={{alignSelf: 'center', flex: 1}}>
                        <TextInput
                            style={styles.signupInput}
                            onChangeText={text => {
                                this.setState({ password: text });
                            }}
                            secureTextEntry={true}
                            autoCorrect={false}
                            placeholder={'Confirm Passowrd'}
                            placeholderTextColor={'white'}
                        />
                    </View>
                </View>
                <View style={styles.signupButtonView}>
                    <TouchableOpacity style={styles.signupButton} onPress={() => this.signupUser(navigation)}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signupView}>
                    <Text style={styles.normalText}>Already have got an account?&nbsp;
                        <Text style={styles.strongText} onPress={() => navigation.navigate('Login')}>
                            Login
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

Signup.propTypes = {
    navigation: PropTypes.object,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    logoView: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    introTextView: {
        marginTop: 80,
        marginBottom: 20
    },
    introTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    introText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    },
    inputIcon: {
        margin: 12,
        color: white
    },
    signupInputView: {
        marginHorizontal: 16,
        backgroundColor: '#212121',
        borderRadius: 24,
        flexDirection: 'row',
        marginTop: 10
    },
    signupInput: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 14,
      flex: 1,
      marginRight: 12,
      color: 'white'
    },
    signupButtonView: {
        marginHorizontal: 16,
        marginTop: 30
    },
    signupButton: {
        backgroundColor: '#3b5999',
        padding: 8,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    signupView: {
        marginTop: 30
    },
    normalText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    strongText: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

export default Signup;