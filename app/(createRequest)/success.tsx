import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import { Container } from './styles';

const TakePhoto = () => {
  return (
    <View className="flex-1 bg-white">
      <Text>Seu pedido foi enviado com sucesso</Text>
      <TouchableOpacity>
        <Text>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TakePhoto;
