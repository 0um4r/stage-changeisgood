import { Text, View } from "react-native";
import { happy_birthday } from "../styles";



type Props = {
    name:string | undefined 
};



export function HappyBirthdayComponent({name}:Props){

    
    return (
        <View style={happy_birthday.box}>
            <Text style={happy_birthday.text}>Happy birthday {name}</Text>
        </View>
    );


}