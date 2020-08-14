import React from 'react';
import { nullSafeArr } from '../../helpers/arrayUtils';
import { Input, Box, Button, Typography , FormControl } from '@material-ui/core';
import homeStyles from './Home.styles'

const Home = ({
        cityStateResults,
        onChangeSearchField,
        searchField,
})=>{
    const test = nullSafeArr( cityStateResults ).slice(0,10)
    const classes = homeStyles();
    const { title, searchContainer, searchBox, searchButton } = classes

    return(
        <Box>
            <Box>
                <Typography className={ title } color={'primary'} variant={'h1'}>
                    QikSeek
                </Typography>

                 <FormControl className={searchContainer}>
                     <Input
                         className={ searchBox }
                         label="find a home!"
                         variant="outlined"
                         onChange={ (e)=>{
                             onChangeSearchField(e)
                         }}
                         value={ searchField }
                     />
                     <Button className={ searchButton }
                             variant={'outlined'}
                             color={'secondary'}
                             onClick={()=>console.log('hello')}
                     >
                         Start
                     </Button>
                 </FormControl>


            </Box>
        </Box>
    )
}

export default Home