import { Text, SafeAreaView, View } from "react-native";

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        style={{
          width: 120,
          height: 120,
          borderRadius: 999,
          backgroundColor: "#ccc",
          marginHorizontal: "auto",
          marginVertical: 40,
        }}
      ></View>
      <View className="gap-2 px-4">
        <View>
          <Text>Nome</Text>
          <Text>Test User</Text>
        </View>

        <View>
          <Text>Cidade</Text>
          <Text>Test City</Text>
        </View>

        <View>
          <Text>Estado</Text>
          <Text>Test State</Text>
        </View>
        <View>
          <Text>Endereço</Text>
          <Text>Test Street</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
