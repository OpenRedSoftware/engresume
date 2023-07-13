export const SET_EMAIL = 'SET_EMAIL';
export const SET_RESUME = 'SET_RESUME';
export const SET_NOTES = 'SET_NOTES';
export const SET_PAID = 'SET_PAID';
export const SET_PAYMENT_ID = 'SET_PAYMENT_ID';
export const SET_SHOW_MUST_PAY = 'SET_SHOW_MUST_PAY';

interface SetEmailAction {
  type: typeof SET_EMAIL;
  payload: string;
}

interface SetResumeAction {
  type: typeof SET_RESUME;
  payload: string;
}

interface SetNotesAction {
  type: typeof SET_NOTES;
  payload: string;
}

interface SetPaidAction {
  type: typeof SET_PAID;
  payload: boolean;
}

interface SetPaymentIdAction {
  type: typeof SET_PAYMENT_ID;
  payload: string;
}

interface SetShowMustpayAction {
  type: typeof SET_SHOW_MUST_PAY;
  payload: boolean;
}

export type FormActionTypes = SetEmailAction | SetResumeAction | SetNotesAction | SetPaidAction | SetPaymentIdAction | SetShowMustpayAction;
