import { View } from "react-native";
import { Image } from "react-native";
import { cakeStyle } from "../styles";


export function CakeBoxComponent(){


    return (
      <View style={cakeStyle.box}>
        <Image
          source={{
            uri:'https://static.vecteezy.com/system/resources/previews/018/931/468/original/birthday-cake-icon-png.png',
          }}

          style={cakeStyle.image}
        />
      </View>
    );

}