import BirthdayData from "../data/BirthdayData";

export type SerializedBirthdayData = {
    Name: string;
    Next_age: number;
    friends: number;
}


export const birthdaySerializer = (birthdayData:BirthdayData): SerializedBirthdayData =>{

    const serializedData: SerializedBirthdayData = {
        Name: birthdayData.getName(),
        Next_age: birthdayData.getNextAge(),
        friends: birthdayData.getFriends(),
    };

    return serializedData;
}