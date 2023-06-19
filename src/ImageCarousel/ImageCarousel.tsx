import { useState } from "react";
import { Box, Paper } from "@mui/material";
import shirt1 from "./shirt1.png";
import shirt2 from "./shirt2.png";
import shirt3 from "./shirt3.png";
import shirt4 from "./shirt4.png";
import Carousel from "react-material-ui-carousel";

const items = [
  { url: shirt1, number: "1" },
  { url: shirt2, number: "2" },
  { url: shirt3, number: "3" },
  { url: shirt4, number: "4" },
];

const ImageCarousel = () => {
  return (
    <Box sx={{ padding: "1rem", minWidth: "500px" }}>
      <Carousel
        animation="slide"
        navButtonsAlwaysVisible
        stopAutoPlayOnHover
        cycleNavigation
      >
        {items.map((item, index) => (
          <Item key={index} url={item.url} number={item.number} />
        ))}
      </Carousel>
    </Box>
  );
};

type ItemProps = {
  url: string;
  number: string;
};

const Item = (props: ItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Paper
      sx={{
        backgroundColor: "#ffb04d",
        opacity: isHovered ? "1" : "0.85",
        transistion: "opacity 0.3s ease",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ borderRadius: "6px" }}>
        <img
          src={props.url}
          alt={`shirt-${props.number}`}
          style={{
            padding: "1rem",
            height: isHovered ? "405px" : "400px",
            transition: "height 0.3s ease",
          }}
        />
      </div>
    </Paper>
  );
};

export default ImageCarousel;
