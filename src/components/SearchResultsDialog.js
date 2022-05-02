import {
  Card,
  SvgIcon,
  Dialog,
  Typography,
  CardActions,
  IconButton,
} from '@mui/material'
import PlayingCard from './PlayingCard'
import styles from "../styles/Cards.module.css";
import SaveIcon from '@mui/icons-material/Save'

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
                <PlayingCard
                  card={card} />
                <CardActions>
                  <IconButton data-cardid={card.id} aria-label="Save to list" onClick={onSaveCard}>
                    <SaveIcon />
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