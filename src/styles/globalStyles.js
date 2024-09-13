
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  detailsContainer: {
    padding: 20,
  },
});

