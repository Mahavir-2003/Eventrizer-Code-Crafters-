import {Organizer} from "../../models"

const getEvents = async (req , res) =>{
    const organizers = await Organizer.find();

    let events = [];
    organizers.forEach(organizer => {
        organizer.createdEvents.forEach(event => {
            if(event.eventStatus == "active"){
                events.push(event);
            }
        });
    });

    res.json({events , statusCode : 200});
}

export default getEvents;