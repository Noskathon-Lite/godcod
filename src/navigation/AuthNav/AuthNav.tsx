import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyTabs from 'navigation/TabNav/TabNav'
import React, { FC } from 'react'
import { EditProfileScreen, HomeScreen, NotificationScreen, SecurityScreen, SettingsNotificationScreen } from 'screens'
import SettingsScreen from 'screens/SettingsScreen/Settings'
import { AuthStackParamList } from 'types/navigation'



/**
* @author
* @function @AuthNav
**/

const Stack=createNativeStackNavigator<AuthStackParamList>()

 const AuthNav :FC = () => { 


 return(
  <Stack.Navigator screenOptions={{headerShown:false}}> 
  <Stack.Screen name ="Tabs" component={MyTabs} />
  <Stack.Screen name ="EditProfile" component={EditProfileScreen} />
  <Stack.Screen name ="Security" component ={SecurityScreen}/>
  <Stack.Screen name = "Settings" component ={SettingsScreen}/>
  <Stack.Screen name = "SettingsNotification" component ={SettingsNotificationScreen}/>
  <Stack.Screen name = "NotificationScreen" component={NotificationScreen} />
  <Stack.Screen name = "NotificationSettingsScreen" component={SettingsNotificationScreen}/>
  </Stack.Navigator>
  )
}

export default AuthNav;