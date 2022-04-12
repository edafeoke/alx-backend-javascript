export default function getStudentIdsSum (arr) {
  return arr.map((e) => e.id)
	.reduce((total, currentValue) => {
	  return total + currentValue;
	}, 0);
