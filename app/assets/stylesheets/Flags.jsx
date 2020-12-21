import { Platform, StatusBar } from 'react-native';

export default {
  mainContainer: {
    flex: 1,
    alignItems: 'stretch',
    width: '100%',
    paddingHorizontal: 25,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  buttonContianer: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBar: {
    marginTop: 50,
  },
  textInput: {
    height: 40,
    width: '80%',
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 50,
    marginLeft: 22,
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 50,
    marginBottom: 50,
  },
  paragraph: {
    textAlign: 'center',
    width: '100%',
  },
  previewHeading: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
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
  mapPreviewTile: {
    width: '95%',
    height: 175,
    backgroundColor: 'rgb(84, 174, 51)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: 10,
    marginLeft: 8,
  },
};
