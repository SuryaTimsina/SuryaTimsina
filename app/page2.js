//page2.js

import { Text, View,} from 'react-native';
import { Link,Stack, useLocalSearchParams} from 'expo-router';
import Styles from '../styles/page-styles';


   


export default function Page() {

    const params = useLocalSearchParams();
    const { name, noun, userEvent } = params;

    const currentDate = new Date().toLocaleDateString();


    return (
        <View style={Styles.page}>
            <Text style={{ marginRight: -40, fontSize: 40, color: "red", marginTop: -120, }}>MAD-LBS</Text>
            <Text style={{ fontSize: 30, }}>Date: {currentDate}</Text>

            <Text style={{ marginRight: -40, fontSize: 25, marginTop: 100, }} ><Text style={{ textDecorationLine:'underline'}}>{name} </Text>is too cool</Text>
            <Text style={{ marginRight: -40, fontSize: 25, marginTop: 30, }} >for<Text style={{ textDecorationLine: 'underline' }}> {noun} </Text>class.</Text>
            <Text style={{ marginRight: -40, fontSize: 25, marginTop: 30, }}>instad, she/he will be.</Text>
                <Text style={{ marginRight: -40, fontSize: 25, marginTop: 30, }}>attending the<Text style={{ textDecorationLine: 'underline' }}> {userEvent}</Text>.</Text>


            <Text style={{ marginLeft: -320, fontSize: 100, transform: [{ rotate: '-90deg' }] }}>HALL PASS
              
            </Text>

            <View style={{ marginRight: -40, width: 200, height: 70, borderWidth: 2 }}>
                <Text>SIGNED:</Text>

            </View>



        </View>
    );
}

   
