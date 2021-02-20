import { Platform, StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({
  apiImage: {
    height: 200,
    width: '100%',
  },
  createButton: {
    marginLeft: 15,
    marginTop: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#54ae33',
    width: 100,
    borderRadius: 8,
    alignItems: 'center',
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  date: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  eventDescription: {
    fontSize: 16,
    color: '#000',
  },
  eventTitle: {
    fontSize: 20,
  },
  logo: {
    width: 250,
    height: 125,
    marginTop: 25,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  month: {
    fontSize: 16,
    color: '#54ae33',
    textAlign: 'center',
  },
  navBarIcon: {
    backgroundColor: '#54AE33',
  },
  navContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 5,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#efefef',
  },
  paragraph: {
    textAlign: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  popularEventsContainer: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 100,
    height: 300,
  },
  popularEventsDescription: {
    fontWeight: '500',
    color: '#555',
  },
  popularEventsTile: {
    width: 250,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#efefef',
  },
  popularEventsTileLeft: {
    width: '25%',
  },
  popularEventsTileLower: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  popularEventsTileRight: {
    width: '70%',
  },
  popularEventsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 25,
    marginBottom: 20,
  },
  regButtonStyle: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 75,
  },
  regHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 50,
    marginBottom: 25,
  },
  regSecondaryHeading: {
    textAlign: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 15,
    marginBottom: 8,
    marginTop: 15,
  },
  regSubheading: {
    color: '#555',
    fontSize: 15,
    lineHeight: 22.5,
    marginBottom: 25,
    marginTop: 5,
    padding: 10,
  },
  regTextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    width: '50%',
    marginHorizontal: '25%',
  },
  searchArea: {
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 25,
    backgroundColor: 'white',
  },
  subheading: {
    textAlign: 'center',
    width: '100%',
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 15,
  },
  tagLine: {
    color: '#888',
    fontSize: 15,
  },
});
