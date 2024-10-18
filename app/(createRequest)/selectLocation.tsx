import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import { Container } from './styles';

const TakePhoto = () => {
  return (
    <View className="flex-1 bg-white">
      <Text>Onde está acontecendo?</Text>
      <TouchableOpacity>
        <Text>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TakePhoto;
