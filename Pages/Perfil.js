import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Picker } from 'react-native';
import { DatabaseConnection } from './conexao';

const db = DatabaseConnection.getConnection();

const Perfil = ({ handleNavigation }) => {
  const profiles = [
    { nome: 'Pedreiro Roger', experiencia: 'Experiência: 5 anos, me siga no Instagram', instagram: '@rogerobr' },
    { nome: 'Gesseiro Otto', experiencia: 'Experiência: 3 anos, me siga no Instagram', instagram: '@ottoob' },
    { nome: 'Ladrilheiro Lucio', experiencia: 'Experiência: 2 anos, me siga no Instagram', instagram: '@obrlucio' },
    { nome: 'Pintor Hugo', experiencia: 'Experiência: 4 anos, me siga no Instagram', instagram: '@hugo_ob' },
    { nome: 'Armador Pedro', experiencia: 'Experiência: 6 anos, me siga no Instagram', instagram: '@dro_br' },
  ];

  const [filtro, setFiltro] = useState('Todos');
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);

  const handleIrParaWelcome = () => {
    handleNavigation('Welcome');
  };

  const handleFiltro = (filtroSelecionado) => {
    setFiltro(filtroSelecionado);
    setPerfilSelecionado(null);
  };

  const handlePerfilSelecionado = (perfil) => {
    setPerfilSelecionado(perfil);
  };

  const perfisFiltrados = filtro === 'Todos' ? profiles : profiles.filter(profile => profile.nome.includes(filtro));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nossos Profissionais</Text>
      <View style={styles.filterContainer}>
        <Picker
          selectedValue={filtro}
          style={styles.picker}
          onValueChange={(itemValue) => handleFiltro(itemValue)}
        >
          <Picker.Item label="Todos" value="Todos" />
          <Picker.Item label="Pedreiros" value="Pedreiro" />
          <Picker.Item label="Gesseiros" value="Gesseiro" />
          <Picker.Item label="Ladrilheiros" value="Ladrilheiro" />
          <Picker.Item label="Pintores" value="Pintor" />
          <Picker.Item label="Armadores" value="Armador" />
        </Picker>
      </View>
      {perfilSelecionado ? (
        <View style={styles.profileContainer}>
          <Text style={styles.profileText}>{perfilSelecionado.nome}</Text>
          <Text style={styles.profileExperience}>{perfilSelecionado.experiencia}</Text>
          <Text style={styles.profileInstagram}>{perfilSelecionado.instagram}</Text>
        </View>
      ) : (
        <View style={styles.profilesContainer}>
          {perfisFiltrados.map((profile, index) => (
            <Button
              key={index}
              title={profile.nome}
              onPress={() => handlePerfilSelecionado(profile)}
            />
          ))}
        </View>
      )}
      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>Siga-nos no Instagram:</Text>
        <Text style={styles.emailText}>@constregis</Text>
        <Text style={styles.contactText}>Para nos contratar, nos envie um e-mail:</Text>
        <Text style={styles.emailText}>constregis@gmail.com</Text>
        <Text style={styles.contactText}>Clientes cadastrados ganham 5% de desconto no serviço contratado! FAÇA SEU CADASTRO!</Text>
      </View>
      <Button title="Início" onPress={handleIrParaWelcome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA', // Fundo amarelo claro
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000000', // Texto preto
  },
  filterContainer: {
    marginBottom: 10,
  },
  picker: {
    width: 200,
    height: 40,
  },
  profilesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  profileText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000', // Texto preto
  },
  profileExperience: {
    fontSize: 12,
    textAlign: 'center',
    color: '#000000', // Texto preto
  },
  profileInstagram: {
    fontSize: 12,
    textAlign: 'center',
    color: '#00008B', // Texto preto
  },
  contactContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  contactText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#00008B', // Texto preto
  },
  emailText: {
    fontSize: 16,
    color: '#00008B', // Texto preto
  },
});

export default Perfil;
