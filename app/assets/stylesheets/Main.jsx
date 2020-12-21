import { Platform, StatusBar } from 'react-native';

export default {
  createButton: {
    marginTop: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#54ae33',
    width: 108,
    borderRadius: 8,
    alignItems: 'center',
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  paragraph: {
    textAlign: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 23,
    paddingTop: 10,
  },
  regButtonStyle: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 75,
  },
  regHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 28,
  },
  regSecondaryHeading: {
    textAlign: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
  },
  regSubheading: {
    textAlign: 'center',
    marginTop: 5,
    width: '100%',
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
    marginBottom: 25,
  },
  regTextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
  },
  subheading: {
    textAlign: 'center',
    width: '100%',
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 15,
  },
};
