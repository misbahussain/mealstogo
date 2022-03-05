import React from 'react'
import { Container, Image } from "../components/styles/style";
import { Card, Paragraph } from 'react-native-paper';
import { View } from 'react-native';
import { Spacer } from '../components/spacer/Spacer';
import { Text } from "../components/typography/Typography";


export default function RestuarantInfo({ restaurant = {} }) {
  const {
    // @ts-ignore
    name = "Some Restaurant",
    // @ts-ignore
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    // @ts-ignore
    photos = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    // @ts-ignore
    address = "100 some random street",
    // @ts-ignore
    isOpenNow = true,
    // @ts-ignore
    rating = 4,
    // @ts-ignore
    isClosedTemporarily = true,
    // @ts-ignore
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <Container>
      <Card>
        <Card.Cover source={{ uri: photos }} />
        <Card.Content style={{padding:10}}>
          <Text variant="label">{name}</Text>
          <View style={{flexDirection:"row", justifyContent:"space-between" }}>
            <View style={{ flexDirection: "row" }}>
              {ratingArray.map((i) =>
                // @ts-ignore
                <Image source={require('../../assets/star.png')} style={{ width: 20, height: 20, resizeMode: "cover" }} />
              )}
            </View>
            <View style={{flexDirection:"row"}}>
              {isClosedTemporarily && (
                <Text variant="error">Closed Temporary</Text>
              )}
              <Spacer variant="left.large" />
              {isOpenNow && <Image source={require(
                // @ts-ignore
                '../../assets/open.png')} />}
            </View>
          </View>
          <Paragraph>{address}</Paragraph>
        </Card.Content>

      </Card>
    </Container>
  )
}