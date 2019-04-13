const greeting = () => {
    const date = new Date()
    var hr = date.getHours()
    var greet = ""

    if (hr < 12)
        greet = 'buổi sáng';
    else if (hr >= 12 && hr <= 15)
        greet = 'buổi trưa';
    else if (hr >= 15 && hr <= 18)
        greet = 'buổi chiều';
    else if (hr >= 18 && hr <= 24)
        greet = 'buổi tối';

    return greet

}

const HandleDateTime = {
    greeting
}

export default HandleDateTime