import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SubjectDetailScreen from '../screens/SubjectDetailScreen';
import ExamAddScreen from '../screens/ExamAddScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SubjectDetail" component={SubjectDetailScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#ecf0f1',
            paddingBottom: 8,
            paddingTop: 8,
            height: 60,
          },
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: '#7f8c8d',
        }}>
        <Tab.Screen
          name="Ana Sayfa"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 24, color }}>🏠</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Sınav Ekle"
          component={ExamAddScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 24, color }}>📝</Text>
            ),
          }}
        />
        <Tab.Screen
          name="İstatistikler"
          component={StatisticsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 24, color }}>📊</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Ayarlar"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 24, color }}>⚙️</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 