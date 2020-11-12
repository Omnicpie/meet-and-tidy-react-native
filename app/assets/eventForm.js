import React, {useState} from 'react';
import { Text, View, TextInput, Button} from 'react-native';

export default function eventForm() {

   const [title, onChangeText ] = useState(true);

    const titleChange = (text) => {
  
        onChangeText(text);
    }

    const descriptionChange = (text) => {
        console.log(text);
        onChangeText(text);
    }
    
    async function saveEvent() {

        const Event = new EventObject(title);
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
        constructor(title) {
            this.title = title
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
        //description={description}
        />
        <Button
            onPress={saveEvent}
            title="Save"
        />
    </View>
    )
}

