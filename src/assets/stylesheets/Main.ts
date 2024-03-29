import { Platform, StatusBar, StyleSheet } from 'react-native'

export default StyleSheet.create({
  apiImage: {
    height: 200,
    width: '100%'
  },
  apiMissingImage: {
    backgroundColor: '#f7fbf7',
    height: 200,
    width: '100%'
  },
  attendingScrollerContainer: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 20
  },
  attendingScrollerDescription: {
    fontWeight: '500',
    color: '#555'
  },
  attendingScrollerTile: {
    marginRight: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#efefef'
  },
  attendingScrollerTileLeft: {
    width: '20%',
    paddingTop: 10
  },
  attendingScrollerTileLower: {
    paddingVertical: 15,
    minHeight: 95,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  attendingScrollerTileRight: {
    width: '70%'
  },
  attendingScrollerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  createButton: {
    marginLeft: 15,
    marginTop: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#54ae33',
    width: 100,
    borderRadius: 8,
    alignItems: 'center'
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  date: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center'
  },
  eventOrMessDescription: {
    fontSize: 16,
    color: '#000',
    paddingTop: 4
  },
  eventTitle: {
    fontSize: 20
  },
  logo: {
    width: 250,
    height: 125,
    marginTop: 25
  },
  mapPreviewTile: {
    width: '95%',
    height: 175,
    backgroundColor: '#54ae33',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 8
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  month: {
    fontSize: 16,
    color: '#54ae33',
    textAlign: 'center'
  },
  mutation: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#ffffff',
    textAlign: 'center'
  },
  navBarIcon: {
    backgroundColor: '#54AE33'
  },
  navContainer: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 5,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#efefef'
  },
  paragraph: {
    textAlign: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15
  },
  scrollerContainer: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    height: 360,
    marginTop: 10
  },
  scrollerDescription: {
    fontWeight: '500',
    color: '#555'
  },
  scrollerTile: {
    width: 250,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#efefef'
  },
  scrollerTileLeft: {
    width: '20%',
    paddingTop: 10
  },
  scrollerTileLower: {
    paddingVertical: 10,
    minHeight: 95,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  scrollerTileRight: {
    width: '70%'
  },
  scrollerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 25,
    marginBottom: 20
  },
  regButtonStyle: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 75
  },
  regHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 50,
    marginBottom: 25
  },
  regSecondaryHeading: {
    textAlign: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 15,
    marginBottom: 8,
    marginTop: 15
  },
  regSubheading: {
    color: '#555',
    fontSize: 15,
    lineHeight: 22.5,
    marginBottom: 25,
    marginTop: 5,
    padding: 10
  },
  regTextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    width: '50%',
    marginHorizontal: '25%',
    paddingHorizontal: 8
  },
  safetyDisText: {
    color: '#0a84ff',
    textAlign: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 14,
    marginBottom: 5,
    marginTop: 20
  },
  searchArea: {
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 25,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'white'
  },
  subheading: {
    textAlign: 'center',
    width: '100%',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 15
  },
  tellUsMore: {
    textAlign: 'center',
    width: '95%',
    fontSize: 15,
    paddingBottom: 15,
    paddingLeft: 15
  }
})
