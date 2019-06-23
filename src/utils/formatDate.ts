const months = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Февряля',
];

const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${day} ${months[month]} ${hours}:${minutes < 10 ? `0${minutes}`: minutes}`;
};

export default formatDate;
