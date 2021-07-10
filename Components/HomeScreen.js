import React, {Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class HomeScreen extends Component{
    getWord = (word)=> {
    var searchKeyword=word.toLowerCase();

    var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json";
    return fetch(url)
    .then((data)=>{
      if(data.status===200)
      {
        return data.json()
      }
      else
      {
      return null
      }
    })
    .then((response)=>{
      var responseObject = response
      if(responseObject){
        var wordData = responseObject.definitions[0]
        var definition=wordData.description
        var lexicalCategory = wordData.wordtype
        this.setState({
          "word": this.state.text,
          "definiton":definition,
          "lexicalCategory" : lexicalCategory
        })
      }
      else{
        this.setState({
          "word":this.state.text,
          "definition": "Not Found"
        })
      }
    })
  }
    constructor(){
        super();
        this.state={
            text:'',
            displayText:''
          }
    }
    render(){
        return(
          <SafeAreaProvider>
          <View style={styles.container}>
          <Header backgroundColor={'Purple'}
          centerComponent={{text:'Pocket Dictionary',style:{color:'White',fontSize:20}}}/>
          <TextInput 
          style={styles.inputBox}
          onChangeText={(text)=>{
            this.setState({text:text})
          }}
          value={this.state.text}>
          </TextInput>
          <TouchableOpacity style={styles.goButtontyles}
          onPress={()=>{
           this.setState ({isSearchPressed:true});
           this.getWord(this.state.text)
          }}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
          <Text style={styles.displayText}>{this.state.displayText}</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailContainer}>
              Word:{""}
              </Text>
              <Text style = {{fontSize:18}}>
                {this.state.word}
              </Text>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.detailsTitle}>
                Type:{""}
              </Text>
              <Text style={{fontSize:18}}>
                {this.state.lexicalCategory}
                </Text>
            </View>
            
            <View style={{flexDirection:'row',flexWrap:'warp'}}>
  
                <Text style={{flexDirection:'row',flexWrap:"wrap"}}>
                  Definition:{""}
                  </Text>
                  <Text style={{fontSize:18}}>
                    {this.state.definition}
                    </Text>
                </View>
          </View>
          </SafeAreaProvider>
        )
    }
}


  

  const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: '#b8b8b8',
     
    },
    inputBox:{
      marginTop:200,width:'80%',
      alignSelf:'center',height:40,
      textAlign:'center',
      borderWidth:4,
      outline:'none'
    },
   goButton:{
      width:'50%',
      height:55,
      alignSelf:'center',
      padding:10,
      margin:10,
    },
    buttonText:{
      textAlign:'center',
      fontSize:30,
      fontWeight:'bold',
    },
    displayText:{
      textAlign:'center',
      fontSize:40
    }
  });
  
