

export const getParticipantInfo = (conversation, email) => {
    // console.log('from get participant : ', conversation)
    return conversation.find(participant => participant.email !== email);
}