//index.js
import React from 'react';
import { Pressable,Text,TextInput, View } from 'react-native';
import { Link,Stack, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';


export default function page() {
    const [food, onChangeFood] = React.useState("");
    const [userAge, onChangeAge] = React.useState("");
    return (
        <View style={Styles.page} >
            <Text> This is the Index Page </Text>
            <TextInput
                style={Styles.input}
                onChangeText={onChangeFood}
                value={food}
                placeholder="choose your favourite food" />

            <TextInput
                style={Styles.input}
                onChangeText={onChangeAge}
                int userAge
                value={userAge}
                placeholder="What is your age" />
           



            <Link style={Styles.button}
                href={{
                pathname: "/page2",
                params: {food,userAge},
                }} asChild >
                <Pressable>
                    <Text>  Page 2 </Text>
                    </Pressable>
            </Link>
        </View>



      )
}