import * as React from 'react'
import Amplify, { DataStore } from "aws-amplify"
import useSWR from "swr"
import { TradingCard } from '../../models'
import { Box, Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image'
// import SearchResultsDialog from './SearchResultsDialog'
// import ErrorMessage from './ErrorMessage'
import { getRandomCards } from '../../utils/api-util'

const RandomCards = (props) => {

    // const [cardList, setCardList] = React.useState([])
    // const [fetchedCardList, setFetchedCardList] = React.useState([])
    // // const [dialog, setDialog] = React.useState({
    // //     isOpen: false,
    // //     fetchedCardList: undefined,
    // // })
    // const [error, setError] = React.useState({
    //     isOpen: false,
    //     error: undefined,
    //     status: undefined
    // })

    // const cardSearchResults = await getRandomCards()
    // if (cardSearchResults.status) {
    //     setError({
    //         isOpen: true,
    //         error: cardSearchResults.error,
    //         status: cardSearchResults.status
    //     })

    // }
    // else {
    //     setFetchedCardList(cardSearchResults.cards)
    //     // setDialog({
    //     //     isOpen: true,
    //     //     fetchedCardList,
    //     // })
    // }

    // return (
    //     <>
    //         {/* <ErrorMessage
    //             open={error.isOpen}
    //             error={error.error}
    //             onClose={handleCloseDialog}
    //             status={error.status}
    //         />
    //         <SearchResultsDialog
    //             open={dialog.isOpen}
    //             cardList={fetchedCardList}
    //             onClose={handleCloseDialog}
    //         // onSaveCard={handleSaveCard} 
    //         /> */}
    //     </>
    // )
    return (
        <p>placeholder</p>
    )
}

export default RandomCards