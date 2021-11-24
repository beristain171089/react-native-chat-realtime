import React from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { Item, Input as InpiutNB, Icon } from 'native-base'

export default function Input() {
    return (
        <View style={styles.container}>
            <Item style={styles.itemInput}>
                <InpiutNB
                    placeholder='Mensaje'
                    placeholderTextColor='grey'
                    style={styles.input}
                />
                <TouchableOpacity>
                    <Icon
                        name='send'
                        style={styles.iconSend}
                    />
                </TouchableOpacity>
            </Item>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16202b',
        paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        paddingHorizontal: 20
    },
    itemInput: {
        borderColor: '#16202b'
    },
    input: {
        color: '#fff'
    },
    iconSend: {
        color: '#fff'
    }
});