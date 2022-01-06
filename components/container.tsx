import { Box } from "@aksara-ui/react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" flex="1 1 auto" position="relative">
      {children}
    </Box>
  )
}

export default Container
