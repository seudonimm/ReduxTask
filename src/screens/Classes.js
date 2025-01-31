import React, { Component } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import { Text } from "@react-navigation/elements";
import { connect } from "react-redux";
import { addToList, removeFromList } from "../store/actions/ListActions";
import { changeBGBlue, changeBGGreen } from "../store/actions/BGActions";
import { ADD_TO_LIST, CHANGE_BG_BLUE, CHANGE_BG_GREEN, REMOVE_FROM_LIST } from "../store/ActionTypes";
import CustomInputField from "../components/CustomInputField";
import FlatListItemBox from "../components/FlatListItemBox";

class Classes extends Component {
    constructor(props){
        super(props);


        this.state={
            text:"kjhkjhj"
        }

    }

    onAddText = (event) => {
        this.setState({text: event});
        console.log(this.state.text);
        console.log(this.props.list);
    };

    renderListBox = (item) => {
        return (
        <FlatListItemBox
           text={item}
       />
       );
    };
    render(){
 
        const {list, bg} = this.props;

        return(
            <SafeAreaView style={{...styles.container, backgroundColor:(bg?'green':'blue')}}>
                <FlatList
                    data={list}
                    renderItem={({item}) => (this.renderListBox(item))}
                /> 
                <CustomInputField
                    text={"Enter item"}
                    onChangeText={t => this.onAddText(t)}
                />
                <CustomButton
                    text={"Add to list"}
                    onPress={() => this.props.addToList(this.state.text)}
                />
                <CustomButton
                    text={"Remove from list"}
                    onPress={() => this.props.removeFromList()}
                />
                <CustomButton
                    text={"Change Background to Green"}
                    onPress={() => this.props.changeBGGreen(true)}
                />            
                <CustomButton
                    text={"Change Background to Blue"}
                    onPress={() => this.props.changeBGBlue(false)}
                />

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#1e1d24'
    }
});

const mapStateToProps = (state) => {
    const {list, bg} = state;
    return {list, bg};
};

const mapDispatchToProps = (dispatch) => {
    return{
        addToList: () => dispatch(addToList()),
        removeFromList: () => dispatch(removeFromList()),
        changeBGBlue: () => dispatch(changeBGBlue()),
        changeBGGreen: () => dispatch(changeBGGreen())
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Classes);