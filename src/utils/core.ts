export const $ = (...classnames: any[]) => {
  return classnames.filter((v) => !!v).join(' ');
};
