import React from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';
import { DatabaseConnection } from './conexao';

const db = DatabaseConnection.getConnection();
const Welcome = ({ handleNavigation }) => {
  return (
    
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Text style={styles.welcomeText}>Bem-vindo!</Text>
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Régis Construções</Text>
        <Text style={styles.text}>Conheça nossa equipe!</Text>
        <Button
          title="Login! Cadastre -se "
          onPress={() => handleNavigation('LoginCadastro')}
        />
           
         
         
        
        <Button
          title="Equipe"
          onPress={() => handleNavigation('Perfil')}
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#87CEFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#333333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#00008B',
    fontSize: 28,
  },
});

export default Welcome;