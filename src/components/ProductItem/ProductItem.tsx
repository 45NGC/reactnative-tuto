// Esta funcion sera la encargada de determinar la forma en la que se mostraran los datos del json
import React from "react"
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import styles from './product-item-styles';

const ProductItem = ({ productIT }) => {
    return (
        <View style={styles.card}>

            <View style={styles.topContainer}>
                <Image
                    style={styles.cardImage}
                    source={{ uri: productIT.image }}
                />

                <View style={styles.brandContainer}>
                    <Text style={styles.brandText}>{productIT.brand}</Text>
                </View>
            </View>

        </View>
    )
}
export default ProductItem;