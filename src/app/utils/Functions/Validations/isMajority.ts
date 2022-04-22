function isMajority(dateOfBirth: Date) {
  const date: Date = new Date();
  date.setFullYear(date.getFullYear() - 18);
  const result: boolean = dateOfBirth <= date;
  return result;
}

export default isMajority;
