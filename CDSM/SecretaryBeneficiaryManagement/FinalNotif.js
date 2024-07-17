import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';

const FinalNotif = ({ route }) => {
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
    marginTop: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'left',
    color: '#710808',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'left',
    color: '#333',
    paddingHorizontal: 10,
  },
  statusCard: {
    width: '100%',
    elevation: 4,
    marginTop: 20,
  }
});

export default FinalNotif;