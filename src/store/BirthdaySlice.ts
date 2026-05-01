import { createSlice } from '@reduxjs/toolkit';
import { birthdays } from '../data/hard-coded-data';
import { birthdaySerializer, SerializedBirthdayData } from '../miscellaneous/serializers';

//Note perso : Actions are auto generated based on the reduces we write.




const serializedBirthdays: SerializedBirthdayData[] = birthdays.map((obj) => birthdaySerializer(obj));


type BirthdayState = {
  remaining: SerializedBirthdayData[];
  selected: SerializedBirthdayData[];
  currentlySelected: SerializedBirthdayData | undefined;
};

const initialState: BirthdayState = {
  remaining: serializedBirthdays,
  selected: [],
  currentlySelected:undefined,
};

const birthDaySlice = createSlice({
  name: 'birthday',
  initialState: initialState,
  
  reducers: {
    pickRandomBirthday: state => {
      if (state.remaining.length > 0) {
        const randomIndex = Math.floor(Math.random() * state.remaining.length);
        const selectedBirthday = state.remaining[randomIndex];
        state.selected.push(selectedBirthday);
        state.remaining.splice(randomIndex, 1);
        state.currentlySelected = selectedBirthday;
      }
    },

    RESET: state => {
      state.remaining = serializedBirthdays;
      state.selected = [];
      state.currentlySelected = undefined;
    },
  },
});


//The actions that we are gonna use to dispatch to the store.
//The are actully like this : pickRandomBirthday: (payload) => ({type:'birthdays slice/pickRandomBirthday', payload})

export const { pickRandomBirthday, RESET } = birthDaySlice.actions;

//The reducer we are gonna use for the store concerning birthdays state.
export default birthDaySlice.reducer;