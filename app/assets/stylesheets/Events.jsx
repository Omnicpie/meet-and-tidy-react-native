import { Platform, StatusBar } from 'react-native';

export default {
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 150,
  },
  progressBar: {
    marginTop: 50,
  },
  textInput: {
    height: 40,
    width: '100%',
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 50,
  },
  buttonContianer: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonElement: {
    width: '48%',
    marginRight: 5,
    marginLeft: 5,
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 50,
    marginBottom: 50,
  },
  detailPrimaryHeading: {
    textAlign: 'center',
    fontSize: 23,
    paddingTop: 10
  },
  detailSecondaryHeading: {
    textAlign: 'center',
    width: '100%',
    paddingLeft: 15,
  },
  centeredText: {
    textAlign: 'center',
    marginTop: 5,
  },
  paragraph: {
    textAlign: 'left',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  subheading: {
    textAlign: 'left',
    width: '100%',
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 15,
  },
  topTile: {
    width: '100%',
    height: 150,
    backgroundColor: 'rgb(84, 174, 51)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  infoTile: {
    width: '85',
    height: 150,
    backgroundColor: 'rgb(84, 174, 51)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
  },
};
