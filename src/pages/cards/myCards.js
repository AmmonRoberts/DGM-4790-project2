import * as React from 'react'
import { DataStore } from "aws-amplify"
import useSWR from "swr"
import { TradingCard } from '../../models'
import { Box, Card, CardActions, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuthenticator } from '@aws-amplify/ui-react'
import PlayingCard from '../../components/PlayingCard'
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

const MyCards = (props) => {
    const [open, setOpen] = React.useState(false);
    const [snackBarMessage, setSnackBarMessage] = React.useState('');
    const [snackBarSeverity, setSnackBarSeverity] = React.useState('');
    const [cardList, setCardList] = React.useState([]);
    const { user } = useAuthenticator((context) => [context.user]);

    const handleDeleteCard = async (card) => {
        try {
            const cardToDelete = await DataStore.query(TradingCard, card.id)

            await DataStore.delete(cardToDelete)
            handleToast(`Card "${card.name}" was deleted.`, 'error')
        } catch (err) {
            console.log("Delete card error: ", err)
            handleToast(
                `Error: Card "${card.name}" was not deleted.`,
                'error',
            )
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    const handleToast = (message, severity) => {
        setSnackBarMessage(message);
        setSnackBarSeverity(severity);
        setOpen(true);
    }

    const fetcher = async () => {
        try {
            let tempList = await DataStore.query(TradingCard)
            setCardList(tempList)
        } catch (err) {
            console.log('Retrieve card list error', err)
        }
        return cardList
    }

    const { data, error } = useSWR('/movies', fetcher, {
        refreshInterval: 500
    })

    if (error) return <div>Failed to load list of cards.</div>
    if (!data) return <div>Loading...</div>


    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {cardList && cardList.map((card) => (
                <Card key={card.id} sx={{ maxWidth: 300, m: 1 }}>
                    <PlayingCard
                        card={card} />
                    <CardActions>
                        {user.username === card.owner && (
                            <IconButton aria-label="Delete card from collection"
                                onClick={() => { handleDeleteCard(card) }}>
                                <DeleteIcon />
                            </IconButton>
                        )}
                    </CardActions>
                </Card>
            ))}
            <Snackbar
                open={open}
                onClose={handleClose}
                autoHideDuration={6000}
            >
                <Alert
                    onClose={handleClose}
                    severity={snackBarSeverity}
                >{snackBarMessage}</Alert>
            </Snackbar>
        </Box>
    )
}

export default MyCards;