import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import AvailableRoutes from './AvailableRoutes'
import { Button } from 'react-native-paper';
import {TextInput, StyleSheet, Pressable, Text, View, Alert, Image} from "react-native";

export default function RoutesReservation({back}) {
    const [search, onSearch] = useState("");
    const [availableRoutesState, setAvailableRoutesState] = useState(false);

    const handleAvailableRoutes = () => {
        setAvailableRoutesState(true);
    }
    return (
        availableRoutesState ? <AvailableRoutes /> :
            <View>
                <View style={styles.backButton}>
                    <Button icon='arrow-left' size={24} color="black" style={styles.backButtonStyle} onPress={back}>
                        Available Routes
                    </Button>
                </View>
                <View style={styles.mainTransparent}>
                    <View style={styles.transparent}>
                        <View style={styles.searchArea}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onSearch}
                                value={search}
                                placeholder="   CDO to Iligan"
                            />
                        </View>
                        <Pressable style={styles.buttonStyle} onPress={() => handleAvailableRoutes()}>
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <View style={{ paddingTop: 30, paddingBottom: 30}}>
                                    <Text style={styles.buttonPlaceLeftLabel}>
                                        CDO
                                    </Text>
                                    <Text style={styles.buttonLabel}>
                                        01:00 PM
                                    </Text>
                                </View>
                                <View style={{ paddingTop: 20}}>
                                    <Image source={require('../../assets/images/Bus.png')} style={styles.logo}/>
                                </View>
                                <View style={{ paddingTop: 30, paddingBottom: 30}}>
                                    <Text style={styles.buttonPlaceRightLabel}>
                                        Iligan
                                    </Text>
                                    <Text style={styles.buttonLabel}>
                                        03:00 PM
                                    </Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonDateLabel: {
        padding: 2,
        fontSize: 15,
        color: "#00000094",
    },
    buttonPlaceLeftLabel: {
        padding: 2,
        fontSize: 25,
        color: "#F9AD10",
        fontWeight: "700"
    },
    buttonPlaceRightLabel: {
        padding: 2,
        fontSize: 25,
        color: "#177FF4",
        fontWeight: "700"
    },
    transparent: {
        width: "100%",
        display: "flex",
        padding: 25,
        paddingTop: 1,
        borderRadius: 31,
        // alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    logo: {
        width: 160,
        height: 20,
        marginTop: 30,
    },
    mainTransparent: {
        display: "flex",
        // marginTop: 300,
        marginTop: -20,
        alignItems: "center",
    },
    buttonStyle: {
        width: "100%",
        display: "flex",
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 19,
        alignItems: "center",
        backgroundColor: "#D9D9D9",
    },
    backButtonStyle: {
        width: "50%",
        display: "flex",
        marginTop: 15,
        borderRadius: 19,
        color: "black"
    },
    buttonLabel: {
        padding: 2,
        fontSize: 15,
        color: "black",
    },
    input: {
        height: 40,
        margin: 12,
        width: "100%",
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        padding: 10,
    },
    register: {
        fontSize: 15,
        fontWeight: "700",
        color: "#177FF4"
    },
    backButton: {
        color: "black",
        backgroundColor: "#F3F1F1",
        paddingTop: 50,
        paddingBottom: 30,
        paddingLeft: 10,
    },
    searchArea: {
        display: "flex",
        width: "100%",
        marginTop: 1,
        marginLeft: -12
    },
});
