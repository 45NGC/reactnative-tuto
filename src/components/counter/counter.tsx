import { Button, Text } from 'react-native-elements';
import { View } from 'react-native';
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrementCount = () => {
        setCount(count + 1);
    };

    const onDecrementCount = () => {
        setCount(count - 1);
    };

    return (
        <View>
            <Text>Current value: {count}</Text>
            <Button onPress={onIncrementCount} title="Increment Count" />
            <Button onPress={onDecrementCount} title="Decrement Count" />
        </View>
    );
};

export default Counter;