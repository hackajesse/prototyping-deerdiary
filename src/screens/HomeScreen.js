import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to DeerDiary!</Text>
            <Button title="Start Scouting" onPress={() => { /* Navigate to scouting screen */ }} />
        </View>
    );
};

export default HomeScreen;