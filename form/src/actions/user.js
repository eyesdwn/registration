import { Types } from '../constants/actionTypes';

export const ActionCreators = {
  registerUser: (user) => ({ type: Types.REGISTER, payload: { user } }),
}