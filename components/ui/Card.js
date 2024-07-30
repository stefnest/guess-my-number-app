import {View, StyleSheet} from 'react-native';
import Colors from '../../util/colors';
function Card({children}){
    return(
        <View style={styles.inputContainer}>
            {children}
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary500,
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 }, // Shadow position
        shadowOpacity: 0.8, // Shadow opacity
        shadowRadius: 6, // Shadow blur radius
        elevation: 8, // For Android shadow
    },
});