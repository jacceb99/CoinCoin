import React from 'react';
import {AntDesign} from "@expo/vector-icons"
import { View } from 'react-native';


function Icon({iconName, size, iconColor, backgroundColor}) {
    return (
        

<View
style={{width:size, height:size,backgroundColor:backgroundColor, borderRadius:40, alignItems:"center", justifyContent:"center",margin:20, }}
>
<AntDesign name={iconName} color={iconColor} size={size*0.5}/>
</View>


    );
}

export default Icon;

