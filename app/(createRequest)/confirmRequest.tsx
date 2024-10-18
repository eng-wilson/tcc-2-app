import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import { Container } from './styles';

const TakePhoto = () => {
  return (
    <View className="flex-1 bg-white">
      <Text>Confirme as informações antes de nos enviar</Text>
      <TouchableOpacity>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TakePhoto;
