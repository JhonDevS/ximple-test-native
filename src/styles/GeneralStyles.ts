import {StyleSheet} from 'react-native';

export const generalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#808080',
    paddingBottom: 10,
  },
  error: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#fc3f68',
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: 'normal',
    marginBottom: 5,
    marginTop: 25,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#d9d9d9',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    marginTop: 35,
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#2248E9',
    fontSize: 12,
    fontWeight: 'normal',
    borderRadius: 5,
  },
  buttonDisabled: {
    marginTop: 20,
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#d1d8fa',
    fontSize: 12,
    fontWeight: 'normal',
    borderRadius: 5,
  },
  buttonLabel: {
    fontSize: 18,
    marginTop: 12,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#ffffff',
  },
  modalBackground: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: 'rgba(77, 77, 77, 0.8)',
  },
  modalContent: {
    position: 'relative',
    alignSelf: 'center',
    marginTop: 150,
    width: '80%',
    height: '50%',
    borderRadius: 18,
    padding: 16,
  },
  creditSelectedLabel: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#808080',
    marginTop: 70,
    marginBottom: 5,
  },
  creditOptionDisabled: {
    backgroundColor: '#d1d8fa',
    marginBottom: 10,
    borderRadius: 5,
    padding: 8,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  creditOption: {
    backgroundColor: '#2248E9',
    marginBottom: 10,
    borderRadius: 5,
    padding: 8,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  creditOptionName: {
    maxWidth: '50%',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'normal',
  },
  creditOptionPrice: {
    maxWidth: '50%',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'normal',
  },
});
