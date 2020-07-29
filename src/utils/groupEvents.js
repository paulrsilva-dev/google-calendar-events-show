import moment from 'moment';

const getStartDate = event => {
  const { dateTime, date } = event.start;

  return dateTime ? dateTime.split('T')[0] : date;
};

const getGroupedEvents = groups => {
  return Object.keys(groups).map(startDate => ({
    startDate,
    events: groups[startDate],
  }));
};

export const groupByDay = events => {
  const groups = events.reduce((groups, event) => {
    const startDate = getStartDate(event);

    if (!groups[startDate]) {
      groups[startDate] = [];
    }

    groups[startDate].push(event);

    return groups;
  }, {});

  const groupedEvents = getGroupedEvents(groups);

  return groupedEvents;
};

export const groupByWeek = events => {
  const groups = events.reduce((groups, event) => {
    const startDate = getStartDate(event);
    const weekNumber = moment(startDate).get('isoweek');

    const startWeekDate = moment()
      .isoWeek(weekNumber)
      .startOf('isoweek')
      .format('DD.MM.YYYY.');

    const endWeekDate = moment()
      .isoWeek(weekNumber)
      .endOf('isoweek')
      .format('DD.MM.YYYY.');

    const startAndEndWeekDates = `${startWeekDate} - ${endWeekDate}`;

    if (!groups[startAndEndWeekDates]) {
      groups[startAndEndWeekDates] = [];
    }

    groups[startAndEndWeekDates].push(event);

    return groups;
  }, {});

  const groupedEvents = getGroupedEvents(groups);

  return groupedEvents;
};
