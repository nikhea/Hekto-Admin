import ReactQuill from "react-quill";
import "../../styles/updateForm.module.scss";
import "react-quill/dist/quill.snow.css";
import { useForm, FormProvider, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateSchema } from "./updateSchema";
import { ThreeDots } from "react-loader-spinner";
import Select from "../../../FormElement/select/select";
import Input from "../../../FormElement/input/input";
import Button from "../../../FormElement/Button/Button";
import useUpdateProfile from "../../../../Hooks/useUser/useUpdateProfile";
import PageLoading from "../../../Loading/PageLoading";
let profile = {
  gender: "male",
  country: "nigeria",
  dateOfBirth: "2022-01-31",
  phone: 8103244768,
  isVerified: false,
  uploadCount: 0,
  _id: "63ff88304283578b2c5b905a",
  createdAt: "2023-03-01T17:15:28.482Z",
  updatedAt: "2023-03-01T17:15:28.482Z",
};
const UpdateForm = ({ user }: any) => {
  if (!user?.data?.profile) {
    return <PageLoading />;
  }

  const { updateProfile, isLoading } = useUpdateProfile();
  const methods = useForm<FormData>({
    resolver: yupResolver(updateSchema),
    mode: "onChange",
    defaultValues: user?.data?.profile,
  });
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = methods;

  const submitForm = async (formData: FormData) => {
    updateProfile(formData);
  };
  const { field: genderField } = useController({
    name: "gender",
    control,
  });
  const onMessagenChange = (editorState: any) => {
    setValue("bio", editorState);
  };
  const messageContent = watch("bio");
  const handleGenderChange = (option: any) => {
    genderField.onChange(option.value);

    return genderField.onChange(option.value);
  };
  return (
    <div className="container">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className={style.form}>
            <div
              className={`${style.inputContainer} space-y-3 mb-3 md:mb-0 relative `}
            >
              <label className={`${style.label} `}>gender</label>
              {/* mb-[20px] md:mb-[0px] lg:-mt-[2%] */}
              <div className="">
                <Select
                  inputFull
                  placeholder="Select Gender"
                  options={genderOPtions}
                  field={genderOPtions.find(
                    ({ value }) => value === genderField.value
                  )}
                  handleSelectChange={handleGenderChange}
                />
              </div>
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>date of birth</label>
              <Input
                type="date"
                placeholder="Date Of Birth"
                name="dateOfBirth"
                isCurve
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("dateOfBirth")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>country</label>
              <Input
                type="text"
                placeholder="Country"
                name="country"
                isCurve
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("country")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}> state</label>
              <Input
                type="text"
                placeholder="State"
                name="state"
                isCurve
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("state")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>city</label>
              <Input
                type="text"
                placeholder="City"
                name="city"
                isCurve
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("city")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>address</label>
              <Input
                type="text"
                placeholder="Home Address"
                name="address"
                isCurve
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("address")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>Post code</label>
              <Input
                type="postcode"
                placeholder="Post Code"
                name="postcode"
                isCurve
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("postcode")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>Phone Number</label>
              <Input
                type="tel"
                placeholder="Mobile Number"
                name="phone"
                isCurve
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("phone")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>facebook</label>
              <Input
                type="text"
                placeholder="Enter Your Facebook Link"
                name="facebook"
                isCurve
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("facebook")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>instagram</label>
              <Input
                type="text"
                placeholder="Enter Your Instagram Link"
                name="instagram"
                isCurve
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("instagram")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>Tiwtter</label>
              <Input
                type="text"
                placeholder="Enter Your Tiwtter Link"
                name="tiwtter"
                isCurve
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("tiwtter")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>Linkedin</label>
              <Input
                type="text"
                placeholder="Enter Your Linkedin Link"
                name="linkedin"
                isCurve
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("linkedin")}
              />
            </div>
            <div className={style.inputContainerFull}>
              <label className={style.label}>bio</label>
              <ReactQuill
                theme="snow"
                value={messageContent}
                onChange={onMessagenChange}
                className="text-editor"
                placeholder="Your Message..."
              />
            </div>
          </div>
          <div className="text-center ">
            <button className="px-4 py-1 mb-5 text-white capitalize rounded-md w-fit bg-primary">
              {isLoading ? (
                <ThreeDots
                  height="10"
                  width="30"
                  radius="9"
                  color="#FFF "
                  wrapperClass="flex text-center cursor-not-allowed py-2"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              ) : (
                "save"
              )}
            </button>
          </div>
        </form>
        {/* <DevTool control={control} /> */}
      </FormProvider>
    </div>
  );
};

export default UpdateForm;

const style = {
  title: ` uppercase text-[2rem] text-[#7f7f7f] font-bold tracking-[1.1px]`,
  titleMessage: `text-[#7f7f7f] font-light tracking-[1.1px] text-justify`,
  form: ` w-full flex flex-wrap flex-col md:flex-row justify-between   m-auto `,
  inputContainer: `flex flex-col my-1 md:w-[45%]`,
  inputContainerFull: `flex flex-col my-5 w-[99%]`,
  containerForm: ` w-full md:grid grid-cols-1 md:grid-cols-2   m-0 p-0 `,
  label: `capitalize tracking-[1.1px] font-light mx-3`,
};
export const genderOPtions = [
  { value: "male", label: "male" },
  { value: "female", label: "female" },
];

export interface FormData {
  bio?: string;
  city?: string;
  gender?: string;
  state?: string;
  lga?: string;
  country?: string;
  address?: string;
  phone?: string;
  facebook?: string;
  instagram?: string;
  tiwtter?: string;
  linkedin?: string;
  postcode?: number;
  dateOfBirth?: string;
}
