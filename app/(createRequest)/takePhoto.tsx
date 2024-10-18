import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import { Container } from './styles';

const TakePhoto = () => {
  return (
    <View className="flex-1 bg-white">
      <Text>Tire uma foto do problema</Text>
      <TouchableOpacity>
        <Text>Abrir câmera</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Escolher da galeria</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TakePhoto;
