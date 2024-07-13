import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Button, Paragraph, Title } from 'react-native-paper';

const FirstNotif = ({ route }) => {
  const { eventName, imageUrl, description } = route.params.notification;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.header}>{eventName}</Title>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Paragraph style={styles.description}>{description}</Paragraph>
        </Card.Content>
      </Card>
      <Button
        mode="contained"
        onPress={() => {
          // Handle button press here
        }}
        style={styles.button}
      >
        Submit Requirements
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    width: '100%',
    elevation: 4,
    marginTop: 10, // Ensure card starts at the top with some spacing
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'left', // Align text to the left inside the card
    color: '#710808',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  description: {
    fontSize: 13,
    lineHeight: 15,
    textAlign: 'left', // Align description text to the left
    color: '#333',
    paddingHorizontal: 10, // Add padding horizontally
  },
  button: {
    width: '65%',
    marginTop: 10,
    backgroundColor: '#710808',
  },
});

export default FirstNotif;
