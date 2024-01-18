import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const BuysAdd = ({navigation}) => {

    const [name,setName] = useState('');
    const [num, setNum] = useState('');
    const [houseno, setHouseno] = useState('');
    const [street, setStreet] = useState('');

    // const [lat, setLat] = useState();
    // const [lng, setLng] = useState();

    const getDirect = async() => {
        const URL = 'https://api.distancematrix.ai/maps/api/geocode/json?address='+houseno+',+'+street+',+lachit+nagar,+guwahati&key=1RHlNXtTuPwYDa16e3zAPw4IbDckfnW1vuPAH7uCpJ2K3KVHBF7UUbutgGQju9R7';
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        // setLat(data.result[0].geometry.location.lat);
        // setLng(data.result[0].geometry.location.lng);
        // navigation.navigate("Map", {lat: lat, lng: lng});
        await navigation.navigate("Map", {
            lat: data.result[0].geometry.location.lat, 
            lng: data.result[0].geometry.location.lng
        });
        // console.log(lat);
        // console.log(lng);
    };

    // useEffect(() => {
    //     getDirect();
    // }, [])

  return (
    <ScrollView style={styles.container}>
        <View style={styles.bodyView}>
            <Text style={styles.textView}>Address & Contact</Text>
            <View style={styles.baseContainer}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Your Name"
                            autoFocus = {true}
                            //caretHidden={true}
                            value={name}
                            onChangeText={setName}
                            //inputMode='numeric'
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Phone Number"
                            //autoFocus = {true}
                            //caretHidden={true}
                            value={num}
                            onChangeText={setNum}
                            inputMode='numeric'
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Flat No./House No."
                            //autoFocus = {true}
                            //caretHidden={true}
                            value={houseno}
                            onChangeText={setHouseno}
                            //inputMode='numeric'
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Street Name"
                            //autoFocus = {true}
                            //caretHidden={true}
                            value={street}
                            onChangeText={setStreet}
                            //inputMode='numeric'
                        />
                        <Text style={styles.textView1}>
                            Lachit Nagar
                        </Text>
                        <Text style={styles.textView1}>
                            Guwahati, Assam
                        </Text>
                        <Text style={styles.textView1}>
                            Pin 781007
                        </Text>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={getDirect}
                        >
                            <Text style={styles.btnText}>Continue</Text>
                        </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
}

export default BuysAdd

const styles = StyleSheet.create({
    container: {
        //borderColor: "red",
        //borderWidth: 5,
        flex: 1,
        backgroundColor: "#EEEEEE"
    },
    bodyView: {
        flex: 1,
        margin: 50,
        marginTop: 130,
        alignItems: "center",
    },
    textView: {
        fontSize: 20,
        fontWeight: "900",
    },
    baseContainer: {
        //borderColor: 'red',
        //borderWidth: 5,
        //height: "25%",
        width: "100%",
        marginVertical: 10,
        alignItems: "center",
    },
    box: {
        //borderColor: 'red',
        //borderWidth: 5,
        
    },
    inputStyle: {
        height: 60,
        borderColor: '#191717',
        borderWidth: 1,
        fontSize: 18,
        width: "100%",
        borderRadius: 10,
        textAlign: "center",
        marginTop: 40,
    },
    textView1: {
        fontSize: 25,
        fontWeight: "900",
        color: "#451952",
        margin: 8,
        marginTop: 20,
    },
    btn: {
        width: '75%',
        padding: 30,
        borderRadius: 100,
        marginTop: 30,
        backgroundColor: "#B0D9B1"
    },
    btnText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "900",
    },
})