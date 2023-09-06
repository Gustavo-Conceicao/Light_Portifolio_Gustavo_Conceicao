import { styled } from "../../styles/stitches.config";
import { Flex } from "../../styles/Global";

export const Project = styled("article", {
  border: "1px solid #f3f3f3",
  padding: "1.2rem",
  borderRadius: "5px",
  marginTop: "4rem",

  "&:hover": {
    boxShadow: "0px 0px 10px 10px #f3f3f3",
  },
});

export const ProjectStack = styled(Flex, {
  margin: "1.25rem 0 1.25rem 0",
});

export const ProjectStackTech = styled("span", {
  backgroundColor: "$brand4",
  color: "$brand2",
  padding: "0  0.5rem",
  borderRadius: "$2",
});

export const ProjectLinks = styled(Flex, {
  marginTop: "2.25rem",
});

export const ProjectLink = styled("a", {
  fontSize: "1rem",
  color: "$grey2",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",

  "&:hover": {
    color: "$grey1",
  },

  [`& svg`]: {
    marginRight: "$1",
  },
});
