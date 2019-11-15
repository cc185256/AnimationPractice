/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;

// const noResultsImg = require('./app/Assets/FranksFace.png');

// const App: () => React$Node = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Image style={styles.image} source={noResultsImg} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     width: 250,
//     height: 250,
//     alignSelf: 'center',
//   },
// });
