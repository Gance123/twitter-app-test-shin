import { Box, Flex } from "@chakra-ui/react";

type Props = {
  icon: any;
  title: string;
};

export const SideBarOption = (props: Props) => {
  const { icon, title } = props;
  return (
    <>
      <Box className="sidebar_options">
        <div className="icons">{icon}</div>
        <h2>{title}</h2>
      </Box>
    </>
  );
};
