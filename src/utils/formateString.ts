export const formatProductTitle = (title: string, length: number): string => {
  return title.length < 10 ? title : `${title.substring(0, length)}...`;
};
