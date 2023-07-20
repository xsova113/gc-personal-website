export interface Weather {
  locations: {
    [key: string]: {
      currentConditions: {
        icon: string;
        datetime: string;
        temp: number;
      };
    };
  };
}
