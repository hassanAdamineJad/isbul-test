export const prepareDataWithTMP = (object: any, tmp: any[]) => {
  const result: any[] = [];

  tmp.map((item) => {
    if (object[`${item.key}`]) {
      result.push({ ...item, value: object[`${item.key}`] });
    }
  });

  return result;
};
