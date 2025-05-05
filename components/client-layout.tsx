import type React from "react"
import { Box } from "@mui/material"

interface ClientLayoutProps {
  children: React.ReactNode
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box sx={{ flexGrow: 1, p: 3 }}>{children}</Box>
    </Box>
  )
}

export default ClientLayout
