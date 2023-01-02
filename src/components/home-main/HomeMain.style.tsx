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
      ml: "60px",
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

export const useSidebarStyle = {
  sidebarCon: {
    position: "absolute",
    top: 0,
    width: "70px",
    height: "100vh",
    borderRadius: "0 40px 40px 0",
    bgcolor: "#fff",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& > img": {
      width: "50px",
      height: "50px",
    },
  },
  sidebarItemBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderTop: "1px solid #A3A2A2",
    width: "100%",
    py: "15px",
  },
  sidebarIcon: {
    bgcolor: "#ECECEC",
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > .MuiAvatar-root": {
      width: "30px",
      height: "30px",
      cursor: "pointer",
    },
  },
  sidebarLabel: {
    fontSize: "10px",
    mt: "5px",
  },
};
