import axios from 'axios';
import { IAuthentication, IJwtPayload } from '@/interfaces/auth';
import { ROOT_URL } from '@/constants';
import { AUTHENTICATE } from '@/constants';

export const authenticate = async (
  credentials: IAuthentication
): Promise<IJwtPayload | any> => {
  try {
    const { data, status } = await axios.post(
      `${ROOT_URL}${AUTHENTICATE}`,
      credentials
    );
    console.log(data);
    return data;
  } catch (error: any) {
    return error;
  }
};
