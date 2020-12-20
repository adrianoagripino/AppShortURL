import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34568B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FF6F61',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20,
  },
  urlInput: {
    height: 50,
    width: '80%',
    borderColor: '#34568B',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#F8F8FF',
    marginBottom: 20,
    fontSize: 20,
  },
  shortBtn: {
    backgroundColor: '#FF6F61',
    height: 40,
    width: '80%',
    padding: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finalUrl: {
    height: 50,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
