import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../FooterStyles";

const Footer = () => {
  return (
    <Box style={{ position: "static", backgroundColor: '#1873CC', marginTop: 16}}>
      <h4
        style={{
          color: "white",
          textAlign: "center",
          marginTop: -30
        }}
      >
        TECA-EMS
      </h4>
    </Box>
  );
};
export default Footer;
