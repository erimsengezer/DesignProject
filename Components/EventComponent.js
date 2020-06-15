import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const EventComponent = ({title, subTitle}) => {
    return (
        <View style={styles.containerView}>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.statusStyle}></View>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{left: 30, top: 10, width:20, height: 20, }} source={require('../images/clockIcon.png')}/>
                        <Text style={{left: 40, top: 10, color:'gray'}}>11.00 - 12.00</Text>
                        <View style={{flexDirection: 'row', left: 40}}>
                        <Image style={{left: 30, top: 10, width:20, height: 20, }} source={require('../images/profileIcon.png')}/>
                            <Text style={{left: 40, top: 10, color:'gray'}}>Dr. Julian Adams</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        
    )
}

// export default class EventComponent extends React.Component {

//     render() {
//         return (
            
//             <View style={styles.containerView}>
//                     <View style={{flexDirection: 'row'}}>
//                         <View style={styles.statusStyle}></View>
//                         <View style={{flexDirection: 'column'}}>
//                             <Text style={styles.title}>Title Text View</Text>
//                             <Text style={styles.subTitle}>Title Text View</Text>
//                             <View style={{flexDirection: 'row'}}>
//                                 <Text style={{left: 30, top: 10}}>icon</Text>
//                                 <Text style={{left: 40, top: 10}}>11.00 - 12.00</Text>
//                                 <View style={{flexDirection: 'row', left: 40}}>
//                                     <Text style={{left: 30, top: 10}}>icon</Text>
//                                 <Text style={{left: 40, top: 10}}>Dr. Julian Adams</Text>
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//             </View>
//           );
        
//     }
// }

export default EventComponent;

const styles = StyleSheet.create({

    containerView: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: width - 50,
        height: 100,
    },

    statusStyle: {
        width: 20,
        height: 20,
        backgroundColor: '#FF8552',
        borderRadius: 10,
        left: 20,

    },

    title: {
        top: 0,
        left: 30,
        fontSize: 15,

    },
    subTitle: {
        color: 'gray',
        top: 5,
        left: 30
    }


})