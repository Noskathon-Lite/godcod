import {RootNavigation} from 'navigation';
import React, {FC} from 'react';

import auth from '@react-native-firebase/auth';
import LoginScreen from 'screens/Login/Login';
import HomeScreen from './screens/Home/Home';
interface IProps {}

/**
 * @author
 * @function @Root
 **/

const Root: FC<IProps> = props => {
  return <RootNavigation />;
};

export default Root;
