// ThoughtScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ThoughtScreen = ({ navigation }) => {
  const handleSkip = () => {
    // Navigate to the next screen after clicking the skip button.
    // Replace 'NextScreen' with the name of your next screen.
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text>Thought for the Day</Text>
      {/* Add your thought content here */}
      <Button title="Skip" onPress={handleSkip} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThoughtScreen;
