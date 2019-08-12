import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        minHeight: 48,
        paddingHorizontal: 28,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: .5,
        borderBottomColor: 'grey',
    },
    name: {
        fontWeight: '600'
    }
});

export default styles;