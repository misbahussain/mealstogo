import React, { useState } from "react";
import { StyleSheet, FlatList, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from "react-native-paper";
import RestuarantInfo from "../components/RestuarantInfo";


export default function RestuarantScreen() {

     const [searchQuery, setSearchQuery] = useState('');

     const onChangeSearch = query => setSearchQuery(query);

     return (
          <>
               <View>
                    <View style={styles.searchBar}>
                         <Searchbar
                              placeholder="Search"
                              onChangeText={onChangeSearch}
                              value={searchQuery}
                         />
                    </View>
                    <FlatList
                         data={[
                              { name: 1 },
                              { name: 2 },
                              { name: 3 },
                              { name: 4 }
                         ]}
                         // @ts-ignore
                         keyExtractor={(item) => item.name}
                         renderItem={() => (
                              <RestuarantInfo />
                         )}
                         contentContainerStyle={{padding:16}}
                    />

               </View>
          </>
     );
}

const styles = StyleSheet.create({
     searchBar: {
          padding: 10,
          marginTop:10
     }
});
