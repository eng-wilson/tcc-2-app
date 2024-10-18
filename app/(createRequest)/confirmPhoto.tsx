import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import { Container } from './styles';

const TakePhoto = () => {
  return (
    <View className="flex-1 bg-white">
      <Text>Essa foto está boa?</Text>
      <TouchableOpacity>
        <Text>Sim, continuar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Não, escolher outra foto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TakePhoto;
