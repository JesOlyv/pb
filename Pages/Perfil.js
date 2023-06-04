import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const Perfil = () => {
  const navigation = useNavigation();

  const profiles = [
    { nome: 'Pedreiro Roger', experiencia: 'Experiência: 5 anos, me siga no Instagram', instagram: '@rogerobr' },
    { nome: 'Gesseiro Otto', experiencia: 'Experiência: 3 anos, me siga no Instagram', instagram: '@ottoob' },
    { nome: 'Ladrilheiro Lucio', experiencia: 'Experiência: 2 anos, me siga no Instagram', instagram: '@obrlucio' },
    { nome: 'Pintor Hugo', experiencia: 'Experiência: 4 anos, me siga no Instagram', instagram: '@hugo_ob' },
    { nome: 'Armador Pedro', experiencia: 'Experiência: 6 anos, me siga no Instagram', instagram: '@dro_br' },
  ];

  const [filtro, setFiltro] = React.useState('Todos');
  const [perfilSelecionado, setPerfilSelecionado] = React.useState(null);

  const handleIrParaWelcome = () => {
    navigation.navigate('Welcome');
  };

  const handleFiltro = (filtroSelecionado) => {
    setFiltro(filtroSelecionado);
    setPerfilSelecionado(null);
  };

  const handlePerfilSelecionado = (perfil) => {
    setPerfilSelecionado(perfil);
  };

  const handleContactWhatsApp = () => {
    const phoneNumber = '+5521965391536';
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;
    
    Linking.canOpenURL(whatsappUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(whatsappUrl);
        } else {
          throw new Error("O WhatsApp não está instalado no dispositivo");
        }
      })
      .catch((error) => console.log(error));
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
        <Button title="Contato via WhatsApp" onPress={handleContactWhatsApp} />
      </View>
      <Button title="Início" onPress={handleIrParaWelcome} />
    </View>
  );
};

const styles = StyleSheet.create({
  // styles definition here...
});

export default Perfil;
