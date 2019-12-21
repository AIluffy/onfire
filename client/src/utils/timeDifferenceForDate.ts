const timeDifference = (current: number, previous: number): string => {
	const milliSecondsPerMinute = 60 * 1000;
	const milliSecondsPerHour = milliSecondsPerMinute * 60;
	const milliSecondsPerDay = milliSecondsPerHour * 24;

	const elapsed = current - previous;

	if (elapsed < milliSecondsPerMinute / 3) {
		return '现在';
	}

	if (elapsed < milliSecondsPerMinute) {
		return '1分钟内';
	} else if (elapsed < milliSecondsPerHour) {
		return Math.round(elapsed / milliSecondsPerMinute) + '分钟前';
	} else if (elapsed < milliSecondsPerDay) {
		return new Date(previous).toLocaleTimeString();
	} else {
		return new Date(previous).toLocaleDateString();
	}
};

export default function timeDifferenceForDate(date: string) {
	const now = new Date().getTime();
	const updated = new Date(date).getTime();
	return timeDifference(now, updated);
}
