//page2.js
import { Text, View } from 'react-native';
import { Link,Stack, useLocalSearchParams} from 'expo-router';
import Styles from '../styles/page-styles';


export default function Page() {
    const params = useLocalSearchParams();
    const { food } = params;
    return (
        <View style={Styles.page}>
            <Text> This is the 2nd Page </Text>
            <Text> You like to eat{food }!</Text>
            <Link href="/">Home</Link>
        </View>



    )
}