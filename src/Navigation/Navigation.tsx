import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";
import aiLogo from "./ai.png";

const Navigation: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        fontFamily: "Carter One",
        fontWeight: "600",
        backgroundColor: "#333",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ fontSize: "20px" }}>
          <Link href="#" color="inherit" underline="none" sx={{ mr: 2 }}>
            Home
          </Link>
          <Link href="#" color="inherit" underline="none" sx={{ mr: 2 }}>
            Store
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: "4px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "40px",
              paddingLeft: "2rem",
              paddingTop: "8px",
              paddingRight: "6px",
              fontFamily: "Carter One",
            }}
          >
            T
          </Typography>
          <div>
            <img
              src={aiLogo}
              alt="logo"
              style={{ height: "50px", borderRadius: "6px" }}
            />
          </div>
          <Typography
            variant="h6"
            sx={{
              fontSize: "40px",
              paddingTop: "8px",
              paddingLeft: "4px",
              fontFamily: "Carter One",
            }}
          >
            lored
          </Typography>
        </Box>
        <Box sx={{ fontSize: "20px" }}>
          <Link href="#" color="inherit" underline="none" sx={{ mr: 2 }}>
            Our Story
          </Link>
          <Link
            href="https://app.na2.alida.com/analytics/dashboards/3168"
            color="inherit"
            target="_blank"
            underline="none"
          >
            Dashboard
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
