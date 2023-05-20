import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
const style = {
  Menu: `min-w-[150px] mx-auto  flex flex-col rounded-[10px] py-1 mt-2`,
  MenuItem: `mb-2`,
  MenuItemLink: `flex items-center mt-4 mx-3 w-full capitalize`,
  MenuItemLinkText: `text-[1rem] `,
};
const ProductReviewTableDropDown = ({ params }: any) => {
  console.log(params);

  const [drop, setDrop] = useState(false);

  function onVisibleChange(visible: any) {
    setDrop((prevDrop: any) => !prevDrop);
  }
  const menu = (
    <Menu className={style.Menu}>
      <MenuItem key="0" className={style.MenuItem}>
        <div className={style.MenuItemLink}>
          <FaUserCircle
            color="#8392A5"
            size={20}
            style={{ marginRight: "5px" }}
          />
          <p className={style.MenuItemLinkText}>edit profile</p>
        </div>
      </MenuItem>
    </Menu>
  );
  return (
    <Dropdown
      trigger={["click"]}
      overlay={menu}
      animation="slide-up"
      onVisibleChange={onVisibleChange}
      // onSelect={onSelect}
    >
      <BsThreeDotsVertical color="#8392A5" size={20} />
    </Dropdown>
  );
};

export default ProductReviewTableDropDown;
