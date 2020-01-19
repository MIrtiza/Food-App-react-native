import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultLists from '../components/ResultList';



const SearchScreen = ( { navigation } ) =>{
    // console.log(props)

    const [term, setTerm] = useState('');
    const [ SearchApi, results, errorMessage ] = useResults()
    

    if(!results){
        return null
    }
    
    const filterResultsByPrice = (price) =>{
        
        return results.filter(result => {
            return result.price === price;
        })
    }

    console.log(results)

    return (
        <View style={{flex:1}}>
             
            <SearchBar 
                term={term}  
                onTermChange={setTerm} 
                onTermSubmit={()=> SearchApi(term)}  
            />
           
           {errorMessage ?  <Text> {errorMessage} </Text>: null }
            <Text> we have found {results.length} results </Text>
            <ScrollView>
            <ResultLists title="Cost Effective" results={filterResultsByPrice('$')}  />
            <ResultLists title="Bit Pricer" results={filterResultsByPrice('$$')}  />
            <ResultLists title="Big Spender" results={filterResultsByPrice('$$$')} />
            
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

})


export default SearchScreen;