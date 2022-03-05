import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
// import MapView from 'react-native-maps';
import SeatReservation from './SeatReservation'
import ConfirmReservation from './ConfirmReservation'
import { ImageBackground, Image, StyleSheet, Pressable, Text, View, Alert, Dimensions   } from "react-native";

export default function AvailableRoutes({back}) {
    const [bus, setBus] = useState('');
    const [seatData, setSeatData] = useState();
    const [mainState, setMainState] = useState(false);
    const [confirmReservationState, setConfirmReservationState] = useState(false);

    const handleBack = () => {
        setBus('');
        setMainState(false);
        setConfirmReservationState(false);
    }

    const handleMyTicket = (data) => {
        setBus(data);
        setMainState(true);
    }

    const handleConfirm = (e) => {
        setSeatData(e);
        setConfirmReservationState(true);
    }

    return (
        mainState ?
            confirmReservationState ?
                <ConfirmReservation data={seatData} back={() => handleBack()}/>
            :
                <SeatReservation back={() => handleBack()} data={bus} backData={(e) => handleConfirm(e)}/>
        :
         <View style={styles.image}>
             <View style={styles.mapContainer}>
                 <View style={styles.map}>
                 </View>
             </View>
             <View style={styles.mainTransparent}>
                <View style={styles.transparent}>
                <View>
                    <Text style={styles.buttonPlaceLeftLabel}>
                        ONGOING
                    </Text>
                </View>
                <Pressable style={styles.ticketButtonStyle} onPress={() => handleMyTicket("A01")}>
                    <Text style={styles.buttonLabel}>
                        BUS - A01
                    </Text>
                </Pressable>
                <Pressable style={styles.ticketButtonStyle} onPress={() => handleMyTicket("A02")}>
                    <Text style={styles.buttonLabel}>
                        BUS - A02
                    </Text>
                </Pressable>
                <Text style={styles.noteStyle}>
                    <Text style={{ fontWeight: "bold" }}>
                        NOTE:&nbsp;
                    </Text>
                    View the map to locate the
                </Text>
                <Text style={styles.noteStyle}>
                    nearest ongoing bus near you
                </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
            flex: 1,
    },
    image: {
        flex: 1,
        backgroundColor: "#F3F1F1",
        justifyContent: "center"
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 250,
    },
    mapContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35
    },
    text: {
        fontSize: 33,
        lineHeight: 84,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    transparent: {
        padding: 5,
        paddingBottom: 45,
        width: "100%",
        display: "flex",
        borderRadius: 31,
        alignItems: "center",
        backgroundColor: "#FFFFFFd0"
    },
    mainTransparent: {
        display: "flex",
        marginTop: 20,
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 30,
        marginBottom: -30
    },
    register: {
        fontSize: 20,
        fontWeight: "700",
        color: "#177FF4"
    },
    normalText: {
        fontSize: 20,
        color: "black",
        marginBottom: 170,
    },
    buttonStyle: {
        width: "80%",
        display: "flex",
        marginTop: 10,
        marginBottom: 15,
        borderRadius: 19,
        alignItems: "center",
        backgroundColor: "#177FF4",
    },
    ticketButtonStyle: {
        width: "90%",
        display: "flex",
        marginTop: 10,
        marginBottom: 15,
        borderRadius: 19,
        alignItems: "center",
        backgroundColor: "#F9AD10",
    },
    buttonLabel: {
        display: "flex",
        padding: 8,
        fontSize: 40,
        color: "white",
        fontWeight: "700",
    },
    buttonPlaceLeftLabel: {
        marginLeft: 0,
        padding: 2,
        fontSize: 30,
        color: "#F9AD10",
        fontWeight: "700"
    },
    noteStyle: {
        marginLeft: 0,
        padding: 2,
        fontSize: 15,
        color: "black",
    }
});
