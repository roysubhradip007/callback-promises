
function ageInDays(person) {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365;
    function logAgeDetails() {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }
    return logAgeDetails;
}