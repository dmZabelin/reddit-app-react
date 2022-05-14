const getLastNUmber = (num: number): number => {
	const lastNum = Math.floor(num).toString().slice(-1);
	return +lastNum;
};

interface IMonth {
	[key: string]: string;
}

export const getTimeAgo = (time: number): string => {
	let text;
	const publicTime = new Date(time * 1000).getTime();
	const currentTime = new Date().getTime();
	let timeAgo = (currentTime - publicTime) / 1000 / 60;

	if (timeAgo > 7200) {
		const months: IMonth = {
			'0': ' января ',
			'1': ' февраля ',
			'2': ' марта ',
			'3': ' апреля ',
			'4': ' мая ',
			'5': ' июня ',
			'6': ' июля ',
			'7': ' августа ',
			'8': ' сентября ',
			'9': ' октября ',
			'10': ' ноября ',
			'11': ' декабря ',
		};
		const date = new Date(time * 1000);
		const day = date.getDate();
		const month = date.getMonth().toString();
		const year = date.getFullYear();
		return day + months[month] + year;
	}

	if (timeAgo > 1440) {
		timeAgo = timeAgo / 60 / 24;
		const lastNum = getLastNUmber(timeAgo);
		if (lastNum === 1) {
			text = ' день назад';
		} else if (1 < lastNum && lastNum < 5) {
			text = ' дня назад';
		} else {
			text = ' дней назад';
		}
		return Math.floor(timeAgo) + text;
	}

	if (timeAgo > 60) {
		timeAgo = timeAgo / 60;
		const lastNum = getLastNUmber(timeAgo);
		if (lastNum === 1) {
			text = ' час назад';
		} else if (1 < lastNum && lastNum < 5) {
			text = ' часа назад';
		} else {
			text = ' часов назад';
		}
		return Math.floor(timeAgo) + text;
	}

	const lastNum = getLastNUmber(timeAgo);
	if (lastNum === 1) {
		text = ' минуту назад';
	} else if (1 < lastNum && lastNum < 5) {
		text = ' минуты назад';
	} else {
		text = ' минут назад';
	}
	return Math.floor(timeAgo) + text;
};
