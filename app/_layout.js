//_layout.js

import { Stack } from 'expo-router';
export default function Layout() {
    return (
        <Stack screenOption={{
            headerTitle: "Nav Example",
            headerStyle: { backgroundColor: 'red', },
            headerTintColor: 'white',
            
        }}>
            <Stack.Screen name="index" options={{ headerShown: true, headerBackVisible: false, }}
            />
            <Stack.Screen name="page2" options={{ headerShowen: false,}}
            />
        </Stack>




    );
}