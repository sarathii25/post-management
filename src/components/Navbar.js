import { DynamicFeed } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, styled, InputBase, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { postcontext } from "../Helpers/context";

const Navbar = () => {
  const { searchContent, filter,handlerefresh } = useContext(postcontext)
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          POST MANAGEMENT
        </Typography>
        <DynamicFeed sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          <InputBase
            placeholder="Search......"
            autoFocus
            value={searchContent}
            onChange={(e) => filter(e.target.value)}
          />
        </SearchBar>
        <Button color="inherit" onClick={()=> handlerefresh()}>Refresh</Button>
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
