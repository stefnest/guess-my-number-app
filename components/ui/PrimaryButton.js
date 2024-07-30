import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../util/colors";

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.outerContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.container, styles.pressed] : styles.container}
                onPress={onPress}
                android_ripple={{ color: Colors.primary600 }}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    container: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    pressed: { //button effect for ios, because android_ripple doesn't work
        opacity: 0.75,
    }
});