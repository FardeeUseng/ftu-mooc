export const useNavbarStyle = {
  navCon: {
    height: "60px",
    bgcolor: "#A2C958",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: "20px",
    "& > p": {
      fontSize: "26px",
      fontWeight: 500,
      color: "#4B4B4B",
    },
  },
  profile: {
    display: "flex",
    alignItems: "center",
    "& .MuiAvatar-root": {
      width: "30px",
      height: "30px",
    },
    "& > p": {
      color: "#4B4B4B",
      ml: "5px",
    },
  },
};
