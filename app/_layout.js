//_layout.js

import { Stack } from 'expo-router';
export default function Layout() {
    return (
        <Stack screenOption={{
            headerTitle: "Nav Example",
            headerStyle: { backgroundColor: 'red', },
            headerTintColor: 'white',
            headerBackVisible: false,
        }}>
            <Stack.Screen name="index" options={{ headerShown: true, }}
            />
            <Stack.Screen name="page2" options={{ headerShowen: false, presentation: 'modal', }}
            />
        </Stack>




    );
}