import { Text, StyleSheet } from "react-native";
import Colors from "../../util/colors";

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: Colors.primary500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.primary500,
        padding: 12,
    }
});