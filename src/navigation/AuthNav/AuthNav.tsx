import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyTabs from 'navigation/TabNav/TabNav'
import React, { FC } from 'react'
import { HomeScreen } from 'screens'
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
  
  
    </Stack.Navigator>
  )
}

export default AuthNav;