import HeaderIcon from "../../src/components/icons/HeaderIcon";
import { currentYear } from "../../src/utils/getFullYear";

const style = {
  logo: ` w-[80%] mt-10 `,
};
const i = `https://scontent-los2-1.xx.fbcdn.net/v/t31.18172-8/24254835_1984454081837468_7101410828924501281_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGZvsU61TV6J7MyCS0lvsCCCZAp2dJ0KOEJkCnZ0nQo4UL0G0DOoM4vmsvUTNmmqwny4G9YV3uXY3J2Qndy09l_&_nc_ohc=0eeBItW69YsAX9U0ZeB&_nc_ht=scontent-los2-1.xx&oh=00_AfARQ9mJ3UVku7WHhXYgQcmG6Rcf_54Ks9rSnvfy2Sb3rQ&oe=64D02E9E`;
const Sider = () => {
  const ceo = `imonikhea ugbodaga`;
  return (
    <div className="flex flex-col justify-between w-full h-full ml-[20px] px-10 py-5 ">
      <div className={style.logo}>
        <HeaderIcon />
      </div>
      <div>
        <div className="flex items-center space-x-3">
          <div className=" bg-black rounded-full w-[50px] h-[50px]">
            <img
              src={i}
              alt={ceo}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div>
            <h1 className="font-bold capitalize ">{ceo}</h1>
            <p>CEO, Hekto</p>
          </div>
        </div>
        <p className="mt-10">
          Hekto E-commerce CMS is a comprehensive admin dashboard and content
          management system specifically designed for managing and controlling
          the content, products, and various aspects of an e-commerce website.
          It offers a user-friendly interface that empowers administrators to
          easily update and maintain their online store, manage product
          listings, handle orders, and perform essential tasks to ensure smooth
          and efficient e-commerce operations.
        </p>
      </div>
      <div className="text-center cursor-pointer hover:text-primary w-fit ">
        Copyright {currentYear()} &copy;{" "}
        <span className="uppercase ">Hekto</span>
      </div>
    </div>
  );
};

export default Sider;
