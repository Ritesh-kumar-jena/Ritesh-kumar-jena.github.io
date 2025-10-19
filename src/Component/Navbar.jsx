import React from "react";
import {Flex} from "@chakra-ui/react"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Flex justify="space-around">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/project">Project</Link>
      </Flex>
    </>
  );
}

export default Navbar;