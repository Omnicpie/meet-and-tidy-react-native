import { Platform, StatusBar } from 'react-native';

export default {
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 25,
    marginBottom: 20,
  },
  subheading: {
    textAlign: 'left',
    width: '100%',
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 15,
  },
  paragraph: {
    textAlign: 'left',
    width: '100%',
    fontSize: 18,
  },
  even: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'rgb(84, 174, 51)',
    height: 110,
  },
  odd: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'rgb(84, 174, 51)',
    height: 110,
  },
};
