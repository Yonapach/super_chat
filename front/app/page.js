import * as React from "react";
import Message from "@/components/Message";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

export default function HomePage() {
  return (
    <Box>
      <Box height="90vh" style={{ overflow: "auto" }}>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </Box>
      <Box height="10vh" sx={{ px: 2 }}>
        <TextField
          id="outlined-multiline-flexible"
          placeholder="Placeholder"
          multiline
          fullWidth
          rows={2}
        />
      </Box>
    </Box>
  );
}
