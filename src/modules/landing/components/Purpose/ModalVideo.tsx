import { Box, Button, Modal, Typography } from "@mui/material"

function ModalVideo({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="video-modal-title"
      aria-describedby="video-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          width: "90%",
          maxWidth: 800,
          bgcolor: "background.paper",
          border: "3px solid #000",
          boxShadow: 24,
          p: 3,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography id="video-modal-description" sx={{ mt: 2, width: "100%" }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", width: "100%" }}>
            <iframe
              src="https://www.youtube.com/embed/2BYMUkh-jRY?rel=0"
              title="YouTube video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Typography>
        <Button onClick={handleClose}>Cerrar</Button>
      </Box>
    </Modal>
  )
}
export default ModalVideo
