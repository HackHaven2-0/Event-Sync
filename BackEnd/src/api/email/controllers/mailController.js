import User from "../../../model/userModel";
import { sendEmailToattendees } from "../../../utils/email-Helper";


const mailController = async (req, res) => {
    
    try {
    const { eventId , text , subject } = req.body;
    const  id  = req.user.id;
    const UserData = await User.findById(id);
    const email = UserData.email;
    const EventData = await Event.findById(eventId);
    const attendees = EventData.attendees;
    const emails = attendees.map((attendee) => 
        User.findById(attendee).then(user => user.email)
    );
        await sendEmailToattendees({ emails, subject, text , email });
        res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to send email" ,error: error.message });
    }
    }

export default mailController;