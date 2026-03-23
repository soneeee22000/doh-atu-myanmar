export type Stat = {
  key: string;
  value: number;
  prefix?: string;
  suffix?: string;
};

export const impactStats: Stat[] = [
  { key: "arrested", value: 30000, suffix: "+" },
  { key: "displaced", value: 3000000, suffix: "+" },
  { key: "airstrikes", value: 2400, suffix: "+" },
  { key: "resistance", value: 5, suffix: "+" },
];
