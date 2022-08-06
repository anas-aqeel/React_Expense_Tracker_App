export const labels_1 = [
    '12:00 am',
    '3:00 am',
    '6:00 am',
    '9:00 am',
    '12:00 pm',
    '3:00 pm',
    '6:00 pm',
    '9:00 pm'
];
export const labels_2 = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];
export const labels_3 = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const weeklyFilter = (transactions) => {
    return labels_2.map((a, b) => {
        let dayInc = 0;
        let dayExp = 0;
        transactions.map((e) => {
            if (labels_2[e.time.getDay()] == a) {
                if (e.type == 'Income') {
                    dayInc += e.value;
                } else {
                    dayExp += e.value;
                }
            }
        })
        return {
            Income: dayInc,
            Expense: dayExp
        }
    });
}
export const monthlyFilter = (transactions) => {
    return labels_3.map((a, i) => {
        let Income = 0;
        let Expense = 0;
        transactions.map((e) => {
            if (labels_3[e.time.getMonth()] == a) {
                if (e.type == 'Income') {
                    Income += e.value;
                } else {
                    Expense += e.value;
                }
            }
        })
        return { Income, Expense }
    })
};
function formatAMPM(date) {
    var hours = date.getHours();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var strTime = hours + ':' + ampm;
    return strTime;
}

export const dailyFilter = (transactions) => {
    return labels_1.map((a, i) => {
        let _hours = a.split(':')[0]
        let _amPm = a.split(' ')[1]
        let Income = 0;
        let Expense = 0;


        transactions.map((e) => {

            let formatDate = formatAMPM(e.time);
            let hours = formatDate.split(':')[0]
            let amPm = formatDate.split(':')[1]
            if (
                amPm == _amPm
                && ((hours < _hours) &&
                    i != 0 ? (hours > labels_1[i - 1]?.split(':')[0]) : true)
            ) {
                if (e.type == 'Income') {
                    Income += e.value;
                } else {
                    Expense += e.value;
                }
            }
        })
        return { Income, Expense }
    })
};