const convertToDate = (date) => {
  //Convert to format Year Month Date 0:00
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}
const getToday = () => {
  const currentTime = new Date()
  const date = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
  return date
}
const getCustomizedDateFormat = (date) => {
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let dateString = weekday[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()];
  const today = getToday();
  const newDate = convertToDate(date);
  if (newDate.getTime() == today.getTime()) dateString = 'Today ' + dateString;
  newDate.setDate(newDate.getDate()-1)
  if (newDate.getTime() === today.getTime()) dateString = 'Tomorrow ' + dateString;
  return dateString
}

module.exports = {
  getCustomizedDateFormat,
  getToday,
  convertToDate
}