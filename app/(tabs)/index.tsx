import { useRouter } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <TouchableOpacity
        onPress={() => {
          router.push("/(createRequest)");
        }}
      >
        <Text>Criar pedido</Text>
      </TouchableOpacity>
      <FlatList
        className="flex-1"
        data={[1, 2, 3, 4]}
        renderItem={() => (
          <View>
            <Text>Test</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
