//index.js
import React from 'react';
import { Pressable,Text,TextInput, View } from 'react-native';
import { Link,Stack, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';


export default function page() {
    const [name, onChangeName] = React.useState("");
    const [noun, onChangeNoun] = React.useState("");
    const [userEvent, onChangeEvent] = React.useState("");
    const reset = () => { onChangeName(""), onChangeNoun(""), onChangeEvent(""); };
    const [name_hint, setName] = React.useState("Name:");
    const [hint_Noun, setNoun] = React.useState("Noun:");
    const [hint_Event, setEvent] = React.useState("Event:");
    return (
        <View style={Styles.page} >
            <Text> Please enter the requirmetns for a hall-pass </Text>
            <TextInput
                style={Styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder={name_hint} />

            <TextInput
                style={Styles.input}
                onChangeText={onChangeNoun}
                value={noun}
                placeholder={hint_Noun} />

            <TextInput
                style={Styles.input}
                onChangeText={onChangeEvent}
                value={userEvent}
                placeholder={hint_Event} />
           



            <Link style={Styles.button}
                href={{
                pathname: "/page2",
                params: {name,noun,userEvent},
                }} asChild >
                <Pressable>
                    <Text style={{ color: 'white' }} >  Make My Hall Pass </Text>
                    </Pressable>
            </Link>
            <Pressable style={Styles.button} onPress={reset}>
                <Text style={{color:'white'} }>Clear</Text>
                </Pressable>
                
            
      

           
        </View>



      )
}