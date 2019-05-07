import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight } from 'react-native';

class GButton extends Component {
    
    constructor(props) {
       super(props);
    }
    
    render() {
       return (
          <View style={styles.grey} >
          
              <TouchableHighlight
                  onPress={()=> {this.props.buttonFunc()}}
              >
                 <Text style={styles.buttonTextg}> {this.props.buttonTitle} </Text>
              </TouchableHighlight>
          </View>
       );
    }
}

class DGButton extends Component {
    
    constructor(props) {
       super(props);
    }
    
    render() {
       return (
          <View style={styles.darkgrey} >
          
              <TouchableHighlight
                  onPress={()=> {this.props.buttonFunc(this.props.buttonTitle)}}
              >
                 <Text style={styles.buttonTextw}> {this.props.buttonTitle} </Text>
              </TouchableHighlight>
          </View>
       );
    }
}

class OButton extends Component {
    
    constructor(props) {
       super(props);
    }
    
    render() {
       return (
          <View style={styles.orange} >
          
              <TouchableHighlight
                  onPress={()=> {this.props.buttonFunc()}}
              >
                 <Text style={styles.buttonTextw}> {this.props.buttonTitle} </Text>
              </TouchableHighlight>
          </View>
       );
    }
}

export default class App extends React.Component {
  state = {
        dnum: 0,
        num1: 0,
        num2: 0,
        oneOrTwo: true,
        action: 0,
        //0: nothing
        //1: division
        //2: multiplication
        //3: subtraction
        //4: addition
    }

  onPressNumber = (val) => { 
    if (this.state.oneOrTwo){
      let numis = this.state.num1.toString(); //int to string
      let numoi = parseInt(val); //string to int
      if(this.state.num1 == 0){
        num = numoi;
      }
      else {
        num = parseInt(numis + val);
      }
      this.setState( { num1: num});
    }
    else {
      let numis = this.state.num2.toString(); //int to string
      let numoi = parseInt(val); //string to int
      if(this.state.num2 == 0){
        num = numoi;
      }
      else {
        num = parseInt(numis + val);
      }
      this.setState( { num2: num});
    }
    this.setState( { dnum: num});
  }

  clear = () => { 
    this.setState( { num1: 0});
    this.setState( { num2: 0});
    this.setState( { dnum: 0});
    this.setState( { oneOrTwo: true});
  }

  neg = () => { 
    if (this.state.oneOrTwo){
      temp = this.state.num1 * -1
      this.setState( { num1: temp});
      this.setState( { dnum: temp});
    }
    else {
      temp = this.state.num2 * -1
      this.setState( { num2: temp});
      this.setState( { dnum: temp});
    }
  }

  percent = () => { 
    if (this.state.oneOrTwo){
      temp = this.state.num1/100
      this.setState( { num1: temp});
      this.setState( { dnum: temp});
    }
    else {
      temp = this.state.num2/100
      this.setState( { num2: temp});
      this.setState( { dnum: temp});
    }
  }

  division = () => { 
    this.setState( { oneOrTwo: false});
    this.setState( { action: 1});
  }

  multiplication = () => { 
    this.setState( { oneOrTwo: false});
    this.setState( { action: 2});
  }

  subtraction = () => { 
    this.setState( { oneOrTwo: false});
    this.setState( { action: 3});
  }

  addition = () => { 
    this.setState( { oneOrTwo: false});
    this.setState( { action: 4});
  }

  equals = () => { 
    if (this.state.action != 0) {
    act = this.state.action;
    this.setState( { oneOrTwo: true});
    if (act == 1){
      temp = this.state.num1 / this.state.num2
    }
    else if (act == 2){
      temp = this.state.num1 * this.state.num2
    }
    else if (act == 3){
      temp = this.state.num1 - this.state.num2
    }
    else if (act == 4){
      temp = this.state.num1 + this.state.num2
    }
    this.setState( { num1: temp});
    this.setState( { num2: 0});
    this.setState( { dnum: temp});
    this.setState( { oneOrTwo: true});
    this.setState( { action: 0});
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.output}>
          <Text numberOfLines={1} style={styles.texto}>
            {this.state.dnum}
          </Text>
        </View>
        <View style={styles.input}>
          <View style={styles.row}>
            <GButton buttonFunc={this.clear} buttonTitle='C'/>
            <GButton buttonFunc={this.neg} buttonTitle='+/-'/>
            <GButton buttonFunc={this.percent} buttonTitle='%'/>
            <OButton buttonFunc={this.division} buttonTitle='÷'/>
          </View>
          <View style={styles.row}>
            <DGButton buttonFunc={this.onPressNumber} buttonTitle='7'/>
            <DGButton buttonFunc={this.onPressNumber} buttonTitle='8'/>
            <DGButton buttonFunc={this.onPressNumber} buttonTitle='9'/>
            <OButton buttonFunc={this.multiplication} buttonTitle='×'/>
          </View>
          <View style={styles.row}>
            <DGButton buttonFunc={this.onPressNumber} buttonTitle='4'/>
            <DGButton buttonFunc={this.onPressNumber} buttonTitle='5'/>
            <DGButton buttonFunc={this.onPressNumber} buttonTitle='6'/>
            <OButton buttonFunc={this.subtraction} buttonTitle='-'/>
          </View>
          <View style={styles.row}>
            <DGButton buttonFunc={this.onPressNumber} buttonTitle='1'/>
            <DGButton buttonFunc={this.onPressNumber} buttonTitle='2'/>
            <DGButton buttonFunc={this.onPressNumber} buttonTitle='3'/>
            <OButton buttonFunc={this.addition} buttonTitle='+'/>
          </View>
          <View style={styles.row}>
            <View style={styles.zero}>
              <DGButton buttonFunc={this.onPressNumber} buttonTitle='0'/>
            </View>
            <View style={styles.zero}>
            <OButton buttonFunc={this.equals} buttonTitle='='/>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  output: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 5,
  },
  texto: {
    color: 'white',
    fontSize: 80,
    fontWeight: 'normal', 
  },
  input: {
    flex: 2,
    marginTop: 5,
  },
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  zero: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  orange: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:400,
    marginLeft: 5,
    marginRight: 5,
  },
  grey: {
    flex: 1,
    backgroundColor: 'darkgrey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:400,
    marginLeft: 5,
    marginRight: 5,
  },
  darkgrey: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:400,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonTextg: {
    fontSize: 42,
  },
  buttonTextw: {
    fontSize: 42,
    color: 'white',
  },
});
