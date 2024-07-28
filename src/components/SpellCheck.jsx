import { useState, useEffect } from "react";

const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example"
};
  

export default function SpellCheck() {
    const [textVal, setTextVal] = useState("");
    const [correction, setCorrection] = useState("");

    useEffect(() => {
        const words = textVal.split(" ");
        const correctedFirst = words.find((word) => {
            return customDictionary[word.toLocaleLowerCase()] !== undefined;
        });
        
        if(correctedFirst) {
            setCorrection(customDictionary[correctedFirst]);
        } else {
            setCorrection("");
        }

    }, [textVal]);

    // console.log("cor",correction);
    
    return (
        <div>
            <h1>Spell Check and Auto-Correction</h1>
            <textarea 
                rows="8"
                cols="50"
                name="text1"
                placeholder="Enter text..."
                value={textVal}
                onChange={(e) => setTextVal(e.target.value)}
                style={{
                    borderRadius: '4px',
                    padding: "16px"
                }}
            >
            </textarea>

            {   correction &&
                <p>Did you mean: <span style={{fontWeight: "bold"}}>{correction}</span>?</p>
            }
        </div>
    );
}