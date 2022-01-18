import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import List from "@mui/material/List";
import { SlidebarItem } from "./SiderbarItem";

const menuList = [
  {
    name: "Page1",
    icon: <AssignmentIcon />,
    children: [
      {
        name: "Page1",
        to: "/page1",
      },
    ],
  },
  {
    name: "Chăm sóc khách hàng",
    icon: <AssignmentIcon />,
    children: [
      {
        name: "Tất cả đơn hàng",
        to: "/page2",
      },
    ],
  },
  {
    name: "Quản lí đơn hàng",
    icon: <AssignmentIcon />,
    children: [
      {
        name: "Tất cả đơn hàng",
        to: "/",
      },
    ],
  },
  {
    name: "Quản lí sản phẩm",
    icon: <LocalOfferIcon />,
    children: [
      {
        name: "Tất cả sản phẩm",
        to: "/product-list",
      },
      {
        name: "Thêm sản phẩm",
        to: "/page1",
      },
    ],
  },
  {
    name: "Quản lí sản phẩm",
    icon: <LocalOfferIcon />,
    children: [
      {
        name: "Tất cả sản phẩm",
        to: "/product-list",
      },
      {
        name: "Thêm sản phẩm",
        to: "/page1",
      },
    ],
  },
  {
    name: "Quản lí sản phẩm",
    icon: <LocalOfferIcon />,
    children: [
      {
        name: "Tất cả sản phẩm",
        to: "/product-list",
      },
      {
        name: "Thêm sản phẩm",
        to: "/page1",
      },
    ],
  },
  {
    name: "Quản lí sản phẩm",
    icon: <LocalOfferIcon />,
    children: [
      {
        name: "Tất cả sản phẩm",
        to: "/product-list",
      },
      {
        name: "Thêm sản phẩm",
        to: "/page1",
      },
    ],
  },
  {
    name: "Quản lí sản phẩm",
    icon: <LocalOfferIcon />,
    children: [
      {
        name: "Tất cả sản phẩm",
        to: "/product-list",
      },
      {
        name: "Thêm sản phẩm",
        to: "/page1",
      },
    ],
  },
  {
    name: "Quản lí sản phẩm",
    icon: <LocalOfferIcon />,
    children: [
      {
        name: "Tất cả sản phẩm",
        to: "/product-list",
      },
      {
        name: "Thêm sản phẩm",
        to: "/page1",
      },
    ],
  },
  {
    name: "Quản lí sản phẩm",
    icon: <LocalOfferIcon />,
    children: [
      {
        name: "Tất cả sản phẩm",
        to: "/product-list",
      },
      {
        name: "Thêm sản phẩm",
        to: "/page1",
      },
    ],
  },
  {
    name: "Quản lí sản phẩm",
    icon: <LocalOfferIcon />,
    children: [
      {
        name: "Tất cả sản phẩm",
        to: "/product-list",
      },
      {
        name: "Thêm sản phẩm",
        to: "/page1",
      },
    ],
  },
];

const Slidebar = () => {
  return (
    <List
      sx={{
        pt: 2,
        width: "100%",
        height: "100vh",
        maxWidth: 250,
        bgcolor: "background.paper",
        boxShadow: "rgb(0 0 0 / 10%) 0px 0.5rem 1rem 0px",
        position: "fixed",
        overflowY: "scroll",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {menuList.map((item, index) => (
        <SlidebarItem
          key={index}
          name={item.name}
          subMenu={item.children}
          icon={item.icon}
        />
      ))}
    </List>
  );
};

export default Slidebar;
