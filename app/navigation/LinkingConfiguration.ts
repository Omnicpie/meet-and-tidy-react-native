import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: '',
              EventSearchResultScreen: 'search-results',
              CreateEventScreen: 'create-event',
              EventDetailScreen: 'event',
              MessDetailScreen: 'mess',
            },
          },
          CreateMess: {
            screens: {
              CreateMessScreen: 'create-mess',
            },
          },
          MyActivities: {
            screens: {
              MyActivitiesScreen: 'my-activities',
              MyMesses: 'my-messes',
              Attending: 'attending',
              Organising: 'organising',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};