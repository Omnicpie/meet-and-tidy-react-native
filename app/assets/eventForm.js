import React from 'react';
import { Text, View, TextInput, Button} from 'react-native';

export default function eventForm() {

   const [title, onChangeText ] = React.useState('');
   const [description, onChangeText ] = React.useState('');

    const titleChange = (text) => {
  
        onChangeText(text);
    }

    const descriptionChange = (text) => {
        onChangeText(text);
    }
    
    async function saveEvent() {

        const Event = new EventObject(title, description);
        console.log(Event);
        try {
            const response = await fetch("http://localhost:1337/events/", {
                method: 'POST',
                headers: {
                 'Content-Type': 'application/json'
                },
             body:  JSON.stringify(Event) 
            });

            const data = await response;
    
            return await Promise.resolve(data);
          } catch (e) {
            console.log("ERROR" + e);
    
            return Promise.reject();
          } 
    }


    class EventObject {
        constructor(title, description) {
            this.title = title,
            this.description = description
        }
    }


    return (
    <View>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => titleChange(text) }
        title={title}
        />
        <TextInput
        style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => descriptionChange(text) }
        description={description}
        />
        <Button
            onPress={saveEvent}
            title="Save"
        />
    </View>
    )
}

