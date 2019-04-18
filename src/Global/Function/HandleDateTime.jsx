const greeting = () => {
    const date = new Date()
    var hr = date.getHours()
    var greet = ""

    if ( 0 <= hr && hr <= 6)
        greet = 'buổi tối';
    else if ( 6 <= hr && hr <= 12)
        greet = 'buổi sáng';
    else if (12 <= hr && hr <= 15)
        greet = 'buổi trưa';
    else if (15 <= hr && hr <= 18)
        greet = 'buổi chiều';
    else if (18 <= hr && hr <= 24)
        greet = 'buổi tối';

    return greet

}

const HandleDateTime = {
    greeting
}

export default HandleDateTime