import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        borderWidth : 1,
        backgroundColor : '#ffe4e1',
        
    },

    headerContainer : {
        borderWidth : 1,
        height : 150,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : 'white'
    },


    headerImageStyle : {
        height : 100,
        width : 405,
    },

    headerImageContainer : {
        borderWidth : 1,
        height : 100,
        backgroundColor : 'white'
       
    },

    headerContainer01 : {
        borderWidth : 1,
        height : 50,
        width : 410,
        flexDirection : "row",
        alignContent : "flex-start",
    },

    headerIconContainer : {
        borderWidth : 1,
        height : 50,
        width : 50,
        alignItems : "center",
        justifyContent : "center",
    },

    headerTitleContainer : {
        justifyContent : 'center',
        borderWidth : 1,
        height : 50,
        width : 410,
        marginTop : 0,
    },

    headerTitleText : {
        paddingTop : 20,
        fontSize : 20,
    },

    titleContainer : {
        alignItems : 'center',
        marginTop : 10,
        marginBottom : 10,

    },

    titleText : {
        fontSize : 30,
    },





    mainContainer : {
        height : 350,
        width : 300,
        borderWidth : 1,
        alignSelf : 'center',
        backgroundColor : 'white',
        
    },

    idPwContainer : {
        justifyContent : 'center',
        height : 30,
        width : 250,
        marginLeft : 10,
        marginTop : 10,
    },

    idPwText : {
        fontSize : 15,
    },

    textInputContainer : {
        height : 40,
        width : 280,
        borderWidth : 1,
        marginTop : 10,
        marginLeft : 10,
        marginBottom : 0,
        borderRadius : 20,
    },




    searchContainer : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : 20,

    },

    searchIdpwContainer : {
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth : 1,
        borderRadius : 20,
        height : 40,
        width : 80,
    },

  


    signInContainer : {
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth : 1,
        borderRadius : 20,
        height : 40,
        width : 280,
        alignSelf : 'center',
        marginTop : 25,
    },



    
})

export default styles;