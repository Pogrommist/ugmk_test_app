export const COLORS = {
  RED: '#FF0000',
  BLUE: '#0000FF',
  GREEN: ''
}

export const factoryIds = {
  "Фабрика 1": 1,
  "Фабрика 2": 2
}

export const factoryNames = Object.fromEntries(
  Object
    .entries(factoryIds)
    .map(([key, value]) => [value, key])
  );