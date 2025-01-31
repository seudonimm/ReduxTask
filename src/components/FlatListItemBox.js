import React from "react";
import {
    StyleSheet,
    Text
} from 'react-native';

const FlatListItemBox = (props) => {
    const {text, isBold} = props;

    return(
        <Text
            style={{
                ...styles.listItemContainer, 
                fontWeight:(isBold ? 'bold' : 'normal')
            }}
        >
            {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    listItemContainer: {
        flex: 1,
        height: '20%',
        width: '90%',
        borderWidth: 1,
        color: 'black',
        borderColor: 'black',
        alignSelf: 'center',
        margin: '1%',
        borderRadius: 10,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'white'
    }
});

export default FlatListItemBox;