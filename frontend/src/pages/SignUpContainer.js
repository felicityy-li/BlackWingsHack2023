import { SignUp } from "./SignUp";
import { Box } from "@mui/material";

export const SignUpContainer = () => {
  return (
    <Box
      sx={{
        marginTop: 20,
        maxWidth: 800,
        marginLeft: 40,
      }}
    >
      <SignUp />
    </Box>
  );
};
