const kebabCaseToLabel = (s:string):string =>
    s.charAt(0).toUpperCase() + s.slice(1).replace('-', ' ');

export const mapKebabEntriesToIdsAndLabels = (entry: string): object =>
    ({id: entry, label: kebabCaseToLabel(entry)});