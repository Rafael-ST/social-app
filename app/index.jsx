import { useRouter } from 'expo-router'
import React from 'react'
import { View, Text, Button } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'

export default function App(){
    const router = useRouter()
    return(
        <ScreenWrapper>
            <Text>Teste</Text>
            <Button title='welcome' onPress={() => router.push('welcome')}/>
        </ScreenWrapper>
    )
}