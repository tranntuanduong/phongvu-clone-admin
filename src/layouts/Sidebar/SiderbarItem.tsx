import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Item {
  name: string;
  to: string;
}

interface Props {
  name: string;
  icon: JSX.Element;
  subMenu: Item[];
}

export const SlidebarItem = (props: Props) => {
  const { subMenu, name, icon } = props;
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChangePage = (to: string) => () => {
    navigate(to);
  };

  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ alignItems: "start", mt: 2 }}>
        <ListItemIcon sx={{ minWidth: 30 }}>{icon}</ListItemIcon>
        <ListItemText primary={name} sx={{ m: 0 }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subMenu.map((item, index) => (
            <ListItemButton key={index} onClick={handleChangePage(item.to)}>
              <ListItemIcon sx={{ minWidth: 30 }} />
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};
