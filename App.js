import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import RestuarantScreen from "./src/screens/RestuarantScreen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { SafeArea } from "./src/components/utility/SafeArea";
import { Ionicons } from "@expo/vector-icons";

const TAB_ICON = {
  Restuarant: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
}

function Map() {
  return (
    <View>
      <Text>Home!</Text>
    </View>
  );
}

function Settings() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}


const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),

    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  }
}

const Tab = createBottomTabNavigator();

export default function App() {


  let [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });

  let [latoLoaded] = useLato({
    Lato_400Regular
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <NavigationContainer>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name="Restuarant" component={RestuarantScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeArea>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

