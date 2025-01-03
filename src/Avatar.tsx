import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import theme from "./theme";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2} sx={{ justifyContent: "center", pt: 6 }}>
      <Avatar
        alt="Jasmin Cortez"
        src="./public/Jasmin.JPEG"
        sx={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          borderColor: theme.palette.mysage,
          borderStyle: "solid",
          borderWidth: 5,
        }}
      />
    </Stack>
  );
}
