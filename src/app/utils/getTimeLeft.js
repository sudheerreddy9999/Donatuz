function getTimeLeft(expectedDate, timeSlot) {
    if (!expectedDate || !timeSlot) {
        return 'Invalid input';
    }

    const [date] = expectedDate.split(' ');
    const [day, month, year] = date.split('-').map(num => parseInt(num, 10));
    const [startTime, endTime] = timeSlot.split(' - ');

    const parseTime = (time) => {
        const [hourMinute, period] = time.split(' ');
        const [hour, minute] = hourMinute.split(':').map(num => parseInt(num, 10));
        const hourIn24 = period === 'PM' ? (hour === 12 ? hour : hour + 12) : (hour === 12 ? 0 : hour);
        return { hour: hourIn24, minute };
    };

    const start = parseTime(startTime);
    const end = parseTime(endTime);
    const expectedStartDate = new Date(year, month - 1, day, start.hour, start.minute);
    const expectedEndDate = new Date(year, month - 1, day, end.hour, end.minute);
    const currentDate = new Date();

    let timeLeft = Math.max(0, expectedStartDate - currentDate); 
    if (timeLeft === 0 && currentDate < expectedEndDate) {
        timeLeft = expectedEndDate - currentDate;
    }
    if (timeLeft >= 1000 * 60 * 60 * 24) { 
        const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
        return `${days} days and ${hours} hours`;
    } else {
        const hours = Math.floor(timeLeft / 1000 / 60 / 60);
        const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
        return `${hours} hours and ${minutes} minutes`;
    }
}

export { getTimeLeft };
