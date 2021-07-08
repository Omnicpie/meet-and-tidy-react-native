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
              CreateEventScreen: 'create-event',
              EventSearchResultScreen: 'search-results',
              EventDetailScreen: 'event',
              MessDetailScreen: 'mess',
              RegistrationScreen: 'registration',
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
