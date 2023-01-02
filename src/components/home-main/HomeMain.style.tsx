export const useNavbarStyle = {
  navCon: {
    height: "60px",
    bgcolor: "#A2C958",
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: "20px",
    position: "sticky",
    zIndex: 99,
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
    position: "fixed",
    top: 0,
    width: "70px",
    height: "100vh",
    borderRadius: "0 40px 40px 0",
    bgcolor: "#fff",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    zIndex: 100,
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

export const useCategoryStyle = {
  catItem: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    my: "15px",
    cursor: "pointer",
  },
  cateIcon: {
    width: "80px",
    height: "80px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    mb: "5px",
  },
};

export const useRecommandedCoursesCardSyle = {
  card: {
    borderRadius: "12px",
    cursor: "pointer",
  },
  cardContent: {
    minHeight: "100px",
    "& p:first-of-type": {
      textAlign: "start",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      mb: "10px",
    },
    "& p:last-of-type": {
      textAlign: "start",
      fontSize: "14px",
      color: "#707070",
    },
  },
  contentBottom: {
    display: "flex",
    alignItems: "center",
    my: "-12px",
    "& .MuiAvatar-root": {
      width: "20px",
      height: "20px",
    },
    "& > p": {
      ml: "5px",
      fontSize: "14px",
    },
  },
};

export const useLatestCoursesCardSyle = {
  card: {
    borderRadius: "12px",
    cursor: "pointer",
  },
  cardContent: {
    minHeight: "100px",
    "& p:first-of-type": {
      textAlign: "start",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      mb: "10px",
    },
    "& p:last-of-type": {
      textAlign: "start",
      fontSize: "14px",
      color: "#707070",
    },
  },
  contentBottom: {
    display: "flex",
    alignItems: "center",
    my: "-12px",
    "& .MuiAvatar-root": {
      width: "20px",
      height: "20px",
    },
    "& > p": {
      ml: "5px",
      fontSize: "14px",
    },
  },
};
