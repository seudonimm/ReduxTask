import Geolocation from "@react-native-community/geolocation";

export const getLocation = (callback) => {
    Geolocation.getCurrentPosition(info => callback(info));
    console.log('run');
}

export const watchLocation = callback => {
    let id = Geolocation.watchPosition(info => callback(info));
    console.log("watching");
    return id;
}

export const stopWatchingLocation = (watchID) => {
    Geolocation.clearWatch(watchID);
    console.log("clear");
};

