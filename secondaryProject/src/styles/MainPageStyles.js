import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container : {
        width : 410,
        height : 700,
        borderWidth : 1,
    },

    upperContainer : {
        borderWidth : 1,
        height : 100,
        width : 410,
        flexDirection : "row",
        alignContent : "flex-start",
        
    },

    uppercontainer01 : {
        
        borderWidth : 1,
        height : 50,
        width : 50,
        marginTop : 45,
        alignItems : "center",
        justifyContent : "center",
    },

    upperContainer02 : {
        
        borderWidth : 1,
        height : 50,
        width : 410,
        marginTop : 45,
    },


    secondaryUpperContainer : {
        borderWidth : 1,
        flexDirection : "row",
        height : 50,
    },

    secondaryUpperContainer01 : {
        borderWidth : 1,
        width : 50,
        height : 50,
        justifyContent : "center",
        alignItems : "center"
    },
    
    secondaryUpperContainer02 : {
        borderWidth : 1,
        height : 50,
        width : 410,
    },


    lowerContainer : {
        borderWidth : 1,
    },


    headerText : {
        textAlign : "auto",
        paddingTop : 20,
        fontSize : 20
    },

    middleContainer : {
        borderWidth : 1,
        flex : 3,
        backgroundColor : "blue",

    },

    lowerContainer : {
        flex : 1,
        backgroundColor : "yellow",
    }

})

export default styles;
