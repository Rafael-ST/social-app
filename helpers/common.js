import { Dimensions } from "react-native";

const {width: deviceWidth, height: deviceHeigth} = Dimensions.get('window')

const hp = percentage=>{
    return (percentage*deviceHeigth) / 100
}

const wp = percentage=>{
    return (percentage*deviceWidth) / 100
}