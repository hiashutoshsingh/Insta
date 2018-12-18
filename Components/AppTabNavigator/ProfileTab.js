import React, {
  Component
}
from 'react';
import {
  View, Text, StyleSheet
}
from 'react-native';
import {Icon} from 'native-base';

class ProfileTab extends Component {

static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" 
      style={{ color: tintColor }} />
      )
  }

  render() {
    return ( 
      <View style={styles.container}>
      <Text>Profile</Text> 
      </View >
    );
  }
}
export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
