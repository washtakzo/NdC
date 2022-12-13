import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Categories } from "../../helper/types";

export default function CategorieList(props: any) {
  const [open, setOpen] = React.useState(false);
  const [categorie, setCategorie] = React.useState(props.defaultCategorie);

  const handleClick = (categorie: Categories) => {
    setCategorie(categorie);
    props.onCategorieChange(categorie);
    setOpen((prev) => !prev);
  };

  return (
    <div className={props.className}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={() => setOpen((prev) => !prev)}>
          <ListItemText primary={categorie} />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            onClick={() => handleClick(Categories.FAIRE_PART)}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary={Categories.FAIRE_PART} />
            </ListItemButton>
          </List>
          <List
            component="div"
            disablePadding
            onClick={() => handleClick(Categories.PLATEAUX)}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary={Categories.PLATEAUX} />
            </ListItemButton>
          </List>
          <List
            component="div"
            disablePadding
            onClick={() => handleClick(Categories.COFFRETS)}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary={Categories.COFFRETS} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );
}
