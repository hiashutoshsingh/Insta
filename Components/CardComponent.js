import React, {
  Component
}
from 'react';
import {
  View, Text, StyleSheet,Image
}
from 'react-native';
import {Icon,Card,CardItem,Thumbnail,Body,Left,Right,Button} from 'native-base';


class CardComponent extends Component {

  render() {

      const images = {

          "1": require('../assets/ashu.png'),
          "2": require('../assets/ashu.png'),
          "3": require('../assets/ashu.png'),

      }
    return ( 
        <Card>
            <CardItem>
                  <Left>
                    <Thumbnail source = { require('../assets/ashu.png')} />
                    <Body>
                        <Text> Ashu</Text>
                        <Text note> July 2, 1083</Text> 
                    </Body>
                  </Left>
            </CardItem>
            <CardItem cardBody>
                    <Image source={images[this.props.imageSource]}
                    style={{ height: 200,width: null,flex:1 }} />
            </CardItem>
            <CardItem style={{ height: 45}}>
                  <Left>
                      <Button transparent>
                          <Icon name="ios-heart-outline"
                            style={{color:'black'}} />
                      </Button>
                      <Button transparent>
                          <Icon name="ios-chatbubbles-outline"
                            style={{color:'black'}} />
                      </Button>
                      <Button transparent>
                          <Icon name="ios-send-outline"
                            style={{color:'black'}} />
                      </Button>
                  </Left>
            </CardItem>
            <CardItem style={{ height:20 }}>
            <Text>{this.props.likes}</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>
                        <Text style ={{ fontWeight: "900"}}>Ashutosh: </Text>
                        Hi this is Ashutosh kumar singh
                        this photo looks great, may we can go to trip somtimes
                        for meeting kldfjl lkdnklfdsl dlkfnlkdf ldknflds
                          dfnkldsflksd flkdslkfsd fj;odsjflsd sjdfpds
                    </Text>
                </Body>
            </CardItem>
        </Card>
    );
  }
}
export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
