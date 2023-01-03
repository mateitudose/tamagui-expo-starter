import {StyleSheet, Text, View} from 'react-native';
import {Button, TamaguiProvider} from "tamagui";
import appConfig from "./tamagui.config";
import {useFonts} from "expo-font";

export default function App() {
    const [loaded] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <TamaguiProvider config={appConfig}>
            <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
                <Button margin={10}>Click me</Button>
            </View>
        </TamaguiProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
