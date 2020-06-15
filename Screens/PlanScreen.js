import * as React from 'react';
import { Button, View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';

import EventComponent from '../Components/EventComponent';

const width = Dimensions.get("window").width

export default class FirstScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    title: "Virtual Doctors' Appointment",
                    subTitle: "Regular Virtual catchup with the doctor ..."
                },
                {
                    title: "Guided Group Meditation",
                    subTitle: "Group meditation session at the office"
                },
                {
                    title: "Sprint Planing",
                    subTitle: "Catchup to plan for the next week's sprint"
                }


            ],
            // titles: ["Virtual Doctors' Appointment", "Guided Group Meditation", "Sprint Planing", "Evening Yoga Session"],
            // subTitles: ["Regular Virtual catchup with the doctor ...", "Group meditation session at the office", "Catchup to plan for the next week's sprint"],
        };
    }
    
    renderSeparatorView = () => {
        return (
          <View style={{
              height: 30, 
              width: "100%",
              backgroundColor: "transparent",
            }}
          />
        );
      };

    render() {
        return (
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top: 50 }}>
                
                <FlatList
                    data = {this.state.data}
                    renderItem = {(data) => <EventComponent {...data.item} navigation={this.props.navigation}/>}
                    keyExtractor = {item => item.title}
                    ItemSeparatorComponent = {this.renderSeparatorView}
                />


               {/* <EventComponent /> */}
                
            </View>
          );
        
    }
}