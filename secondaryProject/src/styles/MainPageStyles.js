import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : 410,
        height : 700,
        borderWidth : 1,
       
    },

    headerContainer : {
        borderWidth : 1,
        height : 150,
        justifyContent : "center",
        alignItems : "center",
       
    },

    headerImageStyle : {
        height : 100,
        width : 405,
    },

    headerImageContainer : {
        borderWidth : 1,
        height : 100,
       
    },

    upperContainer : {
        borderWidth : 1,
        height : 50,
        width : 410,
        flexDirection : "row",
        alignContent : "flex-start",
        
    },

    uppercontainer01 : {
        
        borderWidth : 1,
        height : 50,
        width : 50,
        alignItems : "center",
        justifyContent : "center",
    },

    upperContainer02 : {
        
        borderWidth : 1,
        height : 50,
        width : 410,
        marginTop : 0,
    },


    lowerContainer : {
        
        borderWidth : 1,
        height : 80,
        width : 410,
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "center",
        backgroundColor : "linen"
       
    },

    menuContainer : {
        borderWidth : 1,
        borderRadius : 30,
        height : 50,
        width : 90,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "mistyrose",
        
    },

    textStyle : {
        fontSize : 14,
    },



    headerText : {
        textAlign : "auto",
        paddingTop : 20,
        fontSize : 20
    },

    middleContainer : {
        borderWidth : 1,
        flex : 2,
       
       
    },

    middleText : {
        fontSize : 25,
        alignSelf : "center"
    },

    middleText01 : {
        paddingTop : 30,
        fontSize : 30,
    },


})

export default styles;
