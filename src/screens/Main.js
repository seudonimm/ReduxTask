import Geolocation from "@react-native-community/geolocation";
import React, { useEffect, useState } from "react";
import { 
    ActivityIndicator,
    Alert,
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TouchableOpacity,
    View
} from 'react-native'
import { getLocation, stopWatchingLocation, watchLocation } from "../helpers/WeatherHelper";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import withLoading from "../components/hoc/WithLoading";

const Main = ({loading, startLoading}) => {
    const navigation = useNavigation();

    const [location, setLocation] = useState();
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    const [watchID, setWatchID] = useState();

    const onGetLocationButton = () => {
        startLoading();
        getLocation(info => setLocation(info));
        console.log(location);

    };

    const onWatchLocationButton = () => {
        startLoading();
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
                console.log("stop")
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
            {loading?
            <Text>
                {lat}, {lon} 
            </Text>:<ActivityIndicator/>
            }
            <CustomButton
                text={"Watch Location"}
                onPress={() => onWatchLocationButton()}
            />
            {loading?
            <Text>
                {lat}, {lon} 
            </Text>:<ActivityIndicator/>
            }
            {/* <CustomButton
                text={"To Redux Implementation"}
                onPress={() => navigation.navigate("List")}
            />
            <CustomButton
                text={"To Redux Implementation - Class"}
                onPress={() => navigation.navigate("Classes")}
            /> */}
            <CustomButton
                text={"To Map"}
                onPress={() => navigation.navigate("Map")}
            />
            
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
export default withLoading(Main);