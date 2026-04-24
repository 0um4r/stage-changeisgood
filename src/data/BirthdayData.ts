class BirthdayData {
  constructor(
    private Name: string,
    private Next_age: number,
    private friends: number,
  ) {}

  setName = (name: string) => {
    this.Name = name;
  };

  getName = () => {
    return this.Name;
  };

  setFriends = (friends: number) => {
    this.friends = friends;
  };

  getFriends = () => {
    return this.friends;
  };

  setNextAge = (age: number) => {
    this.Next_age = age;
  };

  getNextAge = () => {
    return this.Next_age;
  };
}

export default BirthdayData;
