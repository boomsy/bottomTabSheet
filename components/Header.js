import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, icons } from '../constants';
import tw from 'twrnc'


const Header = ({title, onPress}) => {

  const navigation = useNavigation();     

  return (
    <View style={tw.style('flex-row items-center mt-5 mx-4 gap-x-2')} >
      <View style={tw.style('flex-row items-center')} >

            <TouchableOpacity onPress={() => navigation.toggleDrawer()}
                  style={
                        tw.style('h-10 w-10 rounded-full items-center justify-center', 
                        { backgroundColor : COLORS.gray})
                  }>
                  <Image style={tw.style('h-5 w-5', {tintColor: COLORS.black})}
                        resizeMode='contain'
                        source={icons.menu}
                  />
            </TouchableOpacity>

            <Text style={tw.style('flex-1 ml-3 text-lg font-bold ')} >
                  {title}
            </Text>

            <TouchableOpacity  onPress={onPress}
                  style={
                   tw.style('h-10 w-10 rounded-full items-center justify-center', 
                   { backgroundColor : COLORS.gray})
                  }>
                  <Image style={tw.style('h-5 w-5', {tintColor: COLORS.black})}
                     resizeMode='contain'
                     source={icons.more}
                  />
            </TouchableOpacity>


      </View>
    </View>
  )


}

export default Header