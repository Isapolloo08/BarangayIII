//LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Perform authentication logic here (e.g., validate credentials)
        if (username === 'Admin' && password === 'Password') {
            // Navigate to the details screen if authenticated
            navigation.navigate('Home');
        } else {
            // Display an error message or handle unsuccessful login
            Alert.alert('Invalid credentials', 'Please check your username and password.');
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/profileIcon.png')} // Replace with your image path
                style={styles.image}
            />
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
            />
            <TouchableOpacity style={styles.showPasswordButton} onPress={toggleShowPassword}>
                <View style={[styles.checkbox, showPassword && styles.checkedCheckbox]}>
                    {showPassword && <Text style={styles.checkboxText}>✓</Text>}
                </View>
                <Text style={styles.showPasswordText}>Show Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>Forgot Password?</Text>
                <Text style={styles.bottomText}>Register</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    image:{
        width: 50, // Adjust the width as needed
        height: 50, // Adjust the height as needed
        resizeMode: 'cover',
        marginTop: -100,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#9B9393',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#9B9393',
    },
    button: {
        backgroundColor: '#710808',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '80%',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    showPasswordButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#710808',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 120,
    },
    checkedCheckbox: {
        backgroundColor: '#710808',
    },
    checkboxText: {
        color: 'white',
        fontSize: 14,
    },
    showPasswordText: {
        fontSize: 14,
        color: '#710808',
        fontWeight: 'bold'
  
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '80%',
    },
    bottomText: {
        color: '#710808',
        fontSize: 14,
        fontWeight: 'bold'
    },
});

export default LoginScreen;
