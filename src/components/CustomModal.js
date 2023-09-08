import React, { useContext } from 'react'
import { postcontext } from '../Helpers/context'
import { Box, Button, Modal, Typography, styled } from '@mui/material'

const CustomModal = () => {
  const {openModal,setopenModal,modaldesc,modaltitle} = useContext(postcontext)
    const StyledModal = styled(Modal)({
        display:'flex',
        justifyContent:'center',
        alignItems: 'center'
      })
  return (
    <div>
      <StyledModal
          open={openModal}
          onClose={(e) => setopenModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            width={450}
            height={350}
            bgcolor="white"
            p={2}
            borderRadius={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "space-evenly",
            }}
          >
            <Typography variant="h5" textAlign="center" fontWeight={500}>
              {modaltitle.toString().toUpperCase()}
            </Typography>
            <Typography variant="h5" fontWeight={400} textAlign="left" pt={2}>
              Comments:
            </Typography>
            <Typography variant="p" textAlign="left" color="grey" pb={5}>
              {modaldesc}
            </Typography>

            <Button
              variant="contained"
              color="error"
              onClick={(e) => setopenModal(false)}
              style={{ marginTop: "25px", marginBottom: "0px" }}
            >
              close
            </Button>
          </Box>
        </StyledModal>
    </div>
  )
}

export default CustomModal
