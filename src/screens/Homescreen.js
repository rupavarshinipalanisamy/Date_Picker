import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/styles'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import juneData from '../const/Data';
const Homescreen = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [selectedDate,setSelectedDate]=useState()
    const[bookingData,setBookingData]=useState({bookingCount:0,memberName:[]})

    const showDatePicker = () => {
        setDatePickerVisibility(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false)
    }


    const handleDateConfirm = (date) => {
        
            const dt = new Date(date);
            const x=dt.toISOString().split('T');
            const x1=x[0].split('-')
          const formattedDate=(x1[2]+'-'+x1[1]+'-'+x1[0])
          
           

    const dataForSelectedDate = juneData[formattedDate]
    console.log(dataForSelectedDate)

    if(dataForSelectedDate){
        setBookingData({bookingCount:dataForSelectedDate.bookingCount,memberName:dataForSelectedDate.memberName})
    }
    else{
        setBookingData({bookingCount:0,memberName:['no data found']})
    }
    setSelectedDate(formattedDate);
    hideDatePicker();
        
}


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { showDatePicker() }}>
                <Text style={styles.defaultTxt}>Select the DD/MM/YYYY</Text>
                <Text style= {styles.date}>{selectedDate}</Text>
            </TouchableOpacity>
            <View style={styles.card}>
                <Text style={styles.text}>Booking Count :{bookingData.bookingCount}</Text>
                <Text style={styles.text}>Member Nams: {bookingData.memberName.join(' ,')}</Text>
            </View>

        

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker} />

        </View>


    )


}



export default Homescreen