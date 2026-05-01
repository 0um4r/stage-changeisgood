/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import BirthdayScreen from './src/Components/BirthdayScreen';
import { MainContainer } from './src/styles';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </SafeAreaProvider>
    </Provider>
  );
}

function AppContent() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        MainContainer.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <BirthdayScreen />
    </View>
  );
}

export default App;
