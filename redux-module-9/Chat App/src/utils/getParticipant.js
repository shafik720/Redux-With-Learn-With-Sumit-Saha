

const getParticipant = (participants, email) =>{
    return participants.find(index => index.email !== email);
}

export default getParticipant;