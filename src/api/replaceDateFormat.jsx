const replaceDateFormat = targetDate => {
  const date = new Date(targetDate);
  const createdAt = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  return createdAt;
};

export default replaceDateFormat;
