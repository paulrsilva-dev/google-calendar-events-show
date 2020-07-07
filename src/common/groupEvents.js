import moment from 'moment';

export const groupByDay = events => {
  const groups = events.reduce((groups, event) => {
    const startDate = event.start.dateTime ? event.start.dateTime.split('T')[0] : event.start.date;

    if (!groups[startDate]) {
      groups[startDate] = [];
    }
    groups[startDate].push(event);

    return groups;
  }, {});

  const groupArrays = Object.keys(groups).map(startDate => {
    return {
      startDate,
      events: groups[startDate]
    };
  });

  return groupArrays;
};

export const groupByWeek = events => {
  const groups = events.reduce((groups, event) => {
    const startDate = event.start.dateTime ? event.start.dateTime.split('T')[0] : event.start.date;

    const weekNumber = moment(startDate).get('isoweek');

    const startWeekDate = moment().isoWeek(weekNumber).startOf('isoweek').format('DD.MM.YYYY.');
    const endWeekDate = moment().isoWeek(weekNumber).endOf('isoweek').format('DD.MM.YYYY.');
    const startAndEndWeekDates = `${startWeekDate} - ${endWeekDate}`;

    if (!groups[startAndEndWeekDates]) {
      groups[startAndEndWeekDates] = [];
    }
    groups[startAndEndWeekDates].push(event);

    return groups;
  }, {});

  const groupArrays = Object.keys(groups).map(startDate => {
    return {
      startDate,
      events: groups[startDate]
    };
  });

  return groupArrays;
};