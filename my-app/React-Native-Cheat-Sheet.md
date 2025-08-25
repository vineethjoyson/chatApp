# React Native Cheat Sheet 🚀

## Table of Contents

- [Core Concepts](#core-concepts)
- [Components](#components)
- [Styling](#styling)
- [Navigation](#navigation)
- [State Management](#state-management)
- [APIs & Platform](#apis--platform)
- [Performance](#performance)
- [Debugging](#debugging)
- [Common Patterns](#common-patterns)

---

## Core Concepts

### Basic Structure

```jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
```

### Hooks

```jsx
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

// State
const [count, setCount] = useState(0);
const [data, setData] = useState(null);

// Effect
useEffect(() => {
  // Runs after render
  return () => {
    // Cleanup function
  };
}, [dependencies]);

// Ref
const inputRef = useRef(null);

// Callback
const handlePress = useCallback(() => {
  // Memoized function
}, [dependencies]);

// Memo
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

---

## Components

### Basic Components

```jsx
// View - Container component
<View style={styles.container}>
  <Text>Content</Text>
</View>

// Text - Text display
<Text style={styles.text}>Hello World</Text>
<Text numberOfLines={2}>Long text...</Text>

// Image - Image display
<Image
  source={require('./assets/icon.png')}
  style={styles.image}
/>
<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  style={styles.image}
/>

// ScrollView - Scrollable content
<ScrollView
  style={styles.scrollView}
  showsVerticalScrollIndicator={false}
>
  {items.map(item => <Text key={item.id}>{item.name}</Text>)}
</ScrollView>

// FlatList - Performance optimized list
<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  ItemSeparatorComponent={() => <View style={styles.separator} />}
/>
```

### Interactive Components

```jsx
// TouchableOpacity - Button with opacity effect
<TouchableOpacity
  onPress={handlePress}
  activeOpacity={0.7}
  style={styles.button}
>
  <Text>Press Me</Text>
</TouchableOpacity>

// TouchableHighlight - Button with highlight effect
<TouchableHighlight
  onPress={handlePress}
  underlayColor="#DDD"
>
  <View style={styles.button}>
    <Text>Press Me</Text>
  </View>
</TouchableHighlight>

// Pressable - Modern button component
<Pressable
  onPress={handlePress}
  onPressIn={handlePressIn}
  onPressOut={handlePressOut}
  style={({ pressed }) => [
    styles.button,
    pressed && styles.buttonPressed
  ]}
>
  <Text>Press Me</Text>
</Pressable>
```

### Form Components

```jsx
// TextInput - Text input field
<TextInput
  style={styles.input}
  placeholder="Enter text..."
  value={text}
  onChangeText={setText}
  secureTextEntry={isPassword}
  keyboardType="email-address"
  autoCapitalize="none"
  autoCorrect={false}
/>

// Switch - Toggle switch
<Switch
  value={isEnabled}
  onValueChange={setIsEnabled}
  trackColor={{ false: '#767577', true: '#81b0ff' }}
  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
/>

// Slider - Range slider
<Slider
  style={styles.slider}
  minimumValue={0}
  maximumValue={100}
  value={sliderValue}
  onValueChange={setSliderValue}
  minimumTrackTintColor="#307ecc"
  maximumTrackTintColor="#000000"
/>
```

---

## Styling

### StyleSheet

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#007AFF",
  },
});
```

### Flexbox Layout

```jsx
// Flex Direction
{
  flexDirection: "row";
} // Horizontal
{
  flexDirection: "column";
} // Vertical (default)

// Justify Content
{
  justifyContent: "flex-start";
} // Start (default)
{
  justifyContent: "center";
} // Center
{
  justifyContent: "flex-end";
} // End
{
  justifyContent: "space-between";
} // Space between
{
  justifyContent: "space-around";
} // Space around
{
  justifyContent: "space-evenly";
} // Equal space

// Align Items
{
  alignItems: "flex-start";
} // Start
{
  alignItems: "center";
} // Center
{
  alignItems: "flex-end";
} // End
{
  alignItems: "stretch";
} // Stretch (default)

// Flex
{
  flex: 1;
} // Take remaining space
{
  flex: 0;
} // Don't grow
{
  flexGrow: 1;
} // Grow factor
{
  flexShrink: 1;
} // Shrink factor
```

### Common Styles

```jsx
// Dimensions
{ width: 100 }
{ height: 200 }
{ minWidth: 50 }
{ maxHeight: 300 }

// Spacing
{ margin: 10 }                  // All sides
{ marginHorizontal: 20 }        // Left & Right
{ marginVertical: 15 }          // Top & Bottom
{ marginTop: 5 }
{ marginBottom: 5 }
{ marginLeft: 5 }
{ marginRight: 5 }

{ padding: 10 }                 // All sides
{ paddingHorizontal: 20 }       // Left & Right
{ paddingVertical: 15 }         // Top & Bottom
{ paddingTop: 5 }
{ paddingBottom: 5 }
{ paddingLeft: 5 }
{ paddingRight: 5 }

// Borders
{ borderWidth: 1 }
{ borderColor: '#ccc' }
{ borderRadius: 8 }
{ borderTopWidth: 2 }
{ borderBottomColor: '#333' }

// Shadows (iOS)
{ shadowColor: '#000' }
{ shadowOffset: { width: 0, height: 2 } }
{ shadowOpacity: 0.25 }
{ shadowRadius: 3.84 }

// Shadows (Android)
{ elevation: 5 }
```

---

## Navigation

### React Navigation v6

```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator
<Stack.Navigator>
  <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{ title: 'Home' }}
  />
  <Stack.Screen
    name="Details"
    component={DetailsScreen}
    options={{ headerShown: false }}
  />
</Stack.Navigator>

// Tab Navigator
<Tab.Navigator>
  <Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{ tabBarIcon: ({ color }) => <Icon name="home" color={color} /> }}
  />
  <Tab.Screen
    name="Profile"
    component={ProfileScreen}
    options={{ tabBarIcon: ({ color }) => <Icon name="person" color={color} /> }}
  />
</Tab.Navigator>
```

### Navigation Methods

```jsx
// Navigate to screen
navigation.navigate("ScreenName");

// Navigate with params
navigation.navigate("ScreenName", { id: 123, name: "John" });

// Go back
navigation.goBack();

// Push new screen
navigation.push("ScreenName");

// Replace current screen
navigation.replace("ScreenName");

// Reset navigation stack
navigation.reset({
  index: 0,
  routes: [{ name: "Home" }],
});
```

### Navigation Hooks

```jsx
import { useNavigation, useRoute } from "@react-navigation/native";

const navigation = useNavigation();
const route = useRoute();

// Access params
const { id, name } = route.params;

// Navigate
navigation.navigate("Details", { id });
```

---

## State Management

### Context API

```jsx
import React, { createContext, useContext, useReducer } from "react";

// Create context
const AppContext = createContext();

// Initial state
const initialState = {
  user: null,
  theme: "light",
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};
```

### Redux Toolkit

```jsx
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

// Slice
const userSlice = createSlice({
  name: "user",
  initialState: { user: null, loading: false },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

const { setUser, setLoading } = userSlice.actions;

// Store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

// Provider
<Provider store={store}>
  <App />
</Provider>;

// Usage in component
const user = useSelector((state) => state.user.user);
const dispatch = useDispatch();

dispatch(setUser({ id: 1, name: "John" }));
```

---

## APIs & Platform

### AsyncStorage

```jsx
import AsyncStorage from "@react-native-async-storage/async-storage";

// Store data
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

// Retrieve data
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
};

// Remove data
const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing data:", error);
  }
};
```

### Fetch API

```jsx
// GET request
const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// POST request
const postData = async (url, body) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
```

### Platform Specific Code

```jsx
import { Platform, Dimensions } from "react-native";

// Platform specific styles
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

// Platform specific components
const Button = Platform.select({
  ios: () => require("./ButtonIOS"),
  android: () => require("./ButtonAndroid"),
})();

// Screen dimensions
const { width, height } = Dimensions.get("window");
const isLandscape = width > height;
```

---

## Performance

### Optimization Techniques

```jsx
// Memo components
const MemoizedComponent = React.memo(({ data }) => {
  return <Text>{data.name}</Text>;
});

// Memo callbacks
const handlePress = useCallback(() => {
  // Expensive operation
}, [dependencies]);

// Memo expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// Lazy loading
const LazyComponent = React.lazy(() => import("./LazyComponent"));

// Image optimization
<Image source={require("./image.jpg")} resizeMode="cover" fadeDuration={300} />;
```

### FlatList Optimization

```jsx
<FlatList
  data={items}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => <ListItem item={item} />}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  windowSize={10}
  initialNumToRender={10}
  onEndReached={loadMore}
  onEndReachedThreshold={0.5}
/>
```

---

## Debugging

### Console Methods

```jsx
console.log("Debug info:", data);
console.warn("Warning message");
console.error("Error message");
console.table(arrayData);
console.group("Group name");
console.groupEnd();
```

### React Native Debugger

```jsx
// Enable debug mode
if (__DEV__) {
  console.log("Development mode");
}

// Performance monitoring
import { PerformanceObserver } from "react-native-performance";

// Error boundaries
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Text>Something went wrong.</Text>;
    }
    return this.props.children;
  }
}
```

---

## Common Patterns

### Custom Hooks

```jsx
// Custom hook for API calls
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
```

### Higher Order Components

```jsx
const withLoading = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(false);

    return (
      <>
        {loading && <ActivityIndicator />}
        <WrappedComponent {...props} setLoading={setLoading} />
      </>
    );
  };
};

// Usage
const EnhancedComponent = withLoading(MyComponent);
```

### Render Props

```jsx
const DataFetcher = ({ render }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return render(data);
};

// Usage
<DataFetcher
  render={(data) => (data ? <Text>{data.name}</Text> : <Text>Loading...</Text>)}
/>;
```

---

## Quick Reference

### Common Imports

```jsx
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Switch,
  Slider,
  StyleSheet,
  Dimensions,
  Platform,
  Alert,
  ActivityIndicator,
  Modal,
  Animated,
} from "react-native";
```

### Common Props

```jsx
// View
style, onLayout, onTouchStart, onTouchEnd;

// Text
style, numberOfLines, onPress, selectable;

// Image
source, style, resizeMode, onLoad, onError;

// TouchableOpacity
onPress, onPressIn, onPressOut, activeOpacity;

// TextInput
value, onChangeText, placeholder, secureTextEntry;
keyboardType, autoCapitalize, autoCorrect;
```

### Common Styles

```jsx
// Layout
flex: 1, justifyContent: 'center', alignItems: 'center'

// Spacing
margin: 10, padding: 15, marginHorizontal: 20

// Colors
backgroundColor: '#fff', color: '#333', borderColor: '#ccc'

// Typography
fontSize: 16, fontWeight: 'bold', textAlign: 'center'

// Borders
borderWidth: 1, borderRadius: 8, borderColor: '#ccc'
```

---

## Tips & Best Practices

1. **Always use StyleSheet.create()** for better performance
2. **Use FlatList instead of ScrollView** for long lists
3. **Implement proper error boundaries** for production apps
4. **Use React.memo()** for expensive components
5. **Implement proper loading states** for better UX
6. **Handle platform differences** gracefully
7. **Test on both iOS and Android** regularly
8. **Use TypeScript** for better type safety
9. **Implement proper navigation patterns** early
10. **Optimize images** and assets for mobile

---

_Last updated: December 2024_
_React Native version: 0.72+_
