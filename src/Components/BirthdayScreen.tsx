//Le composant main qui gere l'etat

import { useEffect, useState } from 'react';
import BirthdayData from '../data/BirthdayData';
import { fetchAllBirthdays } from '../Services/BirthdayService';
import { ActivityIndicator, Button,Text,View } from 'react-native';
import { cardStyles, container, welcome_text } from '../styles';
import { CakeBoxComponent } from './CakeBoxComponent';
import { HappyBirthdayComponent } from './HappyBirthdayComponent';

export default function BirthdayScreen() {
  
  //State

  const [remaining, setRemaining]             = useState<BirthdayData[]>([]);
  const [selected, setSelected]               = useState<BirthdayData[]>([]);
  const [loading, setLoading]                 = useState<boolean>(true);
  const [showMessage, setShowMessage]         = useState<boolean>(false);
  const [currentBirthday, setCurrentBirthDay] = useState<BirthdayData>();
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAllBirthdays();
      setRemaining(data);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  //Data handler

  const handleNext = () => {
    let randomIndex: number = Math.floor(Math.random() * remaining.length);
    let pickedBirthday = remaining[randomIndex];
    setCurrentBirthDay(pickedBirthday);
    setSelected(perv => [...perv, pickedBirthday]);
    setRemaining(perv => perv.filter((_, index) => index !== randomIndex));
  
    setShowMessage(true);

    //This is a timer that toggles off the messgag showing after a bit.

    setTimeout(() => setShowMessage(false), 1500);
  
  };


  const handleReset = () => {
    if (remaining.length === 0) {
      setRemaining([...selected]);
      setSelected([]);
    }
  };


  //UI 

 return (
   <View style={container.main}>

      
      {showMessage && <HappyBirthdayComponent name={currentBirthday?.getName()}/>}

     <View style={welcome_text.box}>
        <Text style={welcome_text.text}>
          Check your friends birthdays!!!
        </Text>
     </View>

     <CakeBoxComponent />

     <Button
       title="Who's Next?"
       onPress={handleNext}
       disabled={remaining.length === 0}
     />

     {selected.map((item, index) => (
       <View key={index} style={cardStyles.card}>
         <Text style={cardStyles.name}>{item.getName()}</Text>
         <Text>{item.getNextAge()} years old</Text>
       </View>
     ))}

     {remaining.length === 0 && 
     <Button title="Reset" onPress={handleReset} />}
   </View>
 );
}


