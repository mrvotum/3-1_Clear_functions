let healthColor = 'undefind';

export default function showHealthLevel(personInfArr) {
	const personHlth = personInfArr[0].health;
	if (personHlth > 50) {
		healthColor = 'healthy';
	} else if (personHlth > 15 && personHlth <= 50) {
		healthColor = 'wounded';
	} else {
		healthColor = 'critical';
	}
	return `${personInfArr[0].name}: ${healthColor}`;
}
