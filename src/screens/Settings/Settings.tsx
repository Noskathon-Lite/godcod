// src/screens/settings.tsx

import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from 'types/navigation';

const Settings: React.FC = () => {
 const navigation =
     useNavigation<NavigationProp<keyof AuthStackParamList>>();
 
   const handleNavigationPress = useCallback(
       (screenName: keyof AuthStackParamList) => {
         navigation.navigate(screenName);
       },
       [navigation],
     );
const handleTermsNConditions = () => {
    handleNavigationPress('TermsNConditionsScreen');
  }

  const handleChangePassword = () => {
    handleNavigationPress('ChangePasswordScreen');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Security</Text>
      <View style={styles.settingsContainer}>
        <Text style={styles.sectionTitle}>Security</Text>
        <TouchableOpacity style={styles.option} onPress={handleChangePassword}>
          <Text style={styles.optionText}>Change Pin</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleTermsNConditions}>
          <Text style={styles.optionText}>Terms And Conditions</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F7F2',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  settingsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionText: {
    fontSize: 16,
  },
  arrow: {
    fontSize: 18,
    color: '#666',
  },
});

export default Settings;