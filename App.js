import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const VerificadorIdade = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const verificarIdade = () => {
    if (idade === '') {
      alert('Por favor, insira sua idade.');
      return;
    }

    const idadeNum = parseInt(idade);

    if (isNaN(idadeNum) || idadeNum <= 0) {
      alert('Idade inválida.');
      return;
    }

    if (isNaN(nome) === false) {
      alert('Nome inválido.');
      return;
    }

    if (idadeNum <= 11) {
      alert(nome + ', você é uma criança. O que está fazendo na internet?');
    } else if (idadeNum >= 12 && idadeNum <= 20) {
      alert(nome + ', você é um adolescente. Tenha cuidado com o que faz na internet.');
    } else if (idadeNum >= 21 && idadeNum <= 65) {
      alert(nome + ', parabéns, você pode se considerar um adulto. Tenha cuidado com o que coloca na internet.');
    } else if (idadeNum >= 65) {
      alert(nome + ', você pode se considerar um velhinho. Cuide bem da sua saúde e aproveite bem o resto da sua vida.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificador de Idade</Text>
      <View style={styles.inputContainer}>
        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={(text) => setNome(text)}
          placeholder="Nome"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Idade:</Text>
        <TextInput
          style={styles.input}
          value={idade}
          onChangeText={(text) => setIdade(text)}
          placeholder="Idade"
          keyboardType="numeric"
        />
      </View>
      <Button title="Verificar Idade" onPress={verificarIdade} />
      <Button title="Calcular Área do Triângulo" onPress={() => navigation.navigate('AreaTriangulo')} />
      <Button title="Calcular Área do Quadrado" onPress={() => navigation.navigate('AreaQuadrado')} />
    </View>
  );
};

const AreaTriangulo = () => {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState(null);

  const calcularTriangulo = () => {
    const baseFloat = parseFloat(base);
    const alturaFloat = parseFloat(altura);

    const areaCalculada = (baseFloat * alturaFloat) / 2;
    setArea(areaCalculada.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área de Triângulo</Text>
      <TextInput
        style={styles.input}
        placeholder="Base do triângulo"
        onChangeText={(text) => setBase(text)}
        keyboardType="numeric"
        value={base}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura do triângulo"
        onChangeText={(text) => setAltura(text)}
        keyboardType="numeric"
        value={altura}
      />
      <Button title="Calcular Área" onPress={calcularTriangulo} />
      {area !== null && (
        <Text style={styles.result}>Área do triângulo: {area}</Text>
      )}
    </View>
  );
};

const AreaQuadrado = () => {
  const [sideLength, setSideLength] = useState('');
  const [area, setArea] = useState(null);

  const calculateArea = () => {
    const side = parseFloat(sideLength);
    const calculatedArea = side * side;
    setArea(calculatedArea);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área de Quadrado</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o lado do quadrado"
        onChangeText={(text) => setSideLength(text)}
        keyboardType="numeric"
        value={sideLength}
      />
      <Button title="Calcular Área" onPress={calculateArea} />
      {area !== null && (
        <Text style={styles.result}>Área do quadrado: {area}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
    width: 150,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

export { VerificadorIdade, AreaTriangulo, AreaQuadrado };
