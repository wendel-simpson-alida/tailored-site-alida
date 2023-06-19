import React from "react";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Typography, Container, Box, TextField, Button } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import qrCode from "./qr-code.png";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [memberId, setMemberId] = useState<undefined | string>(undefined);

  // Regex for validating UUIDs
  const regex =
    /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;

  const handleQrClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setMemberId(undefined);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(
      `https://showcase-sandbox-en.alidainsights.com/c/a/6Zq8GZt8bu5Cpvvg89mRDI?_i=${memberId}`,
      "_blank"
    );
    setIsOpen(false);
  };

  return (
    <div>
      <Navigation />
      <Container style={{ marginTop: "2rem" }}>
        <Typography
          gutterBottom
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            fontFamily: "Carter One",
          }}
        >
          High quality shirts designed by generative AI!
        </Typography>
        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <ImageCarousel />
          <Box
            minWidth="500px"
            fontSize="24px"
            height={400}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            style={{
              border: "3px solid black",
              borderRadius: "6px",
              marginTop: "2.2rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 600,
                fontFamily: "Carter One",
              }}
            >
              Scan to provide feedback
            </Typography>
            <img
              src={qrCode}
              alt="qr code"
              style={{ width: "300px", cursor: "pointer" }}
              onClick={handleQrClick}
            />
          </Box>
        </Box>
      </Container>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <form typeof="submit" onSubmit={handleSubmitForm}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Member ID"
                  variant="outlined"
                  helperText={
                    !regex.test(memberId || "") ? "Enter valid member ID" : ""
                  }
                  onChange={(event) => setMemberId(event.target.value)}
                  error={!regex.test(memberId || "")}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "1rem",
                  }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={!memberId}
                  >
                    Go to Survey
                  </Button>
                </div>
              </Box>
            </form>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
