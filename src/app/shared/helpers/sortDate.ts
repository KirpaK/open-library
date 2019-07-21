interface ISortDate {
  origin: any;
  date: Date;
}

export function sortDates(...dates: any) {
  if (!dates) return [];
  return dates
    .map(d => ({
      origin: d,
      date: new Date(d)
    }))
    .sort((a: ISortDate, b: ISortDate) => {
      if (a.date === b.date) return 0;
      return a.date > b.date ? 1 : -1;
    });
}
