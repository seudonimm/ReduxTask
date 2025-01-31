import React, { useState } from "react";
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native'
import FlatListItemBox from "../components/FlatListItemBox";
import { useDispatch, useSelector } from "react-redux";
import { addToList, removeFromList } from "../store/actions/ListActions";
import CustomButton from "../components/CustomButton";
import CustomInputField from "../components/CustomInputField";
import { changeBGBlue, changeBGGreen } from "../store/actions/BGActions";

const List = () => {
    const dispatch = useDispatch();

    const [stuffList, setStuffList] = useState(["sdfasdfa","asdfadfa","adsfadfa"])    
    const [text, setText] = useState("");
    const [bGColor, setBGColor] = useState(true);
    const [num, setNum] = useState(0);

    const list = useSelector(state => state.list);
    const bg = useSelector(state => state.bg)

    const renderListBox = ({item}) => {
        return (<FlatListItemBox
            text={item}
        />
        );
    }

    return(
        <SafeAreaView style={{...styles.container, backgroundColor:(bg?'green':'blue')}}>
            <FlatList
                data={list}
                renderItem={renderListBox}
            />
            <CustomInputField
                text={"Enter item"}
                onChangeText={text => setText(text)}
            />
            <CustomButton
                text={"Add to list"}
                onPress={() => dispatch(addToList(text))}
            />
            <CustomButton
                text={"Remove from list"}
                onPress={() => dispatch(removeFromList())}
            />
            <CustomButton
                text={"Change Background to Green"}
                onPress={() => dispatch(changeBGGreen(true))}
            />            
            <CustomButton
                text={"Change Background to Blue"}
                onPress={() => dispatch(changeBGBlue(false))}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#1e1d24'
    }
});
export default List;