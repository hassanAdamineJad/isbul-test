import { ITmp } from "../../types/ITmp";

export const prepareDataWithTMP = (
  object: { [key: string]: any }[],
  tmp: any[]
) => {
  const result: any[] = [];

  tmp.map((item: { [key: string]: number }, index: number) => {
    if (object[`${item.key}`]) {
      result.push({ ...item, value: object[`${item.key}`] });
    }
  });

  return result;
};
