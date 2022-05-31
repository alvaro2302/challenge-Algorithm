import React from "react";
import {View,Text} from 'react-native';
const UserView = (props) =>{
    const {userName, email} = props;
    return (
        <View>
            <Text>
                {userName}
            </Text>
            <Text>
                {email}
            </Text>

        </View>
    );
};
export default UserView