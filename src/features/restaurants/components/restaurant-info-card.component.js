import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
`;
const ReastauranCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;
const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://img.delicious.com.au/B80fkYtW/w759-h506-cfill/del/2016/10/jamie-olivers-aussie-style-burger-37334-3.jpg",
    ],
    address = "170 Whatever St",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <ReastauranCardCover source={photos[0]} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </RestaurantCard>
  );
};
