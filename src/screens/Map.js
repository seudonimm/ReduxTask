import { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { stopWatchingLocation, watchLocation } from "../helpers/WeatherHelper";
import withLoading from "../components/hoc/WithLoading";
import { ActivityIndicator, Alert } from "react-native";


const Map = ({loading}) => {
    const [location, setLocation] = useState();
    const [watchID, setWatchID] = useState();
    
    const onWatchLocation = () => {
        setWatchID(watchLocation(info => setLocation(info)));

        setTimeout(() => {
            console.log(location);
        }, 9000);
    }

    useEffect(() => {
        
        onWatchLocation();
        
        console.log("a;hdljkfahkdls;");
        return () => {
            stopWatchingLocation(watchID);
        };
    },[]);

    return(
        (location&&loading?
        <MapView style={{flex: 1}}
            //showsUserLocation={true}
            initialRegion={{
                latitude: location.coords.latitude,//37.785834,
                longitude: location.coords.longitude,//-122.406417,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421, 
            }}  
        >
            <Marker
                title="Marked"
                description="Marking"
                coordinate={location?{latitude:location.coords.latitude, longitude:location.coords.longitude}:{latitude:37.78825, longitude:-122.4324}}
            />
        </MapView>:<ActivityIndicator/>
        )
    );
};

export default withLoading(Map);