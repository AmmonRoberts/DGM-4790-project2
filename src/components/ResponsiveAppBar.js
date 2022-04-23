import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { DataStore } from 'aws-amplify';
import Link from 'next/link';
import * as React from 'react';
import { TradingCard } from '../models';
import { getCardsByName } from "../utils/api-util";
import ErrorMessage from './ErrorMessage';
import SearchResultsDialog from './SearchResultsDialog';

const settings = ['Profile', 'Account', 'Dashboard']

const ResponsiveAppBar = ({ user, signOut }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [fetchedCardList, setFetchedCardList] = React.useState([])
  const [searchTerms, setSearchTerms] = React.useState("")
  const [dialog, setDialog] = React.useState({
    isOpen: false,
    fetchedCardList: undefined,
  })
  const [error, setError] = React.useState({
    isOpen: false,
    error: undefined,
    status: undefined
  })

  const [open, setOpen] = React.useState(false)
  const [snackBarMessage, setSnackBarMessage] = React.useState('')
  const [snackBarSeverity, setSnackBarSeverity] = React.useState('')


  const handleToast = (message, severity) => {
    setSnackBarMessage(message)
    setSnackBarSeverity(severity)
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleChange = (event) => {
    setSearchTerms(event.target.value)
  }

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  const [filter, setFilter] = React.useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearch = async () => {
    const cardSearchResults = await fetch('/api/cards', {
      method: 'POST',
      body: JSON.stringify({ cardName: searchTerms }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    let resultJson = await cardSearchResults.json()

    if (resultJson.status) {
      setError({
        isOpen: true,
        error: resultJson.error,
        status: resultJson.status
      })

    }
    else {
      setFetchedCardList(resultJson.cards)
      setDialog({
        isOpen: true,
        fetchedCardList,
      })
    }
  }

  const handleCloseDialog = () => {
    setDialog({
      isOpen: false
    })
    setError({
      isOpen: false
    })
  }

  const handleSaveCard = async (event) => {
    try {

      const cardId = event.target.dataset.cardid;;

      await fetch(`/api/cards/${cardId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(async (response) => {
        let fetchedCardJson = await response.json()
        let card = fetchedCardJson.cards

        await DataStore.save(
          new TradingCard({

            cardId: card[0].id,
            name: card[0].name,
            layout: card[0].layout,
            cmc: card[0].cmc,
            colors: card[0].colors,
            colorIdentity: card[0].colorIdentity,
            type: card[0].type,
            supertypes: card[0].supertypes,
            types: card[0].types,
            subtypes: card[0].subtypes,
            rarity: card[0].rarity,
            set: card[0].set,
            setName: card[0].setName,
            text: card[0].text,
            flavor: card[0].flavor,
            artist: card[0].artist,
            number: card[0].number,
            power: card[0].power,
            toughness: card[0].toughness,
            loyalty: card[0].loyalty,
            language: card[0].language,
            gameFormat: card[0].gameFormat,
            legality: card[0].legality,
            multiverseid: card[0].multiverseid,
            printings: card[0].printings,
            source: card[0].source,
            legalities: card[0].legalities,
            originalType: card[0].originalType,
            originalText: card[0].originalText,
            imageUrl: card[0].imageUrl,
            watermark: card[0].watermark,
            border: card[0].border,
            reserved: card[0].reserved,
            releaseDate: card[0].releaseDate,
          })
        )
        console.log('Card was saved!')
        handleToast(`Card "${card[0].name}" was saved.`, 'success')
      })
    } catch (err) {
      console.log('Save card error ', err)
      handleToast(
        `Error: Card "${card[0].name}" was not saved.`,
        'error',
      )
    }
  }


  return (
    <AppBar position='static' sx={{ background: '#242e33' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Link href="/" passHref>
              <Tooltip title='Take me home'>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  Home
                  {/* <IconButton>
                    <HomeIcon />
                  </IconButton> */}
                </Button>
              </Tooltip>
            </Link>

            <Link href="/cards/myCards/" passHref>
              <Tooltip title='Show my cards'>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  My Cards
                </Button>
              </Tooltip>
            </Link>

            {/* <Link href="/cards/randomcards/" passHref>
              <Tooltip title='Get some random cards'>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  Random Cards
                </Button>
              </Tooltip>
            </Link> */}
          </Box>

          <Box>

          </Box>

          <Box>
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
            <TextField
              size="small"
              label="Search"
              variant="outlined"
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              value={searchTerms}
              sx={{ backgroundColor: 'white', flexGrow: 1, mr: 3 }}
            />
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="searchFilterLabel">Filter</InputLabel>
              <Select
                size="small"
                labelId="searchFilterLabel"
                id="searchFilter"
                label="Filter"
                variant="outlined"
                value={filter}
                onChange={handleFilterChange}
                sx={{ backgroundColor: 'white', flexGrow: 2, mr: 3 }}
              >
                <MenuItem value={"Name"}>Name</MenuItem>
                <MenuItem value={"Type"}>Type</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar /> */}
                <Avatar
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={signOut}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      <ErrorMessage
        open={error.isOpen}
        error={error.error}
        onClose={handleCloseDialog}
        status={error.status}
      />
      <SearchResultsDialog
        open={dialog.isOpen}
        cardList={fetchedCardList}
        onClose={handleCloseDialog}
        onSaveCard={handleSaveCard}
      />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackBarMessage}
        severity={snackBarSeverity}
      />
    </AppBar>
  )
}
export default ResponsiveAppBar
