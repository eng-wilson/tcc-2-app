import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import { Container } from './styles';

const CreateRequest = () => {
  return (
    <View className="flex-1 bg-white">
      <Text>O que está acontecendo?</Text>
      <TouchableOpacity>
        <Text>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateRequest;
