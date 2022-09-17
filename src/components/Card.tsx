import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventCard: React.FC = () => {
    const [eventType, setEventType] = useState<string>("");
    const [eventName, setEventName] = useState<string>("");
    const navigate = useNavigate();
    return (<>
        <div className="card bg-violet-200 max-w-md w-full space-y-8 rounded-lg" >

            <div className="mt-6 text-center text-2xl font-bold text-stone">
                <h1 className="font-bold text-black drop-shadow-xl text-2xl" >Nouvel évènement</h1>
            </div>

            <div className='flex justify-center' style={{ marginBottom: "1.5rem" }}>
                <form style={{ width: "80%" }}>
                    <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                        <label htmlFor="event-type">Type d'événement: </label>
                        <input type="text" id="event-type" name="event-type" defaultValue="Cours" className="form-input" /><br />

                        <label htmlFor="start-hour">Heure de début: </label>
                        <input type="time" id="start-hour" name="start-hour" className="form-input" /><br />

                        <label htmlFor="ending-hour" style={{ marginRight: "1.6rem" }}>Heure de fin:</label>
                        <input type="time" id="ending-hour" name="ending-hour" className="form-input" /><br />

                        <label htmlFor="location" style={{ marginRight: "1.6rem" }}>Lieu:</label>
                        <input type="text" id="location" name="location" className="form-input" defaultValue="HEI Ivandry Antananarivo" /><br />

                        <label htmlFor="groups" style={{ marginRight: "3rem" }}>Groupes: </label>
                        <select name="groups" id="groups" className="form-input">
                            <option value="G1">G1</option>
                            <option value="G2">G2</option>
                            <option value="G3">G3</option>
                        </select>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "1rem" }}>
                        <button
                            onClick={() => navigate("/presence")}
                            className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-blue-500'>Faire présence
                        </button>
                        <button
                            onClick={() => navigate("/landing")}
                            className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-gray-500'>Annuler
                        </button>
                    </div>

                </form>
            </div>

        </div>
    </>);
}


export default EventCard;