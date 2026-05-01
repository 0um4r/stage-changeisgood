
import { cardStyles, container, welcome_text } from '../styles';
import { CakeBoxComponent } from './CakeBoxComponent';
import { HappyBirthdayComponent } from './HappyBirthdayComponent';
import { useDispatch, useSelector } from 'react-redux';
import { pickRandomBirthday, RESET } from '../store/BirthdaySlice';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { SerializedBirthdayData } from '../miscellaneous/serializers';

export default function BirthdayScreen() {
  
  //State

  
  const remaining:SerializedBirthdayData[] = useSelector((state: any) => state.birthdays.remaining);
  const selected:SerializedBirthdayData[] = useSelector((state: any) => state.birthdays.selected);
  const currentlySelected:SerializedBirthdayData | undefined = useSelector((state: any) => state.birthdays.currentlySelected);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  
  // Dispatcher
  

  const dispatch = useDispatch();


  // /!\ Effects can still be shown but they are handled by Redux Thunk not useEffect. /!\ \\



  //Data handler

  const handleNext = () => {
      dispatch(pickRandomBirthday());
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
  };


  const handleReset = () => {
      dispatch(RESET());
    }
  


  //UI 

 return (
   <View style={container.main}>

      
      {showMessage && <HappyBirthdayComponent name={currentlySelected?.Name} />}

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
         <Text style={cardStyles.name}>{item.Name}</Text>
         <Text>{item.Next_age} years old</Text>
       </View>
     ))}

     {remaining.length === 0 && 
     <Button title="Reset" onPress={handleReset} />}
   </View>
 );

}



