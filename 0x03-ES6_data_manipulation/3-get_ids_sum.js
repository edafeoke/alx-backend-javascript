export default function getStudentIdsSum (arr) {
  const ids = arr.map(item => item.id);
  return ids.reduce((total, currentValue) => total + currentValue, 0);
}
