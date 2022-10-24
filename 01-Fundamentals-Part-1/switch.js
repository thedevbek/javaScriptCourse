const day = 'Thursday';

switch (day) {
    case 'Monday':
        console.log('Start new class.');
        console.log('Go to coding meeting');
        break;
    case 'Tuesday':
        console.log('Do homework.');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code.1');
        break;
    case 'Friday':
        console.log('Do Nothing.');
        break;
    case 'Saturday':
        console.log('Go home.');
        break;
    case 'Sunday':
        console.log('Go church.');
        break;
    default:
        console.log('Unknown day.');
        break;
}

if (day === 'Monday') {
    console.log('Start new class.');
    console.log('Go to coding meeting');
} else if (day === 'Tuesday') {
    console.log('Do homework.');
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Write code.');
} else if (day === 'Friday') {
    console.log('Do Nothing.');
} else if (day === 'Saturday') {
    console.log('Go home.');
} else if (day === 'Sunday') {
    console.log('Go church.');
} else {
    console.log('Unknown day.');
}

const language = 'French';

switch (language) {
    case 'Chinese':
    case 'Mandarin':
        console.log('MOST number of native speakers!')
        break;
    case 'Spanish':
        console.log('2nd Place!')
        break;
    case 'English':
        console.log('3nd Place!')
        break;
    case 'Hindi':
        console.log('4nd Place!')
        break;
    case 'Arabic':
        console.log('5nd Place!')
        break;
    default:
        console.log('Great language also!')
        break;
}