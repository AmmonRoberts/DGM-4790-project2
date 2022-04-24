import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Dialog,
    Typography,
    CardActions,
    IconButton,
} from '@mui/material'


const Profile = (props) => {

    return (
        <Dialog
            maxWidth={false}
            open={open}
            onClose={onClose}
        >
            <Card sx={{ minWidth: 600, minHeight: 300, m: 1 }}>
                <CardContent>
                    <Box>
                        <Typography variant="h5" color="textSecondary">
                            My Profile
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Email: {user.attributes.email}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>


        </Dialog>
    )
}

export default Profile