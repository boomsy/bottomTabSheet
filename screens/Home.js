import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { COLORS } from '../constants'
import Header from '../components/Header'
import BottomSheet from '../components/BottomSheet'

const Home = () => {

  const refRBSheet = useRef()

  return (
    <SafeAreaView  style={tw.style(`flex-1`, {backgroundColor: COLORS.white} )}>
      <View  style={tw.style(`flex-1`, {backgroundColor: COLORS.white} )} >
        <Header 
          title={'Home'} 
          onPress={() => refRBSheet.current.open() }
        />
      </View>
      <BottomSheet bottomSheetRef={refRBSheet} height={300} > 
          <View>
            <Text> Home </Text>
          </View>
      </BottomSheet>
    </SafeAreaView>
  )
}

export default Home