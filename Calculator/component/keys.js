import { StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons2 from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import AntDesign2 from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from 'react';

const products = [1,2,3,4,5,6,7,8,9];



export default function Keys() {
  const [selectedValue, setSelectedValue] = useState();
  function myAlert(value) {
    setSelectedValue(value);
    Alert.alert(value.toString());
    console.log(value)
 };
    return (
      <View style={styles.container}>
        <View style={styles.round}>
        <MaterialIcons name="cancel" size={23} color="#F5004F" />
        </View>
        <View style={styles.round}>
        <MaterialCommunityIcons name="code-brackets" size={23} color="#A2CA71" />
        </View>
        <View style={styles.round}>
        <FontAwesome name="percent" size={23} color="#A2CA71" />
        </View>
        <View style={styles.round}>
        <FontAwesome5 name="divide" size={23} color="#A2CA71" />
        </View>
        <View style={styles.round}><Text style={styles.text} onPress={() => myAlert(products[6])}>{products[6]}</Text></View>
        <View style={styles.round}><Text style={styles.text} onPress={() => myAlert(products[7])}>{products[7]}</Text></View>
        <View style={styles.round}><Text style={styles.text} onPress={myAlert}>9</Text></View>
        <View style={styles.round}>
            <MaterialCommunityIcons2 name="multiplication" size={23} color="#A2CA71" />
        </View>
        <View style={styles.round}><Text style={styles.text} onPress={myAlert}>4</Text></View>
        <View style={styles.round}><Text style={styles.text} onPress={myAlert}>5</Text></View>
        <View style={styles.round}><Text style={styles.text} onPress={myAlert}>6</Text></View>
        <View style={styles.round}>
        <AntDesign name="minus" size={23} color="#A2CA71" />
        </View>
        <View style={styles.round}><Text style={styles.text} onPress={myAlert}>1</Text></View>
        <View style={styles.round}><Text style={styles.text} onPress={myAlert}>2</Text></View>
        <View style={styles.round}><Text style={styles.text} onPress={myAlert}>3</Text></View>
        <View style={styles.round}>
            <AntDesign2 name="plus" size={23} color="#A2CA71" />
        </View>
        <View style={styles.round}><Text style={styles.text} onPress={myAlert}>+/_</Text></View>
        <View style={styles.round}><Text style={styles.text} onPress={myAlert}>0</Text></View>
        <View style={styles.round}><Text style={styles.text} onPress={myAlert}>.</Text></View>
        <View style={{...styles.round, backgroundColor: '#387F39'}}>
            <FontAwesome6 name="equals" size={23} color="#fff" />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      gap: 8,
      flexWrap: 'wrap',
      flex: 1.5,
      paddingTop: 18
    },
    round: {
        width: 75,
        height: 75,
        backgroundColor: '#686D76',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color: '#fff'
    }
  });