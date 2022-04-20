import * as React from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function MediaCard({
  imageURL,
  title,
  body,
  usedLanguages,
  gitURL,
  appURL,
  key,
}) {
  return (
    <Box sx={{ m: 5 }} key={key}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={imageURL}
          alt="projectScreenshot"
          className="projectImage"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Box marginBottom="8px">
            <Typography variant="body2" color="text.primary">
              {body}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.primary">
            Used: {usedLanguages}
          </Typography>
          <Box justifyContent="center" margin="5px">
            <Stack spacing={2} direction="row">
              {appURL && (
                <Button variant="contained" href={appURL} target="_blank">
                  See App
                </Button>
              )}
              <Button variant="contained" href={gitURL} target="_blank">
                GitHub Repo
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
