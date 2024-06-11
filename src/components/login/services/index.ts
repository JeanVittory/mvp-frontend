import axios from 'axios';
import { IAuthentication, IJwtPayload } from '@/interfaces/auth';
import { ROOT_URL } from '@/constants';
import { AUTHENTICATE } from '@/constants';

export const authenticate = async (
  credentials: IAuthentication
): Promise<IJwtPayload> => {
  try {
    const { status, data } = await axios.post(
      `${ROOT_URL}${AUTHENTICATE}`,
      credentials,
      { withCredentials: true }
    );
    return { status, data };
  } catch (error: any) {
    throw error;
  }
};
