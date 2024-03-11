import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import theme from "./theme";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2} sx={{ justifyContent: "center", pt: 6 }}>
      <Avatar
        alt="Jasmin Cortez"
        src="https://i.pinimg.com/originals/cd/ef/ae/cdefaed1fd76d789566f4640764d68f8.jpg"
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
