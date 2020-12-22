import { Platform } from 'react-native';

export default {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
   // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
};
