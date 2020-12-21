import { Platform, StatusBar } from 'react-native';

export default {
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  even: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#54ae33',
    height: 110,
  },
  odd: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#54ae33',
    height: 110,
  },
  paragraph: {
    textAlign: 'left',
    width: '100%',
    fontSize: 18,
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 25,
    marginBottom: 20,
  },
  scrollContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
  subheading: {
    textAlign: 'left',
    width: '100%',
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 15,
  },
};
