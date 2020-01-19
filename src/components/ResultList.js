import React from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultDetail from './ResultDetails'
import ResultDetails from './ResultDetails'


const ResultLists = ({ title, results,navigation }) =>{

    if(!results.length){
        return null
    }
    return(
       
        <View >
            
            <Text style={styles.title}> {title} </Text>
            {/* <Text> Results: {results.length} </Text> */}

            <FlatList
            
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result)=> result.id}
                renderItem={( { item } )=>{
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('ResultsShows', { id: item.id } )}>
                            <ResultDetails result={ item } />
                        </TouchableOpacity>
                    )
                }}

            />
            
        </View>
      
    )
}


const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
})

export default withNavigation(ResultLists)