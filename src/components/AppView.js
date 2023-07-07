import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, useColorScheme } from 'react-native';

const AppView = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
  darkContainer: {
    backgroundColor: 'black', 
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default AppView;
