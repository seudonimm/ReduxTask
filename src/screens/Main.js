import Geolocation from "@react-native-community/geolocation";
import React, { useEffect, useState } from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TouchableOpacity
} from 'react-native'
import { getLocation, stopWatchingLocation, watchLocation } from "../helpers/WeatherHelper";
import CustomButton from "../components/CustomButton";

const Main = () => {

    const [location, setLocation] = useState();
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    const [watchID, setWatchID] = useState();

    const onGetLocationButton = () => {
        getLocation(info => setLocation(info))
        console.log(location);

    };

    const onWatchLocationButton = () => {
        setWatchID(watchLocation(info => setLocation(info)));
    }

    useEffect(
        () => {
            if(location){
                setLat(location.coords.latitude);
                setLon(location.coords.longitude);
                console.log(location);
            }
            return () => {
                console.log("stooopp")
                stopWatchingLocation(watchID);
            };
        },[location]
    );

    return(
        <SafeAreaView style={styles.container}>
            <CustomButton
                text={"Get Location"}
                onPress={() => onGetLocationButton()}
            />
            <Text>
                {lat}, {lon} 
            </Text>
            <CustomButton
                text={"Watch Location"}
                onPress={() => onWatchLocationButton()}
            />
            <Text>
                {lat}, {lon} 
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    buttonStyle: {
        height: '10%',
        width: '75%',
        backgroundColor: 'green',
        borderRadius: 20
    }
})
export default Main;