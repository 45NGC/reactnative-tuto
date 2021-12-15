import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import LinearProgress from 'react-native-elements/dist/linearProgress/LinearProgress';

// Ejercicio 1
import Counter from '../../components/counter/counter';

// Ejericicio 2
import ProductsService from '../../services/ProductsService';

import styles from './product-styles';

const Products = () => {
  // Crear espacio que pueda contener la informacion de los productos
  const [products, setProducts] = useState<any>([]);


  const navigation = useNavigation<any>();

  const onPressButton = () => {
    navigation.navigate('product-details');
  };

  // Ejercicio 2
  useEffect(() => {

    const asyncCall = async () => {

      const result = await ProductsService.getProducts();
      console.log(result.data);
      // Almacenar la informacion obtenida en el espacio definido anteriormente
      setProducts(result.data);
    };
    asyncCall();

  }, []) // Este array vacio hace que useEffect solo se invoque una vez

  // Mientras los datos no cargen se muestra una linea de carga (LinearProgress)
  if (products.length === 0) {
    <LinearProgress />
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text h4>Soy la página de productos</Text>
      <Text h4>{products[0].name}</Text>
      <Counter />
      <Button onPress={onPressButton} title="Ir a la página de detalles" />
    </SafeAreaView>
  );
};
export default Products;
