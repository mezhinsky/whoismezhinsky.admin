import * as _ from "lodash";

export const arrayToObject = <T>(
  array: T[],
  idString: string | number = "id"
) => _.keyBy<T>(array, idString);

export const removeFromObject = <T, K extends string>(data: Record<K, T>, id: string) => {
  return _.omit(data, [id])
}

export const updateItemInObject = <T, K extends string>(
  data: Record<K, T>,
  item: T,
  idString: string | number = "id"
) => {
  const id: string | number = item[idString];
  const obj: Record<K, T> = Object.assign({}, data, { [id]: item });
  return obj;
};

export const mergeData = (originState: any, incomeState: any) => {
  return {
    ...originState,
    ...incomeState
  };
};

export const markItemError = (originState: any, index: any) => {
  let newState = originState;
  newState[index.id].error = true;
  return {
    ...originState,
    ...newState,
  };
};