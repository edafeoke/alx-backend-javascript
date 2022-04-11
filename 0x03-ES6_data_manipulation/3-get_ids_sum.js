export default function getStudentIdsSum (arr) {
  if (!Array.isArray(arr)) return [];
  const ids = arr.map(item => item.id);
  return ids.reduce((total, currentValue) => total + currentValue, 0);
}
