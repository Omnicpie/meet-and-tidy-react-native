import { Platform, StatusBar } from 'react-native';

export default {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 23,
    paddingTop: 10,
  },
  paragraph: {
    textAlign: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  subheading: {
    textAlign: 'center',
    width: '100%',
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 15,
  },
  progressBar: {
    marginTop: 50,
  },
};
