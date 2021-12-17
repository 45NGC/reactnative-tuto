import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import { Button, Text, LinearProgress } from 'react-native-elements';


// Ejercicio 1
import Counter from '../../components/counter/counter';

// Ejericicio 2
import ProductsService from '../../services/ProductsService';
import ProductItem from '../../components/ProductItem/ProductItem';

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
    return (
      <LinearProgress />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        // Si utilizo este atributo mostrara una 
        // barra de scroll de la aplicacion :
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => {
          return <ProductItem productIT={item} />;
        }}
      />
    </SafeAreaView>
  );
};
export default Products;
