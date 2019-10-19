import React, {Component} from 'react';
import {Text, View,SafeAreaView,Button } from 'react-native';
import styles from './constant/styles.js';

export default class App extends Component {

 state = {
   counter: 0
 };


  add = ()=>
  {
    this.setState({counter: this.state.counter+1});
  };
  subtract = ()=>
  {
      if(this.state.counter==0)
      {
        this.setState({counter: 0});
      }
      else {
      this.setState({counter: this.state.counter-1});
      }
  };

  reset = ()=>
  {
    this.setState({counter: 0});
  };
 

  render() {
    return (
      <SafeAreaView style={[styles.safeArea, { width: "100%", flex: 1, backgroundColor: "#e8eae9" }]}>


<View style={{width: "100%", alignItems: "center"}}>
  <Text style={{fontSize: 30, fontWeight: "bold", color: "#1168d4"}}>
    Counter Application
  </Text>
</View>

<View style={{width:"100%", flex: 0.4, alignItems:"center", justifyContent:"flex-start", flexDirection: "row"}}>

<View style={{width: "30%"}}>

</View>

<View style={{width: "40%", height: 120,  backgroundColor:"white", justifyContent: "center", alignContent:"center", flexDirection: "row"}}>
 <Text style={{fontSize:80, color:"black", fontWeight:"bold"}}>{this.state.counter}</Text>
</View>

<View style={{width: "30%"}}>

</View>
</View>


<View style={{width: "100%", flexDirection: "row" }}>
        <View style={{width:"50%", alignItems:"flex-end", marginRight: 5 }}>
                <Button title="+" onPress={()=>this.add()} />            
          </View>
          <View style={{width:"50%", alignItems:"flex-start", marginLeft:5 }}>
                      <Button title="-" onPress={()=>this.subtract()} />
          </View>

    </View>

    <View style={{ width: "100%", marginTop: 10, alignItems: "center", marginLeft: 5}}>
      <Button title="Reset" onPress={()=>this.reset()} />
    </View>








        {/* <View style={{backgroundColor: "white", width:"50%", alignItems:"center"}}>  
          <View style={{width:"100%", alignItems:"center", marginTop: "20%"}}>
                <Text style={{fontSize: 100, fontWeight: "bold" }}> {this.state.counter}</Text>
          </View>
       </View>

    <View style={{width: "100%", flexDirection: "row" }}>
        <View style={{width:"50%", alignItems:"flex-end", marginRight: 5 }}>
                <Button title="+" onPress={()=>this.add()} />            
          </View>
          <View style={{width:"50%", alignItems:"flex-start", marginLeft:5 }}>
                      <Button title="-" onPress={()=>this.subtract()} />
          </View>

    </View>

    <View style={{ width: "100%", marginTop: 10, alignItems: "center" }}>
      <Button title="Reset" onPress={()=>this.reset()} />
    </View> */}
    

</SafeAreaView>
    );
  }
}
