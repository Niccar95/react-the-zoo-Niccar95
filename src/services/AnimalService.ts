import { IAnimal } from "../models/IAnimal";
import { get } from "./serviceBase";

export const getAnimalData = async (): Promise<IAnimal[]> => {
  const url = "https://animals.azurewebsites.net/api/animals";
  return await get<IAnimal[]>(url);
};
