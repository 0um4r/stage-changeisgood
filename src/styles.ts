import { StyleSheet } from "react-native";

//A card style for birthday items.
export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#1c7ad8cc",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});


export const container = StyleSheet.create({
  main: {
    flex:1,
    flexDirection:'column',
    flexWrap:'nowrap',
    justifyContent:'center'
  },
});


export const cakeStyle = StyleSheet.create(
    {
        box: {
            flexDirection:'row',
            justifyContent:'center'

        },

        image:{
            height:220,
            width:200,
        }
    }
)


export const welcome_text = StyleSheet.create(

        {

            // We center the Text component not the text inside it!
            box: {
                flexDirection:'row',
                justifyContent:'center'
            }, 

            text:{
                fontFamily:'Impact',
                fontSize:22,
                fontWeight:'bold',
                color:'#450da6cc',
                textAlign:'center'
                //We used align text in order to align the text inside the component
                //Usefull when the text is too big (60px par exemple.)

            }
        }

)



export const happy_birthday = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  text:{
    fontFamily:'Comic Sans',
    fontWeight:'bold',
    fontStyle:'italic',
    color:'#0decec',
    textAlign:'center',
    fontSize:20,
  }

});

