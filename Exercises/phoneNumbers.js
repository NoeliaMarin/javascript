const phoneNumbers = ['1763687364', '4763687363', '7867867862', 'AAAA#####AAAA#87@768767382672', '4763687363', '4763687363'];

const checkLength = (phoneNumbers) => {
    if (phoneNumbers.length <= 10) {
        return true;
    } else {
        return false;
    };
};

const filterLongNumbers = (phoneNumbers) => {
    return phoneNumbers.filter(checkLength);
};


// filterLongNumbers(phoneNumbers);
// [
//   '1763687364',
//   '4763687363',
//   '7867867862',
//   '4763687363',
//   '4763687363'
// ]
// filterLongNumbers(['4763687363', '7867867862']);
// [ '4763687363', '7867867862' ]
// filterLongNumbers([]);
// []