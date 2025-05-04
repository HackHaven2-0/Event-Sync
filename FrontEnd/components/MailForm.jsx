import React from 'react'
import { useParams } from 'react-router-dom';

const MailForm = () => {
    const { eventId } = useParams();

    const handleclick = async (e) => {
        console.log("clicked");
        e.preventDefault()
        const text = e.target.text.value;
        const subject = e.target.subject.value;
        
        console.log(eventId);
        console.log(text);
        console.log(subject);
        const response = await fetch("http://localhost:9000/api/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            
            body: JSON.stringify({ text, subject , eventId }),
        })
        if (response.ok) {
            alert("Mail sent successfully");
            console.log("Mail sent successfully")
        } else {
            console.error("Failed to send mail")
        }
    }
return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <form className="p-6 border border-gray-300 rounded-lg bg-white shadow-md" onSubmit={handleclick}>
            <div className="mb-4">
                <label htmlFor="text" className="block mb-2 font-bold">Text:</label>
                <input type="text" id="text" name="text" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 font-bold">Subject:</label>
                <input type="text" id="subject" name="subject" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <button  type="submit" className="w-full p-3 bg-blue-500 text-white rounded font-bold hover:bg-blue-600">
                Send Mail
            </button>
        </form>
    </div>
)
}

export default MailForm;