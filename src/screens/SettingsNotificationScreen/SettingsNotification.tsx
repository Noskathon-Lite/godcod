import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface NotificationItemProps {
  title: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  value,
  onValueChange,
}) => (
  <View style={styles.settingItem}>
    <Text style={styles.settingText}>{title}</Text>
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: '#DDDDDD', true: '#00D68F' }}
      thumbColor="#FFFFFF"
      ios_backgroundColor="#DDDDDD"
    />
  </View>
);

const NotificationSettingsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [settings, setSettings] = useState({
    generalNotification: true,
    sound: true,
    soundCall: true,
    vibrate: true,
    transactionUpdate: false,
    expenseReminder: false,
    budgetNotifications: false,
    lowBalanceAlerts: false,
  });

  const updateSetting = (key: keyof typeof settings) => (value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Image 
            source={require('../../assets/images/back.png')} 
            style={styles.backIcon} 
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification Settings</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Image 
            source={require('../../assets/images/bell.png')} 
            style={styles.notificationIcon} 
          />
        </TouchableOpacity>
      </View>

      {/* Settings Content */}
      <View style={styles.content}>
        <NotificationItem
          title="General Notification"
          value={settings.generalNotification}
          onValueChange={updateSetting('generalNotification')}
        />
        <NotificationItem
          title="Sound"
          value={settings.sound}
          onValueChange={updateSetting('sound')}
        />
        <NotificationItem
          title="Sound Call"
          value={settings.soundCall}
          onValueChange={updateSetting('soundCall')}
        />
        <NotificationItem
          title="Vibrate"
          value={settings.vibrate}
          onValueChange={updateSetting('vibrate')}
        />
        <NotificationItem
          title="Transaction Update"
          value={settings.transactionUpdate}
          onValueChange={updateSetting('transactionUpdate')}
        />
        <NotificationItem
          title="Expense Reminder"
          value={settings.expenseReminder}
          onValueChange={updateSetting('expenseReminder')}
        />
        <NotificationItem
          title="Budget Notifications"
          value={settings.budgetNotifications}
          onValueChange={updateSetting('budgetNotifications')}
        />
        <NotificationItem
          title="Low Balance Alerts"
          value={settings.lowBalanceAlerts}
          onValueChange={updateSetting('lowBalanceAlerts')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00D68F',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#000000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  notificationButton: {
    padding: 8,
  },
  notificationIcon: {
    width: 24,
    height: 24,
    tintColor: '#000000',
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  settingText: {
    fontSize: 16,
    color: '#2C3333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 24,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#9E9E9E',
  },
  activeNavItem: {
    backgroundColor: '#00D68F',
    borderRadius: 50,
    padding: 12,
  },
  activeNavIcon: {
    tintColor: '#FFFFFF',
  },
});

export default NotificationSettingsScreen;