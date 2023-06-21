import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
          <Navigation colorScheme={colorScheme} />
        </SafeAreaProvider>
    );
  }
}
