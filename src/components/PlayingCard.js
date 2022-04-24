import {
    Box,
    Card,
    CardContent,
    SvgIcon,
    Dialog,
    Typography,
    CardActions,
    IconButton,
} from '@mui/material'
import cardBackPlaceholder from '../../public/card_back.jpg'
import Image from 'next/image'

const PlayingCard = (props) => {
    const { card } = props;
    return (
        <CardContent>
            <Box>
                <Typography variant="subtitle1" color="textSecondary">
                    {card.name}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    {card.setName} ({card.set})
                </Typography>
                <Image
                    src={card.imageUrl || cardBackPlaceholder}
                    placeholder={cardBackPlaceholder}
                    width={223}
                    height={310}
                    alt={card.name} />
            </Box>
        </CardContent>
    )
}

export default PlayingCard