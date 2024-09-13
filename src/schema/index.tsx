import * as Yup from "yup";
export const ownerRegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^\d+$/, "Phone must be a valid number"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  propertyAddress: Yup.string().required("Property Address is required"),
  vrboUrl: Yup.string()
    .url("Must be a valid URL")
    .required("VRBO Listing URL is required"),
});


export const registerFormSchema = Yup.object().shape({
  residentType: Yup.string().required('Resident type is required'),
  address: Yup.string().required('Address is required'),
  yourName: Yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Your name is required'),
  email: Yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  personnelRole: Yup.string().required('Personnel role is required'),
  maxPrice: Yup
    .number()
    .typeError('Max price must be a number')
    .positive('Max price must be a positive number')
    .required('Max price is required'),
  minSize: Yup
    .number()
    .typeError('Min size must be a number')
    .positive('Min size must be a positive number')
    .required('Min size is required'),
});
