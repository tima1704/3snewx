import { IAdvert } from "Redux/AdvertRedux/types";

export const initialStateActiveAdvert: IAdvert = {
  id: "new",
  company: "",
  bank_info: "",
  vat_code: "",
  registration_number: "",
  manager: { id: "", name: "" },
  address1: "",
  address2: "",
  city: "",
  country: "",
  zip_code: "",
  allowed_ip: [],
  allowed_sub_account: [],
  disallowed_sub_account: [],
  forbid_change_postback_status: false,
  secure_postback_code: "",
  s2s: "",
  offer_count: 0,
  contacts: [],
  currency: "",
  payment_method: "",
  manager_id: "",
  email: "",
};