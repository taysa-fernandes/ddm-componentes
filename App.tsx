import { StyleSheet, Text, View } from 'react-native';
import { Classification, NavBar,ProfileSection, Card} from './src/components/home';

export default function App() {
  const CardsData = [
    { name: "John Doe", text: "+155", positive: true },
    { name: "Emily White", text: "+155", positive: true },
    { name: "Oliver Brown", text: "+155", positive: true },
    { name: "Ava Miller", text: "-15", positive: false },
    { name: "Ethan Davis", text: "-15", positive: false },
    { name: "Sophia Wilson", text: "-15", positive: false },
  ];
  return (
    <View style={styles.container}>
     <NavBar />
     <ProfileSection />
     {CardsData.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          text={card.text}
          positive={card.positive}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
});
