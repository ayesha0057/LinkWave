import { apiRequest } from "../../Helpers/apiRequestHandler";
import { GenericData } from "../../interfaces";
import { AppThunkPromise } from "../store";



export const DUMMY_loginAction = (email: string, password: string): AppThunkPromise<string | void> => {
  return async (dispatch) => {
    try {
      const body = {
        email: email,
        password: password,
      };
      const response = await apiRequest<GenericData<{}>>({
        url: '/auth/login',
        method: 'POST',
        data: body,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log('error', error);
        return error.message;
      }
    }
  };
};
