import { useForm, FormProvider } from "react-hook-form";
import style from "./style/AccountForm.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginAccountFormData, loginAccountSchema } from "./AccountFormData";
import Input from "../../src/components/FormElement/input/input";
import Button from "../../src/components/FormElement/Button/Button";
import { FC } from "react";
import { IAccountFormDefaultText } from "../../src/interface/AccountForm";
import { Link } from "react-router-dom";
import { useLogin } from "../../src/auth/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { notify } from "../../src/utils/notify";
import { routes } from "../../src/routes/routes";

const AccountFormDefaultText = {
  type: "login",
  subText: "please login using the account details below.",
  ButtonSign: "sign in",
  altBase: "don’t have an account?",
  // altLink: PagesRoutes.register,
  altLinkText: "re",
};

const AccountForm: FC = () => {
  const login = useLogin();
  let navigate = useNavigate();

  const methods = useForm<loginAccountFormData>({
    resolver: yupResolver(loginAccountSchema),
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;
  const submitForm = (data: any) => {
    const { email } = data;
    if (email !== import.meta.env.VITE_Allowed_Email) {
      notify({
        type: "error",
        message: "sorry you are not allowed",
      });
      return;
    }
    login.mutate(data, {
      onSuccess: () => {
        reset();
        // navigate("/dashboard");
        navigate(routes.dashboard);
        notify({
          type: "success",
          message: "Logged In Successfully",
        });
      },
    });
  };

  return (
    <div className={style.formMainContainer}>
      <div className={style.formContainer}>
        <div className={style.TextContainer}>
          <h1>{AccountFormDefaultText.type}</h1>
          <p>{AccountFormDefaultText.subText}</p>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="  w-[90%] m-auto ">
              <div className={style.inputContainer}>
                <label className={style.label}>email</label>
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required
                  isWhiteBg
                  isCurve
                  errors={errors}
                  // Width="100%"
                  inputRef={register("email")}
                />
              </div>
              <div className={style.inputContainer}>
                <label className={style.label}>password</label>
                <Input
                  type="password"
                  placeholder="Password Address"
                  name="password"
                  required
                  isWhiteBg
                  isCurve
                  errors={errors}
                  // Width="100%"
                  inputRef={register("password")}
                />
              </div>
              <Button isCurve primary padding uppercase full>
                {login.isLoading
                  ? "signing in..."
                  : AccountFormDefaultText.ButtonSign}
              </Button>
            </div>
          </form>
        </FormProvider>
        <div className={style.TextContainerFooter}>
          <h1>{AccountFormDefaultText.altBase}</h1>
          {/* <Link to={AccountFormDefaultText. altLink}>{AccountFormDefaultText. altLinkText}</Link> */}
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
