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
import Image from 'next/image'
import cardBackPlaceholder from '../../public/card_back.jpg'
import styles from "../styles/Cards.module.css";

const SearchResultsDialog = (props) => {
  const { open, cardList, onSaveCard, onClose } = props

  return (
    <Dialog
      maxWidth={false}
      open={open}
      onClose={onClose}
      sx={{
        padding: 2
      }}
    >
      <div className={styles.searchResultCards}>
        {
          cardList.length === 0 && (
            <Typography variant="h5" color="textSecondary">
              No cards found, try searching something else!
            </Typography>
          )}
        {
          cardList && cardList.map(card => {
            return (
              <Card key={card.id}
                className={styles.searchResultCard}
                sx={{
                  maxWidth: 300,
                  m: 1,
                  boxShadow: 3,
                  '&:hover': {
                    cursor: 'pointer',
                    boxShadow: 10,
                  }
                }}>
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
                <CardActions>
                  <IconButton data-cardid={card.id} aria-label="Save to list" onClick={onSaveCard}>
                    <SvgIcon data-cardid={card.id} >
                      <path data-cardid={card.id} d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
                    </SvgIcon>
                  </IconButton>
                </CardActions>
              </Card>
            )
          })
        }
      </div>
    </Dialog >
  )
}

export default SearchResultsDialog