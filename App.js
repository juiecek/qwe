import React from 'react';
import {Stylesheet, Text, View, Button} from 'react-native';

export default function App(){
    const [count,setCount]=React.useState(0);

    return(
        <View style={style.container}>
        <Text style={style.title}>Hello, world!</Text>
        <Text style={style.counter}>Counter: {count}</Text>
        <Button title="Boost" onPress={()=>setCount(count+1)}/>
        </View>
    );
}

const styles=Stylesheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f5f5f5',
    },
    title:{
        fontSize:24,
        marginBottom:20,
    },
    counter:{
        fontSize:48,
        marginBottom: 20,
    },
});