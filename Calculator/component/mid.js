import { StyleSheet, Text, View, TextInput} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function Mid() {
    return (
        <View style={{flex: 0.2, width: '100%', justifyContent:"space-between", alignItems: 'center'}}>
        <View style={{width:'100%', height: 43, flexDirection: 'row', justifyContent:'space-between', padding: 10}}>
        <View style={{justifyContent:'space-evenly', flexDirection: 'row', gap: 40,}}>
        <MaterialIcons name="history" size={26} color="#fff" />
        <FontAwesome6 name="ruler-horizontal" size={26} color="#fff" />
        <MaterialCommunityIcons name="math-norm" size={26} color="#fff" />
        </View>
        <Ionicons name="backspace" size={26} color="#597445" />
        </View>
        <View style={{width:'93%', backgroundColor:'#fff',height: 0.5}}></View>
        </View>
    )}