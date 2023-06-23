import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
//redux
import { Provider } from "react-redux";
import store from "./src/store";
// hooks
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
// navigation
import Navigation from "./src/navigation";

export default function App() {
  const isLoadCompleted = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadCompleted) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Provider store={store}>
          <Navigation colorScheme={colorScheme} />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
