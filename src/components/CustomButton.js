import React from "react"
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet
} from 'react-native';

const CustomButton = (props) => {
    const {text} = props;

    return(
        //<View>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={props.onPress}
            >
                <Text>
                    {text}
                </Text>
            </TouchableOpacity>
        //</View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    buttonStyle: {
        height: '10%',
        width: '75%',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        justifyContent:'center',
        alignSelf: 'center'
    }
})

export default CustomButton;
