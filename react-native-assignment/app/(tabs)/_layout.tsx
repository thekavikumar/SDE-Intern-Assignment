import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute', // Use a transparent background on iOS to show the blur effect
            backgroundColor: '#fff', // Background color for iOS
            borderTopWidth: 0, // Remove border at the top
            elevation: 5, // Shadow effect on iOS
          },
          default: {
            backgroundColor: '#ffffff', // Background color for Android and default
            borderTopWidth: 0, // No top border
            elevation: 10, // Shadow effect on Android
          },
        }),
        tabBarActiveTintColor: '#4CAF50', // Active tab icon color
        tabBarInactiveTintColor: '#888', // Inactive tab icon color
        tabBarLabelStyle: {
          fontSize: 8, // Tab label font size
          fontWeight: 'light', // Tab label font weight
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="people"
        options={{
          title: 'People',
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'User',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
